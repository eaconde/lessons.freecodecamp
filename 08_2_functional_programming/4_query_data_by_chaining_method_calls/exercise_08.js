// Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0

// add minified version of Array.prototype.map | exercise 4
Array.prototype.map=function(r){var t=[];return this.forEach(function(n){t.push(r(n))}),t};
// add minified version of Array.prototype.filter | exercise 7
Array.prototype.filter=function(r){var t=[];return this.forEach(function(n){r(n)&&t.push(n)}),t};


var newReleases = [{
  "id": 70111470,
  "title": "Die Hard",
  "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": 4.0,
  "bookmark": []
}, {
  "id": 654356453,
  "title": "Bad Boys",
  "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": 5.0,
  "bookmark": [{
    id: 432534,
    time: 65876586
  }]
}, {
  "id": 65432445,
  "title": "The Chamber",
  "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": 4.0,
  "bookmark": []
}, {
  "id": 675465,
  "title": "Fracture",
  "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
  "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
  "rating": 5.0,
  "bookmark": [{
    id: 432534,
    time: 65876586
  }]
}];

// Chain the filter and map functions to select the id of all videos
// with a rating of 5.0.
var chainResult = newReleases.
filter(function(video) {
  return video.rating === 5.0;
}).
map(function(video) {
  return video.id;
});

console.log(chainResult);
return chainResult;

// Chaining together map() and filter() gives us a lot of expressive power. These high level functions let us express what data we want, but leave the underlying libraries a great deal of flexibility in terms of how our queries are executed.
