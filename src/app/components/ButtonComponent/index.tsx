import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import parse from "html-react-parser";
import Image from "next/image";
import { useState } from "react";
import HAMMER from "../../../../public/buttons/Hammer.gif";
import ROADSIGN from "../../../../public/buttons/RoadSign.gif";
import PULLTHEBLINDS from "../../../../public/buttons/PullTheBlinds.gif";
import FADETOBLACK from "../../../../public/buttons/FadeToBlack.gif";
import LOOPARROW from "../../../../public/buttons/LoopArrow.gif";
import MOONBEAM from "../../../../public/buttons/MoonBeam.gif";
import MIDNIGHT from "../../../../public/buttons/Midnight.gif";
import UNLOCK from "../../../../public/buttons/Unlock.gif";

import HAMMERR from "../../../../public/buttons/HammerR.gif";
import ROADSIGNR from "../../../../public/buttons/RoadSignR.gif";
import PULLTHEBLINDSR from "../../../../public/buttons/PullTheBlindsR.gif";
import FADETOBLACKR from "../../../../public/buttons/FadeToBlackR.gif";
import LOOPARROWR from "../../../../public/buttons/LoopArrowR.gif";
import MOONBEAMR from "../../../../public/buttons/MoonBeamR.gif";
import MIDNIGHTR from "../../../../public/buttons/MidnightR.gif";
import UNLOCKR from "../../../../public/buttons/UnlockR.gif";

interface ButtonComponentProps {
  buttonCode: string;
  buttonImage: string;
  handleAssignAction: (type?: "copy") => boolean;
}

function ButtonComponent({
  buttonCode,
  buttonImage,
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

  const getImageSrc = () => {
    switch (buttonImage) {
      case "HAMMER":
        return HAMMER;
      case "ROADSIGN":
        return ROADSIGN;
      case "PULLTHEBLINDS":
        return PULLTHEBLINDS;
      case "FADETOBLACK":
        return FADETOBLACK;
      case "LOOPARROW":
        return LOOPARROW;
      case "MOONBEAM":
        return MOONBEAM;
      case "MIDNIGHT":
        return MIDNIGHT;
      case "UNLOCK":
        return UNLOCK;
      case "HAMMERR":
        return HAMMERR;
      case "ROADSIGNR":
        return ROADSIGNR;
      case "PULLTHEBLINDSR":
        return PULLTHEBLINDSR;
      case "FADETOBLACKR":
        return FADETOBLACKR;
      case "LOOPARROWR":
        return LOOPARROWR;
      case "MOONBEAMR":
        return MOONBEAMR;
      case "MIDNIGHTR":
        return MIDNIGHTR;
      case "UNLOCKR":
        return UNLOCKR;
      default:
        return null;
    }
  };

  const imageSrc = getImageSrc();

  return (
    <div className="flex flex-col w-full">
      {imageSrc && (
        <Image className="rounded-lg shadow-lg" src={imageSrc} alt="Hammer" />
      )}
      <div className="flex gap-3 mt-5 justify-left">
        <a className="inline-flex items-center justify-center text-sm duration-200 focus:outline-none focus-visible:outline-gray-600">
          <div
            onClick={() => null}
            className="flex gap-2 shadow-lg bg-indigo-700 px-4 py-2 rounded-3xl transition-all hover:px-6 hover:animate-rainbow-river cursor-pointer"
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
