// Write 객체 생성 
var Write = {
    // Header Html write method 
    Header:function() {
        document.write('<!--Top Header--><header><div class="top-header"><div class="inner"><div class="inner-left"><a href="https://gimhaesimin.netlify.app/worship/worship-guide">예배안내</a><a href="https://gimhaesimin.netlify.app/church/map">오시는 길</a><a href="https://youtube.com/@coh.s?si=zNhjSBaVsbcJDfhj" class="youtube" target="_blank" title="시민교회 유튜브">유튜브</a></div><div class="inner-right"><a href="#">로그인</a><a href="#">회원가입</a></div></div></div></header><!--Header Navigation--><div class="headernav"><div class="title"><a href="https://gimhaesimin.netlify.app/index.html"><img src="img/logo_header.svg"></a></div><div class="navbar"><div class="dropdown service"><button class="dropbtn">예배</button><div class="dropdown_content"><a href="#"> 라이브 </a><a href="https://gimhaesimin.netlify.app/worship/worship-guide"> 예배안내 </a></div></div><div class="dropdown strive"><button class="dropbtn">성장</button><div class="dropdown_content"><a href="#"> ㅇㅅㅇ </a><a href="#"> ㅎㅅㅎ </a><a href="#"> ㅋㅅㅋ </a></div></div><div class="dropdown info"><button class="dropbtn">자료</button><div class="dropdown_content"><a href="#"> 설교 원고 </a></div></div><div class="dropdown communication"><button class="dropbtn">소통</button><div class="dropdown_content"><a href="#"> 커뮤니티 </a></div></div><div class="dropdown church"><button class="dropbtn">교회</button><div class="dropdown_content"><a href="#"> 신념 </a><a href="https://gimhaesimin.netlify.app/church/map"> 오시는 길 </a></div></div><div class="dropdown education"><button class="dropbtn">교육</button><div class="dropdown_content"><a href="#"> 중고등부 </a></div></div></div></div>');
    },
    // Footer Html write method 
    Footer:function() {
        document.write('<footer><div class="container"><div class="footA"><h2>김해시민교회</h2><p>주소: 경상남도 김해시 장유로 190 부영프라자 504호<br>연락처: 055-323-0691<br><a href="https://gimhaesimin.netlify.app/">https://gimhaesimin.netlify.app/</a></p><nav class="footD"><h3>SNS</h3><ul><li><a href="https://youtube.com/@coh.s?si=zNhjSBaVsbcJDfhj" target="_blank" title="youtube"><img src="img/youtube.svg"></a></li><li><a href="#" target="_blank" title="blog"><img src="img/blog.svg"></a></li><li><a href="#" target="_blank" title="instagram"><img src="img/instagram.svg"></a></li></ul></nav></div><div class="footB"><div><h3>ABOUT</h3><ul><li><a href="#">설립</a></li><li><a href="#">주소</a></li><li><a href="#">지도</a></li><li><a href="#">스태프</a></li></ul></div><div><h3>SUPPORT</h3><ul><li><a href="#">다운로드</a></li><li><a href="#">메뉴얼</a></li><li><a href="#">자주 묻는 질문</a></li><li><a href="#">문의</a></li></ul></div><div><h3>CONTENTS</h3><ul><li><a href="#">공지사항</a></li><li><a href="#">비즈니스</a></li><li><a href="#">프로필</a></li><li><a href="#">개발자</a></li><li><a href="#">블로그</a></li></ul></div></div></div><div class="footC">ⓒ KL corp. All rights reserved.</div></footer>');
    }
}