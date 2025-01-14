// Portfolio
const filterMenu = document.querySelector(".portfolio-filter");
const filterMenuItems = document.querySelectorAll(".portfolio-filter li");
const portfolioMenuArticles = document.querySelectorAll(
  ".portfolio-menu article"
);

function handleFilter() {
  filterMenuItems.forEach((li) => li.classList.remove("active"));
  this.classList.add("active");

  portfolioMenuArticles.forEach((article) => {
    article.style.opacity = "0";
    article.style.visibility = "hidden";
    article.style.position = "absolute";
    article.style.height = "0";
    article.style.margin = "0";
    article.style.padding = "0";
  });
  const articles =
    this.dataset.filter === ".all"
      ? portfolioMenuArticles
      : document.querySelectorAll(this.dataset.filter);
  articles.forEach((article) => {
    article.style.opacity = "1";
    article.style.visibility = "visible";
    article.style.position = "relative";
    article.style.height = "auto"; // Restore height
    article.style.margin = ""; // Restore margin
    article.style.padding = ""; // Restore padding
  });
}

filterMenuItems.forEach((li) => {
  li.addEventListener("click", handleFilter);
});
