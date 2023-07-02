import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import screenshot from "../../public/screenshot.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Tailwind Animations | A Gorgeous Library Of 50+ Handcrafted Tailwind Animations For Your Next Project",
  description:
    "Tailwind gradients, buttons, backgrounds and more. Simply copy & paste the code into your project. Get started today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        property="og:image"
        content="https://pbs.twimg.com/media/F0ED1dBacAAXWCO?format=jpg&name=4096x4096"
      />
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></Script>
        <Script
          id="gtag"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
