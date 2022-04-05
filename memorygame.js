const cards=["amos","shira","Elyashiv","harel","beery","nave","ori","amos","shira","Elyashiv","harel","beery","nave","ori"]
//TODO
function createCard(idx){
    const cardEl = document.createElement("div");
    cardEl.innerHTML=cards[idx];
    cardEl.id=idx;
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
    shuffle(cards)
    const board = document.getElementById("board");
    for (i in cards){
        const element=createElement[i];
        board.appendChild(element);
    }
//}
//init()
