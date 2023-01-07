# CSR, SSR, SSG

웹 페이지를 렌더링하는 방식과 장단점에 대해 알아본다. <br/>
([Next.js 문서](https://nextjs.org/learn/foundations/how-nextjs-works/rendering)를 기반으로 작성 되었습니다.)


#### 렌더링이란?

- HTML, CSS, JavaScript로 이루어진 코드를 화면에 그리는 과정을 말한다.
- 화면을 그리기 위한 HTML을 서버에서 내려주는 방식(Server Side Rendering)과 클라이언트에서 JavaScript 파일을 읽으면서 HTML을 만드는 방식(Client Side Rendering)이 있다.

## Client Side Rendering (CSR)

![CSR](/images/Web/CSR_SSR_SSG/CSR.png)

- 서버로부터 빈 HTML과 JavaScript 를 받고 사용자의 클라이언트에서 렌더링을 하는 방식이다. 
- 사용자의 **클라이언트**에서 초기 렌더링을 하기 때문에 **Client-Side Rendering** 이라고 불린다.
- 클라이언트에서 JavaScript를 통해 화면을 그리기 전까지 사용자는 빈 화면을 보게된다.
- 번들링 파일이 적거나 인터렉션이 많이 필요한 소규모 서비스에 적합하다.

#### 장점

- 서버에서 렌더링하지 않기 때문에 서버의 부담이 적다.
- 깜빡임 없는 자연스러운 화면 전환으로 좋은 유저 경험을 제공할 수 있다.

#### 단점

- 큰 번들링 파일로 초기 로딩이 오래 걸릴 수 있다.
- 사용자 디바이스의 성능에 따라 렌더링 영향을 받게 된다.
- 서버로부터 빈 HTML을 받기 때문에 SEO(검색엔진 최적화)에 취약할 수 있다.

<br/>

:::tip CSR에서는 SEO가 불가능한가요?
구글이나 네이버의 크롤링 봇은 CSR 렌더링을 사용하는 사이트의 SEO도 가능하긴 하지만 SSR에 비해 SEO가 좋지 않으며, 이외 검색엔진 크롤링 봇에서는 불가능한 경우도 있다. <br/>
React 기반의 웹 애플리케이션이라면 SSR과 SSG를 할 수 있도록 돕는 라이브러리를 사용하거나 react-helmet 등 라이브러리를 사용해서 메타 태그를 설정하는 방법이 있다.
:::

<br/>

## Pre-rendering

![PreRendering](/images/Web/CSR_SSR_SSG/PreRendering.png)

- 서버에서 미리 HTML 형태의 문서를 내려주고 HTML을 통해 화면을 그리는 방식이다.
- HTML을 통해 미리 화면을 그린 뒤 Click 등의 이벤트로 반응할 수 있도록 기본적인 인터렉션을 위한 JavaScript가 미니멀하게 HTML에 포함된다.
- Server Side Rendering ([**SSR**](#server-side-rendering-ssr))과 Static Site Generator ([**SSG**](#static-site-generator-ssg)) 모두 Pre-Rendering에 포함된다.

## Server Side Rendering (SSR)

- 서버에서 페이지의 HTML을 생성해서 전달해주는 방식
- 서버에서 생선된 HTML과 인터렉션에 필요한 JavaScript와 함께 필요한 데이터를 Json 형식으로 클라이언트에 보내주게 된다.
- 클라이언트에서는 전달받은 HTML을 먼저 그리고 이후에 JavaScript를 통해서 동작을 붙이게 되므로 초기에 그려진 페이지는 non-interactive 하게 된다. 
- Hydration 을 통해 동적인 웹사이트를 렌더링 한다.

<br/>

:::tip Hydration
초기에 렌더링한 HTML에 서버로부터 받은 JavaScript를 통해 이벤트 핸들러를 붙여 동적인 웹사이트로 만드는 과정
:::

<br/>

### 장점

- 비교적 작은 번들링 파일로 초기 로딩이 빠르다.
- HTML이 서버로부터 내려오기 때문에 SEO 친화적이다.
- 사용자 디바이스에 상관없이 비교적 일정한 퍼포먼스를 제공한다.

### 단점

- 서버에 부담이 생기거나 비용이 발생할 수 있다.
- Serverless 서비스가 불가능하다.

## Static Site Generator (SSG)

- 서버에서 페이지의 HTML을 생성해서 전달해주는 방식이나 런타임 중에는 서버 작업이 없음.
- 웹이 빌드될 때 정적인 Content가 생성되어 서버에 저장된다.
- 요청이 오면 서버에 저장된 HTML이 재사용된다.
- 컨텐츠가 변경될 일이 거의 없는 블로그와 같은 정적인 서비스에 적합하다.

### 장점

- 빌드 타임에 HTML이 생성되기 때문에 초기 렌더와 인터렉션이 모두 빠르다. (CSR과 SSR의 장점 소화)
- 서버로부터 HTML을 받기 때문에 SEO에 친화적이다.

### 단점

- 컨텐츠가 변경될 때마다 빌드 작업이 이루어져야 하므로 빌드의 중요도가 높다.

---

### 참고하면 좋을 자료

[Youtube 드림코딩 - 서버사이드 렌더링](https://youtu.be/iZ9csAfU5Os) <br/>
[Youtube 우아한Tech - 신세한탄의 CSR&SSR](https://youtu.be/YuqB8D6eCKE)