import "@/styles/globals.css";
import "../i18n/i18n"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
         once: false,
    })
 }, [])
  return <Component {...pageProps} />;
}
