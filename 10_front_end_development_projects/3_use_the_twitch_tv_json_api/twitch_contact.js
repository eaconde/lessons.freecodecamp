$(document).ready(function() {

  var USER_TEMPLATE = $("#twitchUserTemplate").html();
  var userTemplate = Handlebars.compile(USER_TEMPLATE);
  var userListing; // will container either All, Online, or Offline users
  var activeMenu; // keep track so we don't query the DOM
  var imageMissing = 'http://bit.ly/1gMq7H6';
  var staticTwitchUsers = ["freecodecamp", "riotgames", "storbeck", "dendi", "terakilobyte", "habathcx", "beyondthesummit", "RobotCaleb", "comster404", "brunofin", "thomasballinger", "noobs2ninjas", "beohoff"];
  var userData = {
    user: []
  }; // raw data fetched from twitch.tv
  var userStream = {
    stream: []
  }; // raw data fetched from twitch.tv
  var twitchUsers = {
    user: []
  }; // formatted JSON data that we feed to the handlebars template

  // ==============================
  // CORE FUNCTIONS
  // ==============================

  function showUsers(userOpt) {
    console.log('Show', userOpt, ' Users!', twitchUsers)
    activeMenu = userOpt

    var filteredUsers = [];
    switch (userOpt) {
      case 'All':
        filteredUsers = twitchUsers;
        break;
      case 'Online':
        filteredUsers = twitchUsers['user'].filter(function(user) {
          console.log('filtering...', user.stream);
          return user.stream !== '';
        });
        filteredUsers = {
          user: filteredUsers
        };
        break;
      case 'Offline':
        filteredUsers = twitchUsers['user'].filter(function(user) {
          return user.stream === '';
        });
        filteredUsers = {
          user: filteredUsers
        };
        break;
    }
    userListing = filteredUsers;
    $('#twitchUser').html(userTemplate(filteredUsers));
  };

  function filterUsers(userFilter) {
    if (userFilter === '') {
      // show users by tab
      showUsers(activeMenu);
    } else {
      // filter user
      userListing = userListing['user'].filter(function(user) {
        console.log('filtering...', user);
        return user.username.toLowerCase().includes(userFilter.toLowerCase());
      });
      userListing = {
        user: userListing
      };
      $('#twitchUser').html(userTemplate(userListing));
    }
  };

  function addStreamer(newUser) {
    // add to staticTwitchUsers
    staticTwitchUsers.push(name);
    // get data
    $.when(getTwitchUserData(newUser), getTwitchStreamData(newUser))
      .then(function(user, stream) {
      console.log(user[0]);
        if (!user[0].hasOwnProperty('error')) {
          preformatData(user[0], stream[0])

        console.log('verifying completeness...', twitchUsers);
        showUsers('All');
        } else {
          $('#modal-warning').modal();
          console.log('Invalid Twitch.tv user!');
        }

      });
  }

  // ==============================
  // EVENTS
  // ==============================

  // set active menu
  $('.nav-menu li').click(function() {
    $(".nav-menu li").removeClass("active");
    $(this).addClass("active");
    showUsers($(this).children('a').text());
  });

  // filter current user listing from search
  $('#textSearch').keyup(function(event) {
    filterUsers($('#textSearch').val());
  });

  $('#addNewUser').click(function(e) {
    console.log('adding new user', $('#newTwitchUser').val());
    addStreamer($('#newTwitchUser').val());
  });

  $('#modal-newuser').on('hide.bs.modal', function(e) {
    console.log('aaaaaaa');
    $('#newTwitchUser').val('');
  });

  // ==============================
  // EXTERNAL
  // ==============================

  // ajax calls to twitch.tv API

  // GET /user
  function getTwitchUserData(user) {
    console.log('user data', user);
    return $.ajax({
      url: 'https://api.twitch.tv/kraken/users/' + user,
      method: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        //userData['user'].push(data);
        //console.log('USER COUNT', userData['user'], userData['user'].length);
        return data;
      },
      error: function() {
        console.log('Unable to get data!');
      }
    });
  }

  // GET /stream
  function getTwitchStreamData(user) {
    console.log('user stream', user);
    return $.ajax({
      url: 'https://api.twitch.tv/kraken/streams/' + user,
      method: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        //userStream['stream'].push(data);
        return data
      },
      error: function() {
        console.log('Unable to get data!');
      }
    });
  }

  // gets data of static users
  function getUserData() {
    console.log(staticTwitchUsers);

    // process 1 user at a time.
    // we fetch /user and /stream async
    staticTwitchUsers.map(function(twitchUser, i) {
      console.log('===========================');
      console.log('getting data of user', twitchUser);
      // getting data and stream status of user
      $.when(getTwitchUserData(twitchUser), getTwitchStreamData(twitchUser))
        /*getTwitchUserData(twitchUser)*/
        .then(function(user, stream) {
          preformatData(user[0], stream[0])
          if (i === staticTwitchUsers.length - 1) {
            console.log('verifying completeness...', twitchUsers);
            showUsers('All');
          }
        });

    });
  };

  // =============================
  // HELPERS
  // =============================

  String.prototype.trim = function(limit) {
    return this.length > limit ? this : this.slice(0, limit) + '...';
  };

  // parse JSON data to preferred format
  function preformatData(userData, userStream) {
    var logo = userData.logo;
    if (logo === null) {
      logo = imageMissing;
    }
    var channel = '';
    if (userStream._links != null) {
      channel = userStream._links['channel'];
    }
    var status = '';
    if (userStream.stream !== null && userStream.stream !== undefined) {
      status = userStream.stream.channel !== undefined ? userStream.stream.channel['status'].trim(27) : '';
    }
    twitchUsers['user'].push({
      username: userData.display_name,
      profile_pic: logo,
      user_id: userData.name,
      bio: userData.bio,
      stream: status,
      channel: channel
    });
    return true;
  }

  // =============================
  // Initialize page load
  if (userData['user'].length === 0) {
    getUserData();
  }
});
