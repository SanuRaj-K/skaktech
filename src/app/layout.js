import localFont from "next/font/local";
import "./globals.css";
import { Albert_Sans } from 'next/font/google';
import { NavBar } from "@/components/header/NavBar";
import { Footer } from "@/components/footer/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: "Skaktech",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${albertSans.className}    antialiased`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
