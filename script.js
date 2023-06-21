// ページがロードされたときの処理
window.onload = function() {
  // ヒーローセクションの高さをウィンドウの高さに合わせる
  var heroSection = document.getElementById('hero');
  heroSection.style.height = window.innerHeight + 'px';

  // ナビゲーションのアクティブなリンクにクラスを追加する
  var navLinks = document.querySelectorAll('nav ul li a');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
      for (var j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove('active');
      }
      this.classList.add('active');
    });
  }

  // 特徴セクションのアニメーション
  var features = document.getElementsByClassName('feature');
  for (var k = 0; k < features.length; k++) {
    features[k].addEventListener('mouseover', function() {
      this.classList.add('highlight');
    });
    features[k].addEventListener('mouseout', function() {
      this.classList.remove('highlight');
    });
  }
};
