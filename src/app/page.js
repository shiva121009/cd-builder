import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Main  from "./components/main/main"


export default function Home() {
  return (
    <>
    <Navbar/>
    <Main/>
    </>
  );
}
