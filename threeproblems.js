/**
 * Solves the first
 * Created by Sam on 9/21/2015.
 */

var testData = [1, 2, 3, 4];

function sumFor(data) {
  var sum = 0;
  for (var i = 0; i < data.length; i++){
    sum += data[i];
  }
  return sum;
}

console.log("sumFor: " + sumFor(testData));

function sumWhile(data){
  var sum = 0;
  var i = 0;
  while(i < data.length){
    sum += data[i];
    i++;
  }
  return sum;
}

console.log("sumWhile: " + sumWhile(testData));

function sumRecursion(data){
  if(data.length === 0){
    return 0;
  }
  else{
    return data[0] + sumRecursion(data.slice(1, data.length));
  }
}

console.log("sumRecursion: " + sumRecursion(testData));

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, num) {
    return memo + num;
  }, 0);
}

console.log("sumTheSimpleWay: " + sumTheSimpleWay(testData));

var testList1 = [1, 2, 3];
var testList2 = ["a", "b", "c"];

function zipList(data1, data2){
  var resultList = [];
  for(var i = 0; i < data1.length; i++){
    resultList.push(data1[i], data2[i])
  }
  return resultList;
}

console.log("zipList: " + zipList(testList1, testList2));

function zipListTheSimpleWay(data1, data2){
  return _.flatten(_.zip(data1, data2));
}

console.log("zipListTheSimpleWay: " + zipListTheSimpleWay(testList1, testList2));

function fib(){
  var head = 0;
  var tail = 1;
  var fibList = [tail];
  for(var i = 0; i < 99; i++){
    var tempHead = head;
    head = head + tail;
    tail = tempHead;
    fibList.push(head);
  }
  return fibList;
}

console.log("fib: " + fib());