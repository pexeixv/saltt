import Head from "next/head";
import Header from "./Header";
// import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <section className="w-screen min-h-screen flex flex-col overflow-x-hidden ">
        <Head>
          <link rel="shortcut icon" href="/fav.png" type="image/x-icon" />
          <title> Saltt Kitchen &apos;n Bar</title>
        </Head>
        <Header />
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
      </section>
    </>
  );
}
