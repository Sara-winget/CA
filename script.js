const searchBar = document.getElementById('inputSearch');
const mealImg = document.getElementById('mealData');
const searchedMeals = document.getElementById('RandomMeals');
const Searchmeals = document.getElementById('SearchMeals');
const mealName=document.getElementById('meal-Name')
searchBar.addEventListener('input',()=>{const displaySuggestion=inputSearch.value.trim().toLowerCase();
    if(displaySuggestion==''){
        searchedMeals.style.display='none';
        return;
    }
searchedMeals.style.display='block';

fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
    if(!res.ok)
        throw new Error('Search failed');
    else{
    
     return res.json();
    }
}).then((data)=>{
    
    data.meals.forEach((meal) => {
     const li =document.createElement('li');
     li.textContent=meal.strMeal;
        Searchmeals.appendChild(li);
        console.log(data.meals);
    });
}).catch(error=>{
   const para=document.createElement('p')
   para.innerText="something wrong"
})
})
fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
    if(!res.ok)
        throw new Error ('response failed')
else

return res.json()}).then(
    (data)=>{
console.log(data.meals[0])
const meal=data.meals[0];
console.log(meal.strMeal,meal.strArea)
const mealImage=document.createElement('img');
mealImage.src=meal.strMealThumb;
mealImage.alt=meal.strMeal;
mealImage.style.alignContent='center';
const mealTitle=document.createElement('h1')
mealTitle.textContent=meal.strMeal;
mealImg.appendChild(mealImage);
mealName.appendChild(mealTitle);
    }).catch(error=>{
        console.log('fetching failed');
        const para=document.createElement('h1');
        para.innerHTML="oops!! something failed";
        mealName.appendChild(para);
    })

    