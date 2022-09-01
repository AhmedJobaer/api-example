const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => console.log(error))
}

const loadAcync = async () => {
    const url = `https://randomuser.me/api/?gender=female`
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results[0].email)
    }
    catch (error) {
        console.log(error)
    }
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="displayMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Name: ${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

document.getElementById('search-btn').addEventListener('click', function () {
    const inputElement = document.getElementById('food-name');
    const foodName = inputElement.value;
    loadMeal(foodName);
    inputElement.value = '';
})

const displayMealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals[0]))
}

const displayMeal = meal => {

    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    detailContainer.appendChild(mealDiv);
}
