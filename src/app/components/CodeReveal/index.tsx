import {
  CheckBadgeIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";

interface CodeRevealProps {
  animationKey: string;
  revealingCode: boolean;
  handleCloseCodeReveal: () => void;
}

function CodeReveal({
  animationKey,
  revealingCode,
  handleCloseCodeReveal,
}: CodeRevealProps) {
  const [copiedAnimation, setCopiedAnimation] = useState(false);
  const [copiedKeyframes, setCopiedKeyframes] = useState(false);

  const handleCopyAnimation = () => {
    setCopiedAnimation(true);
    setTimeout(() => {
      setCopiedAnimation(false);
    }, 2000);
  };

  const handleCopyKeyframes = () => {
    setCopiedKeyframes(true);
    setTimeout(() => {
      setCopiedKeyframes(false);
    }, 2000);
  };

  const tailwindConfig = `module.exports = {
  // Other Tailwind CSS configurations...

  theme: {
    extend: {
      animation: {
        // Add your animation definition here
      }
      keyframes: {
        // Add your keyframe definition here
      },
    },
  },
};
`;

  return (
    <div
      className={`${
        revealingCode ? "translate-y-0" : "translate-y-full"
      } fixed bottom-0 left-0 w-full h-full bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-white to-gray-300 z-10 p-10 flex justify-center transition-transform ease-in-out duration-300 overflow-y-auto`}
    >
      <div className="rounded">
        <div className="flex w-full bg-white p-10 shadow-lg rounded-lg mt-20 flex-col max-w-2xl overflow-auto">
          <p className="mt-3 text-sm text-gray-300 font-medium mb-2">
            TAILWIND ANIMATIONS
          </p>
          <p className="text-black capitalize text-lg font-semibold mb-4">
            &quot;{animationKey.toUpperCase()}&quot; INSTALL GUIDE
          </p>
          <div className="w-full h-1 opacity-30 rounded bg-gray-300 mb-10" />
          <p className="font-medium text-xs text-black">
            <span className="font-black text-xs">NOTE:</span> you must have
            tailwindcss installed. See official docs{" "}
            <a
              className="font-bold cursor-pointer animate-pulse"
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
            >
              HERE
            </a>
          </p>

          {/* INSTRUCTIONS */}
          <div className="flex flex-col w-full gap-5">
            <p className="font-medium text-black mt-10">
              1. Open your{" "}
              <span className="font-black">tailwind.config.js</span> file
            </p>

            <div>
              <p className="font-medium text-black mt-5 mb-2">
                2. Copy the following code definitions
              </p>

              <a className="inline-flex gap-2 items-center justify-center text-sm duration-200 focus:outline-none focus-visible:outline-gray-600">
                <div
                  onClick={() => handleCopyAnimation()}
                  className="flex gap-2 bg-black px-4 py-2 rounded-3xl transition-all hover:px-6 hover:animate-green-swoosh cursor-pointer"
                >
                  <span className="text-white font-semibold">
                    {copiedAnimation ? "Copied" : "Copy Animation"}
                  </span>
                  {copiedAnimation ? (
                    <CheckBadgeIcon width={16} />
                  ) : (
                    <ClipboardDocumentIcon width={16} />
                  )}
                </div>
                <div
                  onClick={() => handleCopyKeyframes()}
                  className="flex gap-2 bg-black px-4 py-2 rounded-3xl transition-all hover:px-6 hover:animate-green-swoosh cursor-pointer"
                >
                  <span className="text-white font-semibold">
                    {copiedKeyframes ? "Copied" : "Copy Keyframes"}
                  </span>
                  {copiedKeyframes ? (
                    <CheckBadgeIcon width={16} />
                  ) : (
                    <ClipboardDocumentIcon width={16} />
                  )}
                </div>
              </a>
            </div>

            <p className="font-medium text-black mt-5">
              3. Inside the theme object, paste the animation definition into
              the
              <span className="font-black"> animation</span> property. Paste the
              keyframes definition into the{" "}
              <span className="font-black"> keyframes</span> property.
            </p>
            <p className="font-medium text-xs text-black">
              <span className="font-black">NOTE:</span> If either properties
              don&apos;t exist, add them.
            </p>
          </div>

          <p className="bg-black w-min text-xs mt-5 mb-2 px-2 py-1 rounded-3xl">
            tailwind.config.js
          </p>

          <pre className="bg-black p-5 rounded-xl">
            <code className="text-gray-300 text-sm">{tailwindConfig}</code>
          </pre>

          <p className="font-medium text-black mt-10">
            4. Add your animation to any element using{" "}
            <span className="font-black"> animate-{animationKey}</span>
          </p>
          <pre className="bg-black p-5 rounded-xl mt-2">
            <code className="text-gray-300 text-sm">{`<div className="w-full h-24 animate-${animationKey}/>`}</code>
          </pre>

          <p className="font-medium text-black mt-10 mb-10">
            5. That&apos;s it!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CodeReveal;
