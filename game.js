var health = 100;
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


var name = ("Don");
function hits() {
    
    hits = 0;
    //alert(health);
    update ();
}

function Player(name, health, hit) {
  this.name = name || "anonymous";
  this.health = health || 100;
  this.hit = hit || 0;
  this.enemy = "everyone";
}