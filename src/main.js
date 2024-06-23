import { getImage } from './js/pixabay-api.js';
import { marcup, showLoader, hideLoader } from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};


refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const value = e.target.elements.search.value.trim();
  if (value === '') {
    return iziToast.warning({
      title: 'warning',
      message: 'Enter a word for the query, please.',
      position: 'topRight',
      displayMode: 'once',
    });
  }

  showLoader();
  const arr = getImage(value);
  arr.then(data => {
    if(data.hits.length === 0) {
      iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      displayMode: 'once',
    });
    }
    marcup(data.hits);
  });

  arr.catch(err => {});
  arr.finally(() => {
    hideLoader();
    refs.form.reset();
  });
});