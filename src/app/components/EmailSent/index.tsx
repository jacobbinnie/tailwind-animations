interface EmailSentProps {
  email: string;
}

function EmailSent({ email }: EmailSentProps) {
  return (
    <div className="w-full border-2 h-min max-w-xl px-5 sm:p-10 py-10 flex flex-col rounded-xl gap-4 overflow-hidden bg-transparent shadow-lg">
      <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
        Check your email
      </p>
      <p className="max-w-xl mt-4 font-medium text-sm sm:text-lg text-gray-300">
        We&apos;ve sent a sign in link to{" "}
        <span className="font-semibold text-gray-100">{email}</span>. This may
        take up to a minute to arrive.
      </p>
    </div>
  );
}

export default EmailSent;
