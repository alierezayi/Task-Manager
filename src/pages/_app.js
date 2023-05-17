import "@/styles/globals.css";
import localFont from "next/font/local";

const vazir = localFont({
  src: "../../public/fonts/Vazir-Variable.woff2",
  variable: "--font-vazir",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${vazir.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
