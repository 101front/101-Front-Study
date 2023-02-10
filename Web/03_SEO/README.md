# SEO(Search Engine Optimization)

SEO(Search Engine Optimization) `검색엔진 최적화`에 대해서 알아보자!

## SEO 기본 개념

- SEO(Search Engine Optimization), 용어 그대로 검색 엔진 최적화를 위해 사용된다.
- 유저들은 검색엔진(구글/네이버 등)을 열고 특정 키워드를 입력해 검색한다. 
- 검색엔진 결과 페이지에서 웹사이트의 상위 노출을 시키는 작업이 SEO
- 검색 상위에 등록되는 것은 서비스의 노출에 직결되고, 이는 서비스의 매출에 영향을 준다.
- 검색 된 첫페이지의 검색이탈율은 90%가 넘고, 다른 페이지로는 이동하지 않습니다. 1페이지의 5위까지 나오는 것이 바람직하다.

## 최적화를 위한 방법

- 태그의 종류를 신경쓰자!
  - html 태그
    - title, h1 : 노출 제목을 결정하는 중요한 요소
    - <img width="619" alt="image" src="https://user-images.githubusercontent.com/105266104/217542189-80e3f346-6c3a-4f4d-85a5-34b5095d10ec.png">
  - meta 태그
    - https://about.meta.com/ko/ 의 meta 태그들
    - description : 구글 검색 결과 검색어 하단에 description 이 나와있음
    - <img width="595" alt="image" src="https://user-images.githubusercontent.com/105266104/216832549-e883ce3b-3d6d-4b2a-bf5d-d16b0581d46f.png">
    - <img width="688" alt="image" src="https://user-images.githubusercontent.com/105266104/216832614-ab641ed6-a0ba-49b0-b98b-3d519168c48f.png">
    - image : 카톡에 url 첨부했을 때, 나오는 이미지
  - img 에 대한 설명을 넣어주면 SEO 에 도움이 된다
  - meta 태그의 title 
  - h 태그를 적절하게 잘 활용
    - h1 이 2개 있는 경우에 meta 로 구글 검색어 노출이 되는 케이스 확인
- 크롤링 관련 설정
  - robots.txt 에 크롤링 범위 설정하기
  - sitemap 제작하고 검색 엔진에 제출
- title 에 게시되는 내용의 순서가 SEO 에 영향을 미침
  - ex) title 의 단어 순서가 바뀌어도 검색 순위가 바뀐다. 첫 단어가 검색량이 많으면 SEO 에 좋은 영향을 준다.
  - <img width="903" alt="image" src="https://user-images.githubusercontent.com/105266104/217543522-31cd406b-3719-4e1f-982c-cde2e00308b3.png">
  - <img width="888" alt="image" src="https://user-images.githubusercontent.com/105266104/217543548-96c4720e-c224-4e98-9d77-8e75a60a444d.png">
- 속도
  - 속도가 느리면 점수를 잘 받을 수 없다

## SEO Score - using Lighthouse

### What is Lighthouse?

<img width="697" alt="image" src="https://user-images.githubusercontent.com/105266104/216833829-a50aa69c-e1cc-4bc8-bb91-ae07b3f0f9b7.png">

- 구글 서치 콘솔에서 Lighthouse 탭에 들어가면 SEO 점수를 체크할 수 있다.
- 구글이 직접 운영하는 오픈소스

| Category |	Desc |
| -- | -- |
| Performance |	로딩 속도 등 성능을 측정 |
| Progressive Web App |	PWA는 웹과 네이티브 앱이 잘 구성되었는지 체크. 3G 네트워크에서도 로딩 잘 되는지 등 |
| Best practices	| Best practices를 따라 개발되었는지 체크. 웹에 대한 표준 모범 사례를 따르고 있는지 확인. 콘솔 오류나 사용되지 않는 API, https 사용 여부 등 |
| Accessibility |	접근성 체크. 폰트 사이즈, 메뉴간 간격, \<img\> 태그 alt 속성 존재, \<html\> 태그 lang 속성 존재, 배경색과 전경색의 대비가 충분한지 등 | 
| SEO |	검색 엔진 수집 최적화 관련 측정 |  


### 예시

<img width="697" alt="image" src="https://user-images.githubusercontent.com/105266104/216833829-a50aa69c-e1cc-4bc8-bb91-ae07b3f0f9b7.png">
  
- Meta Main Site
  
<img width="2048" alt="image" src="https://user-images.githubusercontent.com/105266104/216833779-1067b6a0-39f7-43be-9c27-7eb70fb0f4de.png">

- 101 Front Study

