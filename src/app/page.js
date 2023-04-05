import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <div>
          <h1>Home</h1>
          <h2>He lo world</h2>
        </div>
      </main>
    </>
  );
}
