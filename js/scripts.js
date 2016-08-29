//business logic

var Player = function(){
  this.playerName = playerName;
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

var Loot = function(){
  this.inventory = false;
  this.equipped = false;
  this.info = "";
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
