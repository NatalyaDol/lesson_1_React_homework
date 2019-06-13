// 
//1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0),
//callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. 
//Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции

//version by teacher
function loop(times = 0, callback = null) {
  console.log("Exercise #1");
  if (times < 1) {
    console.log("Time is 0");
  } else if (typeof callback === 'function') {
    for (let i = 0; i < times; i++) {
      callback(i);
    }
  }
};
function getTime(par){
  console.log(`we writing a string # ${par + 1}`);
};
loop(5, getTime);

//my version
// function loop(times = 0, callback = null) {
//   let j = times;
//   console.log("Exercise #1");
//   if (j < 1) {
//     console.log("Time is 0");
//   } else {
//     for (let i = 0; i < j; i++) {
//       callback(i);
//     }
//   }
// };
// function getTime(par){
//   console.log(`we writing a string # ${par + 1}`);
// };
// loop(5, getTime);