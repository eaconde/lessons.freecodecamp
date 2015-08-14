$(document).ready(function() {
  // page vars
  var randomizedQuote = '';
  var contentArea = $('.quote-content');
  var authorArea = $('.quote-author');
  var quoteArea = $('.divQuote');
  var quoteText = $('.divQuoteContent');
  var authorText = $('.divAuthor');
  var shareArea = $('.divShare');
  var twitterShare = document.querySelector('[data-js="twitter-share"]');
  var facebookShare = document.querySelector('[data-js="facebook-share"]');
  var penURL = 'http://codepen.io/eaconde/full/ZGZvOR/';

  // =======================================
  // CORE FUNCTIONS
  // =======================================

  function getQuote() {
    $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=" + $('#textCategory').val(),
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Key", "S4CO8j8N4fmshSkDIJgDbzFc4Azxp1aKKrejsn3bYrlRD2vUx2");
      },
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      success: function(data) {
        console.log('randomizedQuote', data);
        assignQuote(data);
      },
      error: function() {
        alert("Cannot get data");
      }
    });

  }

  function assignQuote(randomizedQuote) {
    contentArea.html("\"" + randomizedQuote['quote'] + "\"");
    authorArea.html("- " + randomizedQuote['author']);
    // adjust padding-top
    var contentSize = (parseInt(quoteText.css("height")) + parseInt(authorText.css("height")) + parseInt(shareArea.css("height")));
    var quoteAreaSize = contentSize + 50;
    quoteArea.css("height", quoteAreaSize + "px");
    var padding = (parseInt(quoteArea.css("height")) / 2) - (contentSize / 2);
    quoteArea.css("padding-top", padding - 15 + "px")

    console.log('new sizes', contentSize, quoteAreaSize, padding)
  };

  // =======================================
  // EVENTS
  // =======================================

  // form submit
  $('#formGenerate').on('submit', function(e) {
    e.preventDefault();
    getQuote();
  });

  // initialize page with a random quote right away...
  if (contentArea.data('init') === 0) {
    getQuote();
    contentArea.data('init', 1);
  }

  // social events
  twitterShare.onclick = function(e) {
    e.preventDefault();
    var twitterWindow = window.open('https://twitter.com/share?url=' + penURL, 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) {
      twitterWindow.focus();
    }
    return false;
  }

  facebookShare.onclick = function(e) {
    e.preventDefault();
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + penURL, 'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  }

});
