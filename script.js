// function aa() {
//     document.getElementById('oo1').style.display = "block";
    
// }

function aa() {
var x = document.querySelector('#oo1')
if(x.style.display === "none"){
    x.style.display = "block";
} else {
    x.style.display = "none"
}
}

function bb() {
    var x = document.querySelector('#oo2')
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"
    } 
}


function l1() {
    var x = document.querySelector('#ll1')
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
}

function func() {
    var x = document.getElementById('mg')
    if(x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"
    }
}



var i = 2;
function start(){
    document.getElementById("pic").src="2.jpg"
 }

function next(){
    i++
    document.getElementById("pic").src=i+".jpg";
    document.getElementById("pic").title=i+".jpg";
    // document.getElementById("a").value=names[i];
    document.getElementById("prev").disabled = false;
    document.getElementById("prev").value = "<";


    
    if (i >= 10 ) {
         i++
        i = 2;
        document.getElementById("pic").src=i+".jpg";
        document.getElementById("pic").title=i+".jpg";
        // document.getElementById("a").value=names[i];
        document.getElementById("prev").disabled = false;
        document.getElementById("prev").value = "<";
    }
}
 

var  j = 10;
function prev(){
    
    j--
  
    document.getElementById("pic").src=j+".jpg";
    document.getElementById("pic").title=j+".jpg";
    // document.getElementById("a").value=names[i];
    document.getElementById("next").disabled = false;
    document.getElementById("next").value = ">";
    
    
    if (j === 1) {
        
       j=10;
       j--
       document.getElementById("pic").src=j+".jpg";
       document.getElementById("pic").title=j+".jpg";
       // document.getElementById("a").value=names[i];
       document.getElementById("prev").disabled = false;
       document.getElementById("prev").value = "<";
      
   }
}

