import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";

import { Caveat, Finlandica, Nunito, Victor_Mono } from "next/font/google";

const nunitoSans = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const finlandica = Finlandica({
  variable: "--font-finlandica",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});
const victorMono = Victor_Mono({
  variable: "--font-victor-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <Layout
      className={` ${nunitoSans.variable}    ${finlandica.variable}  ${victorMono.variable} ${caveat.variable}  font-victor-mono tracking-normal text-base`}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
