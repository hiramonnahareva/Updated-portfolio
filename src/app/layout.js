import localFont from "next/font/local";
import "./globals.css";
import Header from "./Nav";
import Footer from "./Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio - Eva",
  description: "Showcasing the works and projects of Eva, MERN Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-white h-screen dark:bg-[#0a0a0a] text-black dark:text-white"
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
