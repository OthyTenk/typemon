import {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Preview from "./Preview";

const Typing = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const paragraphs = useMemo(
    () => [
      "A plant is one of the",
      "A plant is one of the most important living things that develop on the earth and is made up of stems, leaves, roots, and so on.Parts of Plants: The part of the plant that developed beneath the soil is referred to as root and the part that grows outside of the soil is known as shoot. The shoot consists of stems, branches, l eaves, fruits, and flowers. Plants are made up of six main parts: roots, stems, leaves, flowers, fruits, and seeds.",
      "The root is the part of the plant that grows in the soil. The primary root emerges from the embryo. Its primary function is to provide the plant stability in the earth and make other mineral salts from the earth available to the plant for various metabolic processes There are three types of roots i.e. Tap Root, Adventitious Roots, and Lateral Root. The roots arise from the parts of the plant and not from the rhizomes roots.",
      "Stem is the posterior part that remains above the ground and grows negatively geotropic. Internodes and nodes are found on the stem. Branch, bud, leaf, petiole, flower, and inflorescence on a node are all those parts of the plant that remain above the ground and undergo negative subsoil development. The trees have brown bark and the young and newly developed stems are green. The roots arise from the parts of plant and not from the rhizomes roots.",
      "It is the blossom of a plant. A flower is the part of a plant that produces seeds, which eventually become other flowers. They are the reproductive system of a plant. Most flowers consist of 04 main parts that are sepals, petals, stamens, and carpels. The female portion of the flower is the carpels. The majority of flowers are hermaphrodites, meaning they have both male and female components. Others may consist of one of two parts and may be male or female.",
      "An aunt is a bassoon from the right perspective. As far as we can estimate, some posit the melic myanmar to be less than kutcha. One cannot separate foods from blowzy bows. The scampish closet reveals itself as a sclerous llama to those who look. A hip is the skirt of a peak. Some hempy laundries are thought of simply as orchids. A gum is a trumpet from the right perspective. A freebie flight is a wrench of the mind. Some posit the croupy.",
    ],
    []
  );

  const [typingText, setTypingText] = useState<string | ReactElement[]>("");
  const [inpFieldValue, setInpFieldValue] = useState("");
  const maxTime = 60;
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [charIndex, setCharIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [WPM, setWPM] = useState(0);
  const [CPM, setCPM] = useState(0);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const CurrentPositionStyle = "border-b-4 border-blue-600";

  const loadParagraph = useCallback(() => {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    setCurrentTextIndex(ranIndex);
    document.addEventListener("keydown", () => inputRef.current?.focus());

    const content = Array.from(paragraphs[ranIndex]).map((letter, index) => (
      <span
        key={index}
        className={`${index === 0 ? CurrentPositionStyle : ""}`}
      >
        {letter}
      </span>
    ));

    setTypingText(content);
    setInpFieldValue("");
    setCharIndex(0);
    setMistakes(0);
    setIsTyping(false);
  }, [paragraphs]);

  useEffect(() => {
    const content = Array.from(paragraphs[currentTextIndex]).map(
      (letter, index) => {
        let showTypeResult = "";
        if (index < inpFieldValue.length) {
          if (letter === inpFieldValue[index]) {
            showTypeResult = "bg-green-300";
          } else {
            showTypeResult = "bg-red-500";
          }
        }

        return (
          <span
            key={index}
            className={`${
              inpFieldValue.length === index ? CurrentPositionStyle : ""
            } ${showTypeResult}`}
          >
            {letter !== " " ? letter : " "}
          </span>
        );
      }
    );

    setTypingText(content);
  }, [inpFieldValue, paragraphs, currentTextIndex]);

  const onTryAgain = () => {
    setIsTyping(false);
    setTimeLeft(maxTime);
    setCharIndex(0);
    setMistakes(0);
    setTypingText("");
    setCPM(0);
    setWPM(0);

    loadParagraph();
  };

  useEffect(() => {
    loadParagraph();
  }, [loadParagraph]);

  const onTyping = (e: ChangeEvent<HTMLInputElement>) => {
    if (inpFieldValue.length > typingText.length) return;

    setInpFieldValue(e.target.value);
  };

  useEffect(() => {
    let interval: number = 0;

    if (isTyping && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);

        let cpm = (charIndex - mistakes) * (60 / (maxTime - timeLeft));
        cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
        setCPM(cpm);

        let wpm = Math.round(
          ((charIndex - mistakes) / 5 / (maxTime - timeLeft)) * 60
        );

        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        setWPM(wpm);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      setIsTyping(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTyping, timeLeft, charIndex, mistakes]);

  return (
    <div className="p-0 m-0 min-h-screen min-w-full flex justify-center items-center bg-neutral-600">
      <div className="max-w-[700px] md:m-1 w-[calc(100% - 10px)] md:p-7 md:rounded-xl md:border md:border-neutral-200 bg-neutral-700 md:shadow-lg">
        <input
          ref={inputRef}
          type="text"
          className="-z-10 absolute"
          value={inpFieldValue}
          onChange={onTyping}
        />

        {/* Render the Preview child component */}
        <Preview
          typingText={typingText}
          timeLeft={timeLeft}
          mistakes={mistakes}
          WPM={WPM}
          CPM={CPM}
          onTryAgain={onTryAgain}
        />
      </div>
    </div>
  );
};

export default Typing;