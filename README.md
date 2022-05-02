# 식스샵 스토어프론트팀 백엔드 개발자 과제

<br>

## 🔨 기술 스택

|         Backend (API)         |         
| :---------------------------: | 
| ![Nestjs](https://img.shields.io/badge/nestjs-white?style=flat-square&logo=nestjs&color=E0234E) ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white) ![MySQL](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)

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
$ npm install
```

<br>

### 2.1 **도커 컴포즈로** 프로젝트 시작하기는 다음을 참고해주세요.

#### MongoDB와 서버 컨테이너를 생성합니다.
<br>

```
$ docker compose -f "docker-compose.yml" up -d --build                            
```
- 도커에서 sixshop api-server는 3001번 포트로 포워딩 됩니다.
- `http://localhost:3001/api/v1`로 요청보내주세요.

<br>

### 2.2 **`npm run start`를 활용하여** 프로젝트 시작하기는 다음을 참고해주세요.

#### 환경변수 설정을 위해, `.env.dev`파일을 생성합니다.
```
MONGO_URI=<연결할 MongoDB URI를 입력해주세요>
```
- 원하는 MongoDB로 연결할 수 있습니다.

<br>

#### 스크립트를 이용해, 서버를 띄웁니다.
```
$ npm run start                         
```
- 로컬에서 sixshop api-server는 3000번 포트로 포워딩 됩니다.
- `http://localhost:3000/api/v1`로 요청보내주세요.

<br>

## 🌸 아키텍쳐
### Server 아키텍쳐
![image](https://user-images.githubusercontent.com/66551410/166333083-fb8de423-169d-443e-83c1-32e838b285b7.png)

### CICD 아키텍쳐
![image](https://user-images.githubusercontent.com/66551410/152016992-cff6b052-35d7-416e-868c-b2702a3ef692.png)

### MongoDB ERD
![image](https://user-images.githubusercontent.com/66551410/166337715-8fc4d9f4-69b9-497e-923c-347ec0ff7f1f.png)


