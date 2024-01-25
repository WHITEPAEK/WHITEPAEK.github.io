---
title: 개츠비(Gatsby) 블로그 만들기 6 - 사용자 지정 도메인 적용
createdAt: 2024-01-25T00:22:00.000Z
editedAt: 2024-01-25T00:22:00.000Z
---

- [개츠비(Gatsby) 블로그 만들기 1 - 기본 세팅](https://whitepaek.com/posts/2024/01/gatsby-blog-start-1/)
- [개츠비(Gatsby) 블로그 만들기 2 - Tailwind CSS 적용](https://whitepaek.com/posts/2024/01/gatsby-blog-start-2/)
- [개츠비(Gatsby) 블로그 만들기 3 - 페이징(Pagination) 적용](https://whitepaek.com/posts/2024/01/gatsby-blog-start-3/)
- [개츠비(Gatsby) 블로그 만들기 4 - 댓글(giscus) 적용](https://whitepaek.com/posts/2024/01/gatsby-blog-start-4/)
- [개츠비(Gatsby) 블로그 만들기 5 - 블로그(GitHub Pages) 배포](https://whitepaek.com/posts/2024/01/gatsby-blog-start-5/)
- **개츠비(Gatsby) 블로그 만들기 6 - 사용자 지정 도메인 적용**

[이전 포스트](http://localhost:8000/posts/2024/01/gatsby-blog-start-5/)에서 GitHub Pages에 블로그 호스팅을 완료했어요.   
GitHub Pages에서 기본으로 제공하는 **${username}.github.io** 형태의 주소가 있지만, 기본 도메인 말고 개인 도메인을 구매하여 적용하고 싶으신 분도 있을 거예요.
이번 포스트에서는 개인 도메인 즉, 사용자 지정 도메인을 GitHub Pages에 적용하는 방법을 설명할게요.

저는 가비아(gabia)에서 도메인을 구입했기 때문에 가비아를 기준으로 설정하는 방법을 설명드릴게요.   
꼭 가비아가 아니더라도 설정하는 방법은 대부분 비슷할 거예요.

[가비아](https://domain.gabia.com/) 사이트에 접속해서 **My가비아 > 서비스 관리**로 이동하여 본인이 구매한 도메인의 **관리** 버튼을 클릭해 주세요.
![[1] 가비아 사이트 접속](./images/gibia-service.png)

**DNS 정보 > DNS 관리** 버튼을 클릭해서 이동해 주세요.
![[2] DNS 관리](./images/dns-info.png)

설정하고자 하는 도메인의 **설정** 버튼을 클릭해 주세요.
![[3] DNS 설정](./images/dns-setting.png)

**레코드 수정** 버튼을 클릭해 주세요.
![[4] 레코드 수정](./images/record-setting.png)

**레코드 추가** 버튼을 클릭하여 아래 5개의 레코드 정보를 참고하여 입력 후 저장해주세요.  
CNAME 레코드는 본인이 구매한 도메인을 넣고, 마지막에 `.` 기호를 넣어줘야 해요.   
(참고로 A 레코드 정보는 [공식 문서](https://docs.github.com/ko/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)에서 가이드 준 IP 주소예요.)

|타입|호스트|값/위치|TTL|
|---|---|---|---|
|A|@|185.199.108.153|3600|
|A|@|185.199.109.153|3600|
|A|@|185.199.110.153|3600|
|A|@|185.199.111.153|3600|
|CNAME|www|${domain}.|3600|

![[5] 레코드 추가](./images/add-record.png)

가비아 사이트에서 설정은 모두 끝났어요. 이제 깃허브 레포지토리로 접속 후, **Settings > Pages** 메뉴로 이동해 주세요.   
그리고 Custom domain 항목에 본인이 구매한 도메인을 입력하고 Save 버튼을 클릭해 주세요. 또한 **Enforce HTTPS**도 클릭해야 해요.
잠시 기다려서 "DNS check successful" 문구가 나온 후에 **Visit site** 버튼을 클릭해서 본인 블로그에 접속해 주세요.
![[6] 커스텀 도메인 등록](./images/regist-custom-domain.png)

본인이 구매하여 등록한 도메인 주소로 블로그 접속이 되는 걸 볼 수 있어요.
![[7] 본인의 도메인 주소로 블로그 접속](./images/custome-domain-blog.png)

추가로 개츠비 프로젝트를 열어서 **static** 디렉터리 하위에 **CNAME** 파일을 생성하고, 도메인을 작성해 주세요.   
프로젝트에 CNAME 파일이 설정되어 있어야 프로젝트를 빌드하고 배포할 때 Custom domain 설정을 유지할 수 있어요.   
만약 프로젝트에 CNAME 파일을 설정하지 않는다면, 배포할 때마다 [6]번 이미지의 설정을 매번 반복해야 하는 번거로움이 생겨요.
![[8] ](./images/add-cname.png)

이상으로 사용지 지정 도메인 설정이 끝났어요!

제가 구상했던 "개츠비(Gatsby) 블로그 만들기" 포스트 시리즈는 전부 끝났어요.   
포스팅했던 설정 외에도 **"메타 태그(meta tag), 사이트맵(sitemap), robots.txt 등" 검색 엔진 최적화 설정과 웹 마스터 도구 설정**이 있어요.
또한 **방문자 접속 분석 도구인 구글 태그 매니저(GTM), 구글 애널리틱스(GA4) 설정**도 있고요.
해당 설정들에 대한 포스트 작성은 당장 계획에 없어서 키워드만 말씀드려요. 해당 키워드를 기반으로 문서를 보면서 설정을 진행해 보세요.
나중에 해당 설정에 대한 기록이 필요하다고 판단되면 포스트를 작성하도록 할게요. 지금까지 개츠비 블로그를 만드느라 수고하셨어요!

