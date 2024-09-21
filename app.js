let loadBtn = document.getElementById("load-more");
let trending = document.getElementById("trend");

loadBtn.addEventListener("click", () => {
  if (trending.style.display === "" || trending.style.display === "none") {
    trending.style.display = "grid";
  } else {
    trending.style.display = "none";
  }
});

let likesBtn = document.getElementById("also-likes");
let likes = document.getElementById("likes-detail");

likesBtn.addEventListener("click", () => {
  if (likes.style.display === "" || likes.style.display === "none") {
    likes.style.display = "block";
  } else {
    likes.style.display = "none";
  }
});
