$(document).ready(function () {
  console.log("doc is ready");
 
  let revName; 

  $
    ("#btnGetFacts").click(function (){

      // handle it if input is blank

      let userName = $("#userName").val();
      let coolFacts = generateCoolNameFacts(userName); 

      console.log('you clicked the button');
      console.log('from ln 12', generateCoolNameFacts(userName));
      
      $("#coolNameFactsOutput").html(coolFacts);
  

    });

});

function generateCoolNameFacts(userName) {
  let coolFacts = ''; 
  
  coolFacts = "<h3>" + nameLength(userName) + "</h3>";
  coolFacts += "<h3>" + reverseName(userName) + "</h3>";
  coolFacts += "<h3>" + spiritAnimal(userName) + "</h3>";
 

  console.log("initialized the coolFacts variable: " + coolFacts); 

  return coolFacts;

}

function nameLength(name) {
  return "Your name is " + name.length + " letters long!"; 
}

function nameStart(name) {
  return "The first letter of your name is " + name[0];
}

function nameEnd(name) {
  
  let lastIndex = name.length - 1;

  return "The last letter of your name is " + name[lastIndex];
}

function reverseName(name) {
  
  let arrName = name.split(""); 
  revName = arrName.reverse();
  revName = revName.join("");
  
  return "Your name backwards is " + revName
     
}

function spiritAnimal(name) {
  
  let length = name.length;
  let spiritA = "animal";
  
  switch (length) {
    case 1:
      spiritA = "Your spirit animal is a beaver!";
      break;
      
    case 2:
      spiritA = "Your spirit animal is a bull!";
      break;
    case 3:
      spiritA = "Your spirit animal is a eagle!";
      break;
    case 4:
      spiritA = "Your spirit animal is a seagull!";
      break;
    case 5:
      spiritA = "Your spirit animal is a shark!";
      break;
    case 6:
      spiritA = "Your spirit animal is a skunk!";
      break;
    case 7:
      spiritA = "Your spirit animal is a duck!";
      break;
    case 8:
      spiritA = "Your spirit animal is a parrot!";
      break;
   };
  return spiritA;
}