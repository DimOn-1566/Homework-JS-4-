// Задание №1



function numOne (a , b) {
    if ( a < b){
        x = -1
    } else if ( a > b ){
        x = 1
    } else if ( a = b ){
        x = 0
    }
 
}

numOne(+prompt() , +prompt());

console.log(x);

// задание №2

let arr = +prompt("")

function nameTwo () {
   nam = 1
  for ( i = 1; i <= arr; i++) {
   
    nam *= i    
  }
  
}
nameTwo()
console.log(nam);

// задание №3

let a = prompt("")
let b = prompt("")
let c  = prompt("")




function namTree( a , b , c) {
  x = String(a) + b + c
 
}

namTree(a, b, c)
console.log(x);

// задание №4

   
let lenght_for = +prompt("Введите длину")
let width = +prompt("Введите ширину")

function  all (lenght , width) {
    if( lenght === lenght && (width === width && width != 0)){
        return lenght * width
    } else ( length === lenght && width === 0)
        return lenght * lenght
    

}



console.log(all( lenght , width));


let lenght = +prompt("Введите длину")

console.log(typeof(lenght));

// задание №5

let ideal = +prompt("Введите")

function Five() {
let x = 0;
for( i = 1; i <= ideal/2; i++){
    if ( ideal % i === 0){
        x += i
    }
}
    if( ideal === x){
        znak = "Идеальное "
        alert(" идеальное ")
    } else{ 
        alert("Не идеальное ")
        znak = "не Идеальное "
        
    }
    return znak
}
Five()
console.log(ret = znak);


// Задание №6




let six_one = +prompt("Первое число")

let six_two = +prompt("Второе число")



function Five() {
    let w = 0;
    let x = 0
    let t = 0;

    for( six_one; six_one <= six_two; six_one++){
        console.log(w);
        w++  ;
        for( i = 1; i <= w/2; i++){
            console.log(i);
            if ( w % i === 0){
            x = x + i
                console.log(x);
            }
        }
        if ( six_two === x  ){
           
           console.log(4);
        }
}

let ideal = +prompt("фв")

function Five() {
let x = 0;
for( i = 1; i <= ideal/2; i++){
    console.log(i);
    if ( ideal % i === 0){
       x = x + i
        console.log(x);
    }
}
    if( ideal === x){
        znak = "Идеальное "
        alert(" идеальное ")
    } else{ 
        alert("Не идеальное ")
        znak = "не Идеальное "
        
    }
    return znak
}
   




Five()
console.log(Five());































