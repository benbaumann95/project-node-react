// write a function to retrieve some json
// make an ajax request
// use the fetch function

// function fetchAlbums(url) {
//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(myJson) {
//       console.log(myJson);
//     });
// }
//
// fetchAlbums('http://rallycoding.herokuapp.com/api/music_albums');

// function fetchAlbums() {
//   fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(json => console.log(json));
// }
//
// fetchAlbums();

const fetchAlbums = async () => {
  // await in front of anything that gives a promise
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();

  console.log(json);
};

fetchAlbums();
