let selectSeiyan = document.querySelectorAll("a")

//! Goku 


let noFight = document.querySelectorAll("#noFight")[0]

let firstDivG = document.querySelector(".divFirstAttack")

let btnKame = document.querySelector(".kame-ha-mea")

let secondDivG = document.getElementById("divSecondAttackG")

let btnKikodan = document.querySelector(".attackKikodan")

let treeDivG = document.getElementById("divTreeAttackG")

let btnFusion = document.querySelector(".fusion")

let fourDivG = document.getElementById("divFourAttackG")

let btnFinalKame = document.querySelector(".final-kamehamea")

let fiveDivG = document.getElementById("divFiveAttackG")

let btnfinalAttack = document.querySelector(".attackfusion")

let fusion = 0

let pv = document.querySelector(".pv")

let win = document.getElementById("divWin")
//! end goku

//! BROLY 

let pvB = document.querySelector(".pvB")

let firstAttBroly = document.getElementById("divBrolyAttackB")

//! BROLY 

//?
//! btn restart
let restart = document.querySelector(".restart")
//! btn restart
//?

class Goku {
    constructor(nom, attack, pv) {
        this.nom = nom;
        this.attack = attack;
        this.pv = pv;
    }
    
    kamehameha(ennemi) {
        
        ennemi.pv = ennemi.pv - this.attack
        console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
        moveG(ennemi.pv / 1400 * 100)
    }
    
    kikodan(ennemi) {

        ennemi.pv = ennemi.pv - this.attack + (this.attack /100 * 20)
        console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
        moveG(ennemi.pv / 1400 * 100)
    }
    
    finalKameHaMeHa(ennemi) {

        ennemi.pv = ennemi.pv - this.attack + (this.attack /100 * 40)  
        console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
        moveG(ennemi.pv / 1400 * 100)
    }

    ultimateFusion(ennemi) {
        ennemi.pv = ennemi.pv - this.attack + (this.attack /100 * 60)  
        console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
        moveG(ennemi.pv / 1400 * 100)
    }
}

let goku = new Goku ("Goku", 250, 1400)

class Broly { // Définition de la classe Boss
    constructor(nom, attaque, pv) {
        this.nom = nom;
        this.attaque = attaque;
        this.pv = pv;
    }
    
    greenBall(ennemi) {
        ennemi.pv = ennemi.pv - 250
        console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
        move(ennemi.pv / 1400 * 100)
    }

    fightBroly(ennemi){
        ennemi.pv = ennemi.pv - 350
        console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
        move(ennemi.pv / 1400 * 100)

    }

}
let broly = new Broly ("Broly", 250, 1400)

//? a revoir le randome
// let listAttack 
// let randomAttack
// let stockRnadome

// function brolyAttack(seiyan) {
//     listAttack = [broly.greenBall(seiyan), broly.fightBroly(seiyan)];
//     randomAttack = Math.floor(Math.random() * listAttack.length)
//     stockRnadome = listAttack[randomAttack]
// }

//? broly PV
var i = 0;
function move(quantity) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementsByClassName("pvB")[0];
    var width = 1;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= quantity) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

//? GOKU PV
var g = 0;
function moveG(quantity) {
  if (g == 0) {
    g = 1;
    var elemG = document.getElementsByClassName("pv")[0];
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= quantity) {
        clearInterval(id);
        g = 0;
      } else {
        width++;
        elemG.style.width = width + "%";
      }
    }
  }
}

let beginsFight = document.getElementById("divBeginsAttackG")

function startfight() {
    noFight.style.display = "none"
    beginsFight.style.display ="flex"

    setTimeout(() => {
        beginsFight.style.display ="none"
        noFight.style.display = "flex"

    }, 100);
    //20000
}

