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
  const [loading, setLoading] = useState<boolean>(false);

  const { sendMagicLink } = useAuth();

  function isEmail(): boolean {
    // Regular expression pattern for validating email addresses
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSendMagicLink() {
    if (!emailSent) {
      setLoading(true);
      sendMagicLink(email).then(() => {
        setEmailSent(true);
        setLoading(false);
      });
    }
  }

  function handleSetLoading(value: boolean) {
    setLoading(value);
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
      <div className="flex h-screen flex-col items-center bg-gradient-to-r from-indigo-300 to-purple-400">
        <Navbar />
        <div className="flex h-full w-full items-center justify-center p-5">
          <SigninSignup
            handleSendMagicLink={handleSendMagicLink}
            setView={setView}
            view={view}
            email={email}
            setEmail={setEmail}
            isEmail={isEmail}
            emailSent={emailSent}
            handleSetLoading={handleSetLoading}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default Auth;
