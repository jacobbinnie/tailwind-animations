interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <div className="flex flex-col p-20 justify-center items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <p className="text-white/70 w-full flex justify-center">
        by&nbsp;
        <a
          className="text-[#00acee] font-black"
          href="https://twitter.com/jacobbinnie"
          target="_blank"
        >
          @jacobbinnie
        </a>
      </p>
      <div className="w-screen flex justify-center items-center p-10">
        <p className="text-center max-w-lg text-xs text-gray-50 text-opacity-50">
          Disclaimer: Lifetime access valid for the duration of the product
          being available online. All animations are subject to copyright and
          may not be redistributed without the written consent of{" "}
          <a href="https://twitter.com/jacobbinnie" target="_blank">
            @jacobbinnie
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
