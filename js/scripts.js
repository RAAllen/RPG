
var commands = ["LOOK", "USE", "ATTACK", "GET", "TALK", "EQUIP", "DROP"];
$(document).ready(function(){

  var player = new Player("",10,1,"It's you.");
  var linenClothes = new Loot("Linen Clothes","It's your clothes");
  player.inventory.push(linenClothes);

  $("#userInfo").submit(function(event){
    event.preventDefault();

    var name = $("#userName").val();
    player.name = name;

    console.log(player);


  });
  $("#userEntries").submit(function(event){
    event.preventDefault();
    var userEntry = $("#userInput").val().toUpperCase();
    var userEntryArray = userEntry.split(" ");
    var numberOfWords = userEntryArray.length
    var isValid = false;
    // Is it a valid command
    for(var i=0;i<commands.length;i++){
      if(userEntryArray[0] === commands[i]){
        $("#story").append("<li>> " + userEntry + "</li>");
        $("#userInput").val("");
        isValid = true
        //If it is LOOK
        if(userEntryArray[0] === commands[0]){
          //If it is ONLY LOOK
          for(var r=0;r<rooms.length;r++){
            if(userEntryArray.length === 1){
              rooms[r].look();
            }
            //If it is LOOK with more words
            else if(userEntryArray.length > 1){
              look(userEntryArray, numberOfWords, rooms[r]);
            }
          }
        }//end LOOK
        else if(userEntryArray[0] === commands[3]){
          get(userEntryArray, numberOfWords, rooms, player);
        } //end GET
        else if(userEntryArray[0] === commands[5]){
          equip(userEntryArray, numberOfWords, rooms, player);
        } //end EQUIP
          //If it is ONLY EQUIP
          for(var r=0;r<rooms.length;r++){
            if(userEntryArray.length === 1){
              $("#story").append("<li>You can't EQUIP nothing.</li>");
            }
            //If it is EQUIP with more words
            else if(userEntryArray.length > 1){
              for(var equip=1;equip<userEntryArray.length;equip++){
                for(var j=0;j<rooms[r].loot.length;j++){
                  if(userEntryArray[equip] === player.inventory[j].name){
                    $("#story").append("<li>You EQUIP the " + player.inventory[j].name + ".</li>");
                    player.weapon = player.inventory[j];
                    player.damage += player.weapon.damage
                    console.log(player);
                  }
                }
              }
            }
          }
        } //end EQUIP
          else if(userEntryArray[0] === commands[2]){
          //If it is ONLY ATTACK
          if(userEntryArray.length === 1){
            $("#story").append("<li>Please select something to attack.</li>");
          }
          //If it is ATTACK with more words
          else if(userEntryArray.length > 1){
            for(var r=0;r<rooms.length;r++){
              for(var attack=1;attack<userEntryArray.length;attack++){
                for(var k=0; k<rooms[r].characters.length; k++){
                  if((userEntryArray[attack].includes(rooms[r].characters[k].name)) && (rooms[r].characters[k].isAlive === true)){
                    $("#story").append("<li>YOU attack " + rooms[r].characters[k].name + " and they take " + player.damage + " damage.</li>");
                    rooms[r].characters[k].currentHealth -= player.damage;
                    console.log(Fred);
                    if (rooms[r].characters[k].currentHealth <= 0) {
                      rooms[r].characters[k].isAlive = false;
                      $("#story").append("<li>" + rooms[r].characters[k].name + " has died!</li>")
                    }
                    else if (rooms[r].characters[k].currentHealth > 0) {
                      $("#story").append("<li>" + rooms[r].characters[k].name + " attacks you and deals " + rooms[r].characters[k].damage + " damage!</li>")
                      player.currentHealth -= rooms[r].characters[k].damage;
                      if (player.currentHealth <= 0) {
                        player.isAlive = false;
                        $("#play-game").hide();
                        $("#lose-screen").fadeToggle(5000);
                      }
                      console.log(player.currentHealth);
                    }
                  }
                  else {
                    $("#story").append("<li>You can't attack that.</li>")
                  }
                }
              }
            }
          }
        } //end ATTACK
      }
    }
    if(!isValid){
      $("#story").append("<li>You can't '" + userEntry + "'.</li>");
    }
  });

  $("#restart").click(function() {
    location.reload();
  });

});
