
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/component/sessionwrapper";
const inter = Inter({ subsets: ["latin"] });
import Head from 'next/head';
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export const metadata = {
  title: 'AYUSHerbs',
  description: 'AI-Powered Herbal Plant Identification Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* Add the html tag */}
      <Head>
        <title>CollabAI - AI-Powered Collaboration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <body className={`${inter.className} flex flex-col min-h-screen bg-green-50`}>        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100"> */}
      <body className={`${inter.className} flex flex-col min-h-screen bg-green-50`}>        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
          <SessionWrapper>
            <Header />
            {children}
            <Footer/>
          </SessionWrapper>
        </div>
      </body>
    </html>
  );
}

