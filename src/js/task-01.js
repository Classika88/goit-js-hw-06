const liItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItemEl.length}`);


const titleEl = document.querySelectorAll("h2");
for (const title of titleEl) {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${title.nextElementSibling.children.length}`)
}
/* Хотіла ще до верхньої li звернутися як до parentNode, але не вийшло */