let selectSeiyan = document.querySelectorAll("a")



class Goku {
    constructor(nom, attack, pv) {
        this.nom = nom;
        this.attack = attack;
        this.pv = pv;
    }
    
    kamehameha(ennemi) {
        if (ennemi.pv > 0) {
            ennemi.pv = ennemi.pv - this.attack
            console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
            pvB.style.width = 
        } 
    }
    
    kikodan(ennemi) {
        if (ennemi.pv > 0) {
            ennemi.pv = ennemi.pv - this.attack + (this.attack /100 * 40)  
            console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
            
        } 
    }
    
    finalKameHaMeHa(ennemi) {
        if (ennemi.pv > 0) {
            ennemi.pv = ennemi.pv - this.attack + (this.attack /100 * 60)  
            console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
        } 
    }
}


let goku = new Goku ("Goku", 350, 1000)


class Broly { // Définition de la classe Boss
    constructor(nom, attaque, pv) {
        this.nom = nom;
        this.attaque = attaque;
        this.pv = pv;
    }
    
    purpleBall(ennemi) {
        if (ennemi.pv > 0) {
            ennemi.pv = ennemi.pv - this.attack
            console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
        } 
    }
}

let broly = new Broly ("Broly", 250, 1000)

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

let pvB = document.querySelector(".pvB")

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
// startbtn.addEventListener("click", () => {
    // while (freezer.pv > 0 || goku.pv > 0) {
        
        btnKame.addEventListener("click", () => {
            goku.kamehameha(broly)
            noFight.style.display = "none"
            firstDivG.style.display = "flex"
            
            console.log(broly.pv);
            setTimeout(() => {
                noFight.style.display = "flex"
                firstDivG.style.display = "none"            
                pv.style.width = "20%"    
            }, 100);
            //?9600
            fusion++
            if (fusion == 2) {
                btnFusion.disabled = ""
            }
        })

        btnKikodan.addEventListener("click", () => {

            goku.kikodan(broly)
            noFight.style.display = "none"
            secondDivG.style.display = "flex"
            
            console.log(broly.pv);
            setTimeout(() => {
                noFight.style.display = "flex"
                secondDivG.style.display = "none"            
                
            }, 100);
            //?11200
            fusion++
            console.log(fusion);
            if (fusion == 2) {
                btnFusion.disabled = ""
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
                imgGokuBlue.style.display = "flex"
            }, 180);
            //?10480
            // comp++
            // console.log(comp);
            // if (comp == 2) {
            //     btnFusion.disabled = ""
            //     console.log(btnBoules);
            // }
        })

        
        btnFinalKame.addEventListener("click", () => {

            goku.finalKameHaMeHa(broly)
            noFight.style.display = "none"
            fourDivG.style.display = "flex"
            
            console.log(broly.pv);
            setTimeout(() => {
                noFight.style.display = "flex"
                fourDivG.style.display = "none"            
                
            }, 200);
            //15000
            
            
        })
        
       
        btnfinalAttack.addEventListener("click", () => {
            goku.kamehameha(broly)
            noFight.style.display = "none"
            fiveDivG.style.display = "flex"
            
            console.log(broly.pv);
            setTimeout(() => {
                noFight.style.display = "flex"
                fiveDivG.style.display = "none"            
                
            }, 14800);            
        })