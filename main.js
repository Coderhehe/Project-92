function addUser() {
    player1=document.getElementById("pl1_name").value;
    player2=document.getElementById("pl2_name").value;
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location="second.html";
}