import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./navbar";

const App = ({ Component, pageProps }: AppProps) => {
  return <><header className="bg-blue-100 shadow"><Navbar/></header><Component {...pageProps} /></>;
}

export default App;