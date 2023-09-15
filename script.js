//practice 1

function cheakNumber(num1, num2) {
  if (num1 + num2 === 100 || num1 == 100 || num2 == 100) {
    alert("true");
  } else {
    alert("this is not that number");
  }
}

//practice 2

const date = new Date();
console.log(date);
const time = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
console.log(`${time}/${min}/${sec}`);

//practice 3

function newCheak(str) {
  if (str.indexOf("new!") === 0) {
    alert(str);
  } else {
    alert(`new! ${str}`);
  }
}

//practice 4

function stringChk(str) {
  let f3 = str.slice(0, 3);
  let l3 = str.slice(str.length - 3);
  let newstr = f3 + l3;
  if (newstr.length > 3) {
    alert(newstr);
  }
}

//practice 5

function ExtractEvenLength(str) {
  if (true) {
    alert(str.slice(0, str.length / 2));
  } else {
  }
}

//practice 6

function concate(str1, str2) {
  let newcon = str1.slice(1) + str2.slice(1);
  alert(newcon);
}

//practice 7

function nearest(num1, num2) {
  if (num1 >= 100 || num2 >= 100) {
    alert("number is invalid");
  } else if (num1 < num2) {
    alert("num2 is close to 100");
  } else if (num2 < num1) {
    alert("num1 is close to 100 ");
  }
}

//practice 7

let numCount = 0;
function evenNum(arr) {
  arr.forEach((element) => {
    newElem = element / 2;
    console.log(newElem);
  });
}

//practice 8

let sum1 = 0;
for (let i = 0; i < 10; i++) {
  sum1 += i;
  // console.log(sum);
}

//practice 9

function even(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      console.log(num[i]);
    } else {
    }
  }
}
//practice 10

function oddNum(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      console.log(num[i]);
    } else {
    }
  }
}
//practice11

let sum = 0;
for (let i = 0; i <= 50; i++) {
  let newSum = (sum += i);
}

let fact = 1;
for (let i = 1; i < 10; i++) {
  let new1 = i * i;
  console.log(new1);
}
