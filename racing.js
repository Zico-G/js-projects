let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;
if (age > 18 && registeredEarly === true){
  raceNumber += 1000;
}
console.log(raceNumber);
if (age > 18 && registeredEarly === true){
  console.log('You will race at 9:30am!');
} else if (age > 18 && registeredEarly === false){
  console.log('You will race at 11:00am!');
} else if (age < 18){
  console.log('You will race at 12:30pm!');
} else {
  console.log('You should see the registration desk');
}
