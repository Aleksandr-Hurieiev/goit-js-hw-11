import { options } from './render-functions';
//=========================================================================================================================================
export default function makeRequest(data) {
  // -------------------------------
  return fetch(
    `https://pixabay.com/api/?key=${options.key}&q=${options.q}&image_type${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      // Data handling
      return data
    });
}

//=========================================================================================================================================
