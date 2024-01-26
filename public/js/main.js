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
            
        } 
    }
    
    kikodan(ennemi) {
        if (ennemi.pv > 0) {
            ennemi.pv = ennemi.pv - this.attack + (this.attack /100 * 40)  
            console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
            
        } 
    }
}


let goku = new Goku ("Goku", 350, 500)


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

let broly = new Broly ("Broly", 230, 660)

// let startbtn = document.querySelector(".click")
let noFight = document.querySelectorAll("#noFight")[0]

let firstDivG = document.querySelector(".divFirstAttack")

let btnKame = document.querySelector(".kame-ha-mea")


let secondDivG = document.getElementById("divSecondAttackG")

let btnKikodan = document.querySelector(".attackKikodan")

let treeDivG = document.getElementById("divTreeAttackG")

let btnFusion = document.querySelector(".fusion")




let fusion = 0

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
                
            }, 9600);
            fusion++
            console.log(comp);
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
                
            }, 200);
            //11200
            fusion++
            console.log(fusion);
            if (fusion == 2) {
                btnFusion.disabled = ""
            }
        })
        
        // }
        // })

        btnFusion.addEventListener("click", () => {

            noFight.style.display = "none"
            treeDivG.style.display = "flex"
            
            console.log(broly.pv);
            setTimeout(() => {
                noFight.style.display = "flex"
                treeDivG.style.display = "none"            
                
            }, 10480);
            // comp++
            // console.log(comp);
            // if (comp == 2) {
            //     btnFusion.disabled = ""
            //     console.log(btnBoules);
            // }
        })