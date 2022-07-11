//arrays use []
//objects user {}
let petSalon = {
    name:"The Fashion Pet",  //1st attribute
    address:"Ave University 768",//2nd attibute
    //pet:["pet1","pet2","pet3"],
    hours:{
        open: "9:00 AM",
        close: "6:00 PM"
    },
    Cost:{
        Small: "$25.00",
        Medium: "$50.00",
        Large: "$75.00"
    },
    //anomyous object for an array
    pets:[]
}
//counter
let c=0;
//constructor function
//<----------Parameters/ local variables-------------------->
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    //attribute= parameters
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
    this.id=c++;
}
//creating objects
function displayInfo(){
document.getElementById("info").innerHTML=`Welcome to the ${petSalon.name} family.  We are open from ${petSalon.hours.open} to ${petSalon.hours.close}`;
document.getElementById("info2").innerHTML=`Our prices are as follows: small ${petSalon.Cost.Small}, Medium ${petSalon.Cost.Medium}, Large ${petSalon.Cost.Large}.`;
}

function displayNumberOfPets(){
    document.getElementById("number-pets").innerHTML=`There are ${petSalon.pets.length} pets registered.`;
}
//function isValid(aPet){
    //let valid=true;
    //if(aPet.Name!=="")  {//is pet name empty?
      //  valid=false;
        
    //}
    //return valid;
//}
function register(){
    let petName=document.getElementById("txtPetName").value;
    let age=document.getElementById("txtAge").value;
    let gender=document.getElementById("txtGender").value;
    let breed=document.getElementById("txtBreed").value;
    let service=document.getElementById("selService").value;
    let owner=document.getElementById("txtOwner").value;
    let phone=document.getElementById("txtPhone").value;
    console.log(petName,age,gender,breed,service,owner,phone);
    //create the object
    let newPet = new Pet(petName,age,gender,breed,service,owner,phone)
    //if(isValid(newPet)){
    console.log(newPet);
    //push the object
    petSalon.pets.push(newPet);
    //displayCardPets();
    console.log(petSalon.pets);
    displayNumberOfPets();
    clearInputs();
    displayPetsTable();
 }//else{
    //alert("Please fill out the entire form");
    //}
 //}
function test(){
    console.log("This is a test");
}
function clearInputs(){
    document.getElementById("txtPetName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("selService").value="";
    document.getElementById("txtOwner").value="";
    document.getElementById("txtPhone").value="";
}
function deletePet(petID){
    document.getElementById(petID).remove();
    let petIndex;
    //travel the array--need to check to see if the ID is there
    for(let i=0;i<petSalon.pets.length;i++){
    let pet=petSalon.pets[i];
    //compare the id of the pet
    if(pet.id == petID){
        petIndex=i;//get the pet index
    }
}   
    petSalon.pets.splice(petIndex,1);//remove from array
    displayNumberOfPets();//update the displayNumberOFPets()    
}
function search(){
    let searchString = document.getElementById("txtSearch").value;
     for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(searchString.toLowerCase()==pet.name.toLowerCase()){
            //console.log(searchString);
            document.getElementById(pet.id).classList.add("table-danger");
            }else{
            document.getElementById(pet.id).classList.remove("table-danger");
        }
    }
}
    //update the number of pets
    //console.log("Deleting the pet"+petID);
    function init(){
        let scooby = new Pet("Scooby",50,"male","Dane","Grooming","Shaggy","555-555-5555");
        let scrappy = new Pet("Scrappy",50,"male","Dane","Grooming","Shaggy","555-555-5555");
        let roger = new Pet("roger",50,"male","Dane","Grooming","Shaggy","555-555-5555");        
            petSalon.pets.push(scooby,scrappy,roger);
            console.log(petSalon.pets)
            //calling the function
            displayInfo();
            displayNumberOfPets();
            //displayCardPets();
            displayPetsTable();
        }
        window.onload=init; 