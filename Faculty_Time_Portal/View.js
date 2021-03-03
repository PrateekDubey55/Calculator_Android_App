window.onload = function()
{
    init();
};
function init()
{
    var button3 = document.querySelector(".Sub5");
    if(button3){
        button3.addEventListener("click", function(){window.location.href="Welcome.html"});  
    }
    var button4 = document.querySelector(".Sub4");
    if(button4){
        button4.addEventListener("click", function(){window.location.reload()});  
    }
    var image2 = document.querySelector(".Img3");
    if(image2) {
        image2.addEventListener("click", function () { window.location.href = "Logo_SUAS.jpg" });
    }  
    var view01 = document.querySelector(".View1");
    if(view01){
        view01.addEventListener("click", function(e){
                var text1 = document.querySelector(".fname").value;
                var ip = document.querySelector(".fname");
                if(text1=="")
                {
                    alert("Please Fill Faculty Name");
                    ip.focus();
                }
                else
                {
                    retrieveData();
                }
                e.stopPropagation();
      });
    }
};

function retrieveData()
{
    var radio1 = document.querySelector(".r1");
    var radio2 = document.querySelector(".r2");
    var radio3 = document.querySelector(".r3");
    var radio4 = document.querySelector(".r4");
    var radio5 = document.querySelector(".r5");
    var radio6 = document.querySelector(".r6");
                
                if(radio1.checked)
                {
                    days="Monday";
                } 
                else if(radio2.checked)
                {
                    days="Tuesday";
                }
                else if(radio3.checked)
                {
                    days="Wednesday";
                }
                else if(radio4.checked)
                {
                    days="Thursday";
                }
                else if(radio5.checked)
                {
                    days="Friday";
                }
                else if(radio6.checked)
                {
                    days="Saturday";
                }
    var database = firebase.database;
    var i,ka,j,temp=0;
    var a,b,c,d,e,f,g,h,z;
    var text1 = document.querySelector(".fname").value;
    firebase.database().ref().child(days).once("value",function(snapshot){

        i = snapshot.val();
        for(j=1;j<=i.length-1;j++)
        {
            if(text1==i[j].FacultyName)
            {
                ka=j;
                temp=1;break;
            }
            else
            {
                temp=-1;
            }
        }
        if(temp==1){
            a=i[ka].FacultyId;
            b=i[ka].FacultyName;
            c=i[ka].Slot1;
            d=i[ka].Slot2;
            e=i[ka].Slot3;
            f=i[ka].Slot4;
            g=i[ka].Slot5;
            h=i[ka].Slot6;
            z=i[ka].Slot7;
            /*console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
            console.log(e);
            console.log(f);
            console.log(g);
            console.log(h);
            console.log(z);*/
            //alert("Faculty Name: "+b+"\nSlot 1: "+c+"\nSlot 2: "+d+"\nSlot 3: "+e+"\nSlot 4: "+f+"\nSlot 5: "+g+"\nSlot 6: "+h+"\nSlot 7: "+z);
            sessionStorage.setItem("fname",b);
            sessionStorage.setItem("day",days);
            sessionStorage.setItem("slot1",c);
            sessionStorage.setItem("slot2",d);
            sessionStorage.setItem("slot3",e);
            sessionStorage.setItem("slot4",f);
            sessionStorage.setItem("slot5",g);
            sessionStorage.setItem("slot6",h);
            sessionStorage.setItem("slot7",z);
            window.location.href="Answer.html";
            disableMe();
        }
        else{
            disableMe();
            var text2 = document.querySelector(".Note1");
            text2.innerHTML="No Record Found For This Faculty On This Day";
            var text3 = document.querySelector(".Note2");
            text3.innerHTML="Reload The Page To View New Data";
        }
    });
};
function disableMe()
{
    var radio1 = document.querySelector(".r1");
    var radio2 = document.querySelector(".r2");
    var radio3 = document.querySelector(".r3");
    var radio4 = document.querySelector(".r4");
    var radio5 = document.querySelector(".r5");
    var radio6 = document.querySelector(".r6");
    radio1.disabled = true;
    radio2.disabled = true;
    radio3.disabled = true;
    radio4.disabled = true;
    radio5.disabled = true;
    radio6.disabled = true;
};