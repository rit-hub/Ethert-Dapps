import Head from "next/head";
import CMCtable from "../components/cmc-table/cmcTable";
import Header from "../components/header";
import Trending from "../components/trending";
import SwapCryptoModal from "../components/swapCryptoModal";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Head>
        <title>Ethert DApps - The Crypto Web 3 Apps </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className=" pl-10 pr-10">
        <h1 className="text-yellow-50"> Discord Here</h1>
      </div>
    </div>
  );
}
