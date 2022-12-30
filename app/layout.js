export default function RootLayout({children}){
    return(
        <html>
            <head>
                <title> 타이틀 </title>
            </head>
            <body>
                네비게이션 바
                {children}
            </body>
        </html>
    )
}