// Write 객체 생성 
var Write = {
    // Sidebar html write method
    Sidebar: function() {
        document.write('<!-- sidebar --><input type="button" id="opacity" onclick="Show.Sidebar();" style="display:none"></div><div id="sidebar"><nav class="sidebar"><!-- Your sidebar content here --><div class="side_menu service">예배<ul><li><a href="https://gimhaesimin.netlify.app/service/live"> 라이브 </a></li><li><a href="https://gimhaesimin.netlify.app/service/service"> 설교 </a></li><li><a href="https://gimhaesimin.netlify.app/service/worship-guide"> 예배안내 </a></li></ul></div><div class="side_menu strive">성장<ul><li><a href="https://gimhaesimin.netlify.app/strive/supported_church"> 함께하는 교회 </a></li></ul></div><div class="side_menu info">자료<ul><li><a href="https://gimhaesimin.netlify.app/info/QT"> QT </a></li><li><a href="https://gimhaesimin.netlify.app/info/gallery"> 갤러리 </a></li><li><a href="https://gimhaesimin.netlify.app/info/helpfullinks"> 도움되는 링크 </a></li></ul></div><div class="side_menu education">교육<ul><li><a href="https://gimhaesimin.netlify.app/education/teen_team"> 중고등부 </a></li></ul></div><div class="side_menu communication">소통<ul><li><a href="https://gimhaesimin.netlify.app/communication/community"> 커뮤니티 </a></li><li><a href="https://gimhaesimin.netlify.app/communication/FAQ"> 자주 묻는 질문 </a></li><li><a href="https://gimhaesimin.netlify.app/communication/contactus"> 문의 </a></li></ul></div><div class="side_menu church">교회<ul><li><a href="https://gimhaesimin.netlify.app/church/belief"> 신념 </a></li><li><a href="https://gimhaesimin.netlify.app/church/helpers"> 섬기는 사람들 </a></li><li><a href="https://gimhaesimin.netlify.app/church/map"> 오시는 길 </a></li></ul></div></nav></div>')
    },

    // topHeader Html write method 
    TopHeader:function() {
        document.write('<header><div class="top-header"><div class="inner"><div class="inner-left"><a href="https://gimhaesimin.netlify.app/service/worship-guide">예배안내</a><a href="https://gimhaesimin.netlify.app/church/map"> 오시는 길 </a><a href="https://youtube.com/@coh.s?si=zNhjSBaVsbcJDfhj" class="youtube" target="_blank" title="시민교회 유튜브">유튜브</a></div><div class="inner-right"><a href="https://gimhaesimin.netlify.app/login/login">로그인</a><a href="https://gimhaesimin.netlify.app/login/signup">회원가입</a></div></div></div></header>');
    },

    // HeaderNav HTML write method
    HeaderNav:function() {
        document.write('<!--Header Navigation--><div class="headernav"><div class="title"><a href="https://gimhaesimin.netlify.app/index.html"><img src="img/logo_header.svg" /></a></div><div class="navbar-left"><div class="dropdown service"><button class="dropbtn">예배</button><div class="dropdown_content"><a href="https://gimhaesimin.netlify.app/service/live"> 라이브 </a><a href="https://gimhaesimin.netlify.app/service/service"> 설교 </a><a href="https://gimhaesimin.netlify.app/service/worship-guide">예배안내</a></div></div><div class="dropdown strive"><button class="dropbtn">성장</button><div class="dropdown_content"><a href="https://gimhaesimin.netlify.app/strive/supported_church"> 함께하는 교회 </a></div></div><div class="dropdown info"><button class="dropbtn">자료</button><div class="dropdown_content"><a href="https://gimhaesimin.netlify.app/info/QT"> QT </a><a href="https://gimhaesimin.netlify.app/info/gallery"> 갤러리 </a><a href="https://gimhaesimin.netlify.app/info/helpfullinks"> 도움되는 링크 </a></div></div><div class="dropdown education"><button class="dropbtn">교육</button><div class="dropdown_content"><a href="https://gimhaesimin.netlify.app/education/teen_team"> 중고등부 </a></div></div><div class="dropdown communication"><button class="dropbtn">소통</button><div class="dropdown_content"><a href="https://gimhaesimin.netlify.app/communication/community"> 커뮤니티 </a><a href="https://gimhaesimin.netlify.app/communication/FAQ"> FAQ </a><a href="https://gimhaesimin.netlify.app/communication/contactus"> 문의 </a></div></div><div class="dropdown church"><button class="dropbtn">교회</button><div class="dropdown_content"><a href="https://gimhaesimin.netlify.app/church/belief"> 신념 </a><a href="https://gimhaesimin.netlify.app/church/helpers"> 섬기는 사람들 </a><a href="https://gimhaesimin.netlify.app/church/map"> 오시는 길 </a></div></div></div><div class="navbar-right"><input type="button" id="sidebar-search"><input type="button" id="sidebar-toggle" onclick="Show.Sidebar();"></div></div>');
    },

    // Footer Html write method 
    Footer:function() {
        document.write('<!-- footer --><footer><div class="container"><div class="footA"><h2>김해시민교회</h2><p>주소: 경상남도 김해시 장유로 190 부영프라자 504호<br />연락처: 055-323-0691<br /><a href="https://gimhaesimin.netlify.app/">https://gimhaesimin.netlify.app/</a></p><nav class="footD"><h3>SNS</h3><ul><li><a href="https://youtube.com/@coh.s?si=zNhjSBaVsbcJDfhj" target="_blank" title="youtube"><img src="img/youtube.svg"/></a></li><li><a href="https://blog.naver.com/gimhae_simin" target="_blank" title="blog"><img src="img/blog.svg"/></a></li></ul></nav></div><div class="footB"><div><h3>ABOUT</h3><ul><li><a href="https://gimhaesimin.netlify.app/about/address">주소</a></li><li><a href="https://gimhaesimin.netlify.app/church/map">지도</a></li><li><a href="https://gimhaesimin.netlify.app/church/helpers">스태프</a></li></ul></div><div><h3>SUPPORT</h3><ul><li><a href="https://gimhaesimin.netlify.app/communication/FAQ">자주 묻는 질문</a></li><li><a href="https://gimhaesimin.netlify.app/communication/contactus">문의</a></li></ul></div><div><h3>CONTENTS</h3><ul><li><a href="https://gimhaesimin.netlify.app/contents/inform.html">공지사항</a></li><li><a href="https://gimhaesimin.netlify.app/dev/developer">개발자</a></li><li><a href="https://blog.naver.com/gimhae_simin">블로그</a></li></ul></div></div></div><div class="footC">ⓒ KL corp. All rights reserved.</div></footer>');
    }
}