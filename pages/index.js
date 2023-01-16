import Head from "next/head";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>CryptoDash</title>
      </Head>
      <div className="flex flex-col sm:flex-row bg-gray-100">
        <Sidebar />
        <Hero />
      </div>
    </>
  );
}
