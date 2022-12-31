Study - use Next.js 13
======================

## 1. 프로젝트 계획 이유

- 최신 기술 트렌드에 뒤쳐지지 않는 개발자로 성장하기 위해, 최근 베타버전으로 출시된 Next.js 13버전의 사용을 체험해보기 위해 진행했습니다.

### 제공 기능
 - 영화 정보 제공
 ```
 api 사용 사이트: https://www.themoviedb.org/
 ```

****

## 2. 설치
### 2.1 Next.js v13

- 최신 Next.js를 설치하기 위해서는 아래 명령어를 입력하여야 한다.  
    ```
    npm i next@latest react@latest react-dom@latest eslint-config-next@latest
    ```
- 사용하면서, 현재 page 디렉토리와 app 디렉토리는 공존하고 있으며, 둘 중 하나를 선택하여 개발을 진행해야 함에 유의하여야 한다.

### 2.2 next.config.js

- app 디렉토리 사용을 위해, `next.config.js`라는 설정 파일 하나를 생성해 주어야 한다.
    ```
    // next.config.js

    const nextConfig = {
        ...
    experimental: { appDir: true }, <-- 이부분 추가 !
    };
    ```

### 2.3 axios

- ajax 통신을 위한 라이브러리인 axios를 설치한다.
    ```
    npm i axios
    ```

### 2.4 bootstrap

- 프론트엔드 개발을 위한 무료 오픈소스 css 프레임워크인 bootstrap 사용을 위한 설치과정을 진행합니다.
    ```
    npm i bootstrap
    ```
    
- 파일 시스템의 최상위 요소에 bootstrap css 파일을 import합니다.
    ```
    import 'bootstrap/dist/css/bootstrap.min.css';
    ```

### 2.5 @next/font

- google font 사용을 위한 @next/font를 설치한다
    ```
    npm i @next/font
    ```
****

## 3. 변화

### 3.1 app 디렉토리 (1) : Layout

- 기존 next.js에서는 라우팅을 진행할 때 page 디렉토리 안에 파일을 생성하는 방식으로 진행했는데, 13버전부터는 app이라는 새로운 디렉토리가 등장했다.
    - 기존 방식에서, 이 app 디렉토리에서 라우팅 및 레이아웃 기능을 개선하는 방향으로 전환되었다.

- 주요 파일은 아래와 같다.
    - app 디렉토리 안에 `page.js`라는 단일 파일을 생성해야 사용할 수 있다.
    - `layout.js`는 레이아웃을 적용할 수 있는 파일이다. 
        - 여러 페이지 간에 네비게이션 바와 같은 공통적인 UI를 공유하여 불필요한 리렌더링을 방지할 수 있도록 하는 역할을 한다. 

    ```
    // app/layout.js

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
    // app/page.js

    const Home = () => {
    return <div>여기는 메인 페이지입니다.</div>;
    };

    export default Home;
    ```

    ```
    // app/about/page.js

    const About = () => {
        return <div>about 페이지입니다.</div>;
    };
    
    export default About;
    ```

### 3.2 app 디렉토리 (2) : React Server Component
- Next.js의 app 디렉토리에서 리액트 서버 컴포넌트를 사용한다.
    - 이는, 서버에서만 컴포넌트를 렌더링하여 클라이언트에 전송되는 자바스크립트의 양을 줄여 **초기 페이지 로딩을 더 빠르게 수행**할 수 있도록 한다

### 3.3 app 디렉토리 (3) : Streaming
- 스트리밍은 app 디렉토리에서 loading.js라는 예약 파일을 생성하여 사용자가 렌더링이 되기 이전에 로딩 중인 화면을 표시할 수 있는 기능이다.

### 3.4 Data Fetching
- Next.js에서, fetch Web API를 사용하는 방법이다.
    - 자동으로 데이터 요청의 중복을 제공하고, 컴포넌트 수준에서 데이터를 가져오기, 캐시 및 재검증할 수 있는 유연한 방법을 제공한다.
    - 이전의 Next.js 버전에서 data를 fetch하려면, **getServerSideProps나 getStaticProps**를 사용해야 했으나, 좀 더 간편한 방법으로 fetch할 수 있도록 등장한 것이다. 
    ```
    // This request should be cached until manually invalidated.
    // Similar to `getStaticProps`.
    // `force-cache` is the default and can be omitted.
    
    // Default인 force-cache값은 기존에 저장된 캐시를 사용하겠다는 의미이다 (getStaticProps)
    fetch(URL, { cache: 'force-cache' }) 

    // This request should be refetched on every request.
    // Similar to `getServerSideProps`.

    //no-store값은 기존에 저장된 캐시를 사용하지 않고 계속해서 서버로부터 데이터를 불러오겠다는 의미이다 (getServerSideProps)
    fetch(URL, { cache: 'no-store' })

    // This request should be cached with a lifetime of 10 seconds.
    // Similar to `getStaticProps` with the `revalidate` option.

    // revalidate : 개발자가 캐시된 데이터를 사용하되, 데이터를 새로 고쳐야 할 상황에서 유용한 option이다.
    // 즉, getStaticProps에서, 갱신을 위해 revalidate option을 부여한 것과 비슷하다. 
    fetch(URL, { next: { revalidate: 10 } }) // 10s
    ```

### 3.5 Turbopack
- 새로운 Rust 기반의 자바스크립트 번들링 툴입니다.
    - webpack보다 700배 빠른 업데이트, Vite보다 10배 빠른 업데이트를 가진다고 주장합니다.
    - 즉, Webpack보다 빠르게 번들링해주는 새로운 툴인데, 충분한 안정화 후에 살펴보아야 할 내용으로 확인됩니다.

### 3.6 next/image
- alt 속성을 필수로 입력하도록 함으로써 접근성을 향상시켰다.
- 스타일 지정이 간편해졌다.
- lazy loading이 더욱 빨라졌다.

### 3.7 next/link
- 더이상 자식요소로 `<a>`태그를 필요로 하지 않는다.

### 3.8 next/font
- `@next/font`에서는 google font를 제공한다.
- 커스텀 폰트를 포함하여 글꼴을 자동으로 최적화한다.