import "./css/reset.css";
import 'semantic-ui-css/semantic.min.css';
import NavBar from "../component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/Main.module.css";

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <head>
          <title> 타이틀 </title>
        </head>
        <body className={styles.body}>
          <NavBar />
          <div className={styles.wrap}>{children}</div>
        </body>
      </html>
    </>
  );
}
