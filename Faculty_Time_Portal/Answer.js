window.onload = function()
{
    var button5 = document.querySelector(".Sub6");
    if(button5){
        button5.addEventListener("click", function(){window.location.href="View.html"});  
    }
    var l1 = document.querySelector(".lbl1");
    l1.innerHTML = sessionStorage.getItem("fname");
    var l2 = document.querySelector(".lbl2");
    l2.innerHTML = sessionStorage.getItem("day");
    var l3 = document.querySelector(".lbl3");
    l3.innerHTML = sessionStorage.getItem("slot1");
    var l4 = document.querySelector(".lbl4");
    l4.innerHTML = sessionStorage.getItem("slot2");
    var l5 = document.querySelector(".lbl5");
    l5.innerHTML = sessionStorage.getItem("slot3");
    var l6 = document.querySelector(".lbl6");
    l6.innerHTML = sessionStorage.getItem("slot4");
    var l7 = document.querySelector(".lbl7");
    l7.innerHTML = sessionStorage.getItem("slot5");
    var l8 = document.querySelector(".lbl8");
    l8.innerHTML = sessionStorage.getItem("slot6");
    var l9 = document.querySelector(".lbl9");
    l9.innerHTML = sessionStorage.getItem("slot7");
};