import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading"

})


const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata = {
  title: "HMPS-MHU-Website",
  description: "website resmi HMPS-MHU-UINSW kediri",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
