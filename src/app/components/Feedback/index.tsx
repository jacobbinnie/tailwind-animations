import { useAuth } from "@/app/authprovider";
import { BugAntIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";

interface FeedbackProps {}

function Feedback({}: FeedbackProps) {
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState("");

  const handleUpdateBody = (text: string) => {
    if (text.length <= 250) {
      setBody(text);
    }
  };

  const handleSendFeedback = () => {
    if (body.length > 10) {
      location.href = `mailto:hello+tailwindanimations@jacobbinnie.com?subject=REQUEST: Tailwind Animations&body=${body}`;
    }
  };

  const { auth } = useAuth();

  return (
    <div className="flex flex-col fixed bottom-10 right-10 z-20 items-end">
      <div
        className={clsx(
          open ? "h-72 opacity-100" : "h-0 opacity-0",
          "relative w-72 bg-gray-200 shadow-xl rounded-xl px-5 py-8 transition-all flex flex-col justify-center"
        )}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-1">
            <p className="text-black text-sm font-semibold">Your email:</p>
            <p className="text-black text-sm">{auth.user?.email}</p>
          </div>

          <div className="flex flex-col justify-evenly gap-1">
            <div className="flex w-full justify-between">
              <p className="text-black text-sm font-semibold">Message:</p>
              <p className="text-black text-sm">{250 - body.length}</p>
            </div>
            <textarea
              onChange={(e) => handleUpdateBody(e.target.value)}
              value={body}
              id="message"
              className="block resize-none bg-transparent p-2.5 text-black h-20 w-full text-sm bg-gray-50 rounded border-gray-300 border-2 focus:ring-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-black dark:focus:border-black"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <button
            disabled={body.length < 10}
            onClick={() => handleSendFeedback()}
            className="disabled:cursor-default disabled:opacity-50 relative flex cursor-pointer items-center justify-center px-2 py-2 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-b-4 border-black rounded shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center text-sm w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
              {body.length < 10 ? "Enter your message" : "Send message"}
            </span>
            <span className="relative invisible">Button Text</span>
          </button>
        </div>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="flex gap-3 mt-10 justify-left z-30"
      >
        <a className="inline-flex items-center justify-center text-sm duration-200 focus:outline-none focus-visible:outline-gray-600">
          <div
            onClick={() => null}
            className="flex gap-2 shadow-lg bg-indigo-700 px-4 py-2 rounded-3xl transition-all hover:px-6 hover:animate-rainbow-river cursor-pointer"
          >
            <span className="text-white font-semibold">Found a bug?</span>
            <BugAntIcon width={16} color="white" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Feedback;
