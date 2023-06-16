interface CodeRevealProps {
  key: string;
}

function CodeReveal({}: CodeRevealProps) {
  return (
    <>
      <div className="fixed flex bg-gray-300 blur-lg w-full h-full z-10" />
      <div className="fixed flex w-full h-full z-10 p-5 justify-center">
        <div className="flex w-full h-[85%] bg-white p-5 shadow-lg rounded-lg flex-col max-w-2xl">
          <p className="text-white capitalize text-3xl font-semibold">Test</p>
          <p className="mt-3 text-sm text-gray-300 font-medium mb-4">Test 2</p>
          <div className="w-full h-1 opacity-30 rounded bg-gray-300 mb-10" />
        </div>
      </div>
    </>
  );
}

export default CodeReveal;
