import "../sass/main.scss";
import { MODAL_CLOSE_SEC } from './config.js';
import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultsView from './view/resultsView.js';
import bookmarksView from './view/bookmarksView.js';
import paginationView from './view/paginationView.js';
import addRecipeView from './view/addRecipeView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function() {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    // 1) Loading recipe
    resultsView.update(model.getSearchResultsPage());
    await model.loadRecipe(id);
    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

    // 3) Updating bookmark view
    bookmarksView.update(model.state.bookmarks);
  } catch(err) {
    console.log(err);
    recipeView.renderError();
    console.log(err);
  }
}

const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner();
    
    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);
    
    // 3) Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render pagination btn
    paginationView.render(model.state.search);
  } catch(err) {
    console.log(err);
  }
}

const controlPagination = function(goToPage) {
  // 1) Render new results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render new pagination btn
    paginationView.render(model.state.search);
}

const controlServings = function(newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function() {
  // 1) Add or remove bookmark
  if(!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe)

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
}

const controlBookMark = function() {
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = async function (newRecipe) {
  try {
    //Show loading spinner
    addRecipeView.renderSpinner();
    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    recipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // window.history.back();

    // Close form window
    setTimeout(function(){
      addRecipeView.toogleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch(err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
  
}

const init = function() {
  bookmarksView.addHandlerRender(controlBookMark);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}

init();
