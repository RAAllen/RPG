
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
    var userEntry = $("#userInput").val().toUpperCase();
    var userEntryArray = userEntry.split(" ");
    var isValid = false;
    // Is it a valid command
    for(i=0;i<commands.length;i++){
      if(userEntryArray[0] === commands[i]){
        $("#story").append("<li>> " + userEntry + "</li>");
        $("#userInput").val("");
        isValid = true
        //If it is LOOK
        if(userEntryArray[0] === commands[0]){
          //If it is ONLY LOOK
          for(r=0;r<rooms.length;r++)
            if(userEntryArray.length === 1){
              rooms[r].look();
            }
            //If it is LOOK with more words
            else if(userEntryArray.length > 1){
              for(i=1;i<userEntryArray.length;i++){
                for(j=0;j<rooms[r].loot.length;j++){
                  if(userEntryArray[i].includes(rooms[r].loot[j].name)){
                    $("#story").append("<li>> " + rooms[r].loot[j].info + "</li>");
                  }
                }
                for(j=0;j<rooms[r].usable.length;j++){
                  if(userEntryArray[i].includes(rooms[r].usable[j].name)){
                    $("#story").append("<li>> " + rooms[r].usable[j].info + "</li>");
                  }
                }
              }
            }
          }
        }
      }
      if(!isValid){
        $("#story").append("<li>You can't '" + userEntry + "'.</li>");
      }
      // $("#story").append("<li>I don't know the command '" + userEntry + "'</li>");
      // $("#userInput").val("");


  });
});
