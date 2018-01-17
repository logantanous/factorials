function factorial(num) {
    // If the number is less than 0, reject it.
    if (num < 0) {
      return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
      return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
      return (num * factorial(num - 1));
    }
}

function factorialLoop(num2) {
  var decreasing = [];
  var todecrease = num2;
  // If the number is less than 0, reject it.
  if (num2 < 0) {
    return -1;
  }
  // If the number is 0, its factorial is 1.
  else if (num2 == 0) {
    return 1;
  }
  // Otherwise, call this recursive procedure again.
  else {
    decreasing.push(todecrease);
    for (var i = 1; i < num2; i++) {
      todecrease = todecrease - 1;
      decreasing.push(todecrease);
    }
  }
  var amount = 1;
  for (var i = 0; i < decreasing.length; i++) {
    amount = amount * decreasing[i];
    console.log(amount);

  }
    return amount;
}





$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    $('#result').html('');
    var x = $('#input').val();

    var result = factorial(x);
    $('#result').append("Recursive result: "+result);

    result = factorialLoop(x);
    $('#result').append("<br>Loop result: "+result);

  })
});
