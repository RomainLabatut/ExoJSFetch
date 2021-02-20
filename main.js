let url = 'http://localhost:90/gsb/praticien/'

// afficher dans la console tout les praticiens de marseille
fetch(url + "?adresse=marseille")
.then(response => response.json())
.then((data)=>{
    data.forEach(element => {
        console.log("Les praticiens de Marseille sont " + element.nom);
    });
});

// afficher dans la console tout les dentistes de Paris

fetch(url +"?adresse=Paris&specialite=dentiste")
.then(response => response.json())
.then((data) =>{
    data.forEach(element =>{
        console.log("Les Dentistes de Paris sont " + element.nom);
    });
});



// afficher dans la console tout les praticiens déjà visités

fetch(url +"?visite=true")
.then(response => response.json())
.then((data) =>{
    data.forEach(element =>{
        console.log("Les praticien déjà visité sont " + element.nom);
    });
});

// afficher dans la console tout les dentistes de Marseille qui ont été visité

fetch(url +"?specialite=dentiste&adresse=marseille&visite=true")
.then(response => response.json())
.then((data) =>{
    data.forEach(element =>{
        console.log("Les praticien déjà visité sont " + element.nom);
    });
});
