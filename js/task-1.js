const allCategories = document.querySelectorAll("li.item");
console.log("Numbers of categories:", allCategories.length);

allCategories.forEach((categorie) => {
  const categorieTitle = categorie.querySelector("h2").textContent;
  const elements = categorie.querySelectorAll("li");

  console.log("Category:", categorieTitle);
  console.log("Elements:", elements.length);
});
