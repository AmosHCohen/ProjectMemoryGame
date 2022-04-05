const cards=["amos","shira","Elyashiv","harel","beery","nave","ori","amos","shira","Elyashiv","harel","beery","nave","ori"]
const board = document.getElementById("board");
//TODO
function createCard(idx){
    const cardEl = document.createElement("div");
    cardEl.innerHTML=cards[idx];
    cardEl.id=idx;
    cardEl.className="cardsClass"
    return cardEl
}

function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            // Generate random number
            let j = Math.floor(Math.random() * (i + 1));
                        
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }    
        return arr;
        }

//function init(){
    shuffle(cards);
    for (i in cards){
        const element=createCard(i);
        board.appendChild(element);
    }
//}
//init()
