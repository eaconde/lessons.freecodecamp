// http://www.freecodecamp.com/challenges/bonfire-exact-change

Array.prototype.getDenominations = function(change) {
  var currencies =
    [
      [ 'PENNY', 0.01 ],
      [ 'NICKEL', 0.05 ],
      [ 'DIME', 0.10 ],
      [ 'QUARTER', 0.25 ],
      [ 'ONE', 1.00 ],
      [ 'FIVE', 5.00 ],
      [ 'TEN', 10.00 ],
      [ 'TWENTY', 20.00 ],
      [ 'HUNDRED', 100.0 ]
    ];

  var denominations = [];
  var self = this;
  while (change > 0) {
    currencies.some(function(currency, i) {
      if (currency[1] >= change) {
        var curr;
        if (currency[1] === change) {
          curr = currencies[i];
          // verify if curr is still available. if not move 1 currency down
          if (!self.currencyAvailable(curr)) { curr = currencies[i-1]; }
        } else {
          curr = currencies[i-1];
          // verify if curr is still available. if not move 1 currency down
          if (!self.currencyAvailable(curr)) { curr = currencies[i-2]; }
        }
        // subtract change given
        change = (change - curr[1]).toFixed(2); change = parseFloat(change);
        // track what was given
        denominations.createOrUpdate(curr[0], curr[1]);
        self.subtract(curr[0], curr[1]);
        return true;
      }
    });
  }

  console.log('final denominations', JSON.stringify(denominations));
  return denominations;
};

Array.prototype.createOrUpdate = function(name, value) {
  var updated = false;
  this.some(function(item, i) {
    if (item[0] === name) {
      item[1] = parseFloat((parseFloat(item[1]) + value).toFixed(2));
      updated = true;
      return updated;
    }
  });
  // if not updated, just add a new entry
  if (!updated) { this.push([ name, value ]); }
};

Array.prototype.subtract = function(name, value) {
  this.some(function(item, i) {
    if (item[0] === name) {
      item[1] = parseFloat((parseFloat(item[1]) - value).toFixed(2));
      updated = true;
      return updated;
    }
  });
};

Array.prototype.currencyAvailable = function(curr) {
  var haveChange = false;
  this.some(function(cid) {
      if (cid[0] === curr[0]) {
        if (cid[1] > 0) { haveChange = true; return true; }
      }
    });
  return haveChange;
};


function drawer(price, cash, cid) {
  var change = cash - price;
  var total =
    cid
      .map(function(money) { return money[1]; })
      .reduce(function(c, i) { return c + i; })
      .toFixed(2);

  total = parseFloat(total);

  if (total < change) {
    return "Insufficient Funds";
  } else if (total === change) {
    return "Closed";
  } else {
    return cid.getDenominations(change);
  }
}

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
