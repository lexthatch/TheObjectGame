var health = 100;
var Player = function(name, health, hit) {
  this.name = name || "anonymous";
  this.health = health || 100;
  this.hit = hit || 0;
  this.enemy = "everyone";
  this.setname = function (){
      document.getElementById("sName").textContent = this.name;
      
  };
  this.slap = function(){
      this.health--;
      this.hit++;
      this.update();
  };
   this.kick = function(){
      this.health -= 5;
      this.hit++;
      this.update();
  };
   this.punch = function(){
      this.health -= 10;
      this.hit++;
      this.update();
  };
  this.update = function(){
      var node = document.getElementById("sHealth");
      node.innerText = this.health.toString();
      document.getElementById("sHit").textContent = this.hit;
  }
}
var newPlayer = new Player ("Doom", 100, 0);
newPlayer.setname()



