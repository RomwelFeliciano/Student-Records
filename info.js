function displayBSIT() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "bsit.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>LAST NAME</th><th>FIRST NAME</th><th>MI</th><th>COURSE</th><th>MAJOR</th><th>YEAR</th><th>SECTION</th><th>ADDRESS</th><th>EMAIL</th><th>CONTACT</th><th>GUARDIAN</th><th>GUARDIAN CONTACT</th><tr>";
  var x = xmlDoc.getElementsByTagName("Student");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("LastName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("FirstName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("MiddleName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Course")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Major")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Year")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Section")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Contact")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Guardian")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("GuardianContact")[0].childNodes[0].nodeValue +
    "</td></tr>";
   
  }
  
  document.getElementById("tbl").innerHTML = table;
}

function displayBSCS() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "bscs.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>LAST NAME</th><th>FIRST NAME</th><th>MI</th><th>COURSE</th><th>MAJOR</th><th>YEAR</th><th>SECTION</th><th>ADDRESS</th><th>EMAIL</th><th>CONTACT</th><th>GUARDIAN</th><th>GUARDIAN CONTACT</th><tr>";
  var x = xmlDoc.getElementsByTagName("Student");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("LastName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("FirstName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("MiddleName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Course")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Major")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Year")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Section")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Contact")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Guardian")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("GuardianContact")[0].childNodes[0].nodeValue +
    "</td></tr>";
   
  }
  
  document.getElementById("tbl").innerHTML = table;
}
function displayBSEMC() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "BSEMC.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>LAST NAME</th><th>FIRST NAME</th><th>MI</th><th>COURSE</th><th>MAJOR</th><th>YEAR</th><th>SECTION</th><th>ADDRESS</th><th>EMAIL</th><th>CONTACT</th><th>GUARDIAN</th><th>GUARDIAN CONTACT</th><tr>";
  var x = xmlDoc.getElementsByTagName("Student");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("LastName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("FirstName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("MiddleName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Course")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Major")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Year")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Section")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Email")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Contact")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Guardian")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("GuardianContact")[0].childNodes[0].nodeValue +
    "</td></tr>";
   
  }
  
  document.getElementById("tbl").innerHTML = table;
}