import icons from "../../img/icons.svg";

export default class View {
    _data;

    /**
     * Render the received object to the DOM
     * @param { Object || Object[]} data The data to be render (ex: recipe)
     * @param { boolean } [render = true] if false, creat markup string instead of rendering to the DOM
     * @returns { undefined | string } A markup string is returned if render = false
     * @this {Object} View instance
     * @author Jonas
     * @todo finish implimentation
     */

    render(data, render = true) {
        this._data = data;
        const markup = this._generateMarkup();

        if(!render) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    update(data) {
      if(!data || (Array.isArray(data) && data.length === 0)) 
          return this.renderError();

        this._data = data;
        const newMarkup = this._generateMarkup();

        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
          const curEl = curElements[i];

          // Update change text: if newEl !== curEl anf it's child doesn't have empty string
          if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
            curEl.textContent = newEl.textContent;
          }

          // Update change attributes
          if (!newEl.isEqualNode(curEl)) 
            Array.from(newEl.attributes).forEach(attr => {
              curEl.setAttribute(attr.name, attr.value);
            })
        })
     
    }

    renderSpinner() {
        const markup = `
          <div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
          </div>
        `
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    renderError(message = this._errorMessage) {
        const markup = `<div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
        </div>
        `
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    renderMessage(message = this._message) {
        const markup = `<div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
        `
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };
}