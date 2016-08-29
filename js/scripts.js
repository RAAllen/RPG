
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
    console.log(entrance);


  });
  $("#userEntries").submit(function(event){
    event.preventDefault();
    var userEntry = $("#userInput").val();
    for(i=0;i<commands.length;i++){
      if(userEntry === commands[i]){
        $("#story").append("<li>> " + userEntry + "</li>");
        $("#userInput").val("");
      }
    }
      // $("#story").append("<li>I don't know the command '" + userEntry + "'</li>");
      // $("#userInput").val("");


  });
});
