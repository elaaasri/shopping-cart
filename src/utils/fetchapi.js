const fetchAPI = (url) => {
  console.log("start fetching");
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
export default fetchAPI;
