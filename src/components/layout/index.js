import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* <title>صفحه اصلی</title> */}
      </Head>
      <div className="flex flex-col min-h-screen">
        {/* header */}
        <Header />

        {/* section */}
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
