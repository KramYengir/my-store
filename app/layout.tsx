import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Get the Snipcart API key from the environment variable
const snipcartKey = process.env.NEXT_PUBLIC_SNIPCART_API_KEY;

console.log("Snipcart API Key:", snipcartKey); // Add this to check if the key is correctly loaded

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
          data-api-key={
            "ZjcwMzhmODktY2Q3NC00OWViLTgwYzQtMWJlYWQ0NDViODNjNjM4NjIwODkzMTU2NjE2MTg4"
          }
          async
        ></script>
      </head>
      <body className={inter.className}>
        {children}
        <div
          id="snipcart"
          data-api-key={
            "ZjcwMzhmODktY2Q3NC00OWViLTgwYzQtMWJlYWQ0NDViODNjNjM4NjIwODkzMTU2NjE2MTg4"
          }
        ></div>
      </body>
    </html>
  );
}
