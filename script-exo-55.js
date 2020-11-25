let para01 = document.getElementById("texte");

let span01 = document.getElementById("valeur5");

let span02 = document.getElementById("valeur12");

let span03 = document.getElementById("resultat");

// conversion des valeurs en nombre
let spanVal5 = parseInt(span01.innerHTML);

let spanVal12 = parseInt(span02.innerHTML);

// js question 3
span03.innerHTML = (spanVal5 + spanVal12) > 0 ? (spanVal5 + spanVal12).toString() : (spanVal5 - spanVal12).toString();
console.log(span03)

let spanValR = parseInt(span03.innerHTML);

para01.innerHTML = (spanValR - 10) < 0 ?  "attention la valeur est inferieure à 0" : "Mise à jour : la valeur est " +
    "suprérieure à 0";

para01.style.backgroundColor = "red";
para01.style.color = "white";
