---
title: 개츠비(Gatsby) 블로그 만들기 5 - 블로그(GitHub Pages) 배포
createdAt: 2024-01-25T00:19:00.000Z
editedAt: 2024-01-25T00:19:00.000Z
---
- [개츠비(Gatsby) 블로그 만들기 1 - 기본 세팅](https://whitepaek.com/posts/2024/01/gatsby-blog-start-1/)
- [개츠비(Gatsby) 블로그 만들기 2 - Tailwind CSS 적용](https://whitepaek.com/posts/2024/01/gatsby-blog-start-2/)
- [개츠비(Gatsby) 블로그 만들기 3 - 페이징(Pagination) 적용](https://whitepaek.com/posts/2024/01/gatsby-blog-start-3/)
- [개츠비(Gatsby) 블로그 만들기 4 - 댓글(giscus) 적용](https://whitepaek.com/posts/2024/01/gatsby-blog-start-4/)
- **개츠비(Gatsby) 블로그 만들기 5 - 블로그(GitHub Pages) 배포**
- [개츠비(Gatsby) 블로그 만들기 6 - 사용자 지정 도메인 적용](https://whitepaek.com/posts/2024/01/gatsby-blog-start-6/)

사람들이 본인이 만든 개츠비(gatsby) 블로그를 볼 수 있도록 GitHub에서 무료로 제공해 주는 웹 호스팅 서비스
[GitHub Pages](https://docs.github.com/en/pages/quickstart)를 이용하여 배포하도록 할게요.

## 1. GitHub Repository 설정
[개츠비(Gatsby) 블로그 만들기 4 - 댓글(giscus) 적용](http://localhost:8000/posts/2024/01/gatsby-blog-start-4/) 포스트에서
생성한 깃허브 레포지토리로 접속해서 레포지토리 URL를 복사해 주세요.
![[1-1] GitHub Repository 접속](./images/github-repo-url.png)

지금까지 개발한 개츠비 블로그 소스코드를 레포지토리에 푸시(push) 할게요.   
main 브랜치는 빌드 결과물을 배포하여 호스팅하는 브랜치로 사용할 거라, develop 브랜치를 생성해서 사용하도록 할게요.   
터미널을 실행하고, 프로젝트 디렉터리로 이동하여 아래 명령어를 순서대로 진행해 주세요.   
(기존에 커밋한 내역이 있다면, `git add`와 `git commit` 명령어는 생략해도 돼요.)

```bash
$ cd ~/Downloads/my-blog-starter/

# [1-1] 이미지에서 복사한 본인의 레포지토리 URL을 입력해주세요. 
$ git remote add origin https://github.com/XPORAGE/xporage.github.io.git
$ git branch -M develop
$ git add .
$ git commit -m "first commit"
$ git push -u origin develop
```
![[1-2] git 명령어 실행](./images/git-cli.png)

## 2. Git Push 접근 권한 문제
`git push` 명령어를 실행하고, 문제가 발생하지 않는다면 **3번 내용을 진행**하면 돼요.   
[2-1] 이미지처럼 접근 권한 문제가 발생하면 **[2-2] 이미지부터 진행**해 주세요.   
만약, `Username for 'https://github.com':` 처럼 로그인이 진행되는 경우에는 **[2-3] 이미지부터 진행**해 주세요.
![[2-1] git push 접근 권한(403) 문제 발생](./images/github-403.png)

macOS 기준으로 "키체인 접근" 앱을 실행하여 "github.com"을 삭제해 주세요.   
(Windows는 자격 증명 관리자에서 진행하면 될 거예요.)
![[2-2] 키체인 접근 앱에서 github.com 삭제](./images/keychain.png)

깃허브 레포지토리에서 우측 상단에 프로필 이미지를 클릭하여 **Settings** 메뉴로 이동해 주세요.
![[2-3] Settings 클릭](./images/profile-settings.png)

Settings 메뉴로 이동했으면 좌측 목록에서 **Developer settings** 메뉴를 클릭해 주세요.
![[2-4] Developer Settings 클릭](./images/developer-settings.png)

Tokens (classic) 메뉴로 이동 후, 우측 셀렉트 박스에 **Generate new token**을 클릭해 주세요.
![[2-5] generate new token 클릭](./images/generate-new-token.png)

**Note, Expiration, Scope**를 선택하여 토큰을 생성해 주세요.
![[2-6] Token 생성](./images/create-tokens.png)

생성된 토큰을 복사하여 보관해 주세요.   
토큰 정보는 최초 생성 시에만 제공해 주기 때문에 잘 보관해 주세요.
![[2-7] Token 생성](./images/github-repo-token.png)

터미널에서 `git push` 명령어를 다시 실행하고, **username**을 입력해 주고 **password**에는 복사한 토큰을 입력해 주세요.
```bash
$ cd ~/Downloads/my-blog-starter/
$ git push -u origin develop
```
![[2-8] git push 명령어 실행](./images/git-login-push.png)

깃허브 레포지토리 develop 브랜치에 소스코드가 정상적으로 푸시가 된 걸 볼 수 있어요.   
이제 개츠비 프로젝트에 GitHub Pages에 호스팅이 가능하도록 설정을 진행할게요.
![[2-9] GitHub Repository (develop 브랜치)](./images/github-develop-repo.png)

## 3. gh-pages 플러그인 적용
프로젝트에 gh-pages 플로그인 적용을 위해 터미널에서 프로젝트 디렉터리 위치로 이동 후, gh-pages 설치 명령어를 실행해 주세요.
```bash
$ cd ~/Downloads/my-blog-starter/
$ npm install gh-pages --dev
```
![[3-1] gh-pages install](./images/install-gh-pages.png)

개츠비 프로젝트를 열고, **package.json** 파일의 53번 라인에 아래 코드를 추가해 주세요.
```json
"deploy": "gatsby build && gh-pages -d public -b main"
```
![[3-2] package.json 파일에 코드 추가](./images/add-deploy.png)

**gatsby-config.js** 파일에서 siteMetadata에 존재하는 **siteUrl**을 본인의 GitHub Pages URL로 입력해 주세요.   
블로그를 호스팅하고 난 후, 해당 URL로 본인의 블로그에 접속할 수 있어요. URL 형태는 **https://${username}.github.io** 이에요.
![[3-3] gatsby-config.js 파일에 siteUrl 수정](./images/update-siteurl.png)

## 4. GitHub Pages 블로그 호스팅
블로그 호스팅을 위한 준비가 완료되었어요. 이제 블로그 호스팅을 진행할게요.   
터미널을 열고, 프로젝트 디렉터리 위치로 이동 후 아래 명령어를 실행해 주세요.
```bash
$ cd ~/Downloads/my-blog-starter/
$ npm run deploy
```
![[4-1] deploy 명령어 실행](./images/npm-run-deploy.png)

터미널에 **Published**가 나오면 블로그 배포는 완료된 거예요.
![[4-2] 블로그 배포 완료](./images/completed-deploy.png)

깃허브 레포지토리에서 **Settings > Pages**로 이동해주세요. 그리고 Branch를 main으로 선택하고 Save 해주세요.   
블로그 배포가 완료되고 일정 시간이 지나면 **Visit site** 버튼이 보일 거예요. 해당 버튼을 클릭해서 본인의 블로그에 접속이 되는지 확인해 주세요.
![[4-3] 호스팅한 블로그 접속](./images/visit-site.png)

웹 브라우저 주소창에 본인의 블로그 주소 **${username}.github.io**를 입력해서 접속이 잘 되면 GitHub Pages 블로그 호스팅이 완료된 거예요!
![[4-4] 블로그 호스팅 완료](./images/my-gatsby-blog-hosting.png)

이상으로 블로그 호스팅에 대한 포스트를 마치도록 할게요. 수고하셨어요!