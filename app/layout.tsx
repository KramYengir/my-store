// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const snipcartKey = process.env.NEXT_PUBLIC_SNIPCART_API_KEY;

export const metadata = {
  title: "Costa Climbing Store",
  description: "All about Costa Climbing",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
        />
        <script
          src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
          data-api-key={snipcartKey}
        ></script>
      </head>
      <body className={`${inter.className}`}>
        {children}
        <div id="snipcart" data-api-key={snipcartKey}></div>
      </body>
    </html>
  );
}
