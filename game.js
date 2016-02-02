var Item = function(name, mod, description){
    this.name = name;
    this.mod = mod;
    this.description = description;
}

var items = {
    shield:new Item("Shield",0.3,"Down and dirty, bitch"),
    nailBoard:new Item("Nail Board",0.5,"I'll make you bleed."),
    tazer:new Item("Tazer",0.8, "Dance m*therf*cker!"),
    yourMom:new Item("Your Mom", -0.9,"Your Mama is so ...."),
}

var health = 100;
var Player = function(name, health, hit) {
  this.name = name || "anonymous";
  this.health = health || 100;
  this.hit = hit || 0;
  this.enemy = "everyone";
  this.setname = function (){
      document.getElementById("sName").textContent = this.name;
  };
  
  this.addMods= function() {
      var modifierTotal = 0.0;
      for (var i = 0; i < this.items.length; i++) {
          var currentItem = this.items[i];
          modifierTotal += currentItem.mod;
      }
      if(modifierTotal <= 0){
          modifierTotal = 1;
      }
      return modifierTotal;   
  }
  
  
  this.items=[]
  
  
  this.slap = function(){
      var damage = 1 * this.addMods();
      this.health -= 1 - damage;
      this.hit++;
      this.update();
  };
   this.kick = function(){
      this.health -= 5 * this.addMods();
      this.hit++;
      this.update();
  };
   this.punch = function(){
      this.health -= 10 * this.addMods();
      this.hit++;
      this.update();
  };
  this.update = function(){
      var node = document.getElementById("sHealth");
      node.innerText = this.health.toFixed(2);
      document.getElementById("sHit").textContent = this.hit;
      if( this.health <= 20){
         document.getElementById("player-panel").classList.add("panel-danger")
    }else{
         document.getElementById("player-panel").classList.remove("panel-danger")
    }
  }
  
   this.giveItem = function(item){
       this.items.push(item)       

  }
  
  
}
var newPlayer = new Player ("Pete", 100, 0);
newPlayer.setname()