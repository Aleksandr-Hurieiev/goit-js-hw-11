import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import makeRequest from './js/pixabay.js';
import renderUser from './js/render-functions.js';
import { list } from './js/render-functions.js';

//=========================================================================================================================================

export const param = {
  key: '44329356-b9318945d135833e2eb07a97b',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 30,
};
//=========================================================================================================================================

const form = document.querySelector('.form_js');
form.addEventListener('submit', createData);

//=========================================================================================================================================

function createData(data) {
  data.preventDefault();
  document.querySelector('#loader').classList.add('loader');
  document.querySelector('.form__button').classList.add('form__button-active');
  document.querySelector('.form__input').disabled = true;
  document.querySelector('.form__button').disabled = true;
  list.innerHTML = '';
  const search = data.target[0].value;
  param.q = search;
  setTimeout(() => {
    makeRequest(param)
      .then(users => {
        if (users.hits.length === 0) {
          iziToast.error({
            position: 'topRight',
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        } else renderUser(users);
      })
      .catch(error => {
        iziToast.error({
          title: `${error}`,
          message: 'Page not found',
          position: 'topRight',
        });
      });
  }, 1000);
  form.reset();
}
//=========================================================================================================================================
