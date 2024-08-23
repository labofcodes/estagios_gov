import { Encode_Sans_Expanded } from "next/font/google";
import "./globals.css";
import Footer from "./ui/components/footer/footer";
import Header from "./ui/components/header/header";

const encode_sans = Encode_Sans_Expanded({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });


export const metadata = {
  title: "Estagios Gov",
  description: "Plataforma especializada no recrutamento de estagiários e residentes para órgãos governamentais do Brasil.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>

      </head>
      <body className={`text-blue-crea-500 ${encode_sans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
