document.addEventListener("DOMContentLoaded",e =>{
    let xml, xmlhttp, xmlDoc, vliste

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "president.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML; 
    console.log(xmlDoc);
    vliste=String("");
    xml = xmlDoc.getElementsByTagName("president");
    
    console.log(xml[0].childNodes[1]);
    let j = 0;
  
        for (let i = 0; i < xml.length; i++) {
    
    //variables pour les noeuds
            const  nom = xml[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue;
            const  mandat = xml[i].getElementsByTagName("mandat")[0].childNodes[0].nodeValue;
            const  naissance = xml[i].getElementsByTagName("naissance")[0].childNodes[0].nodeValue;
            const  status = xml[i].getElementsByTagName("status")[0].childNodes[0].nodeValue;
            const  image = xml[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;

    //ajout de chaque propriété dans boucle
            console.log(nom+" "+mandat+" "+naissance+" "+status);
       
            vliste += "<li><img src="+image+"></li>";  
            vliste += "<li>Nom : "+nom+"</li>";
            vliste += "<li>Mandat : "+mandat+"</li>";
            vliste += "<li>Naissance : "+naissance+"</li>";
            vliste += "<li>Status : "+status+"</li>";
            //stockage dans un tableau
               // myStock=[];
               // myStock.push(nom,mandat,naissance,status);  
               // console.log(JSON.stringify(myStock));
               // localStorage.setItem("stock", myStock)
       
     }
    document.querySelector("ul").innerHTML = vliste; 
    
})