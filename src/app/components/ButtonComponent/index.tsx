import {
  ArrowRightIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import parse from "html-react-parser";

interface ButtonComponentProps {
  buttonCode: string;
}

function ButtonComponent({ buttonCode }: ButtonComponentProps) {
  const button = parse(buttonCode);
  return (
    <div className="flex flex-col">
      {button}
      <div className="flex gap-3 mt-5 justify-left">
        <a className="inline-flex items-center justify-center text-sm duration-200 focus:outline-none focus-visible:outline-gray-600">
          <div
            onClick={() => null}
            className="flex gap-2 shadow-lg bg-[#5046e5] px-4 py-2 rounded-3xl transition-all hover:px-6 hover:animate-rainbow-river cursor-pointer"
          >
            <span className="text-white font-semibold">Copy Code</span>
            <ClipboardDocumentIcon width={16} color="white" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ButtonComponent;
