"use client";
import { useAuth } from "@/app/authprovider";
import EmailSent from "@/app/components/EmailSent";
import Navbar from "@/app/components/Navbar";
import SigninSignup from "@/app/components/SigninSignup";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface AuthProps {
  tab: "signin" | "signup";
}

export const Auth: React.FC<AuthProps> = ({ tab }) => {
  const [view, setView] = useState<"signin" | "signup">("signin");
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState<string>("");

  const { sendMagicLink } = useAuth();

  function isEmail(): boolean {
    // Regular expression pattern for validating email addresses
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSendMagicLink() {
    if (!emailSent) {
      sendMagicLink(email).then(() => {
        setEmailSent(true);
      });
    }
  }

  useEffect(() => {
    if (tab === "signin") {
      setView("signin");
    } else {
      setView("signup");
    }
  }, [tab]);

  return (
    <>
      <div className="flex h-screen flex-col items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <Navbar />
        <div className="flex h-full w-full items-center justify-center p-5">
          {emailSent ? (
            <EmailSent email={email} />
          ) : (
            <SigninSignup
              handleSendMagicLink={handleSendMagicLink}
              setView={setView}
              view={view}
              setEmail={setEmail}
              isEmail={isEmail}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
