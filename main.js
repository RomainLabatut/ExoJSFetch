let url = 'http://localhost:90/gsb/praticien/'

// afficher dans la console tout les praticiens de marseille
fetch(url + "?adresse=Marseille")
.then(response => response.json())
.then((data)=>{
    data.forEach(element => {
        console.log("Les praticiens de Marseille sont " + element.nom);
    });
});

// // afficher dans la console tout les dentistes de Paris

fetch(url +"?adresse=Paris&specialite=dentiste")
.then(response => response.json())
.then((data) =>{
    data.forEach(element =>{
        console.log("Les Dentistes de Paris sont " + element.nom);
    });
});


// // afficher dans la console tout les praticiens déjà visités

fetch(url +"?visite=true")
.then(response => response.json())
.then((data) =>{
    data.forEach(element =>{
        console.log("Les praticiens déjà visité sont " + element.nom);
    });
});

// // afficher dans la console tout les dentistes de Marseille qui ont été visité

fetch(url +"?visite=truee&adresse=Marseille&specialite=dentist")
.then(response => response.json())
.then((data) =>{
    data.forEach(element =>{
        console.log("Les dentistes de Marseille déjà visité sont " + element.nom);
    });
});
