let cherche = document.querySelectorAll("a")

// class Seyain { // Définition de la classe Hero
//     constructor(nom, attack, pv) {
//       this.nom = nom;
//       this.attaque = attack;
//       this.pv = pv;
//     }
// }

class Vegeta {
    constructor(nom, attack, pv) {
        this.nom = nom;
        this.attack = attack;
        this.pv = pv;
    }

    finalFlash(ennemi) {
        if (ennemi.pv > 0) {
            ennemi.pv = ennemi.pv = this.attack
            console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
        } 
    }

    poingV(ennemi) {
        if (ennemi.pv > 0) {
            ennemi.pv = ennemi.pv = this.attack / 2
            console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);
        } 
    }

}

let vegeta = new Vegeta ("Vegeta", 330, 435)

class Broly { // Définition de la classe Boss
    constructor(nom, attaque, pv) {
      this.nom = nom;
      this.attaque = attaque;
      this.pv = pv;
    }

    purpleBall(ennemi) {
        if (ennemi.pv > 0) {
            ennemi.pv = ennemi.pv = this.attack
            console.log(`il rest a ${ennemi.nom} => ${ennemi.pv}`);

        } 
    }
}

let broly = new Broly ("Broly", 230, 660)

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
