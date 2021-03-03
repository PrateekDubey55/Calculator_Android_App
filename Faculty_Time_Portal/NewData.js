window.onload = function () {   
    var i,k;
    var j,days;
    var button3 = document.querySelector(".Sub5");
    if(button3){
        button3.addEventListener("click", function(){window.location.href="Welcome.html"});  
    }
    var button4 = document.querySelector(".Sub4");
    if(button4){
        button4.addEventListener("click", function(){window.location.reload()});  
    }
    var radio1 = document.querySelector(".r1");
    var radio2 = document.querySelector(".r2");
    var radio3 = document.querySelector(".r3");
    var radio4 = document.querySelector(".r4");
    var radio5 = document.querySelector(".r5");
    var radio6 = document.querySelector(".r6");
    if(radio1.addEventListener("click",function(){
        days="Monday";
        retrieveData(days);
    })){}
    else if(radio2.addEventListener("click", function(){
        days="Tuesday";
        retrieveData(days);
    })){}
    else if(radio3.addEventListener("click", function(){
        days="Wednesday";
        retrieveData(days);
    })){}
    else if(radio4.addEventListener("click", function(){
        days="Thursday";
        retrieveData(days);
    })){}
    else if(radio5.addEventListener("click", function(){
        days="Friday";
        retrieveData(days);
    })){}
    else if(radio6.addEventListener("click", function(){
        days="Saturday";
        retrieveData(days);
    })){}
};
function init(j) {
    var snolab = document.querySelector(".SnoLab");
    var text1 = document.querySelector(".fname");
    var days;
    snolab.innerHTML=j;
    var image2 = document.querySelector(".Img2");
    if (image2) {
        image2.addEventListener("click", function () { window.location.href = "Logo_SUAS.jpg" });
    }
    
    var button1 = document.querySelector(".NewData1");
    if(button1)
    {
        button1.addEventListener("click", function(event){
                //make input fields required here (make use of function if possbile)
                // check whether 
                    
                    //requiredField();
                //this works here or not (try using function)
                var text1 = document.querySelector(".fname").value;
                var ip = document.querySelector(".fname");
                if(text1=="")
                {
                    alert("Please Fill Faculty Name");
                    ip.focus();
                }
                else{
                    radioCheck(j);
                }
                event.stopPropagation();
            });
    }
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
function enterNewData(days,j){
    var ch1,ch2,ch3,ch4,ch5,ch6,ch7;
    var check1 = document.querySelector(".c1");
    var check2 = document.querySelector(".c2");
    var check3 = document.querySelector(".c3");
    var check4 = document.querySelector(".c4");
    var check5 = document.querySelector(".c5");
    var check6 = document.querySelector(".c6");
    var check7 = document.querySelector(".c7");
    var text1 = document.querySelector(".fname").value;
                    /*var text2 = document.querySelector(".cname").value;
                    console.log(text2);
                    var text3 = document.querySelector(".roomno").value;
                    console.log(text3);
                    var text4 = document.querySelector(".sub").value;
                    console.log(text4);*/
                    if(check1.checked)
                    {
                            ch1="Allotted";
                            console.log("Allotted");
                    }
                    else{
                        ch1="Free";
                        console.log("Free");
                    }
                    if(check2.checked)
                    {
                            ch2="Allotted";
                            console.log("Allotted");
                    }
                    else{
                        ch2="Free";
                        console.log("Free");
                    }
                    if(check3.checked)
                    {
                            ch3="Allotted";
                            console.log("Allotted");
                    }
                    else{
                        ch3="Free";
                        console.log("Free");
                    }
                    if(check4.checked)
                    {
                            ch4="Allotted";
                            console.log("Allotted");
                    }
                    else{
                        ch4="Free";
                        console.log("Free");
                    }
                    if(check5.checked)
                    {
                            ch5="Allotted";
                            console.log("Allotted");
                    }
                    else{
                        ch5="Free";
                        console.log("Free");
                    }
                    if(check6.checked)
                    {
                            ch6="Allotted";
                            console.log("Allotted");
                    }
                    else{
                        ch6="Free";
                        console.log("Free");
                    }
                    if(check7.checked)
                    {
                            ch7="Allotted";
                            console.log("Allotted");
                    }
                    else{
                        ch7="Free";
                        console.log("Free");
                    }
    function writeUserData(FacultyName, FacultyId, Slot1, Slot2, Slot3, Slot4, Slot5, Slot6, Slot7) {
        firebase.database().ref(`${days}/${j}`).set({
            FacultyName: text1,
            FacultyId: j,
            Slot7: ch7,
            Slot6: ch6,
            Slot5: ch5,
            Slot4: ch4,
            Slot3: ch3,
            Slot2: ch2,
            Slot1: ch1,
            
        });
        }
            writeUserData(text1,j, ch1, ch2, ch3, ch4, ch5, ch6, ch7 );
            console.log(days);
};
function retrieveData(days)
{        
    var j,days,i,k;    
    j=0;
        alert("You wish to enter data for" +days+"\n Press \"OK\"");
        firebase.database().ref().child(days).once("value",function(snapshot){
       i = snapshot.val();
       let e = Object.keys(i);
        console.log(e[e.length-1]);
        k=e[e.length-1];
        if(k<1)
        {
            k=1;
            console.log(k);
            j=k;
            init(j);
        } 
        else
        {   
            k++;
            console.log(k);
            j=k;
            init(j);
        }
        disableMe();
        });
};
function radioCheck(j)
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
        enterNewData(days,j);
    } 
    else if(radio2.checked)
    {
        days="Tuesday";
        enterNewData(days,j);
    }
    else if(radio3.checked)
    {
        days="Wednesday";
        enterNewData(days,j);
    }
    else if(radio4.checked)
    {
        days="Thursday";
        enterNewData(days,j);
    }
    else if(radio5.checked)
    {
        days="Friday";
        enterNewData(days,j);
    }
    else if(radio6.checked)
    {
        days="Saturday";
        enterNewData(days,j);
    }
    window.location.reload();
};