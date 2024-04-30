'use strict';
// accede aux elements qui constitue wordle
const gameEl = document.getElementById("game");

// definition des valeurs globales 
let currentRowIndex = 0;
let currentTileIndex = 0;
let targetWord = 'TEMPS';
const alphabet = /[a-zA-Z]/;




// fonction qui permet d'inserer les lettres au bon endroit
function setLetter(row, tileNumber, letter) {
  
  const tileElement = document.querySelector(`#game .row:nth-child(${row}) .tile:nth-child(${tileNumber})`);


  
  tileElement.textContent = letter;

  }

// insert la lettre et passe au 'row' et 'tile' suivant 
function keyUpHandler(event) {
    const key = event.key.toUpperCase(); 
    
    if (alphabet.test(key) && key.length === 1) {

      if (currentRowIndex < 6) {
        setLetter(currentRowIndex + 1, currentTileIndex + 1, key);
        currentTileIndex++; 
      }
    }
    }
  

  

      // permet de supprimer la lettre et changer la lettre

function deleteLetter(event) {
   let letter_to_delete = document.querySelector(`#game .row:nth-child(${currentRowIndex+1}) .tile:nth-child(${currentTileIndex})`);
  
        if (event.key === "Backspace") {

            letter_to_delete.textContent = "";
            currentTileIndex--;
            keyUpHandler(event);

        }
      }
    

 
    // entre le mot,verifie si il correspond au 'targetword' (pas encore) et passe a la ligne suivante
function enterword(event){
  if (event.key === "Enter" && currentTileIndex === 5) {

    currentRowIndex++;
    currentTileIndex = 0;
    
    
}
      }
      
// fonction a refaire (marche pas)
function validateWord(targetWord) {
       
        for (let i = 0; i < targetWord.length; i++) {
          const letter = targetWord[i];
          const tileElement = document.querySelector(`#tile-${currentRowIndex}-${i + 1}`);
      
          if (targetWord[i] === letter) {
            tileElement.classList.add("correct"); 
          } else if (targetWord.includes(letter)) {
            tileElement.classList.add("present"); 
            
        }
      }
    }

  
// event listener pour les fonctions qui supprime,entre et insere la lettre
  document.addEventListener("keyup", keyUpHandler);
  document.addEventListener("keydown", deleteLetter);
  document.addEventListener("keydown", enterword);