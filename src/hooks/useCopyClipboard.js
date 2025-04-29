import { useState } from "react";

function useCopyClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = (text) => {
    if (!navigator?.clipboard) {
      console.log("안됨");
      return;
    }
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, timeout);
      })
      .catch((err) => console.error(`복사실패: ${err}`));
  };

  return { copy, copied };
}

export default useCopyClipboard;
