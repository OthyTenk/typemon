import { useCallback, useEffect, useRef, useState } from "react"
import { countCorrectCharacters } from "@/libs/utils"

interface UseTypingProps {
  currentText: string
  mode?: "timer" | "stopwatch"
  duration?: number // for timer mode
  onFinish?: () => void
  onType?: (charIndex: number, inputValue: string) => void
}

const useTyping = ({
  currentText,
  mode = "timer",
  duration = 60,
  onFinish,
  onType,
}: UseTypingProps) => {
  const [inpFieldValue, setInpFieldValue] = useState("")
  const [charIndex, setCharIndex] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [timeLeft, setTimeLeft] = useState(duration)
  const [tickTime, setTickTime] = useState(0)
  const [wpm, setWpm] = useState(0)
  const [cpm, setCpm] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)

  const reset = useCallback(() => {
    setInpFieldValue("")
    setCharIndex(0)
    setMistakes(0)
    setIsTyping(false)
    setTimeLeft(duration)
    setTickTime(0)
    setWpm(0)
    setCpm(0)
  }, [duration])

  const calculateStats = useCallback(() => {
    const timeElapsed = mode === "timer" ? duration - timeLeft : tickTime
    if (timeElapsed <= 0) return

    let currentCpm = (charIndex - mistakes) * (60 / timeElapsed)
    currentCpm =
      currentCpm < 0 || !currentCpm || currentCpm === Infinity ? 0 : currentCpm
    setCpm(Math.round(currentCpm))

    let currentWpm = Math.round(((charIndex - mistakes) / 5 / timeElapsed) * 60)
    currentWpm =
      currentWpm < 0 || !currentWpm || currentWpm === Infinity ? 0 : currentWpm
    setWpm(currentWpm)
  }, [charIndex, mistakes, timeLeft, tickTime, mode, duration])

  useEffect(() => {
    calculateStats()
  }, [calculateStats])

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Prevent typing if finished
    if (mode === "timer" && timeLeft <= 0) return

    if (!isTyping) {
      setIsTyping(true)
    }

    setInpFieldValue(value)
    setCharIndex(value.length)
    const currentMistakes = countCorrectCharacters(currentText, value)
    setMistakes(currentMistakes)

    onType?.(value.length, value)

    // Check finish condition (completed text)
    if (value.length >= currentText.length) {
      setIsTyping(false)
      onFinish?.()
    }
  }

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isTyping) {
      interval = setInterval(() => {
        if (mode === "timer") {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              setIsTyping(false)
              onFinish?.()
              return 0
            }
            return prev - 1
          })
        } else {
          setTickTime((prev) => prev + 1)
        }
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTyping, mode, onFinish])

  return {
    inputRef,
    inpFieldValue,
    charIndex,
    mistakes,
    isTyping,
    setIsTyping,
    timeLeft,
    tickTime,
    wpm,
    cpm,
    reset,
    handleTyping,
    setInpFieldValue,
  }
}

export default useTyping
