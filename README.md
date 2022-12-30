Study - use Next.js 13
======================

## 1. 프로젝트 계획 이유

- 최신 기술 트렌드에 뒤쳐지지 않는 개발자로 성장하기 위해, 최근 베타버전으로 출시된 Next.js 13버전의 사용을 체험해보기 위해 진행했습니다.

****

## 2. 설치
### 2.1 Next.js v13

- 최신 Next.js를 설치하기 위해서는 아래 명령어를 입력하여야 한다.  
    ```
    npm i next@latest react@latest react-dom@latest eslint-config-next@latest
    ```
- 사용하면서, 현재 page 디렉토리와 app 디렉토리는 공존하고 있으며, 둘 중 하나를 선택하여 개발을 진행해야 함에 유의하여야 한다.

****

## 3. 사용

### 3.1 app 디렉토리

- 기존 next.js에서는 라우팅을 진행할 때 page 디렉토리 안에 파일을 생성하는 방식으로 진행했는데, 13버전부터는 app이라는 새로운 디렉토리가 등장했다.
    - 기존 방식에서, 이 app 디렉토리에서 라우팅 및 레이아웃 기능을 개선하는 방향으로 전환되었다.

- 주요 파일은 아래와 같다.
    - app 디렉토리 안에 `page.js`라는 단일 파일을 생성해야 사용할 수 있다.
    - `layout.js`는 레이아웃을 적용할 수 있는 파일이다. 
        - 여러 페이지 간에 네비게이션 바와 같은 공통적인 UI를 공유하여 불필요한 리렌더링을 방지할 수 있도록 하는 역할을 한다. 

    ```
    * app/layout.js

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
    ```

    ```
    * app/page.js

    const Home = () => {
    return <div>여기는 메인 페이지입니다.</div>;
    };

    export default Home;
    ```

    ```
    * app/about/page.js

    const About = () => {
        return <div>about 페이지입니다.</div>;
    };
    
    export default About;
    ```