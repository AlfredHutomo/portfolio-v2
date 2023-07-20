"use client";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { m } from "framer-motion";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const resetCopy = () => {
    setCopied(false);
  };

  return (
    <button onClick={handleCopy} onMouseLeave={resetCopy} onBlur={resetCopy}>
      {!copied ? (
        <m.div
          key={String(copied)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FiCopy />
        </m.div>
      ) : (
        <m.div
          key={String(copied)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FiCheck />
        </m.div>
      )}
    </button>
  );
};

export default CopyButton;
