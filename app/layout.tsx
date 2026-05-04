import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "宇宙・プログラミング・ぼやき",
  description: "いつか来る娘の「なんで？」に答えたい父の学び直しブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
