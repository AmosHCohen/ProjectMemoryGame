

// const cards1 = ['<img src="pictures/IMG_sushi.jpg" width="151.04" height="174.8">','<img src="pictures/IMG_bowling.png.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_bowling2.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_chocolate.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_hat.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_pirate.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_popcorn.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_snow.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_princess.jpg" width="151.04" height="174.8">'];
// const cards = ['<img src="pictures/IMG_sushi.jpg" width="151.04" height="174.8">','<img src="pictures/IMG_bowling.png.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_bowling2.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_chocolate.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_hat.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_pirate.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_popcorn.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_snow.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_princess.jpg" width="151.04" height="174.8">'];
// const cards = ['<img src="pictures/IMG_sushi.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_bowling.png.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_bowling2.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_chocolate.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_hat.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_pirate.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_popcorn.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_snow.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_princess.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_sushi.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_bowling.png.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_bowling2.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_chocolate.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_hat.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_pirate.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_popcorn.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_snow.jpg" width="151.04" height="174.8">', '<img src="pictures/IMG_princess.jpg" width="151.04" height="174.8">']
const buttons = [
    {
        name: "icons",
        content: ["????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????"]
    },
    {
        name: "pics",
        content: [
            '<img src="image/1.jpeg" width="151.04" height="174.8">',
            '<img src="image/1.jpeg" width="151.04" height="174.8">',
            '<img src="image/2.jpeg" width="151.04" height="174.8">',
            '<img src="image/2.jpeg" width="151.04" height="174.8">',
            '<img src="image/3.jpeg" width="151.04" height="174.8">',
            '<img src="image/3.jpeg" width="151.04" height="174.8">',
            '<img src="image/4.jpeg" width="151.04" height="174.8">',
            '<img src="image/4.jpeg" width="151.04" height="174.8">',
            '<img src="image/5.jpeg" width="151.04" height="174.8">',
            '<img src="image/5.jpeg" width="151.04" height="174.8">',
            '<img src="image/6.jpeg" width="151.04" height="174.8">',
            '<img src="image/6.jpeg" width="151.04" height="174.8">',
            '<img src="image/7.jpeg" width="151.04" height="174.8">',
            '<img src="image/7.jpeg" width="151.04" height="174.8">',
            '<img src="image/8.jpeg" width="151.04" height="174.8">',
            '<img src="image/8.jpeg" width="151.04" height="174.8">',
            '<img src="image/9.jpeg" width="151.04" height="174.8">',
            '<img src="image/9.jpeg" width="151.04" height="174.8">']
    }
]

let choice = []

let shuffledcards = []

let players = [];

let openedCard = [];

let counter = 0;

let winCounter = 0;

let card1 = '';

let card2 = '';

let thisplayer = 0;

let winner = 0;


let playernum = Number(prompt('How many players?'));

createplayer(playernum);
function createplayer(playernum) {
    for (i = 0; i < playernum; i++) {
        let name = prompt("what is your name?");
        players.push({ name: name, score: 0 })
    }
}
//-------------------------------------------//
for (i in buttons) {
    createButton(buttons, i)
}

function createButton(buttons, idx) {
    const btns = document.getElementById("btns");
    const button = document.createElement("button")

    button.innerHTML = buttons[idx].name
    // button.id=[i]
    button.className = "btn"
    btns.appendChild(button)

    button.addEventListener('click', () => {
        choice = buttons[idx].content
        Shuffle(choice, idx)
        currentplayer(thisplayer)
        btns.classList.add("hide")

    })
}
//-------------------------------------------//

function currentplayer(thisplayer) {
    const currentPlayer = document.getElementById("currentplayer")
    currentPlayer.innerHTML = `It's ${players[thisplayer].name} turn now, score: ${players[thisplayer].score}`
}

//-------------------------------------------//

function Shuffle(choice, idx) {
    shuffledcards = choice.sort((a, b) => 0.5 - Math.random());
    newcards(shuffledcards, idx)
}
//-------------------------------------------//

function newcards(shuffledcards, idx) {
    const board = document.getElementById("board");
    for (i in shuffledcards) {
        let element1 = createcard(i, idx)
        //<div id = "board">
        board.appendChild(element1);
    }
}
//-------------------------------------------//

function createcard(i, idx) {
    const cardel = document.createElement("div")
    //<div></div>
    cardel.innerHTML = '<img src="image/question.png"  width="151.04" height="174.8" >';
    cardel.id = i;
    cardel.className = "card";
    cardel.addEventListener("click", () => {
        cardel.innerHTML = buttons[idx].content[i];                 //?????????? ????????
        counter += 1;
        SelectedCCards(counter, i)

    })
    //-------------------------------------------//

    function SelectedCCards(counter, i) {            //?????????? ?????????????? ????????????
        if (counter == 1) {
            card1 = i;
            if (openedCard.includes(card1)) {    //?????????? ???????????? ?????????????? ???? ???????? 
                card1 = '';
                counter = 0;
            }
        }
        else {
            card2 = i;
            if (openedCard.includes(card2)) {// ?????????? ?????????????? ?????????? ???? ????????
                card2 = '';
                counter = 1;

            }
            else if (card1 == card2) {          //?????????? ???????????? ?????? ?????????????? ??????????
                card2 = '';
                counter = 1;
            }
            else if (card1 && card2) {              //?????????? ???????????? ?????? ??????????????
                isMatch(card1, card2, idx);
            }
        }
    }

    //-------------------------------------------//

    function isMatch(card1, card2, idx) {
        if (buttons[idx].content[card1] == buttons[idx].content[card2]) {//???????????? ?????? ???????????????? ????????????
            openedCard.push(card1, card2);//?????????? ???????????????? ?????????? ???? ?????????????? ????????????
            winCounter += 2
            players[thisplayer].score += 100;
            currentplayer(thisplayer);
            if (winCounter == buttons[idx].content.length) {
                setTimeout(() => {       //???????? ??????????
                    whoisthewinner()
                    alert(`${players[winner].name}  well done!
                    your score is ${players[winner].score} `)
                    return "well done!"
                }, 1000);
            }
        }
        else {   // ???????????????? ???? ???????????? ???????? ???????? ?????????? ???????? ??????

            let a = card1;
            let b = card2;

            setTimeout(() => {

                document.getElementById(a).innerHTML = '<img src="image/question.png"  width="151.04" height="174.8" >';
                document.getElementById(b).innerHTML = '<img src="image/question.png"  width="151.04" height="174.8" >';
            }, 1000);
            playerturn();
            setTimeout(() => { currentplayer(thisplayer) }, 1000);
        }
        counter = 0;  // ???????? ??????????
        card1 = '';
        card2 = '';
        // debugger

    }

    return cardel;
}
//-------------------------------------------//



function playerturn() {
    thisplayer += 1;
    if (thisplayer == playernum) {
        thisplayer = 0;
    }
    return thisplayer;
}

// return player[i]
//-------------------------------------------//

function whoisthewinner() {
    let highscore = 0;

    for (i in players) {
        if (players[i].score > highscore) {
            highscore = players[i].score
            winner = i;
            // debugger
        }

    }
}
//-------------------------------------------//











