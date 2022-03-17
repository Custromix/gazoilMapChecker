var MapGoogle;

window.onload = function (){
    MapGoogle = new GoogleMap();
}

var getHttpRequest = function () {
    var httpRequest = false;
  
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
      httpRequest = new XMLHttpRequest();
      if (httpRequest.overrideMimeType) {
        httpRequest.overrideMimeType('text/xml');
      }
    }
    else if (window.ActiveXObject) { // IE
      try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {}
      }
    }
  
    if (!httpRequest) {
      alert('Abandon :( Impossible de créer une instance XMLHTTP');
      return false;
    }
  
    return httpRequest
};

var httpRequest = getHttpRequest();
httpRequest.onreadystatechange = function (){

    if(httpRequest.readyState === 4){
        console.log(httpRequest.responseText);
        var xmlEssence = httpRequest.responseText;
    }
    
}



httpRequest.open('GET', './src/xml/PrixCarburants_instantane.xml', true);
httpRequest.send();

document.getElementById("encode").addEventListener('click', function(){
    MapGoogle.codeAddress();
});