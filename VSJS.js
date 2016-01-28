

var health = 100;
function slap() {
    
    health = health - 1;
    //alert(health);
    update ();
}

function update(){
    var node = document.getElementById("sHealth");
node.innerText = health.toString();
}

update ();
