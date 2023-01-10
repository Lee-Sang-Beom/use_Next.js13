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
            <Link href = "/">
                <div className={styles.nav_logo}>
                    <Image width={100} height={100} src={Logo} alt="nav_mainlogo"/>
                </div>
            </Link>
            <ul className={inter.className}>
                <Link href="/about">
                    <li>About</li>
                </Link>
                <Link href="/">
                    <li>Popular</li>
                </Link>
            </ul>
        </nav>
    )
}