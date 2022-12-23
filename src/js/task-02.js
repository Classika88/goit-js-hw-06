const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientEl = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  console.log(liEl);
  liEl.classList.add("item");
  /* console.log(liEl.classList.add("item")); */
  liEl.textContent = ingredient;
  console.log(liEl.textContent = ingredient);
});

const ulEl = document.querySelector("#ingredients").append(...ingredientEl); 
console.log(ulEl);
 
 


/* const item = cars.map((obj) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  img.src = obj.img;
  img.alt = obj.model;
  img.style.width = "300px";
  h2.textContent = obj.model;
  h3.textContent = obj.type;
  p.textContent = obj.price;
  div.append(h2, h3);
  li.append(img, div, p);
  return li;
});
list.append(...item);
console.log(item); */




const list = document.querySelector(".js-list");

// const item = cars
//   .map(
//     (obj) => `<li>
// <img src="${obj.img}" alt="${obj.model}" width='300'>
// <h2>${obj.model}</h2>
// <h3>${obj.type}</h3>
// <p>${obj.price}</p>
// </li>`
//   )
//   .join("");

// list.insertAdjacentHTML("beforeend", item);
