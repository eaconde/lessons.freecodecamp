angular.module('CalculatorApp', [])
  .controller('CalculatorController', function($scope) {
    $scope.number = "0";
    $scope.expression = "";

    var _expr = "";
    var _for_clear = false;
    var _operand = "";
    var _last_char = "";
    var _in_memory = "";
    var _sign = "+";


    /**************************
     ** setExpression
     **************************/
    function setExpression(clean) {
      clean = clean === undefined ? false : clean;if (isNaN(_last_char)) {
        console.log("++, --, **, ÷÷...", _operand, typeof $scope.number);
        $scope.expression = $scope.number.toString().concat(_operand, $scope.number);
      } else {
        $scope.expression += $scope.number.concat(_operand);
      }
      if (clean && isNaN($scope.expression.charAt($scope.expression.length - 1))) {
        // this ensures that the expression has no trailing operand
        console.log('cleaning? ', $scope.expression.slice(0, -1) );
        $scope.expression = $scope.expression.slice(0, -1);
      }
      console.log('setExpression: $scope.expression', $scope.expression);
    }

    /**************************
     ** numberLimitValid
     **************************/
    function numberLimitValid() {
      return $scope.number.length < 20;
    }

    /**************************
     ** reset
     **************************/
    $scope.reset = function(includeResult) {
      console.log('reset', includeResult);
      if (includeResult === undefined) {
        $scope.number = "0";
      }
      $scope.expression = "";
      _expr = "";
      _for_clear = true;
      _operand = "";
      _last_char = "";
      _sign = "+";
      console.log('calculator was reset.');
    };

    /**************************
     ** backspace
     **************************/
    $scope.backspace = function() {
      var num = $scope.number.slice().split('');
      num.pop();
      $scope.number = num.join('');
      if (isNaN($scope.number) || $scope.number.length === 0) {
        $scope.number = "0";
      }
    }

    /**************************
     ** setNumber
     **************************/
    $scope.setNumber = function(number) {
      console.log('number now...', number, '$scope.number', $scope.number);

      /*if ($scope.number.length === 0 && number === '0') { return; }*/
      if ($scope.number.length >= 1 && number === '.' && $scope.number.indexOf('.') > "0") { return; }
      if ($scope.number.length === 1 && $scope.number === '0' && number !== '.') { $scope.number = ""; }

      console.log('_last_char', _last_char);

      if (isNaN(_last_char) && _last_char !== '') {
        // if last char was not a number, add setExpression
        _last_char = number;
        setExpression(false);
        _operand = "";
        _for_clear = true;
      }

      if (_for_clear) {
        console.log('clearing...');
        $scope.number = "";
        _for_clear = false;
      }

      /*if (numberLimitValid()) {*/
        $scope.number += number;
        _last_char = $scope.number;
        console.log('number > ', $scope.number, '|| _last_char >', _last_char);
      /*}*/
    };

    /**************************
     ** setOperand
     **************************/
    $scope.setOperand = function(operand) {
      _operand = operand;
      _last_char = _operand;
      $scope.for_clear = true;
      console.log('setOperand _last_char > ', _last_char);
    };

    /**************************
     ** setSign
     **************************/
    $scope.setSign = function() {
      if ($scope.number === "0") { return; }
      _sign = _sign === "+" ? "-" : "+";
      if (_sign === "-") {
        console.log('should be negative', _sign);
        $scope.number = _sign.concat($scope.number);
      } else {
        console.log('should be positive', _sign);
        $scope.number = $scope.number.slice(1);
      }
    };

    /**************************
     ** setPercent
     **************************/
    $scope.setPercent = function() {
      $scope.number = ($scope.number / 100).toString();
      $scope.for_clear = true;
    };

    /**************************
     ** calculate
     **************************/
    $scope.calculate = function() {
      var result = 0;

      setExpression();
      console.log('calculate $scope.expression >> ', $scope.expression);
      // use eval to get the resulting value
      $scope.number = $scope.$eval($scope.expression).toString();
      $scope.expression = "";
      // reset
      $scope.reset(false);
    };

    $scope.memoryClear = function() {
      _in_memory = 0;
    };
    $scope.memoryAdd = function() {
      if (_in_memory === 0) {
        _in_memory = $scope.number;
      } else {
        _in_memory += "+".concat($scope.number);
      }
      _for_clear = true;
    };
    $scope.memoryRecall = function() {
      var result = $scope.$eval(_in_memory);
      _in_memory = result;
      $scope.number = result.toString();
    };

  });
