// Exercise 6: Use forEach() to collect only those videos with a rating of 5.0

// Use forEach() to loop through the videos in the newReleases array and, if a video has a rating of 5.0, add it to the videos array.

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
  }],
  videos = [];

newReleases.forEach(function(video) {
  if (video.rating === 5.0) {
    videos.push(video);
  }
});

return videos;


// Notice that, like map(), every filter() operation shares some operations in common:
// >> Traverse the array
// >>Add objects that pass the test to a new array

//Why not abstract away how these operations are carried out?
