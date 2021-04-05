import icons from "../../img/icons.svg";
import View from './View.js';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for yout query! Please try again ;)';
    _message = '';

    _generateMarkup() {
        return this._data.map(this._generateMarkupReview).join('');
    }

    _generateMarkupReview(results) {
        const id = window.location.hash.slice(1);

        return `
            <li class="preview">
                <a class="preview__link ${results.id === id ? "preview__link--active" : ""}" href="#${results.id}">
                <figure class="preview__fig">
                    <img src="${results.image}" alt="Test" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${results.title}</h4>
                    <p class="preview__publisher">${results.publisher}</p>
                </div>
                </a>
            </li>
        `
    }
}

export default new ResultsView();