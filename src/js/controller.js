import "../sass/main.scss";
import * as model from './model.js';
import recipeView from './view/recipeView.js';



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

const init = function() {
  recipeView.addHandlerRender(controlRecipe);
}

init();