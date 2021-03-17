'use strict';
let result1 = 0;



// //question1
// let major =prompt('Is my major psycology?');
// switch (major.toLowerCase())
// {
// case 'yes':
// case 'y':
//   result1=result1+1;
//   alert('It is Correct !');
//   console.log(major);
//   break;
// case 'no':
// case 'n':
//   alert('Try Again!!');
//   console.log(major);
//   break;
// }

// q1
function guess1() {
  let major =prompt('Is my major psycology?');
  switch (major.toLowerCase())
  {
  case 'yes':
  case 'y':
    result1=result1+1;
    alert('It is Correct !');
    console.log(major);
    break;
  case 'no':
  case 'n':
    alert('Try Again!!');
    console.log(major);
    break;
  }
}
guess1();







// //question2
// let age =prompt('Am I 27 years old?');
// switch (age.toUpperCase())
// {
// case 'yes':
// case 'y':
//   alert('Wrong');
//   console.log(age);
//   break;
// case 'no':
// case 'n':
//   result=result+1;
//   alert('You guessed it ');
//   console.log(age);
//   break;
// }

//q2*

function guess2(){
  let age =prompt('Am I 27 years old?');
  switch (age.toLowerCase())
  {
  case 'yes':
  case 'y':
    alert('Wrong');
    console.log(age);
    break;
  case 'no':
  case 'n':
    result1=result1+1;
    alert('You guessed it ');
    console.log(age);
    break;
  }
}
guess2();




// //question3
// let Language= prompt('Dose I speak turkish language?');
// switch (Language.toLowerCase())
// {
// case 'yes':
// case 'y':
//   alert('just A little ');
//   console.log(Language);
//   break;
// case 'no':
// case 'n':
//   result1=result1+1;
//   alert('Unfortunately');
//   console.log(Language);
//   break;
// }


//q3

function guess3 (){
  let Language= prompt('Dose I speak turkish language?');
  switch (Language.toLowerCase())
  {
  case 'yes':
  case 'y':
    alert('just A little ');
    console.log(Language);
    break;
  case 'no':
  case 'n':
    result1=result1+1;
    alert('Unfortunately');
    console.log(Language);
    break;
  }
}
guess3();





// //question4
// let name1= prompt('Is my name Muhammad?');
// switch (name1.toUpperCase())
// {
// case 'yes':
// case 'y':
//   result1=result1+1;
//   alert('yes my name is muhammad');
//   console.log(name1);
//   break;
// case 'no':
// case 'n':
//   alert('NO NO NO');
//   console.log(name1);
//   break;
// }


//q4*

function guess4 (){
  let name1= prompt('Is my name Muhammad?');
  switch (name1.toLowerCase())
  {
  case 'yes':
  case 'y':
    result1=result1+1;
    alert('yes my name is muhammad');
    console.log(name1);
    break;
  case 'no':
  case 'n':
    alert('NO NO NO');
    console.log(name1);
    break;
  }
}
guess4();






//question5


// let hopes= prompt('is favorite hobbies are programming?');
// switch (hopes.toLowerCase())
// {
// case 'yes':
// case 'y':
//   result1=result1+1;
//   alert('yes true');
//   console.log(hopes);
//   break;
// case 'no':
// case 'n':
//   alert('NOOOO!');
//   console.log(hopes);
//   break;
// }

//q5

function guess5 (){
  let hopes= prompt('is favorite hobbies are programming?');
  switch (hopes.toLowerCase())
  {
  case 'yes':
  case 'y':
    result1=result1+1;
    alert('yes true');
    console.log(hopes);
    break;
  case 'no':
  case 'n':
    alert('NOOOO!');
    console.log(hopes);
    break;
  }
}
guess5();




// //qustion 6


// alert('You have 4 guesses, guess from 1-20');


// let guess = Number(prompt('what is your guess ?'));

// for (let i=0;i<=4;i++){
//   if (15 === guess){
//     result1=result1+1;
//     alert('congratulations its right');
//     break;
//   }else{
//     guess = prompt('Try Again not matched');
//   }
// }


// q6

function guess6() {
  alert('You have 4 guesses, guess from 1-20');
  let gussNumber = Number(prompt('what is your guess ?'));
  for (let i = 0; i <= 4; i++) {
    if (15 === gussNumber) {
      result1 = result1 + 1;
      alert('congratulations its right');
      break;
    } else {
      gussNumber = prompt('Try Again not matched');
    }
    console.log(gussNumber);
  }
}
guess6();



// qustion 7


// alert('You have 6 guesses, guess one off my favorite animals');

// let animals = ['cats ,dogs,ants']; 
// let guess1 = prompt('guess one off my favorite animals');

// for(let i=0;i<=6; i++){
//   if (guess1 ==='dogs' || guess1==='monkyes' || guess1 ==='fieshs'){
//     result1=result1+1;
//     alert('Correct !!');
//     break;
//   }else{
//     guess1 = prompt('Wrong !');
//   }
// }
// alert('Your result ' + result1);


// q7

function guess7 (){
  alert('You have 6 guesses, guess one off my favorite animals');

  let animals = ['cats' ,'dogs','ants'];
  let guess7 = prompt('guess one off my favorite animals');

  for(let i=0;i<=6; i++){
    if (guess7 === animals[1] || guess7===animals[2] || guess7 ===animals[0]){
      result1=result1+1;
      alert('Correct !!');
      break;
    }else{
      guess7 = prompt('Wrong !');
    }
  }
  alert('Your result ' + result1);
}
guess7();


