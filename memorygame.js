const cards=["amos","shira","Elyashiv","harel","beery","nave","ori","amos","shira","Elyashiv","harel","beery","nave","ori"]
const board = document.getElementById("board");
let counter=0;
let card1='';
let card2='';
let success=0;


function createCard(idx){//פונקציה ליצירת כרטיס
    const cardEl = document.createElement("div");
    cardEl.id=idx;
    cardEl.className="cardsClass"
    cardEl.addEventListener('click',()=> {//זה כשהקלף מתהפך
        cardEl.innerText = cards[idx]
        counter++
        if (counter==1?card1= idx:card2= idx) {
            // isMatch(counter)
        }
    })
    return cardEl
}

function shuffle(arr) {//פונקציה שמערבבת את הכרטיסים
        for (let i = arr.length - 1; i > 0; i--) {
            // Generate random number
            let j = Math.floor(Math.random() * (i + 1));         
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }    
        return arr;
        }

// function isMatch(counter) {
//     if (counter==2) {
//         if (card1==card2) {
//             success++
//             //לטפל בקלפים

//         }
//         else{
//             //להפוך בחזרה
//         }
//        card1='' 
//        card2='' 
//        counter=0
//     }
// }

shuffle(cards);
for (i in cards){//יצירת הכרטיסים בפועל- מכניס לאלמנט ואז מכניס את האלמנט ללוח
    const element=createCard(i);
    board.appendChild(element);
}

// while (success<7) {
//     isMatch(counter)
// }
// alert("well donde")



