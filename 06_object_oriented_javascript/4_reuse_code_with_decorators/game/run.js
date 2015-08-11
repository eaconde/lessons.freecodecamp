var carLike = function(obj, loc) {
  obj.loc = loc;
  obj.move = function() {
    this.loc++;
  }
  return obj;
}

var amy = carLike({}, 1)
amy.move();
var ben = { loc: 9 };
ben.move();
