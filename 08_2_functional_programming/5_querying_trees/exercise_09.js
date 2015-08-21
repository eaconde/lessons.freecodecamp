// Exercise 9: Flatten the movieLists array into an array of video ids

var movieLists = [{
    name: "New Releases",
    videos: [{
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
    }]
  }, {
    name: "Dramas",
    videos: [{
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
    }]
  }],
  allVideoIdsInMovieLists = [];

movieLists.forEach(function(movieList) {
  movieList.videos.forEach(function(video) {
    allVideoIdsInMovieLists.push(video.id);
  });
});

console.log(allVideoIdsInMovieLists);
return allVideoIdsInMovieLists;

// Flattening trees with nested forEach expressions is easy because we can explicitly add items to the array. Unfortunately it's exactly this type of low-level operation that we've been trying to abstract away with functions like map() and filter(). Can we define a function that's abstract enough to express our intent to flatten a tree, without specifying too much information about how to carry out the operation?
