/* https://www.hackerrank.com/challenges/2d-array */
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {

  var arr = [];
  for (arr_i = 0; arr_i < 6; arr_i++) {
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }

  var max = null;

  for (var i = 0; i < 4; i++) {

    for (var j = 0; j < 4; j++) {
      var wat = getSquare(i, j);
      if (wat >= max || max === null) {
        max = wat;
      }
    }
  }

  function add(a, b) {
    return a + b;
  }

  function getSquare(i, h) {
    var m = arr[i].slice(h, h + 3);
    var m2 = arr[i + 1].slice(h, h + 3);
    var m3 = arr[i + 2].slice(h, h + 3);
    return m.reduce(add, 0) + m3.reduce(add, 0) + m2[1];
  }
}