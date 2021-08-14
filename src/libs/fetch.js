const BASE_URL = 'https://emergen-jalo.herokuapp.com/';
 

async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
 
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
 
  return data;
}
 
const api = {
  posts: {
    list() {
      /* throw new Error('Not Found') */
      return callApi('/all_posts/');
    },
    create(emergen) {
      return callApi(`/new_post/`, {
        method: 'POST',
        body: JSON.stringify(emergen),
      });
    },
    read(emergenId) {
      return callApi(`/_id:${emergenId}/`);
    },
    update(emergenId, updates) {
      return callApi(`/_id:${emergenId}/`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(emergenId) {
      return callApi(`/_id:${emergenId}/`, {
        method: 'DELETE',
      });
    },
  },
};
 
export default api;