startfight()

        
        btnKame.addEventListener("click", () => {
            goku.kamehameha(broly)
            noFight.style.display = "none"
            firstDivG.style.display = "flex"
            
                if (broly.pv <= 0) {
                    broly.pv = 0
                    noFight.style.display = "none"
                    firstDivG.style.display = "none"
                } else {
                    noFight.style.display = "none"
                    firstDivG.style.display = "flex"   
                    setTimeout(() => {
                        noFight.style.display = "none"
                        firstAttBroly.style.display = "flex"
                        setTimeout(() => {
                            firstAttBroly.style.display = "none"
                            noFight.style.display = "flex"
                        }, 16000);
                        //16000
                        firstDivG.style.display = "none"
                    },9600);
                    //9600
                    if (broly.pv <= 0) {
                        alert("You win")
                        restart.style.display = "flex"
                    } else {
                        broly.greenBall(goku)
                        if (goku.pv <= 0) {
                            alert("You lOSS")
                            restart.style.display = "flex"
                        }
                    }
                }
            fusion++
            if (fusion == 2) {
                btnFusion.disabled = ""
                btnFusion.style.opacity = "100%"
            }
        })

        btnKikodan.addEventListener("click", () => {

            goku.kikodan(broly)
            noFight.style.display = "none"
            secondDivG.style.display = "flex"
            
            console.log(broly.pv);
            if (broly.pv <= 0) {
                broly.pv = 0
                noFight.style.display = "none"
                secondDivG.style.display = "none"
            } else {
                noFight.style.display = "none"
                    secondDivG.style.display = "flex"   
                    setTimeout(() => {
                        noFight.style.display = "none"
                        firstAttBroly.style.display = "flex"
                        setTimeout(() => {
                            firstAttBroly.style.display = "none"
                            noFight.style.display = "flex"
                        }, 16000);
                        //16000
                        secondDivG.style.display = "none"
                    }, 11200);
                    //11200
                    if (broly.pv <= 0) {
                        alert("You win")
                        restart.style.display = "flex"

                    } else {
                        broly.greenBall(goku)
                        if (goku.pv <= 0) {
                            alert("You lOSS")
                            restart.style.display = "flex"

                        }
                    }
            }
            fusion++
            console.log(fusion);
            if (fusion == 2) {
                btnFusion.disabled = ""
                btnFusion.style.opacity = "100%"
            }
        })

let imgGoku = document.getElementById("poseF")
let imgGokuBlue = document.getElementById("poseGF")


        
        btnFusion.addEventListener("click", () => {

            noFight.style.display = "none"
            treeDivG.style.display = "flex"
            imgGoku.style.display = "none"
            
            console.log(broly.pv);
            setTimeout(() => {
                noFight.style.display = "flex"
                treeDivG.style.display = "none"            
                btnFusion.disabled = "true"
                btnKame.disabled = "true"
                btnKikodan.disabled = "true"
                btnFinalKame.disabled = ""
                btnfinalAttack.disabled = ""
                btnFinalKame.style.opacity = "100%"
                btnfinalAttack.style.opacity = "100%"
                imgvegetaBlue.style.display = "flex"
                btnFusion.style.opacity = "25%"
            }, 10480);
            //10480
        })

        
        btnFinalKame.addEventListener("click", () => {

            goku.finalKameHaMeHa(broly)
            noFight.style.display = "none"
            fourDivG.style.display = "flex"
            
                noFight.style.display = "none"
                fourDivG.style.display = "flex"   
                setTimeout(() => {
                noFight.style.display = "flex"
                // firstAttBroly.style.display = "flex"
                // setTimeout(() => {
                //     firstAttBroly.style.display = "none"
                //     noFight.style.display = "flex"
                // },16000);
                //16000
                fourDivG.style.display = "none"
                }, 14900);
                //14900
                if (broly.pv <= 0) {
                    alert("You win")
                    restart.style.display = "flex"

                } else {
                    broly.greenBall(goku)
                    if (goku.pv <= 0) {
                        alert("You lOSS")
                        restart.style.display = "flex"

                    }
                }
            
            
        })
        
       
        btnfinalAttack.addEventListener("click", () => {
            goku.kamehameha(broly)
            noFight.style.display = "none"
            fiveDivG.style.display = "flex"
            
            noFight.style.display = "none"
                fiveDivG.style.display = "flex"   
                setTimeout(() => {
                noFight.style.display = "flex"
                // firstAttBroly.style.display = "flex"
                // setTimeout(() => {
                //     firstAttBroly.style.display = "none"
                //     noFight.style.display = "flex"
                // },16000);
                //16000
                fiveDivG.style.display = "none"
                }, 15000);
                //15000
                if (broly.pv <= 0) {
                    alert("You win")
                } else {
                    broly.greenBall(goku)
                    if (goku.pv <= 0) {
                        alert("You lOSS")
                    }
                }
        })
       