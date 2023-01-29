# Virtual DOM

React, Vue.js 등에서 사용하고 있는 Virtual DOM에 대해 알아본다.

## DOM (Document Object Model)

DOM이란 웹 페이지에 있는 HTML 요소들을 구조적으로 표현한 것이다.

<div align="center">

![DOM](/images/Web/Virtual_DOM/DOM.gif)_DOM_

</div>

DOM은 애플리케이션의 UI를 나타내며 트리 구조로 표현되는데, HTML이나 XML로 작성 된 문서들을 JavaScript를 통해 조작 할 수 있도록 사용하는 모델이다.

위와 같은 형태로 이루어져있기 때문에 `document.getElementByTagName` 와 같은 코드를 사용해서 HTML 태그를 동작할 수 있다.

### 문제점

DOM은 트리 구조로 이루어져 있어 이해하기 쉽지만 노드의 수가 많아질 수록 속도가 느려진다. 또한 페이지에 변화가 있을 때 마다 DOM은 새로 업데이트 되어야 하고, css가 변화하고 레이아웃을 다시 계산해야 한다면 컴퓨터에게 비싼 작업이 되며 성능에 영향을 끼칠 수 있다.

![critical render path](/images/Web/Virtual_DOM/critical-render-path.png)_브라우저 렌더링 방식 (CRP)_

`document.getElementByTagName` 와 같은 방식으로 DOM을 직접 조작한다면 DOM 트리가 바뀔 때마다 렌더 트리가 실시간으로 갱신되는데, 이는 10가지 수정사항이 생긴다면 새로운 렌더 트리가 10번 수정되며 만들어진다는 의미이다.

## Virtual DOM (가상 DOM)

Virtual DOM이란 DOM을 가볍게 만든 JavaScript 표현이며 React, vue.js, elm 과 같은 웹 프레임워크에서 사용한다. 가상적으로 UI를 만들어 메모리에 저장해두고, 변경이 생겼을 때 실제 DOM과 비교해서 변경된 부분만 새롭게 렌더하는 방식이다.

![virtual-dom-rerender.webp](/images/Web/Virtual_DOM/virtual-dom-rerender.webp)_Virtual DOM diffing process_

```JSON
1. 데이터가 업데이트 되었을 때 전체 UI가 새로운 Virtual DOM으로 만들어진다.
2. 이전 DOM과 새로운 Virtual DOM의 차이가 계산된다.
3. 계산이 끝난 후, DOM은 차이가 있는 부분만 새롭게 렌더한다.
```

DOM처럼 실제로 스크린에 렌더하기 위해 사용하는 것이 아니기 때문에 DOM의 문제점이였던 무거운 업데이트 시간에 비해 상대적으로 렌더를 수행한다.

Virtual DOM과 실제 DOM은 O(n)의 시간복잡도를 가진 *diffing algorithm*을 사용한다. React 공식문서에는 해당 과정을 [Reconciliation](https://ko.reactjs.org/docs/reconciliation.html)이라고 소개하는데, 어떻게 비교가 이루어지는지 관심이 있다면 확인해보자.
