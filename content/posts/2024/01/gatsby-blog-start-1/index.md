---
title: 개츠비(Gatsby) 블로그 만들기 1 - 기본 세팅
createdAt: 2024-01-15
editedAt: 2024-01-15
---

[개츠비(Gatsby)](https://www.gatsbyjs.com/)로 블로그 만드는 과정을 제가 경험한 내용으로 설명드릴게요.

개츠비를 기반으로 블로그를 처음부터 하나씩 세팅하기에는 까다로워요. 특히 저처럼 이해도가 전혀 없는 상태라면, 시작조차 못할 수 있어요.
그래서 저는 개츠비에서 공식적으로 제공해 주는 [gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog)를 이용해서 세팅을 해주도록 할게요.

[깃허브(github)에서 gatsby-starter-blog 설치](https://github.com/gatsbyjs/gatsby-starter-blog)하기 전에 Node.js와 gatsby-cli를 설치해야 해요.   
저는 윈도우(windows)가 설치되어 있는 컴퓨터가 없기 때문에 macOS를 기준으로 설명드릴게요.

Node.js를 설치하기 전에 macOS에서 필수라고 볼 수 있는 패키지 관리자 [Homebrew](https://brew.sh/ko/)가 설치되어 있어야 해요.   
(설치가 안 되어 있다면 1번부터 따라 하고, 되어 있다면 2번부터 따라 하면 돼요.)

**1. Homebrew 설치**   
터미널(terminal)을 실행하여 아래 명령어를 입력해 주세요.

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
$ xcode-select --install
```
![[1] Homebrew 설치](./images/homebrew-install.png)

**2. Node.js 설치**   
Homebrew 설치가 완료되었다면, 터미널에서 아래 명령어를 참고하여 Node.js를 설치해 주세요.

```bash
$ brew install node
```
![[2] Node.js 설치](./images/node-install.png)

**3. gatsby-cli 설치**   
Node.js 설치가 완료되었으면, 터미널에서 아래 명령어를 참고하여 gatsby-cli를 설치해 주세요.

```bash
$ npm install -g gatsby-cli
```
![[3] gatsby-cli 설치](./images/gatsby-cli-install.png)

**4. gatsby-starter-blog 설치**   
gatsby-cli까지 설치가 완료되었으면, 아래 명령어를 참고하여 gatsby-starter-blog 프로젝트를 설치할게요.
`cd` 명령어로 본인이 설치하고 싶은 디렉터리 위치로 이동하고, 아래 명령어에서 **my-blog-starter** 위치에 본인이 하고 싶은 프로젝트 이름을 작성해 주세요.
저는 설명을 위해서 공식 문서 예시를 그대로 진행할게요.

```bash
$ cd ~/Downloads/
$ gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
```
![[4] gatsby-starter-blog 설치](./images/gatsby-starter-blog-install.png)

**5. gatsby-starter-blog 실행**   
gatsby-starter-blog 설치가 완료되었으면 실행해 보도록 할게요.
Visual Studio Code 또는 웹스톰(webstorm) 도구(tool)로 설치한 gatsby-starter-blog 프로젝트를 열어주세요.
저는 웹스톰으로 할게요. 웹스톰을 실행하고 우측 상단에 Open 버튼을 클릭해서 프로젝트를 열어주세요.

![[5] 웹스톰에서 gatsby-starter-blog 프로젝트 열기](./images/webstorm-blog-open.png)

gatsby-starter-blog 프로젝트를 열었으면, 아래 이미지처럼 package.json 파일을 열고 44번 라인의 `gatsby develop`을 실행해주세요.

![[5-1] 웹스톰에서 gatsby-starter-blog 실행](./images/gatsby-develop-run.png)

또는 터미널에서 위에서 설치한 프로젝트 위치로 이동 후 gatsby 명령어를 실행해 주세요.

```bash
$ cd ~/Downloads/my-blog-starter/
$ gatsby develop
```
![[5-2] 터미널에서 gatsby-starter-blog 실행](./images/gatsby-develop-command.png)

**6. 브라우저에서 블로그 접속**   
크롬(chrome), 사파리(safari) 등 브라우저를 실행하고, 주소(url) 창에 `http://localhost:8000`를 입력해서 접속해 주세요.

![[6] 실행한 gatsby-starter-blog 프로젝트를 브라우저에서 접속](./images/gatsby-blog-url.png)

개츠비 블로그 기본적인 세팅을 완료했어요!   
다음 포스트에서 **테일윈드 CSS(tailwind CSS)를 적용**하도록 할게요.