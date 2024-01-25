let cherche = document.querySelectorAll("a")

let attackGoku = document.querySelector(".kame")



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
let imgattack = document.querySelector(".dbz")

// startbtn.addEventListener("click", () => {
    // while (freezer.pv > 0 || goku.pv > 0) {
    
        attackGoku.addEventListener("click", () => {
            console.log(freezer.pv);
            goku.kamehameha(freezer)
            // imgattack.src = "./../img/idea/d38utwg-d37d78c1-61ab-4953-8ed1-acea91b3f4fa.gif"
            console.log(freezer.pv);
            setTimeout(() => {
                imgattack.src = ""
                
            }, 6000);
        })

    // }
// })
