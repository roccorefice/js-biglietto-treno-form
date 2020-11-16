
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

// Genera biglietto
btnGenera.addEventListener("click", function(){
  document.getElementById("card_biglietto").style.display = "block";

  var offer = "Biglietto Standard"
  //console.log("genera il ticket");

  // selezione dei dati input inseriri da utente
  var nomeInput = document.getElementById("name");
  var kmInput = document.getElementById("km");
  var rangeEtaInput = document.getElementById("range_eta");

  var nomeUtente = nomeInput.value;
  var kmDaPercorrere = kmInput.value;
  var fasciaEta = rangeEtaInput.value;
  //console.log(nomeUtente, kmDaPercorrere, fasciaEta);

  //prezzo del biglietto
  var costoDiUnKm = 0.21;
  var costo = (costoDiUnKm * kmDaPercorrere).toFixed(2)
  //console.log(prezzoIniziale);

  // sconto del 20% per i minorenni
  if (fasciaEta == "minorenne") {
    var sconto = (20 * costo) / 100
    offer = "Sconto minorenni"
    //console.log(sconto);
    var costo = (costo - sconto).toFixed(2);
    //console.log(costo.toFixed(2));
  }

  // sconto del 40% per gli over 65
  else if (fasciaEta == "over65") {
    var sconto = (40 * costo) / 100
    offer = "Sconto Silver"
    //console.log(sconto);
    var costo = (costo - sconto).toFixed(2);
    //console.log(costo.toFixed(2));
  }

  // nessuno sconto per passeggeri tra i 18 e 64 anni
  else (fasciaEta == "maggiorenne")
    var costo = costo


    //selezione dati biglietto
    var itemName = document.getElementById("nome_cognome")
    var itemSconto = document.getElementById("sconto");
    var itemCarrozza = document.getElementById("carrozza");
    var itemCodiceCP = document.getElementById("codiceCP");
    var itemCosto = document.getElementById("costo");

    //Numero Carrozza
    var numeroCarrozza = Math.floor(Math.random() * 9) +1 ;

    // codice CP
    var codiceCP = Math.floor(Math.random() * (100000 - 90000) ) + 90000;

    // Inserimento dati biglietto
    itemSconto.innerHTML = offer;
    itemCosto.innerHTML = costo;
    itemName.innerHTML = nomeUtente;
    itemCarrozza.innerHTML = numeroCarrozza;
    itemCodiceCP.innerHTML = codiceCP;

    nomeInput.value = "";
    kmInput.value = "";
});



// Annulla il biglietto
btnAnnulla.addEventListener("click", function(){
  //console.log("annulla il ticket");
  document.getElementById("card_biglietto").style.display = "none";

});
