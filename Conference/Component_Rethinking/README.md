# [FeConf 2021] 컴포넌트, 다시 생각하기

<br/>

<div align="center">

[<img src="http://img.youtube.com/vi/HYgKBvLr49c/0.jpg">](https://youtu.be/HYgKBvLr49c)

</div>

### React 컴포넌트의 의존성

케이크에 밀가루, 설탕, 계란이 항상 필요하듯 React 컴포넌트를 구성할 때에 꼭 필요한 요소들이 있다.

```JSON
1. 스타일: 컴포넌트의 CSS 스타일
2. 로직: UI를 동작하거나 사이드 이펙트를 주기 위한 커스텀 로직
3. 전역상태: UI를 표현하기 위해 유저의 액션을 통해 만들어진 상태
4. 리모트 데이터 스키마: API 서버에서 내려주는 데이터의 모양
```

생크림 케이크에 **딸기** 하나를 더 올리려면 그만큼의 **생크림**이 필요한 것처럼,
React 컴포넌트를 수정하거나 추가할 때는 다른 컴포넌트들의 요소에도 영향을 끼치게 된다.

<br/>

예를 들어 댓글 페이지가 `CommentPage - CommentList - CommentItem` 형태로 구현 되어있고, CommentItem을 구성하는 리모트 데이터 스키마가

```json
{
    user: string
    content: string
}
```

와 같다고 했을 때, 리모트 데이터 스키마에 좋아요 개수를 추가한다고 한다면

**1.** 데이터를 받아오는 CommentPage를 수정한다. <br/>
**2.** CommentPage - CommentList - CommentItem 까지 데이터를 전달해주는 props를 수정한다. <br/>
**3.** CommentItem의 렌더링 부분을 수정한다. <br/>

와 같이 중간 컴포넌트들의 변화가 필연적이게 되고 이러한 경우 루트 컴포넌트인 CommentPage에 의존하게 된다.

### 어떻게 컴포넌트를 작성해야 할까?

그렇다면 React 컴포넌트들의 의존성을 고려해서 어떻게 컴포넌트를 작성해야 할까? 발표에서는 크게 네가지 방법을 소개한다.

#### 1. 함께 두기 (Co-locate)

컴포넌트의 수정이 필요할 때 파일들이 서로 멀어지게 되면 집중력이 분산되기 때문에 비슷한 성격을 띄는 경우 같은 파일 내에 두거나 같은 폴더내에 두는 것이 좋다.

우선 `전역 상태`는 다른 컴포넌트와 함께 사용하기 때문에 가까운 공간에 파일을 모으기 힘들다.

하지만 `스타일` 의 경우는 컴포넌트 내부에 CSS를 정의하는 css-in-js 방식으로 함께 모을 수 있고 `로직`은 훅 형태로 파일 내부에 정의할 수 있다. 
이 때에 하나의 파일에 스타일과 로직을 정의할 경우 파일이 길어지는 문제가 생길 수 있는데 그렇다면 같은 폴더 내부 다른 파일로 구성할 수 있다.

```js
// Component.js

const Component = () => {
    const {...} = useHook();

    return <Container></Container>
}

// 로직
function useHook(){
    // ...
}

// 스타일 
const Container = styled.div`
    /* ... */
`
```

<br/>

#### 2. 데이터를 ID 기반으로 정리하기 (Normalization)

위에서 들었던 예시에서는 루트 컴포넌트에서부터 자식 컴포넌트까지 props를 통해 데이터 스키마를 받게 되었다. 그럴 경우 루트 컴포넌트와 강한 의존성을 가지기 때문에 `리모트 데이터 스키마`를 ID 기반으로 정리 해야한다.

이 때 모델명과 같은 추가 데이터 없이 ID 값만 가지고 특정 데이터를 식별할 수 있도록 GOI(Global Object Identification) 개념을 적용하면 좋은데 자세한 내용은 [링크](https://graphql.org/learn/global-object-identification/)를 참조하자.

<br/>

#### 3. 이름 짓기 (Naming)

React를 구성하는 요소들은 모두 props와 hook 형태로 주고 받아진다. 그렇기 때문에 props와 hook의 이름은 요소들의 의존성을 그대로 드러내는 이름이어야 한다. 

CommentItem의 Props를 예시로 들어본다.

```js
interface CommentItemProps{
    imageUrl: string
    name: string
    nickName: string
    content: string
    follower: number
}
```

얼핏보면 직관적인 이름을 하고 있지만 Props들의 네이밍을 통해 의존성을 파악할 수 없다

```js
interface CommentItemProps{
    user: User
}

interface User{
    name: string
    nickname: string
    followerCount: number
    profile: Image
}

interface Image {
    url: string;
}
```

위와 같이 user를 구성하는 요소들과 Image를 구성하는 요소를 분리해두면 의존성을 파악하기 쉽다.

<br/>

#### 4. 재사용하기 (Reuse)

댓글을 구성하는 CommentItem와 비슷한 디자인으로 게시글을 구성하는 PostItem을 만들어야하는 경우가 있다.
댓글은 Comment 데이터 스키마를, 글은 Post 데이터 스키마를 참조할 때 같은 컴포넌트를 재사용하는 것이 좋을까?

컴포넌트는 참조하는 모델을 기준으로 작성하는 것이 좋다. 

다양항 컴포넌트는 각자의 방향대로 변화하지만 유저에게는 일관된 경험을 제공해야 하는데 보통의 유저들이 생각하는 일관적인 경험은 대부분 모델을 기반으로 하기에 변화의 방향 역시 모델에 따라 가야한다.

만약 CommentItem과 PostItem을 같은 컴포넌트로 사용하고 둘의 디자인이 다른 방향으로 발전된다면 해당 컴포넌트를 같이 사용하기 위해서 모델을 구분하거나 뷰를 분기해서 구성하는 등 쉽게 수정할 수 없게된다.

따라서 변화에 맞게 컴포넌트를 쉽게 수정하기 위해 **같은 모델**에 의존하는 컴포넌트는 **재사용**하고 **다른 모델**에 의존하는 컴포넌트는 **분리**하는 것이 좋다.