# 식스샵 스토어프론트팀 백엔드 개발자 과제

<br>

## 🔨 기술 스택

|         Backend (API)         |         
| :---------------------------: | 
| ![Nestjs](https://img.shields.io/badge/nestjs-white?style=flat-square&logo=nestjs&color=E0234E) ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)

<br>

## 🛠️ 개발 서버
http://3.34.45.57/api/v1

<br>

## 📖 API 문서
http://3.34.45.57/api/v1/docs/

<br>
 
## 🌱 시작하기
`node: 14.16.0`  
`npm: 6.14.11`

### 1. Clone 해주세요.
```
$ git clone https://github.com/hocaron/sixshop.git
$ cd sixshop
```

<br>


### 2. 개발환경 구성하기

#### 2.1 *Docker Compose로 NestJS, MongoDB 개발환경 구성하기* 는 다음을 참고해주세요.

#### 스크립트를 이용해, MongoDB와 서버 컨테이너를 생성합니다.

```
$ docker compose -f "docker-compose.yml" up -d --build                            
```
- 도커에서 sixshop api-server는 3001번 포트로 포워딩 됩니다.
- http://localhost:3001/api/v1 로 요청보내주세요.
- API 문서는 http://localhost:3001/api/v1/docs 에서 볼 수 있어요.

<br>

#### 2.2 *로컬에서 빌드하여, 개발환경 구성하기* 는 다음을 참고해주세요.

#### 환경변수 설정을 위해, 루트 디렉토리에 `.env.dev`파일을 생성합니다.
```
MONGO_URI=<연결할 MongoDB URI를 입력해주세요>
```
- 연결을 원하는 MongoDB URI를 입력해주세요.

#### 스크립트를 이용해, 패키지를 설치하고 서버를 띄웁니다.
```
$ npm install
$ npm run start                         
```
- 로컬에서 sixshop api-server는 3000번 포트로 포워딩 됩니다.
- http://localhost:3000/api/v1 로 요청보내주세요.
- API 문서는 http://localhost:3000/api/v1/docs 에서 볼 수 있어요.

<br>

## 🛕 아키텍쳐
### Server 아키텍쳐
![image](https://user-images.githubusercontent.com/66551410/166333083-fb8de423-169d-443e-83c1-32e838b285b7.png)

### CICD 아키텍쳐
![image](https://user-images.githubusercontent.com/66551410/152016992-cff6b052-35d7-416e-868c-b2702a3ef692.png)

### MongoDB 데이터 모델링
![image](https://user-images.githubusercontent.com/66551410/166450570-a9762a27-31e7-47f2-b833-9bf8cbecda28.png)

#### 요구사항
```
1. 각 상점마다 자신이 소유한 데이터를 확장시킬 수 있는 사용자 정의 필드 기능이 필요합니다.
2. 각 상점마다 원하는 모델(상품, 고객, 주문)의 사용자 정의 필드는 다를 수 있고, 상점은 사용자 정의 필드를 관리할 수 있어야 합니다.
```
#### 시나리오
1. 상점A의 경우 고객의 "전화번호", 주문시 "사용하는 기기의 종류" 추가로 입력하고 싶습니다.  
  1.1 사용자 정의 필드를 추가할 수 있는 `CustomField`컬렉션이 있습니다.    
  1.2 `CustomField`컬렉션에 "전화번호", "사용하는 기기의 종류" 에 대한 정보를 save 합니다.  
  1.3 상점 정보를 가지고 있는 `Store`컬렉션의 고객/주문 관련 사용자 정의 필드에 1.2에서 저장한 정보를 업데이트합니다.  
  1.4 해당 상점 정보 조회시, 상점에서 고객/주문마다 어떤 사용자 정의 필드를 추가로 받고 있는지 알 수 있습니다.  
  1.5 다른 정보 추가 및 삭제 시, 1.3에서 했던 동일한 방법으로 업데이트 하여 동작합니다.
  * 상점A가 상품에 사용자 정의 필드 추가하고 싶은 경우는, 상품 생성 또는 업데이트 시에 상품 관련 사용자 정의 필드를 입력합니다.
  
    API 요청 과정  
    1.2 `Post api/v1/customer-custom-field-values` 요청을 통해 사용자 정의 필드 추가  
    1.3 `Patch api/v1/stores/{id}` 요청을 통해 고객/주문 관련 사용자 정의 필드을 추가  
    1.4 `Get api/v1/stores/{id}` 요청을 통해 상점에서 고객/주문마다 어떤 사용자 정의 필드를 추가로 받고있는지 조회  
  
2. 상점A는 상품A에 "도서 발행일"을 추가로 입력하고 싶습니다.  
  2.1 `CustomField`컬렉션에 "도서 발행일" 에 대한 정보를 save 합니다.  
  2.2 상품A를 조회합니다.  
  2.3 상품A의 `productCustomFieldIds` 필드에 2.1에서 저장한 정보를 업데이트합니다.  
  
    API 요청 과정  
    2.1 `Post api/v1/customer-custom-field-values` 요청을 통해 사용자 정의 필드 추가  
    2.2 `Get api/v1/products/{id}` 요청을 통해 상품 조회  
    2.3 `Patch api/v1/products/{id}` 요청을 통해 상품 관련 사용자 정의 필드을 추가    
