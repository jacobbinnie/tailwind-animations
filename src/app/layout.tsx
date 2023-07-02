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
        content="https://firebasestorage.googleapis.com/v0/b/tailwind-animations/o/Screenshot%202023-07-03%20at%209.55.13%20AM.png?alt=media&token=b7a5e13e-38bd-4e22-a890-228e90692442"
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
