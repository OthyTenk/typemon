"use client"

import { FC, useCallback, useEffect, useMemo } from "react"
import { IoRefresh } from "react-icons/io5"

import useGlobal from "@/store/useGlobal"

import useResultStatistic from "@/hooks/useResultStatistic"
import useTyping from "@/hooks/useTyping"
import useTypingResultModal from "@/hooks/useTypingResultModal"
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
  const typingResultModal = useTypingResultModal()
  const stat = useResultStatistic()
  const CurrentPositionStyle = "border-l-2 border-yellow-400 animate-pulse"

  const onFinish = useCallback(() => {
    stopType()
    stat.currentUserEmail = currentUserEmail
    typingResultModal.onOpen()
  }, [stopType, stat, currentUserEmail, typingResultModal])

  const {
    inputRef,
    inpFieldValue,
    charIndex,
    mistakes,
    isTyping,
    timeLeft,
    wpm,
    cpm,
    reset,
    handleTyping,
  } = useTyping({
    currentText,
    mode: "timer",
    duration: time,
    onFinish,
  })

  // Sync global isTyping state
  useEffect(() => {
    if (isTyping) {
      startType()
    } else {
      stopType()
    }
  }, [isTyping, startType, stopType])

  // Sync stats
  useEffect(() => {
    stat.CPM = cpm
    stat.WPM = wpm
    stat.mistakes = mistakes
  }, [cpm, wpm, mistakes, stat])

  // Reset when text changes
  useEffect(() => {
    reset()
    stopType()
    stat.setValues
  }, [currentText, reset, stopType, stat])

  const setInputFocus = () => {
    return inputRef.current?.focus()
  }

  useEffect(() => {
    document.addEventListener("keydown", setInputFocus)
    return () => document.removeEventListener("keydown", setInputFocus)
  }, [setInputFocus])

  const typingText = useMemo(() => {
    return Array.from(currentText).map((letter, index) => {
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
  }, [currentText, inpFieldValue])

  const onTryAgain = () => {
    changeText()
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
              onChange={handleTyping}
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
