// http://www.freecodecamp.com/challenges/bonfire-friendly-date-ranges

Array.prototype.parseDates = function() {
  // build our dates array
  // 0 = year
  // 1 = month
  // 2 = date
  var ranges = [];
  this.map(function(date) {
    var range = date.split(/\-/g);
    ranges.push([parseInt(range[0]), parseInt(range[1]), parseInt(range[2])]);
  });
  // month definition
  var months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  };
  // format day to english
  function getDay(day) {
    if (day === 1) {
      return day + 'st';
    } else if (day === 2) {
      return day + '2d';
    } else if (day === 3) {
      return day + 'rd';
    } else {
      return day + 'th';
    }
  }

  // param assignment to make processing more readable
  var y1 = ranges[0][0],
    y2 = ranges[1][0];
  var m1 = ranges[0][1],
    m2 = ranges[1][1];
  var d1 = ranges[0][2],
    d2 = ranges[1][2];

  // default full date
  var date1 = ''.concat(months[m1], ' ', getDay(d1), ', ', y1);
  var date2 = ''.concat(months[m2], ' ', getDay(d2), ', ', y2);

  if (d1 === d2 && m1 === m2 && y1 === y2) {
    // same year month day. return full but 1 date only
    console.log('same year month day. return full but 1 date only');
    return [date1];
  } else {
    if (d1 !== d2 && m1 === m2 && y1 === y2) {
      // same year month diff day. omit year and month
      console.log('same month. omit year and month');
      date1 = ''.concat(months[m1], ' ', getDay(d1));
      date2 = getDay(d2);
    } else if (m1 < m2 && d1 === d2) {
      // range from-to. omit year on first date
      console.log('range from-to. omit year on first date');
      date1 = ''.concat(months[m1], ' ', getDay(d1));
      // date2 remains as is...
    } else {
      // diff year but 1 month apart. omit year
      console.log('diff year but 1 month apart. omit year');
      var tempDate = new Date(this[0]);
      tempDate.setMonth(tempDate.getMonth() + 1);
      if (tempDate.getFullYear() === y2) {
        date1 = ''.concat(months[m1], ' ', getDay(d1));
        date2 = ''.concat(months[m2], ' ', getDay(d2));
      }
    }
  }

  console.log([date1, date2]);
  return [date1, date2];
};

function friendly(dates) {
  var result = dates.parseDates();
  return result;
}

friendly(['2015-12-01', '2017-02-03']);
