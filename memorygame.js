const cards=["amos","shira","Elyashiv","harel","beery","nave","ori","amos","shira","Elyashiv","harel","beery","nave","ori"]
//TODO

const board = document.getElementById("board");

for (i in cards){
    const element = document.createElement("div");
    element.innerHTML=cards[i];
    board.appendChild(element);
}
