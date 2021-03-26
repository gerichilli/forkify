import "../sass/main.scss";
import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function() {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch(err) {
    console.log(err);
    recipeView.renderError();
  }
}

const controlSearchResults = async function() {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return;

    // 2) Load search results
    model.loadSearchResults(query);
    
    // 3) Render results
    console.log(model.state.search.results);

  } catch(err) {
    console.log(err);
  }
}

const init = function() {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
}

init();
