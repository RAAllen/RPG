//business logic
var commands = ["LOOK", "USE", "ATTACK", "GET", "TALK", "EQUIP", "DROP"];

var Player = function(playerName,maxHealth,damage,info){
  this.name = playerName;
  this.maxHealth = maxHealth;
  this.currentHealth = this.maxHealth;
  this.damage = damage;
  this.inventory = [];
  this.info = info;
}

var Room = function(){
  this.active = false;
  this.info = [];
  this.loot = [];
  this.characters = [];
  this.doors = [];
  this.usable = [];
}

var Loot = function(name,info){
  this.name = name;
  this.inventory = false;
  this.equipped = false;
  this.info = info;
}

var Weapon = function(){
  this.inventory = false;
  this.equipped = false;
  this.info = "";
  this.damage = damage;
}

var NPC = function(){
  this.hostile = false;
  this.info = "";
  this.maxHealth = maxHealth;
  this.currentHealth = this.maxHealth;
  this.damage = damage;
  this.dialogue = dialogue;
}

var Usable = function(){
  this.active = false;
  this.door = false;
  this.info = [];
}





//user logic

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
