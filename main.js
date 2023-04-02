// const johnMassa = Number(prompt('johnning massasi'));
// const johnHeight = Number(prompt('johnning height'));
// const bobMassa = Number(prompt('bobning massasi'));
// const bobHeight = Number(prompt('bobning height'));

// const jonBmi = Math.round(johnMassa / johnHeight **2);
// const bobBmi = Math.round(bobMassa / bobHeight **2);

// console.log(jonBmi);
// console.log(bobBmi);

// if (jonBmi > bobBmi) {
//   console.log('Jonnig Bmi katta Bobnikidan');
// }
// else if (jonBmi < bobBmi) {
//   console.log('Bobning Bmi katta Jonnikidan');
// }
// else {
//   console.log('Bularning Bmilari teng');
// }



// switch case

// const haftaKuni = Number(prompt('Bugin haftaning qaysi kuni'));

// switch (haftaKuni) {
//   case 1:
//     console.log('Dushanba'); break;
//   case 2:
//     console.log('Seshanba'); break;
//   case 3:
//     console.log('Chorshanba'); break;
//   case 4:
//     console.log('Payshanba'); break;
//   case 5:
//     console.log('Juma'); break;
//   case 6:
//     console.log('Shanba'); break;
//   case 7:
//     console.log('Yakshanba'); break;

//   default:
//     console.log('Bunaqa hafta kuni mavjud emas'); break
// }

// function declaration
// function juftToq(element) {

//   if (element % 2 === 0) {
//     console.log(`${element} juft son.`);
//   }
//   else {
//     console.log(`${element} juft son emas.`);
//   }
// }

// juftToq(4);


// function expression
// const juftToq = function(element) {
//     if (element % 2 === 0) {
//     console.log(`${element} juft son.`);
//   }
//   else {
//     console.log(`${element} juft son emas.`);
//   }
// }

// juftToq(8)


// Arrow function
// const juftToq = element => {
//     if (element % 2 === 0) {
//     console.log(`${element} juft son.`);
//   }
//   else {
//     console.log(`${element} juft son emas.`);
//   }
// }

// juftToq(9);


// Sonni teskari o'giramiz
// function reverseDec(number) {
//   const numString = String(number); //sonni stringga o'tkazamiz
//   const reverseNum = numString.split('').reverse().join(''); //split orqali arrayga aylantirib, join orqali yana stringga o'tkazamiz
//   return Number(reverseNum);
// }

// console.log(reverseDec(12345));


// const myText = document.querySelector('.text');

// myText.innerHTML = '<h2>Hello World</h2>'


const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

btn.addEventListener('click', function() {
  text.textContent = 'chesck';
  // text.remove('text');
})
