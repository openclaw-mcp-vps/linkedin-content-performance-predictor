import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkedIn Content Performance Predictor",
  description: "Predict post performance before publishing. Analyze your LinkedIn content history to predict engagement scores and optimal posting times."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3ea67063-1409-4926-b1c2-68bc223bd72c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
