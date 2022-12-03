function add(a, b) {
    return a + b;
}

var a = "This Year is ";
var b = 2021;

alert(add(a, b));

var arr = [];
arr[0] = 1;
arr[1] = "abcd";
arr[2] = 'Andy is a "PIG".';

for (var index = 0; index < arr.length; index++) {
    alert(arr[index]);
}

var Node = { Name: "Andy", Status: "A PIG", Born: 1976, Pig: true };

var info = Node.Name + " born in " + Node.Born + ', is ' + Node.Status;

alert(info);