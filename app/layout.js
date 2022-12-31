import NavBar from "../component/NavBar";

export default function RootLayout({children}){
    return(
        <html>
            <head>
                <title> 타이틀 </title>
            </head>
            <body>
                <NavBar/>
                {children}
            </body>
        </html>
    )
}