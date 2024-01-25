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
    
    poingG(ennemi) {
        if (ennemi.pv > 0) {
            ennemi.pv = ennemi.pv - this.attack / 2
            console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
            
        } 
    }
}




let goku = new Goku ("Goku", 350, 500)


class Freezer { // Définition de la classe Boss
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

let freezer = new Freezer ("Freezer", 230, 660)

let startbtn = document.querySelector(".click")
let noFight = document.querySelectorAll("#noFight")[0]
let attackGoku = document.querySelector(".kame")


// startbtn.addEventListener("click", () => {
    // while (freezer.pv > 0 || goku.pv > 0) {
        
        attackGoku.addEventListener("click", () => {
            goku.kamehameha(freezer)
            noFight.style.display = "none"
            gokuPoing.style.display = "flex"
            
            
            console.log(freezer.pv);
            setTimeout(() => {
                noFight.style.display = "flex"
                gokuPoing.style.display = "none"            
                
            }, 2000);
        })
        
        // }
        // })
