import styles from "./css/navbar/NavBar.module.css";
import Logo from "../styles/img/movieLogo.jpg";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

// @next/font
const inter = Inter({ subsets: ["latin"], weight: "600", preload: false });

export default function NavBar(){
    return (
        <nav className={styles.nav_wrap}>
            <div className={styles.nav_logo}>
                <Image width={100} height={100} src={Logo}/>
            </div>
            <ul className={inter.className}>
                <li>About</li>
                <li>Popular</li>
            </ul>
        </nav>
    )
}