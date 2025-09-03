import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";

import { Caveat, Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({
  variable: "--font-roboto",
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
      className={` ${roboto.variable} ${caveat.variable}  font-roboto tracking-normal text-base`}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
