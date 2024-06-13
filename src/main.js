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
  per_page: 9,
};
//=========================================================================================================================================

const form = document.querySelector('.form_js');
const button = document.querySelector('.form__button');
const load = document.querySelector('#loader');
form.addEventListener('submit', createData);

//=========================================================================================================================================

function createData(data) {
  data.preventDefault();
  const search = data.target[0].value;
  param.q = search;
  makeRequest(param)
    .then(users => {
      if (users.hits.length === 0) {
        list.innerHTML = '';
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else if (list.childElementCount > 0) {
        list.innerHTML = '';
        renderUser(users);
      } else renderUser(users);
    })
    .catch(error => {
      iziToast.error({
        title: `${error}`,
        message: 'Page not found',
      });
    });
  form.reset();
}
//=========================================================================================================================================
