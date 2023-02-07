// // Задание №1



function numOne (a , b) {
    if ( a < b){
        x = -1
    } else if ( a > b ){
        x = 1
    } else if ( a = b ){
        x = 0
    }
 
}

numOne(+prompt("Задание №1\n Введите первое значение") , +prompt("Задание №1 \n Введите второе значение"));

console.log(x);

// // задание №2

let arr = +prompt("Задание №2\n вычислить факториал переданного числа ")

function nameTwo () {
   nam = 1
  for ( i = 1; i <= arr; i++) {
   
    nam *= i    
  }
  
}
nameTwo()
console.log(nam);

// // задание №3

let a = prompt("Задание №3\n Введите первое значение")
let b = prompt(" Задание №3\n Введите второе значение ")
let c  = prompt("Задание №3\n Введите третее значение")




function namTree( a , b , c) {
  x = String(a) + b + c
 
}

namTree(a, b, c)
console.log(x);

// // задание №4

function all () {
   let lenghtFor = +prompt("Задание №4\n Введите длину")
   let width = +prompt(" Задание №4\n Введите ширину")
 
   a = lenghtFor * width
  if ( width == 0) {
   a = lenghtFor * lenghtFor
  }
  console.log(a);
}


console.log(all());


let lenght = +prompt("Введите длину")

console.log(typeof(lenght));

// // задание №5



function five(numFive = +prompt("Задание №5\n Ввести значение ")) {
  
   let b = 0;
   for(let i = 1; i < numFive; i++ ){
         if(numFive % i == 0 ){
            b += i
         }
      }
         if ( numFive == b){
            console.log('Совершенное');
            } else {
               console.log('Не Совершенное');
         }
      
   }  

   console.log(five() );






   



// // Задание №6





function pefectNumber(a) {
   let b = 0;

   for (let i = 1; i < a; i++) {
       if (a % i == 0) b += i;
   }

   if (a == b) {
       return true;
   } else {
       return false;
   }
}


function sixNam(a = +prompt("Задание №6\n Введите первое число"), b = +prompt("Задание №6\n Введите второе число ")) {
   for(let i = a; i <= b; i++) {
       if(pefectNumber(i)) {
           console.log(`${i} - совершенное число`);
       }
   }
}

sixNam();
   














// let six_one = +prompt("Задание №6\n Шестое задание\n Первое число")

// let six_two = +prompt("Задание №6\n Второе число")



// function Five() {
   
//  for( six_one; six_one <= six_two; six_one++){
    
//     let x = 0
//     for(i = 1; i <= six_one/2; i++ ){
       
//         if( six_one % i === 0){
//             x = x + i
//             // console.log(x);
//         }
//         if ( six_one === x ){
//            console.log(six_one)
//         }
//      }
 
//  }
  

// Five()

// задание 7


function time() {
   do{
   hour = +prompt("Задание №7\n Введите часы") 
   if( hour == 0){
      hour = "00"
     } 
 } while( hour > 99)
do{
   minut = +prompt(" Задание №7\n Введите минуты")
   if( minut == 0){
    minut = "00"
   }
} while ( minut >= 59)
do{
   sec = +prompt(" Задание №7\n Введите секунды") 
   if( sec == 0){
      sec = "00"
     } 
} while (sec > 59) {
   
}
 a = `${hour}:${minut}:${sec}`
    console.log(a);
}
time()


// задание 8

function timrNime(){

   hour = +prompt(" Задание №8\n Введите часы")

   minut = +prompt(" Задание №8\n Введите минуты")

   sec = +prompt(" Задание №8\n Введите секунды")

   a = (hour * 3600) + (minut * 60) + sec

  console.log(a);


}
timrNime()


// задание 9

function timeNine () {

   let sec = +prompt(" Задание №9\n Введите секунды")

   a = Math.floor(sec / 3600)  

  b = (sec - ((Math.floor(a)) * 3600 ))/60

  c = sec - (a * 3600 ) - (Math.floor(b) * 60)

    console.log(`${a}:${Math.floor(b)}:${c}`)  ;

}

timeNine()
   
// задание 10


function timrten(){

   let tenOne = +prompt("Задание №10\n Первая дата\n введите часы")
   let tenTwo = +prompt("Задание №10\n Первая дата\n введите минуты")
   let tenTree =+prompt('Задание №10\n Первая дата\n ввести секунды')
   let tenfore = +prompt("Задание №10\n Вторая дата\n введите часы")
   let tenfive = +prompt("Задание №10\n Вторая дата\n введите минуты")
   let tensix = +prompt('Задание №10\n Вторая дата\n ввести секунды')
 

   a = (tenOne * 3600) + (tenTwo * 60) + tenTree
   b = (tenfore * 3600) + (tenfive * 60) + tensix

   w = b - a

  console.log(a);
  console.log(b);
  console.log(w);

   let sec = w

   a = Math.floor(sec / 3600)  

  b = (sec - ((Math.floor(a)) * 3600 ))/60

  c = sec - (a * 3600 ) - (Math.floor(b) * 60)

    console.log(`${a}:${Math.floor(b)}:${c}`)  ;


}
timrten()

