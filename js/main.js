// VIJOY LP – mock 01
(function () {
  // TODO(本番): LINE公式アカウントの友だち追加URL（https://lin.ee/xxxx）を設定
  var LINE_URL = "";

  var links = document.querySelectorAll("[data-line-link]");
  links.forEach(function (a) {
    if (LINE_URL) {
      a.setAttribute("href", LINE_URL);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    } else if (a.getAttribute("href") === "#") {
      // URL未設定時は最終CTAへスクロール
      a.setAttribute("href", "#line-cta");
    }
    a.addEventListener("click", function () {
      // TODO(本番): 計測イベント（例: gtag('event', 'line_click')）
    });
  });
})();
