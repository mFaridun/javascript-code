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

const haftaKuni = Number(prompt('Bugin haftaning qaysi kuni'));

switch (haftaKuni) {
  case 1:
    console.log('Dushanba'); break;
  case 2: 
    console.log('Seshanba'); break;
  case 3:
    console.log('Chorshanba'); break;
  case 4:
    console.log('Payshanba'); break;
  case 5:
    console.log('Juma'); break;
  case 6:
    console.log('Shanba'); break;
  case 7:
    console.log('Yakshanba'); break;

  default:
    console.log('Bunaqa hafta kuni mavjud emas'); break
}
