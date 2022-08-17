// Code your solutions in this file
/*
for(let age=30;age<40;age++){
console.log(`I'm ${age} years old. Happy birthday to me!`);

}*/

/*
const gifts=["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for(let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
      
    }
return gifts;
}
wrapGifts(gifts); */

/*
// This is a for Loop trial- Thank You Messages

const messages=[];
function writeCards(messages,myEvent){

    for(let i=0;i<messages.length;i++){
let thankMsg=`Thank you,${messages[i]},for the wonderful,${myEvent} gift!`;
console.log(thankMsg);


}
    return messages;
}

writeCards(["Ada","Brendan","Ali"],"birthday");
*/

// While loop assignment

function countDown(x){
    let count=x;
    while(count>=0){
        console.log(count--);
    }
}
countDown(10);