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
    
    ultimateFusion(ennemi) {
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

let attackGoku = document.querySelector(".kame-ha-mea")

let gokuPoing = document.querySelector(".attackOne")



// startbtn.addEventListener("click", () => {
    // while (freezer.pv > 0 || goku.pv > 0) {
        
        attackGoku.addEventListener("click", () => {
            goku.kamehameha(broly)
            noFight.style.display = "none"
            gokuPoing.style.display = "flex"
            
            console.log(broly.pv);
            setTimeout(() => {
                noFight.style.display = "flex"
                gokuPoing.style.display = "none"            
                
            }, 13000);
        })
        
        // }
        // })
