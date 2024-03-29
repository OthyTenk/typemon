"use client"

import {
  ChangeEvent,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { IoRefresh } from "react-icons/io5"

import useGlobal from "@/store/useGlobal"

import useResultStatistic from "@/hooks/useResultStatistic"
import useTypingResultModal from "@/hooks/useTypingResultModal"
import { countCorrectCharacters } from "@/libs/utils"
import TimeTick from "./TimeTick"

interface ITypingProps {
  currentUserEmail: string | null
  currentText: string
  changeText: () => void
}

const Typing: FC<ITypingProps> = ({
  currentUserEmail = null,
  currentText,
  changeText,
}) => {
  const { stopType, startType, time } = useGlobal()

  const inputRef = useRef<HTMLInputElement>(null)

  const typingResultModal = useTypingResultModal()
  const CurrentPositionStyle = "border-l-2 border-yellow-400 animate-pulse"
  const stat = useResultStatistic()

  const [typingText, setTypingText] = useState<string | ReactElement[]>("")
  const [inpFieldValue, setInpFieldValue] = useState("")
  const [timeLeft, setTimeLeft] = useState(time)
  const [charIndex, setCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const loadParagraph = useCallback(() => {
    const content = Array.from(currentText).map((letter, index) => (
      <span
        key={index}
        className={`leading-8 ${index === 0 ? CurrentPositionStyle : ""}`}>
        {letter}
      </span>
    ))
    setTypingText(content)

    setInpFieldValue("")
    setCharIndex(0)
    setIsTyping(false)
    setTimeLeft(time)
    stopType()
    stat.setValues
  }, [stat, stopType, time, currentText])

  useEffect(() => {
    if (!currentText) return

    const content = Array.from(currentText).map((letter, index) => {
      let resultColor = ""
      if (index < inpFieldValue.length) {
        resultColor =
          letter === inpFieldValue[index]
            ? "text-green-400"
            : letter === " "
            ? "bg-red-500"
            : "text-red-500"
      }

      return (
        <span
          key={index}
          className={`${
            inpFieldValue.length === index ? CurrentPositionStyle : ""
          } ${resultColor}`}>
          {letter}
        </span>
      )
    })

    setTypingText(content)
  }, [inpFieldValue, currentText])

  const setInputFocus = () => {
    return inputRef.current?.focus()
  }

  useEffect(() => {
    document.addEventListener("keydown", setInputFocus)

    loadParagraph()

    return () => document.removeEventListener("keydown", setInputFocus)
  }, [loadParagraph])

  useEffect(() => {
    let cpm = (charIndex - stat.mistakes) * (60 / (time - timeLeft))
    cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm
    stat.CPM = Math.round(cpm)

    let wpm = Math.round(
      ((charIndex - stat.mistakes) / 5 / (time - timeLeft)) * 60
    )
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm
    stat.WPM = wpm
  }, [timeLeft, charIndex, stat, time])

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined

    if (timeLeft <= 0 || !isTyping) {
      clearInterval(interval)
      setIsTyping(false)
      stopType()
      return
    }

    interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000)

    return () => clearInterval(interval)
  }, [isTyping, timeLeft, stopType])

  const onTryAgain = () => {
    changeText()
  }

  const onTyping = (e: ChangeEvent<HTMLInputElement>) => {
    if (inpFieldValue.length > typingText.length || timeLeft < 1) {
      setIsTyping(false)
      inputRef.current?.blur()

      stat.currentUserEmail = currentUserEmail

      stopType()
      typingResultModal.onOpen()
      return
    }

    if (!isTyping) {
      setIsTyping(true)
      startType()
    }

    setCharIndex(inpFieldValue.length)
    stat.mistakes = countCorrectCharacters(currentText, inpFieldValue)
    setInpFieldValue(e.target.value)
  }

  return (
    <>
      <section className="p-0 my-10 min-w-full flex flex-col justify-center items-center bg-[#1E1E1E]">
        <div
          className={`md:max-w-5xl p-5 md:p-7 w-[calc(100% - 10px)] md:rounded-3xl ${
            isTyping ? "bg-[#1E1E1E]" : "bg-neutral-800"
          }  md:shadow-lg`}>
          <div className="flex flex-1 mt-28 md:mt-0" />
          <TimeTick timeLeft={timeLeft} />

          <div className="p-2">
            <input
              ref={inputRef}
              autoComplete="off"
              type="text"
              className="md:-z-10 absolute caret-transparent opacity-10 outline-none text-transparent h-28 border-transparent bg-transparent"
              autoFocus
              value={inpFieldValue}
              onChange={onTyping}
            />
            <div className="relative pb-8 text-2xl text-neutral-300 font-mono">
              <div className="whitespace-break-spaces leading-8 h-24 overflow-hidden">
                {typingText}
              </div>
            </div>

            <div className="flex items-center mt-4 justify-center">
              <button
                onClick={onTryAgain}
                className={`${
                  isTyping && "hidden"
                } p-4 outline-none cursor-pointer m-1 rounded-full hover:bg-neutral-700`}>
                <IoRefresh size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Typing
