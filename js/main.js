// VIJOY LP – mock 01
(function () {
  // TODO(本番): LINE公式アカウントの友だち追加URL（https://lin.ee/xxxx）を設定
  var LINE_URL = "";

  // LINE URL 未設定時のフォールバック先。
  // 以前は "#line-cta"（=自セクション）へ送っていたため、最終CTAを押しても何も起きなかった。
  var FALLBACK_URL = "https://mimi-vijoy.com/contact/";

  var href = LINE_URL || FALLBACK_URL;

  var links = document.querySelectorAll("[data-line-link]");
  links.forEach(function (a) {
    a.setAttribute("href", href);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
    a.addEventListener("click", function () {
      // TODO(本番): 計測イベント（例: gtag('event', 'line_click')）
    });
  });
})();
