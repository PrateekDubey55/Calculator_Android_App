window.onload = function ()
{
    init(); //declaring function
};
function init()
{
    var button1 = document.querySelector(".Sub1");
    if (button1) {
        button1.addEventListener("click", function () { window.location.href = "NewData.html" });
    }
    var button2 = document.querySelector(".Sub2");
    if (button2) {
        button2.addEventListener("click", function () { window.location.href = "View.html" });
    }
    var image1 = document.querySelector(".Img1");
    if (image1) {
        image1.addEventListener("click", function () { window.location.href = "Logo_SUAS.jpg" });
    }
    var button3 = document.querySelector(".Sub3");
    if(button3){
        button3.addEventListener("click", function(){window.location.reload()});
    }
};