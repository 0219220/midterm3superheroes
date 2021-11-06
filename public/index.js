let sbbtn=document.getElementById('searchbarbtn');
let nextbtn=document.getElementById('nextbtn');
let previousbtn=document.getElementById('previousbtn');
var idactual=1;

sbbtn.addEventListener('click', function(){//this button activates when you press search.
$("#spinner1").removeClass("d-none")//
  let superheroname=document.getElementById('shsearchbar').value
fetchsuperhero(superheroname).then(function(info) {//stop the spinner
  $("#spinner1").addClass("d-none")
  displaySuperhero(info.results[0])
  if(fetchsuperhero().value=== null){
    $("#nullb").removeClass("d-none")
    
  }
  var blank=document.getElementById('shsearchbar').value;//this resets the searchbar
  blank.value=null;//This resets the searchbar 
  console.log(info);
})
});

nextbtn.addEventListener('click', function(){
  //poner un spinner
  $("#spinner1").removeClass("d-none")
  
  idactual++  
  if(idactual=== 732){
      idactual=0
  }
  fetchsuperheroid(idactual).then(function(info) {//stop the spinner
    $("#spinner1").addClass("d-none")
    displaySuperhero(info)
    console.log(info);
  })
  });
  
  previousbtn.addEventListener('click', function(){
    //poner un spinner
    $("#spinner1").removeClass("d-none")
    idactual--
    
  if(idactual===0){
    idactual=731
}
    fetchsuperheroid(idactual).then(function(info) {//stop the spinner
      $("#spinner1").addClass("d-none")
      displaySuperhero(info)
      console.log(info);
    })
    });
    


function displaySuperhero(info){
  $("#ID").html("ID: "+info.id) 
  $("#Name").html("Name: "+info.name)
  
  $("#my_image").attr("src", info.image.url);
  $("#my_image").removeClass("d-none");

  $("#Full Name").html("Full Name: "+info ["full-name"])
  $("#Powerstatsc").html("Combat: "+info.powerstats.combat)
  $("#Powerstatsd").html("Durability: "+info.powerstats.durability)
  $("#Powerstatsi").html("Intelligence: "+info.powerstats.combat)
  $("#Powerstatsp").html("Power: "+info.powerstats.combat)
  $("#Powerstatssp").html("Speed: "+info.powerstats.combat)
  $("#Powerstatsst").html("Strength: "+info.powerstats.combat)
  
  $("#POB").html("Place of Birth: "+info ["place-of-birth"])
  $("#Bio").html("Occupation: "+info.work.occupation)//I replaced small biography with occupation because that object does not exist in this api
  $("#Alias").html("Alias: "+info.biography.aliases[0])
  $("#Gender").html("Gender: "+info.appearance.gender)
  $("#Race").html("Race: "+info.appearance.race)
  $("#Height").html("Height: "+info.appearance.height[1])
  $("#Weight").html("Weight: "+info.appearance.weight[1])
  $("#Eye-Color").html("Eye Color: "+info.appearance ["eye-color"])
  $("#Hair-Color").html("Hair Color: "+info.appearance ["hair-color"])
  $("#GAffilitian").html("Group Affilitions: "+info.connections ["group-affiliation"][0])

}





 
async function fetchsuperhero(superheroname){//async allows this function to turn this info into a promise
   const request = await fetch(`https://www.superheroapi.com/api.php/2210308985790156/search/${superheroname}`)//searches for the info at this address
  return await request.json();//turns the information into json object
  
}


async function fetchsuperheroid(SuperheroId){//async allows this function to turn this info into a promise
  const request = await fetch(`https://www.superheroapi.com/api.php/2210308985790156/${SuperheroId}`)
 return await request.json();//turns the information into json object
 
}

