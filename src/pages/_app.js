import "@/styles/globals.css";

import localFont from "next/font/local";

import { Provider } from "react-redux";
import { wrapper } from "@/store";

// font vazir
const vazir = localFont({
  src: "../../public/fonts/Vazir-Variable.woff2",
  variable: "--font-vazir",
});

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <main className={`${vazir.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default App;