<img width="2046" alt="image" src="https://user-images.githubusercontent.com/105266104/216833889-998c7bcd-5079-4760-a451-86922eb4b983.png">

- Main Page

<img width="2435" alt="image" src="https://user-images.githubusercontent.com/105266104/217508777-53089cfb-7e22-44a2-88bb-ca73e2700a54.png">

- PDP
  - <img width="2389" alt="image" src="https://user-images.githubusercontent.com/105266104/217507784-097c787f-b1a0-4716-a16d-388331179069.png">
  - Performence
    - <img width="759" alt="image" src="https://user-images.githubusercontent.com/105266104/217554529-7e536221-b6d1-4b9e-bc8a-4f4382de0a97.png">
    - 실제 class101 PDP 값을 확인해보자. 각 항목의 개별 점수를 체크할 수 있다.
    - <img width="749" alt="image" src="https://user-images.githubusercontent.com/105266104/217554659-8e493939-aa30-4233-aac5-547a72225def.png">
    - 성능 개선할 수 있는 요소들을 보여준다.
  - Accessibility
    - <img width="757" alt="image" src="https://user-images.githubusercontent.com/105266104/217555538-e3857a35-021f-48ea-b58d-ba0baa325c37.png">
    - <img width="726" alt="image" src="https://user-images.githubusercontent.com/105266104/217556233-7bf1a289-b1b4-4221-ac77-62aa7127ee5e.png">
  - Best Practices
    - <img width="765" alt="image" src="https://user-images.githubusercontent.com/105266104/217558099-4e393e22-b448-4c39-8c6f-cca49f3fe320.png">
  - SEO
    - <img width="752" alt="image" src="https://user-images.githubusercontent.com/105266104/217556703-b66e8393-83a5-4ea6-b0d6-b389a6988cdd.png">
    - <img width="747" alt="image" src="https://user-images.githubusercontent.com/105266104/217557086-d88536dd-ed04-4b7a-95df-94635d58ebe9.png">
    - alt 속성으로 인한 점수 감점
  
  
## SEO on React

- React 는 SPA 형식의 CSR(Client Side Rendering)을 지원한다.
- CSR 은 SSR(Server Side Rendering)보다 챙겨야 할 것이 많다.

### CSR 의 문제점

- SSR 은 서버가 데이터 전송 시점에서 html 을 모두 그려서 주지만, CSR 은 클라이언트 js 에서 수행하기 때문에 없는 것으로 인식할 수 있는 경우가 많다.
- 검색 엔진에 따라 js 파일을 읽을 수 있는지 여부가 다르다(구글만 가능한 것으로 보임). 
  - js 파일을 읽을 수 있는 경우도 봇 할당량이 높아져서 비추천(확인 필요)
- ~~Meta 태그가 바뀌지 않는다~~ (class101 사이트 확인 결과 잘 바뀜)
- [SPA 에서 SEO 적용하기](https://mygumi.tistory.com/385) 참고해보기
  - 꽤나 많은 추가작업이 필요하다. 하기의 내용들이 잘 나와있다.
    - SPA 에서 크롤링이 잘 안되는 이유
    - react-helmet 사용 예시
- [React 검색 엔진 최적화(SEO)하기](https://starlight-j-h.tistory.com/107?category=1021682)
  - sitemap 을 직접 생성하는 간단한 예제
- [SPA에서 서버사이드랜더링 하지 않고 SEO 우회하기](https://daeguowl.tistory.com/187)
- [react에서 SEO](https://velog.io/@ouo_yoonk/react%EC%97%90%EC%84%9C-SEO)

### 해결 방법

#### Pre-Rendering

- Pre-Rendering은 서버에서 유저인지 or 검색 봇(크롤러)인지 판단
- 검색 봇(크롤러)가 읽을 수 있도록 렌더링 된 페이지를 전달
- 라이브러리 종류 : react-helmet, prerender-spa-plugin, prerender.io, puppeteer, rendertron

### SSR

- SSR 은 서버가 데이터 전송 시점에서 html 을 모두 그려서 주기 때문에 별도의 처리를 해줄 필요가 없다.
- 리액트에서는 next.js를 많이 사용.

### History API
  
- SPA 에서 주소가 바뀌지 않는 문제를 해결하기 위해 주소가 없는 페이지에 주소를 부여

---

***reference***

- https://smartsolar.tistory.com/entry/SPASingle-Page-Application-SEO-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%AC-by-%EB%B9%84%EA%B0%9C%EB%B0%9C%EC%9E%90
- https://velog.io/@dell_mond/Lighthouse-%EC%82%AC%EC%9A%A9%EB%B2%95
- https://mygumi.tistory.com/385
