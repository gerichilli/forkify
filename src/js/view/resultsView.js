import icons from "../../img/icons.svg";
import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for yout query! Please try again ;)';
    _message = '';

    _generateMarkup() {
        return this._data.map(result => previewView.render(result, false)).join('');
    }
}

export default new ResultsView();