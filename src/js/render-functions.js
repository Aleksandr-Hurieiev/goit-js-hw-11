import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//=========================================================================================================================================

import makeRequest from './pixabay';
export const options = {
  key: '44329356-b9318945d135833e2eb07a97b',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};
//=========================================================================================================================================
const list = document.querySelector('.list');
const form = document.querySelector('.form_js');
form.addEventListener('submit', oncCread);
//=========================================================================================================================================

function oncCread(data) {
  data.preventDefault();
  const search = data.target[0].value;
  options.q = search;
  makeRequest()
    .then(users => {
      if (users.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      renderUser(users);
    })
    .catch(error => {});
  form.reset();
}
//=========================================================================================================================================

function renderUser(users) {
  console.log(users);
  const markup = users.hits
    .map(user => {
      console.log(user);
      return `<li class="list__item">
    <img class="list__img" src="${user.pageURL}" alt="${user.id}" />
    <ul class="item__list">
      <li class="item__list-item">
        <h3 class="item__list-title">Likes</h3>
        <p class="item__list-text">${likes}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Views</h3>
        <p class="item__list-text">${user.views}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Comments</h3>
        <p class="item__list-text">${user.comments}</p>
      </li>
      <li class="item__list-item">
        <h3 class="item__list-title">Downloads</h3>
        <p class="item__list-text">${user.downloads}</p>
      </li>
    </ul>
  </li>`;
    })
    .join("");
    console.log(markup);
  list.insertAdjacentHTML('beforeend', markup);
}
