let order = [];
let playerIn = [];
let flashes;
let level;
let correct; 
let compPlay;
let intervalId;
let start=false;
let won;
let on=false;
let highScore;



const counter = document.querySelector("#number1");
const highScoreCounter=document.querySelector("#number");

const tLeft = document.querySelector("#circleTopLeft");
const tRight = document.querySelector("#circleTopRight");
const bLeft = document.querySelector("#circleBottomLeft");
const bRight = document.querySelector("#circleBottomRight");

const startButton = document.querySelector("#StartB");
const powerLight = document.querySelector("#circlePowerLight");

startButton.addEventListener('click',(event) => {
    
    startGame();

});

//function to start the game and create the order array
function startGame(){
    won=false;
    order=[];
    playerIn=[];
    flashes=0;
    intervalId=0;
    level=1;
    counter.innerHTML =1;
    //highScoreCounter.innerHTML=1;
    correct=true;

    
    for(var i =0; i<20;i++){ //fills order with rand num between 1 and 4
        order.push(Math.floor(Math.random()*4)+1); 
    }


    compPlay=true;
    intervalId = setInterval(gameTurn,2500);

    powerLight.style.backgroundColor="green"; //turning on power light
}


//checks whos turn it is 
function gameTurn(){
    on =false;
    
    if(flashes==level){ //if number of flashes = round its users turn
        clearInterval(intervalId);
        compPlay=false;
        cReset();
        on=true;
    }

    //if its the computers turn turn lights off and read read through order array at flashes calling related functions
    if(compPlay){
        cReset();
        setTimeout(() => { //checks num saved in order up to the total number of flashes needed and calls the necessary function
            if(order[flashes]==1) one(); 
            if(order[flashes]==2) two();
            if(order[flashes]==3) three();
            if(order[flashes]==4) four();
            flashes++;
        },200);
    }
}


//functions to turn lights on 
function one(){
        tLeft.style.backgroundColor="#FF6347";
}
 
function two(){
        tRight.style.backgroundColor="#98FB98";
}

function three(){
        bLeft.style.backgroundColor="#00BFFF";
}

function four(){
        bRight.style.backgroundColor="#FFFF00";
}

function cReset(){ //function to turn lights back off 
    tLeft.style.backgroundColor="darkred";
    tRight.style.backgroundColor="darkgreen";
    bLeft.style.backgroundColor="#4169E1";
    bRight.style.backgroundColor="#666600";
}

/*  functions to check if button clicked is the correct one.. 
if user input is on add the selected button value into the input array and call the check correct funtion
and light up that button, if they havent won yet turn the light back off and keep going. */

    tLeft.addEventListener('click',(event) => {
        if(on){
            playerIn.push(1);
            checkCorrect();
            one();
            if(!won){
                setTimeout(()=>{
                    cReset();
                },300);
            }
        }
    })

    tRight.addEventListener('click',(event) => {
        if(on){
            playerIn.push(2);
            checkCorrect();
            two();
            if(!won){
                setTimeout(()=>{
                    cReset();
                },300);
            }
        }
    })

    bLeft.addEventListener('click',(event) => {
        if(on){
            playerIn.push(3);
            checkCorrect();
            three();
            if(!won){
                setTimeout(()=>{
                    cReset();
                },300);
            }
        }
    })

    bRight.addEventListener('click',(event) => {
        if(on){
            playerIn.push(4);
            checkCorrect();
            four();
            if(!won){
                setTimeout(()=>{
                    cReset();
                },300);
            }
        }
    })

    function checkCorrect(){
        if (playerIn[playerIn.length - 1] !== order[playerIn.length - 1]){ // if player input isnt the same as computer input then theyre not correct and the game restarts 
        correct=false;
        cFlash();
            counter.innerHTML=":(";

            setTimeout(()=>{
                cReset();
                startGame();
            },1000); //delay before new game
        }
        

        if(playerIn.length == 15 && correct){ // go up to 15 rounds
            win();
        }

     
         //if correct but hasnt won increase level by 1 and reset player input and number of flashes for next round
        if (level==playerIn.length && correct && !won){
            level++;
            playerIn = [];
            compPlay=true;
            flashes=0;
            counter.innerHTML=level; //update counter to current level
            if(level>highScore){
                highScoreCounter.innerHTML=level;
                highScore=level;
            }
           
        
            highScoreCounter.innerHTML=level;// high score is highest current level
            
         
        

            intervalId= setInterval(gameTurn, 800);
        }
    }

    function cFlash(){ //function to flash colours when wrong
        tLeft.style.backgroundColor="#FF6347";
        tRight.style.backgroundColor="#98FB98";
        bLeft.style.backgroundColor="#00BFFF";
        bRight.style.backgroundColor="#FFFF00";
        
    }


    //if user wins show smiley and turn game off
    function win(){
        counter.innerHTML=":)";
        
        on=false;
        won=true;
    }