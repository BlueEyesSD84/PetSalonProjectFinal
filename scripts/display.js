function displayCardPets(){
    //need to travel array-need to diplay all the pets in the array on the cards
    let card="";
    for(i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];       
        console.log(petSalon.pets[i].name)
         //create the card (get HTML code)
        card+=`
                <div id="${pet.id}" class="pet>
                <div class="pet">
                <h4>Name: ${pet.name}</h4>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
                <p>Owner: ${pet.owner}</p>
                <p>Phone: ${pet.phone}</p>
            </div>
        `;
        console.log(card);
    }
     //inject the card into the HTML(register.html page)
    //document.getElementById("pet-cards").innerHTML=card;   
}
function displayPetsTable(){    
    let tr="";
    for(i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        tr+=`
                <tr id="${pet.id}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td> ${pet.owner}</td>
                <td>${pet.phone}</td>
                <td><button class="btn btn-danger" onclick="deletePet(${pet.id});"> Delete </button></td>
            </tr>
 `;
    console.log(pet.length) }
    document.getElementById("petTable").innerHTML=tr;
    //document.getElementById("pet-cards").innerHTML=tr;
}   
    //travel the array (for)
    //tr+=  (tr/th/tr)
    //inject the tr into the HTML table

