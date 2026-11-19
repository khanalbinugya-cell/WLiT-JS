const title = document.querySelector("#heading");
console.log(title)
title.style.color ="red";
title.textContent ="things we like to do";

const items = document.querySelectorAll(".item-list")
 console.log(items);

//  approach 1
 for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
 }

// approach 2
items.forEach((item) => {
  item.style.fontWeight = "normal";
});