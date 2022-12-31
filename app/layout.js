import NavBar from "../component/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./css/Main.module.css";

export default function RootLayout({children}){
    return(
        <html className={styles.html}>
            <head>
                <title> 타이틀 </title>
            </head>
            <body className={styles.body}>
                <NavBar/>
                <div className={styles.wrap}>
                    {children}
                </div>
            </body>
        </html>
    )
}