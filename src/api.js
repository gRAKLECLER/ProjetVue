export function addCocktail(){
  return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(Response => 
    Response.json())
}