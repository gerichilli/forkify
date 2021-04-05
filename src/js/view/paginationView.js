import icons from "../../img/icons.svg";
import View from './View.js';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e){
            e.preventDefault();
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        })
    }

    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        const curPage = this._data.page;
        
        // Page 1, and there are other pages
        if(curPage === 1 && numPages > 1) {
            return this._generateMarkupBtnNext(curPage);
        }

        // Last page
        if(curPage === numPages && numPages > 1) {
            return this._generateMarkupBtnPrev(curPage);
        }

        // Other page
        if(curPage < numPages) {
            return `${this._generateMarkupBtnPrev(curPage)} ${this._generateMarkupBtnNext(curPage)}`
        }

        // Page 1, and there are no other pages
        return '';
    }

    _generateMarkupBtnPrev(page) {
        return `
            <button data-goto="${page - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${page - 1}</span>
            </button>
        `;
    }

    _generateMarkupBtnNext(page) {
        return `
            <button data-goto="${page + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${page + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
    }
}

export default new PaginationView();