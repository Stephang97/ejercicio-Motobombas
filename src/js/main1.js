var bomberos = [];
var motobombas = [];
var idisB = [];
var idisM = [];
var conte1 = document.getElementById("conte1");
var conte2 = document.getElementById("conte2");


document.getElementById("agregarBombero")
    .addEventListener("click", function () {
        document.getElementById("conte1").innerHTML = "";
        idisB = [];
        let nom = document.getElementById("nombre").value;
        let fecha = document.getElementById("fecha").value;
        let bomber = new Bombero(nom, fecha);
        bomberos.push(bomber);
        dibujarBombero();
        marcarVariosBomberos();

        document.getElementById("nombre").value = "";
        document.getElementById("fecha").value = "";


    });
document.getElementById("agregarMotobomba")
    .addEventListener("click", function () {
        idisM = [];
        document.getElementById("conte2").innerHTML = "";
        let codigo = document.getElementById("codigo").value;
        let motobomb = new Motobomba(codigo);
        motobombas.push(motobomb);
        dibujarMotobomba();
        marcarVariasMotobombas();
        document.getElementById("codigo").value = "";



    });
document.getElementById("asociar")
    .addEventListener("click", function () {
       
        console.log(bomberos[nombre-1]+ motobombas[codigo-1)

    });

dibujarBombero = () => {
    for (var i = 0; i < bomberos.length; i++) {
        var celda = document.createElement('div');
        celda.className = 'celdas';
        celda.id = i;
        idisB.push(i);
        celda.appendChild(document.createTextNode(bomberos[i].nombre));

        conte1.appendChild(celda);

    }
}


dibujarMotobomba = () => {
    for (var i = 0; i < motobombas.length; i++) {
        var celda = document.createElement('div');
        celda.className = 'celdas';
        celda.id = i;
        idisM.push(i);
        celda.appendChild(document.createTextNode("M" + i));
        conte2.appendChild(celda);

    }
}

marcarVariosBomberos = () => {
    for (let d = 0; d < idisB.length; d++) {
        marcaNumeroB(d);
    }
}

marcaNumeroB = (d) => {
    let no = document.getElementById(d);
    let f = document.getElementById(d).innerHTML;
    let x1 = 0;
    no.addEventListener("click", function () {
        if (x1 === 0 && f != "0") {
            no.style.backgroundColor = "green";
            x1 = 1;
            console.log(no.innerHTML);
            //console.log(f);
        } else if (f == "0") { } else {
            no.style.backgroundColor = "white";
            x1 = 0;
            //console.log(f);
        }
    });
}

marcarVariasMotobombas = () => {
    for (let d = 0; d < idisM.length; d++) {
        marcaNumeroM(d);
    }
}

marcaNumeroM = (d) => {
    let no = document.getElementById(d);
    let f = document.getElementById(d).innerHTML;
    let x1 = 0;
    no.addEventListener("click", function () {
        if (x1 === 0 && f != "0") {
            no.style.backgroundColor = "green";
            x1 = 1;
            console.log(no.innerHTML);
            //console.log(f);
        } else if (f == "0") { } else {
            no.style.backgroundColor = "white";
            x1 = 0;
            //console.log(f);
        }
    });
}