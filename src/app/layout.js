import { Lato, K2D } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-lato",
});

const k2d = K2D({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-k2d",
});

export const metadata = {
  title: "Mahmood Fazile | Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${k2d.variable}`}>
        {children}
      </body>
    </html>
  );
}