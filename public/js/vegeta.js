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

class Freezer { // Définition de la classe Boss
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

let freezer = new Freezer ("Freezer", 230, 660)

let startbtnV = document.querySelector(".clickV")


startbtnV.addEventListener("click", () => {
    // while (freezer.pv <= 0 || vegeta.pv <= 0) {
        freezer.purpleBall(vegeta)
        console.log(vegeta);
        vegeta.finalFlash(freezer)
        
        console.log(freezer);
        vegeta.poingV(freezer)
        console.log(freezer);

    // }
})
