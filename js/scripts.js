
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
      }
    }
    if(!isValid){
      $("#story").append("<li>You can't '" + userEntry + "'.</li>");
    }
  });
});
