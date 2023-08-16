// big bu biz yozgan ko'dlarni  xotiradan va operativkadan
// qancha joy olayotganligini etib turadigan standart hisoblanadi

function myFunc(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    console.log(total , "wqioqwuqoiwu" , i)
    total += i;
  }
  return total;
}
console.log(myFunc(5) , "hhh");
