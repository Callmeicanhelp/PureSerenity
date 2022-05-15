function formSubmitHandler() {
  var ingrQuery = document.querySelector("#ingredientm").value.trim()
  getRecipe(ingrQuery)
}

function getRecipe(query) {
  var requestRecipe = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + query;

  fetch(requestRecipe)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data.meals)
      for (var i = 0; i < data.meals.length; i++) {
        console.log(data.meals[i])
        // data.meals[i].idMeal

        // // document.querySelector("#display-recipe").append(data.meals[i].strMeal)
        var image = document.createElement("img")
        image.setAttribute("src", data.meals[i].strMealThumb)
        // document.querySelector("#display-recipe").append(image)
        var mealCard = document.createElement("div")
          mealCard.innerHTML =
          `<div class="card" style="width: 500px;">
                <div class="card-divider">
                  ${data.meals[i].strMeal}
                </div>
                <img src="${data.meals[i].strMealThumb}">
                <div class="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>`
          document.querySelector("#display-recipe").append(mealCard)

      }

    })
}
document.querySelector("#submit-ingr").addEventListener("click", formSubmitHandler)