# GraphQL이란

개발자들은 Server API를 사용해서 클라이언트와 서버의 통신을 구현한다. Server API를 개발하는 방법 중 가장 많이 사용되는 방식은 `REST`와 `GraphQL`이다.

GraphQL이란 무엇이며 REST와는 어떤 차이점이 있는지 알아본다.

<br />

## GraphQL?

GraphQL은 Server API를 구성하기 위해 Facebook에서 만든 쿼리 언어이다.

<br/>

#### 쿼리 언어 (Query Language)

쿼리 언어는 정보를 얻기 위해 보내는 질의문(Query)를 만들기 위해 사용되는 컴퓨터 언어이다. 가장 잘 알려져있는 예시로는 데이터베이스 시스템에 저장된 데이터를 가져오기 위해 사용하는 `SQL`이 있다.

> **SELECT user_id,username,age FROM users;** <br/>
> (SQL에서는 위와 같은 쿼리를 통해 데이터를 불러온다)

<br/>

#### GraphQL (Graph Query Language)

SQL이 데이터베이스 시스템으로부터 데이터를 가져오는 목적을 가진다면, **GraphQL은 클라이언트가 데이터를 서버로부터 가져오는 것을 목적**으로 한다.

```graphql
{
	user {
		user_id
		username
		age
	}
}
```

GraphQL도 위와 같은 쿼리를 통해 서버로부터 데이터를 가져온다.

<br />

## GraphQL vs REST

GraphQL은 RESTful API가 이미 존재하고 많이 사용되던 2012년 만들어졌다. GraphQL은 어떤 이유에서 만들어졌고 RESTful과는 어떤 차이가 있을까?

GraphQL이 REST와 비교해서 가지는 차이점은 크게 다음과 같다.

1. GraphQL API는 보통 하나의 엔드포인트를 가진다.
2. GraphQL API는 요청할 때 사용하는 쿼리에 따라 다른 응답을 받을 수 있다.


### 하나의 엔드포인트

REST API는 보통 여러 엔드포인트를 가지며 각각의 엔드포인트가 동일한 응답을 반환한다. 하지만 GraphQL은 보통 **하나의 엔드포인트**만을 사용하며 요청하는 쿼리에 따라 다른 응답을 반환하는 방식이다.

학교의 반, 학생의 데이터를 받아오는 예시로 둘의 차이점을 확인해보자.

```
REST API
→ example.com/class
→ example.com/class/(반 index)
→ example.com/class/(반 index)/students
→ example.com/class/(반 index)/students/(학생 index)

GraphQL
→ example.com
    (하나의 엔드포인트에 다른 쿼리를 사용해 요청)
```

REST API의 경우 반에 속해있는 데이터를 가져오는데에 응답마다 다양한 엔드포인트를 가지게 된다. 하지만 GraphQL은 하나의 엔드포인트 (Root Endpoint)에 다른 쿼리로 요청함으로써 다른 응답을 받을 수 있다.

엔드포인트가 많아질 경우 관리하기 힘들 뿐더러, 많은 엔드포인트의 노출을 막기위해 추가적인 처리가 필요 할 수 있다.

<br />

### 원하는 응답 값만 받을 수 있다.

엔드포인트에 따라 정해진 응답 값만 받아올 수 있는 REST API와 달리 GraphQL은 **쿼리 작성을 통해 필요한 데이터만 골라 받아올 수 있다.**

스타워즈 인물에 대한 정보를 받아올 수 있는 swapi를 통해 차이점을 알아본다.

<br />

**REST API 요청**

```
GET, https://swapi.dev/api/people/1
```

**결과**

```json
{
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "http://swapi.dev/api/planets/1/",
	"films": ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/"],
	"species": [],
	"vehicles": ["http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/"],
	"starships": ["http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/"],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "http://swapi.dev/api/people/1/"
}
```

REST API를 통해서 인물의 정보를 받아오면 필요한 정보 이외에도 너무나 많은 정보까지 함께 받아야 한다. 여기서 `이름`,`키`,`몸무게`의 데이터만 필요하다고 할 때 GraphQL API를 사용하면 다음과 같이 요청 할 수 있다.

<br />

** GraphQL 요청**

```graphql
query {
	person(personID: 1) {
		name
		height
		mass
	}
}
```

**결과**

```json
{
	"data": {
		"person": {
			"name": "Luke Skywalker",
			"height": 172,
			"mass": 77
		}
	}
}
```

<br />

REST API로는 3개의 데이터를 가져오기 위해 13개의 불필요한 데이터까지 함께 가져와야 했지만, GraphQL은 클라이언트에서 필요한대로 쿼리를 작성해 원하는 데이터만을 가져올 수 있다.


### GraphQL의 장단점

이러한 특징들로 GraphQL이 REST API와 비교해서 가지는 장점은 다음과 같이 정리 할 수 있다.

<br />

#### 1. HTTP 요청 횟수를 줄일 수 있다

RESTful의 경우 필요한 리소스 별로 요청 해야하고, 필요한 데이터들이 부분적으로 나눠서 개발되어 있다면 그만큼 요청 횟수가 늘어난다. 하지만 GraphQL은 원하는 정보를 하나의 쿼리에 모두 담아 요청 할 수 있다.

#### 2. HTTP 응답 사이즈를 줄일 수 있다.

Restful의 경우 응답의 형태가 정해져있기 때문에 필요한 정보만 부분적으로 요청하는 것이 힘들고, 자연스럽게 데이터의 사이즈가 클 수 밖에 없다.

Facebook이 GraphQL을 개발한 초기 이유 중 하나는 모바일 사용의 증가라고 한다. GraphQL을 사용함으로써 데이터 사이즈를 최소화하여 모바일 환경의 부담을 줄일 수 있다.

#### 3. 프론트엔드와 백엔드 개발자의 부담을 덜 수 있다.

Restful API를 사용한다면 프론트엔드 개발자는 API의 request/response 형식에 의존하게 된다. 따라서 새로운 엔드포인트를 효율적이게 개발하기 위해서는 프론트엔드와 백엔드 개발자의 커뮤니케이션이 강제되는 경우가 많았다.

하지만 GraphQL은 request/response 의존도가 많이 없기 때문에, 개발자들의 API 개발 부담을 덜 수 있다.

<br />

그렇다면 GraphQL은 모든 RESTful 서비스를 대체 할 수 있을까? GraphQL에도 단점이 존재한다.

**1. 고정된 요청과 응답만 필요할 때에는 query로 인해 요청의 크기가 Restful보다 커질 수 있다.**

**2. 캐싱이 REST보다 복잡하다.**

**3. 파일 업로드 구현 방법이 정해져있지 않아 직접 구현해야 한다.**

#### 결론

REST가 가지는 한계 때문에 개발된 GraphQL이지만, GraphQL이 완벽하게 REST를 대체 하기는 힘들 수 있다.

따라서 GraphQL과 REST의 **장단점을 파악해 서비스에 맞는 방식을 고르는 것이 중요**하다.
