function loadDoc(cod,cod2,cod3) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {

      preencheDiv1(this);
    
  };


// LINK DO WEB SERVISE DAS CONDIÇÕES VIA CPTEC INPE
  xhttp.open("GET", "http://servicos.cptec.inpe.br/XML/estacao/"+cod+"/condicoesAtuais.xml?", true);
  xhttp.send();

  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      preencheDiv2(this);
    }
  };


// LINK DO WEB SERVISE DAS CONDIÇÕES VIA CPTEC INPE
  xhttp2.open("GET", "http://servicos.cptec.inpe.br/XML/estacao/"+cod2+"/condicoesAtuais.xml?", true);
  xhttp2.send();

  var xhttp3 = new XMLHttpRequest();
  xhttp3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      preencheDiv3(this);
    }
  };

// LINK DO WEB SERVISE DAS CONDIÇÕES VIA CPTEC INPE

  xhttp3.open("GET", "http://servicos.cptec.inpe.br/XML/estacao/"+cod3+"/condicoesAtuais.xml?", true);
  xhttp3.send();




}
function preencheDiv1(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var temp;
  var att;
  var desc;
  var dirVent;
  var forcaVent;
  var umid;
  var cidade;
  var x = xmlDoc.getElementsByTagName("metar");
  var img;
  for (i = 0; i <x.length; i++) {
    if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBPV"){
        cidade = "Porto Velho,RO"} else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBRB"){
        cidade = "Rio Branco,AC"
            }else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBCY"){
        cidade = "Cuiába,MT"
            }else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBEG"){
            cidade = "Manaus,AM"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBBV"){
            cidade = "Boa Vista,RR"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBBE"){
            cidade = "Belém,PA"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBMQ"){
            cidade = "Macapá,AP"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBPJ"){
            cidade = "Palmas,TO"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBSL"){
            cidade = "São Luis,MA"}
    att = x[i].getElementsByTagName("atualizacao")[0].childNodes[0].nodeValue +" Horário de Brasilia" ;
    temp = "&nbsp;"+x[i].getElementsByTagName("temperatura")[0].childNodes[0].nodeValue + "º";
    desc = x[i].getElementsByTagName("tempo_desc")[0].childNodes[0].nodeValue;
    dirVent = x[i].getElementsByTagName("vento_dir")[0].childNodes[0].nodeValue + "º";
    forcaVent = x[i].getElementsByTagName("vento_int")[0].childNodes[0].nodeValue + "km/h";
    umid = x[i].getElementsByTagName("umidade")[0].childNodes[0].nodeValue + "% UR";
    img = '<div class="temp'+x[i].getElementsByTagName("tempo")[0].childNodes[0].nodeValue+'"></div>';

  }

  document.getElementById("temp").innerHTML = temp;
  document.getElementById("att").innerHTML = att;
  document.getElementById("desc").innerHTML = desc;
  document.getElementById("dirVent").innerHTML = dirVent;
  document.getElementById("forcaVent").innerHTML = forcaVent;
  document.getElementById("umid").innerHTML = umid;
  document.getElementById("cidade").innerHTML = cidade;
  document.getElementById("img").innerHTML = img;

}
function preencheDiv2(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var temp;
  var att;
  var desc;
  var dirVent;
  var forcaVent;
  var umid;
  var cidade;
  var img;
  var x = xmlDoc.getElementsByTagName("metar");
  for (i = 0; i <x.length; i++) {
     if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBPV"){
        cidade = "Porto Velho,RO"} else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBRB"){
        cidade = "Rio Branco,AC"
            }else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBCY"){
        cidade = "Cuiába,MT"
            }else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBEG"){
            cidade = "Manaus,AM"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBBV"){
            cidade = "Boa Vista,RR"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBBE"){
            cidade = "Belém,PA"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBMQ"){
            cidade = "Macapá,AP"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBPJ"){
            cidade = "Palmas,TO"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBSL"){
            cidade = "São Luis,MA"}
    att = x[i].getElementsByTagName("atualizacao")[0].childNodes[0].nodeValue +" Horário de Brasilia" ;
    temp = "&nbsp;"+x[i].getElementsByTagName("temperatura")[0].childNodes[0].nodeValue + "º";
    desc = x[i].getElementsByTagName("tempo_desc")[0].childNodes[0].nodeValue;
    dirVent = x[i].getElementsByTagName("vento_dir")[0].childNodes[0].nodeValue + "º";
    forcaVent = x[i].getElementsByTagName("vento_int")[0].childNodes[0].nodeValue + "km/h";
    umid = x[i].getElementsByTagName("umidade")[0].childNodes[0].nodeValue + "% UR";
    img = '<div class="temp'+x[i].getElementsByTagName("tempo")[0].childNodes[0].nodeValue+'"></div>';

  }

  document.getElementById("temp2").innerHTML = temp;
  document.getElementById("att2").innerHTML = att;
  document.getElementById("desc2").innerHTML = desc;
  document.getElementById("dirVent2").innerHTML = dirVent;
  document.getElementById("forcaVent2").innerHTML = forcaVent;
  document.getElementById("umid2").innerHTML = umid;
  document.getElementById("cidade2").innerHTML = cidade;
  document.getElementById("img2").innerHTML = img;


}




function preencheDiv3(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var temp;
  var att;
  var desc;
  var dirVent;
  var forcaVent;
  var umid;
  var cidade;
  var img;
  var x = xmlDoc.getElementsByTagName("metar");
  for (i = 0; i <x.length; i++) {
     if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBPV"){
        cidade = "Porto Velho,RO"} else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBRB"){
        cidade = "Rio Branco,AC"
            }else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBCY"){
        cidade = "Cuiába,MT"
            }else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBEG"){
            cidade = "Manaus,AM"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBBV"){
            cidade = "Boa Vista,RR"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBBE"){
            cidade = "Belém,PA"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBMQ"){
            cidade = "Macapá,AP"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBPJ"){
            cidade = "Palmas,TO"}else if (x[i].getElementsByTagName("codigo")[0].childNodes[0].nodeValue == "SBSL"){
            cidade = "São Luis,MA"}
    att = x[i].getElementsByTagName("atualizacao")[0].childNodes[0].nodeValue +" Horário de Brasilia" ;
    temp = "&nbsp;"+x[i].getElementsByTagName("temperatura")[0].childNodes[0].nodeValue + "º";
    desc = x[i].getElementsByTagName("tempo_desc")[0].childNodes[0].nodeValue;
    dirVent = x[i].getElementsByTagName("vento_dir")[0].childNodes[0].nodeValue + "º";
    forcaVent = x[i].getElementsByTagName("vento_int")[0].childNodes[0].nodeValue + "km/h";
    umid = x[i].getElementsByTagName("umidade")[0].childNodes[0].nodeValue + "% UR";
    img = '<div class="temp'+x[i].getElementsByTagName("tempo")[0].childNodes[0].nodeValue+'"></div>';

  }

  document.getElementById("temp3").innerHTML = temp;
  document.getElementById("att3").innerHTML = att;
  document.getElementById("desc3").innerHTML = desc;
  document.getElementById("dirVent3").innerHTML = dirVent;
  document.getElementById("forcaVent3").innerHTML = forcaVent;
  document.getElementById("umid3").innerHTML = umid;
  document.getElementById("cidade3").innerHTML = cidade;
  document.getElementById("img3").innerHTML = img;


}




