function getData(value, page) {
  const key = "24287584-f260c6215a8f38269d114f00b";
  return fetch(
    `https://pixabay.com/api/?key=${key}&&image_type=photo&orientation=horizontal&page=${page}&per_page=12&q=${value}`
  ).then((res) => res.json());
}
const api = { getData };

export default api;
