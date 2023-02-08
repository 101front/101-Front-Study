# SEO(Search Engine Optimization)

SEO(Search Engine Optimization) `검색엔진 최적화`에 대해서 알아보자!

## SEO 기본 개념

- SEO(Search Engine Optimization), 용어 그대로 검색 엔진 최적화를 위해 사용됩니다.
- 유저들은 검색엔진(구글/네이버 등)을 열고 특정 키워드를 입력해 검색합니다. 
- 검색엔진 결과 페이지에서 웹사이트의 상위 노출을 시키는 작업이 SEO입니다. 
- 검색 상위에 등록되는 것은 서비스의 노출에 직결되고, 이는 서비스의 매출에 영향을 준다.
- 검색 된 첫페이지의 검색이탈율은 90%가 넘고, 다른 페이지로는 이동하지 않습니다. 1페이지의 5위까지 나오는 것이 바람직합니다.

## 최적화를 위한 방법

- 태그의 종류를 신경쓰자!
  - html 태그
    - title, h1 : 노출 제목을 결정하는 중요한 요소
    - <img width="619" alt="image" src="https://user-images.githubusercontent.com/105266104/217542189-80e3f346-6c3a-4f4d-85a5-34b5095d10ec.png">
  - meta 태그
    - https://about.meta.com/ko/ 의 meta 태그들
    - 구글 검색 결과 검색어 하단에 description 이 나와있음
    - <img width="595" alt="image" src="https://user-images.githubusercontent.com/105266104/216832549-e883ce3b-3d6d-4b2a-bf5d-d16b0581d46f.png">
    - <img width="688" alt="image" src="https://user-images.githubusercontent.com/105266104/216832614-ab641ed6-a0ba-49b0-b98b-3d519168c48f.png">
  - img 에 대한 설명을 넣어주면 SEO 에 도움이 된다
  - meta 태그의 title 
  - h 태그를 적절하게 잘 활용
- 크롤링 관련 설정
  - robots.txt 에 크롤링 범위 설정하기
  - sitemap 제작하고 검색 엔진에 제출
- title 에 게시되는 내용의 순서가 SEO 에 영향을 미침
  - ex) title 의 단어 순서가 바뀌어도 검색 순위가 바뀐다. 첫 단어가 검색량이 많으면 SEO 에 좋은 영향을 준다.
  - <img width="903" alt="image" src="https://user-images.githubusercontent.com/105266104/217543522-31cd406b-3719-4e1f-982c-cde2e00308b3.png">
  - <img width="888" alt="image" src="https://user-images.githubusercontent.com/105266104/217543548-96c4720e-c224-4e98-9d77-8e75a60a444d.png">
- 속도

## SEO Score

<img width="697" alt="image" src="https://user-images.githubusercontent.com/105266104/216833829-a50aa69c-e1cc-4bc8-bb91-ae07b3f0f9b7.png">

- 구글 서치 콘솔에서 Lighthouse 탭에 들어가면 SEO 점수를 체크할 수 있다.
- 구글이 직접 운영하는 오픈소스


| Category |	Desc |
| -- | -- |
| Performance |	로딩 속도 등 성능을 측정 |
| Progressive Web App |	PWA는 웹과 네이티브 앱이 잘 구성되었는지 체크. 3G 네트워크에서도 로딩 잘 되는지 등 |
| Best practices	| Best practices를 따라 개발되었는지 체크. 웹에 대한 표준 모범 사례를 따르고 있는지 확인. 콘솔 오류나 사용되지 않는 API, https 사용 여부 등 |
| Accessibility |	접근성 체크. 폰트 사이즈, 메뉴간 간격, <img> 태그 alt 속성 존재, <html> 태그 lang 속성 존재, 배경색과 전경색의 대비가 충분한지 등 | 
| SEO |	검색 엔진 수집 최적화 관련 측정 |

<img width="697" alt="image" src="https://user-images.githubusercontent.com/105266104/216833829-a50aa69c-e1cc-4bc8-bb91-ae07b3f0f9b7.png">
<img width="2048" alt="image" src="https://user-images.githubusercontent.com/105266104/216833779-1067b6a0-39f7-43be-9c27-7eb70fb0f4de.png">

- Meta Main Site

<img width="2046" alt="image" src="https://user-images.githubusercontent.com/105266104/216833889-998c7bcd-5079-4760-a451-86922eb4b983.png">

- 101 Front Study

<img width="2435" alt="image" src="https://user-images.githubusercontent.com/105266104/217508777-53089cfb-7e22-44a2-88bb-ca73e2700a54.png">

- Main Page

<img width="2389" alt="image" src="https://user-images.githubusercontent.com/105266104/217507784-097c787f-b1a0-4716-a16d-388331179069.png">

- PDP

## SEO on React

- React 는 SPA 형식의 CSR(Client Side Rendering)을 지원한다.
- CSR 은 SSR(Server Side Rendering)보다 챙겨야 할 것이 많다.

### CSR 의 문제점

- SSR 은 서버가 데이터 전송 시점에서 html 을 모두 그려서 주지만, CSR 은 클라이언트 js 에서 수행하기 때문에 없는 것으로 인식할 수 있는 경우가 많다.
- 검색 엔진에 따라 js 파일을 읽을 수 있는지 여부가 다르다(구글만 가능한 것으로 보임). 
  - js 파일을 읽을 수 있는 경우도 봇 할당량이 높아져서 비추천(확인 필요)
- ~~Meta 태그가 바뀌지 않는다~~ (class101 사이트 확인 결과 잘 바뀜)

### 해결 방법

#### Pre-Rendering

- Pre-Rendering은 서버에서 유저인지 or 검색 봇인지 판단
- 검색 봇에게는 검색 봇이 읽을 수 있도록 렌더링 된 페이지를 전달



---

***reference***

- https://smartsolar.tistory.com/entry/SPASingle-Page-Application-SEO-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%AC-by-%EB%B9%84%EA%B0%9C%EB%B0%9C%EC%9E%90
- https://velog.io/@dell_mond/Lighthouse-%EC%82%AC%EC%9A%A9%EB%B2%95
