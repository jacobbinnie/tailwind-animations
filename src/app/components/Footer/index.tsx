interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <>
      <div className="text-white/70 text-[9px] font-semibold bg-black px-2 py-1 z-30 rounded-full flex fixed bottom-2 right-2">
        <a
          className="text-[#00acee] font-black"
          href="https://twitter.com/jacobbinnie"
          target="_blank"
        >
          @jacobbinnie
        </a>
      </div>
      <div className="flex flex-col p-20 justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-700 via-indigo-950 to-black">
        <div className="w-full flex justify-center items-center p-10">
          <p className="text-center max-w-lg text-xs text-gray-50 text-opacity-50">
            Disclaimer: Access valid for the duration of the product being
            available online. All animations are subject to copyright and may
            not be redistributed without the written consent of{" "}
            <a href="https://twitter.com/jacobbinnie" target="_blank">
              @jacobbinnie
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
