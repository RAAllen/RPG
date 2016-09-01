
var commands = ["LOOK", "USE", "ATTACK", "GET", "TALK", "EQUIP", "DROP", 'OPEN'];
$(document).ready(function(){

  var player = new Player("",15,1,"It's you.");
  var clothes = new Loot("CLOTHES","A set of a short sleeved linen tunic with linen pants, plain leather shoes, a leather belt, and a small leather belt pouch.");
  player.inventory.push(clothes);
  player.printInventory();

  $("#userInfo").submit(function(event){
    event.preventDefault();
    console.log(spider.isAlive)
    var name = $("#userName").val();
    player.name = name;
    console.log(player);
    $("#playerName").text(player.name);
    $("#playerHealth").text(player.currentHealth + "/" + player.maxHealth)
    $("#userInfo").hide();
    $("#play-game").show();
  });

  $("#userEntries").submit(function(event){
    event.preventDefault();
    var userEntry = $("#userInput").val().toUpperCase();
    var userEntryArray = userEntry.split(" ");
    var numberOfWords = userEntryArray.length
    var isValid = false;
    $("#story").append("<li> </li>")
    // Is it a valid command
    for(var i=0;i<commands.length;i++){
      if(userEntryArray[0] === commands[i]){
        $("#story").append("<li>> " + userEntry + "</li>");
        $("#userInput").val("");
        isValid = true
        //If it is LOOK
        if(userEntryArray[0] === commands[0]){
          look(userEntryArray, numberOfWords, rooms, player);
        }//end LOOK
        else if(userEntryArray[0] === commands[3]){
          player.getLoot(userEntryArray,rooms);
        } //end GET
        else if(userEntryArray[0] === commands[6]){
          player.dropLoot(userEntryArray,rooms);
        } //end drop
        else if(userEntryArray[0] === commands[5]){
          // equip(userEntryArray, numberOfWords, rooms, player);
          player.equipWeapon(userEntryArray, numberOfWords, rooms, player);
        } //end EQUIP
          //If it is ONLY EQUIP
        else if(userEntryArray[0] === commands[2]){
            attack(userEntryArray, numberOfWords, rooms, player);
        } //end ATTACK
        else if (userEntryArray[0] === 'OPEN') {
          open(userEntryArray, rooms);
        }
        else if (userEntry === 'USE POTION') {
          player.usePotion(potion);
        }
        // if(userEntryArray[0] === commands[4]) {
        //   if(userEntryArray.length === 1){
        //     $("#story").append("<li>TALK to whom?</li>");
        //   }
        //   else if (userEntryArray.length > 1) {
        //     fredDialogue();
        //   }
        // }
      }
    }

    unlock(key, player, spider);

    if(!isValid){
      $("#story").append("<li>You can't '" + userEntry + "'.</li>");
      $("#userInput").val("");
    }
    $("#playerHealth").text(player.currentHealth + "/" + player.maxHealth)
  });

  $("#restart").click(function() {
    location.reload();
  });

});
