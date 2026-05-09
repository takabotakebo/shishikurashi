const routes = {
  "供給課": "supply.html",
  "児童見守り制度": "children-watch.html",
  "赤印世帯": "red-mark.html",
  "郷土資料館": "archive.html",
  "緊急放送記録": "emergency-log.html",
  "市民課内部通達": "internal-notice.html",
  "行方不明者一覧": "missing.html",
  "存在しない市民": "not-404.html"
};

function handleSearch(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("searchInput");
  if (!input) return;
  const keyword = input.value.trim();
  if (!keyword) return;

  if (routes[keyword]) {
    window.location.href = routes[keyword];
  } else {
    const q = encodeURIComponent(keyword);
    window.location.href = "search-none.html?q=" + q;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  if (form) {
    form.addEventListener("submit", handleSearch);
  }
});
