import React, { useEffect, useRef } from "react";
import { selectBackgroundColor } from "../../utils/helpers";
import { Highlighter } from "../ui-components/Highlighter";

interface CustomSyntaxHighlighterProps {
  code: string;
  language: string;
  theme: string;
  scrollRef: React.RefObject<HTMLTextAreaElement>;
}

const CustomSyntaxHighlighter: React.FC<CustomSyntaxHighlighterProps> = ({
  code,
  language,
  theme,
  scrollRef,
}) => {
  const ref = useRef<HTMLPreElement>(null);

  // Synchronize scrolling with the textarea
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && scrollRef.current) {
        ref.current.scrollTop = scrollRef.current.scrollTop;
        ref.current.scrollLeft = scrollRef.current.scrollLeft;
      }
    };

    const textarea = scrollRef.current;
    if (textarea) {
      textarea.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollRef]);

  return (
    <pre
      ref={ref}
      className="absolute top-0 left-0 w-full h-full p-2 z-0 m-0 pointer-events-none"
      style={{
        backgroundColor: selectBackgroundColor(theme),
        overflow: "hidden",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
      }}
    >
      <Highlighter code={code} language={language} theme={theme} />
    </pre>
  );
};

export default CustomSyntaxHighlighter;
