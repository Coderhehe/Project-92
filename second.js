pl1=localStorage.getItem("player1");
pl2=localStorage.getItem("player2");
p1s=0;
p2s=0;

function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    ranswer=parseInt(number1)*parseInt(number2);
    
    question="<h4>"+number1+"X"+number2+"</h4>";
    ib="<br>Answer:<input type='text' placeholder='Type The Answer Here' id='input_check_box'>";
    cb="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question+ib+cb;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
qt="player1";
at="player2";
function check() {
    geta=document.getElementById("input_check_box").value;
    if (geta==ranswer) {
        if (at=="player1") {
            np1s=p1s+1;
document.getElementById("player1_score").innerHTML=pl1+":  "+np1s;
document.getElementById("player2_score").innerHTML=pl2+":  "+np2s;
        }
        if (at=="player2") {
            np2s=p2s+1;
document.getElementById("player2_score").innerHTML=pl2+":   "+np2s;
document.getElementById("player1_score").innerHTML=pl1+":  "+np1s;
        }
    }
    if (qt=="player1") {
        document.getElementById("pq").innerHTML="Question   :"+pl2;
        qt="player2";
    }
    else  {
        document.getElementById("pq").innerHTML="Question   :"+pl1;
        qt="player1";
    } 
    if (at=="player1") {
        document.getElementById("pa").innerHTML="Answer   :"+pl2;
        at="player2";
    }
    else  {
        document.getElementById("pa").innerHTML="Answer   :"+pl1;
        at="player1";
    } 
    document.getElementById("input_check_box").value="";
}