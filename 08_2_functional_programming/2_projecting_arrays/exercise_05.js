// Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs

// Let's repeat the exercise of collecting {id, title} pairs for each video in the newReleases array, but this time we'll use our map function.

// add minified version of Array.prototype.map
Array.prototype.map=function(r){var t=[];return this.forEach(function(n){t.push(r(n))}),t};

var newReleases = [{
  "id": 70111470,
  "title": "Die Hard",
  "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": [4.0],
  "bookmark": []
}, {
  "id": 654356453,
  "title": "Bad Boys",
  "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": [5.0],
  "bookmark": [{
    id: 432534,
    time: 65876586
  }]
}, {
  "id": 65432445,
  "title": "The Chamber",
  "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": [4.0],
  "bookmark": []
}, {
  "id": 675465,
  "title": "Fracture",
  "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": [5.0],
  "bookmark": [{
    id: 432534,
    time: 65876586
  }]
}];

var mapResults = newReleases.map(function(video) {
  return {
    id: video.id,
    title: video.title
  };
});

console.log(mapResults);
return mapResults;

//Notice that map allows us to specify what projection we want to apply to an array, but hides how the operation is carried out.
