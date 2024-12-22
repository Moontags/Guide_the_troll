var x=100, y=150;
function pos (dx,dy) {
    if (!document.getElementById) return;
    x += 130*dx;
    y += 130*dy;
    obj = document.getElementById("lost");
    obj.style.top=y + "px";
    obj.style.left=x + "px";
}

function hideBall() {
    if (!document.getElementById) return;
    obj = document.getElementById("lost");
    obj.style.display="none";
}

function showBall() {
    if (!document.getElementById) return;
    obj = document.getElementById("lost");
    obj.style.display="block";
}