var health = 100;
function Player(name, health, hit) {
  this.name = name || "anonymous";
  this.health = health || 100;
  this.hit = hit || 0;
  this.enemy = "everyone";
  this.setname = function (){
      document.getElementById("sName").textContent = this.name;
  }
}
var newPlayer = new Player ("Doom", 100, 0);
newPlayer.setname()
function slap() {
    
    health = health - 1;
    //alert(health);
    update ();
}

var health = 100;
function punch() {
    
    health = health - 5;
    //alert(health);
    update ();
}

var health = 100;
function kick() {
    
    health = health - 10;
    //alert(health);
    update ();
}


function update(){
    var node = document.getElementById("sHealth");
node.innerText = health.toString();
}

update ();


function hits() {
    
    hits = 0;
    //alert(health);
    update ();
}


