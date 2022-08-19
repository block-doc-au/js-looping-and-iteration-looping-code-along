// Code your solutions in this file


function writeCards (names, event){
    let myArray = new Array;
 for (let i=0; i<names.length; i++){
    myArray[i] =`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
 }
 return myArray;
};

function countDown (startNumber){
    let i = startNumber;
    while (i > -1) {
        console.log(i);
        i --;
    };
}
