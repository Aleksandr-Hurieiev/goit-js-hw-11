export default function makeRequest(data) {
  const { key, q, image_type, orientation, safesearch, per_page } = data;
  // -------------------------------
  return fetch(
    `https://pixabay.com/api/?key=${key}&q=${q}&image_type${image_type}&orientation=${orientation}&safesearch=${safesearch}&per_page=${per_page}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    document
      .querySelector('.form__button')
      .classList.remove('form__button-active');
    document.querySelector('.form__button').disabled = false;
    document.querySelector('.form__input').disabled = false;
    document.querySelector('#loader').classList.remove('loader');
    return response.json();
  });
}
