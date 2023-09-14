//practice1

function cheakNumber(num1, num2) {
  if (num1 + num2 === 100 || num1 == 100 || num2 == 100) {
    alert("true");
  } else {
    alert("this is not that number");
  }
}

//practice2

const date = new Date();
console.log(date);
const time = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
console.log(`${time}/${min}/${sec}`);

//practice3

function newCheak(str) {
  if (str.indexOf("new!") === 0) {
    alert(str);
  } else {
    alert(`new! ${str}`);
  }
}

//practice4

function stringChk(str) {
  let f3 = str.slice(0, 3);
  let l3 = str.slice(str.length - 3);
  let newstr = f3 + l3;
  if (newstr.length > 3) {
    alert(newstr);
  }
}
stringChk("hello000");
