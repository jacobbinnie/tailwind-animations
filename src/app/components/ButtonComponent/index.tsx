import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import parse from "html-react-parser";
import { useState } from "react";

interface ButtonComponentProps {
  buttonCode: string;
  handleAssignAction: (type?: "copy") => boolean;
}

function ButtonComponent({
  buttonCode,
  handleAssignAction,
}: ButtonComponentProps) {
  const [copied, setCopied] = useState(false);

  const button = parse(buttonCode);

  const handleCopying = () => {
    const res = handleAssignAction("copy");
    if (res) {
      navigator.clipboard.writeText(buttonCode);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col">
      {button}
      <div className="flex gap-3 mt-5 justify-left">
        <a className="inline-flex items-center justify-center text-sm duration-200 focus:outline-none focus-visible:outline-gray-600">
          <div
            onClick={() => null}
            className="flex gap-2 shadow-lg bg-[#5046e5] px-4 py-2 rounded-3xl transition-all hover:px-6 hover:animate-rainbow-river cursor-pointer"
          >
            <span
              onClick={() => handleCopying()}
              className="text-white font-semibold"
            >
              {copied ? "Copied!" : "Copy Code"}
            </span>
            <ClipboardDocumentIcon width={16} color="white" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ButtonComponent;
