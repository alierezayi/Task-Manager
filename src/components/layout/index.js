import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import Sidebar from "./Sidebar";

import { closeSidebar } from "@/features/sidebarSlice";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  const { sidebarOpen } = useSelector((state) => state.sidebar);

  const authState = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authState.isAuthenticated) {
      router.push("/");
    }
  }, [authState]);

  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar />

        <main className="w-full h-screen overflow-auto bg-gray-100">
          <Header />
          {children}
        </main>

        {sidebarOpen ? (
          <div
            className="absolute inset-0 backdrop-blur-sm z-10 md:hidden"
            onClick={() => dispatch(closeSidebar())}
          />
        ) : null}
      </div>
    </>
  );
};

export default Layout;
