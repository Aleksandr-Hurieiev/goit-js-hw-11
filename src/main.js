import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import makeRequest from './js/pixabay.js';
import renderUser, { list } from './js/render-functions.js';

//=========================================================================

export const param = {
  key: '44329356-b9318945d135833e2eb07a97b',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 30,
};
//=========================================================================

const form = document.querySelector('.form_js');
const loader = document.querySelector('#loader');
const formButton = document.querySelector('.form__button');
const formInput = document.querySelector('.form__input');

form.addEventListener('submit', createData);

//=========================================================================

function createData(event) {
  event.preventDefault();
  list.innerHTML = '';
  const search = event.target[0].value.trim();
  
  if (!search) {
    event.target[0].value = ''
    return iziToast.warning({
      title: 'Warning',
      message: 'Enter more than one character',
      position: 'topRight',
    });
  }

  param.q = search;
  toggleLoading(true);

  setTimeout(() => {
    makeRequest(param)
      .then(users => {
        if (!users.hits.length) {
          iziToast.error({
            position: 'topRight',
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
          });
        } else {
          renderUser(users);
        }
      })
      .catch(error => {
        iziToast.error({
          title: `${error}`,
          message: 'Page not found',
          position: 'topRight',
        });
      })
      .finally(() => {
        toggleLoading(false);
      });
  }, 1000);

  form.reset();
}

function toggleLoading(isLoading) {
  loader.classList.toggle('loader', isLoading);
  formButton.classList.toggle('form__button-active', isLoading);
  formInput.disabled = isLoading;
  formButton.disabled = isLoading;
}
//=========================================================================================================================================
