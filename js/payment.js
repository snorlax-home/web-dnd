var paymentOption = 0;
var Boxs = document.getElementById("Box");
var cross = document.getElementsByClassName("close")[0];
var proc = document.getElementById("process");
var done = document.getElementById("done");
var loader =  document.getElementById("loader");

function changeColorButton1(color)
{
    document.getElementById("button1").style.background = color;
}

function changeColorButton2(color)
{
    document.getElementById("button2").style.background = color;
}

function changeColorButton3(color)
{
    document.getElementById("button3").style.background = color;
}

function changeColorButton4(color)
{
    document.getElementById("button4").style.background = color;
}

function ChoosePayment1()
{
    changeColorButton1('#FC9483');
    changeColorButton2('#9C7B83');
    changeColorButton3('#9C7B83');
    changeColorButton4('#9C7B83');

    paymentOption = 1;
    
}

function ChoosePayment2()
{
    changeColorButton1('#9C7B83');
    changeColorButton2('#FC9483');
    changeColorButton3('#9C7B83');
    changeColorButton4('#9C7B83');

    paymentOption = 2;
    
}

function ChoosePayment3()
{
    changeColorButton1('#9C7B83');
    changeColorButton2('#9C7B83');
    changeColorButton3('#FC9483');
    changeColorButton4('#9C7B83');

    paymentOption = 3;
    
}

function ChoosePayment4()
{
    changeColorButton1('#9C7B83');
    changeColorButton2('#9C7B83');
    changeColorButton3('#9C7B83');
    changeColorButton4('#FC9483');

    paymentOption = 4;
    
}

function confirm()
{
    if (paymentOption == 0)
    {
        alert("please select payment option!");
    }
    
    else if(paymentOption == 1)
    {
        location.href = "https://www.maybank2u.com.my/mbb/m2u/public/promoChannel.do?cntTypeId=1&channelId=&programId=PRO01-Accounts&chCatId=/mbb/Personal/PRO-Promotions";
    }

    else if(paymentOption == 2)
    {
        location.href = "https://s.hongleongconnect.my/rib/app/fo/login?icp=hlb-en-all-header-txt-connectweb";
    }

    else if(paymentOption == 3)
    {
        Boxs.style.display ="block";
        setTimeout(() => {
            proc.style.display ="none";
            loader.style.display ="none";
            done.style.display ="block";
            
        }, 3000);
         
    }

    else if(paymentOption == 4)
    {
        Boxs.style.display ="block";
        setTimeout(() => {
            proc.style.display ="none";
            loader.style.display ="none";
            done.style.display ="block";
            
        }, 3000);
         
    }
}

cross.onclick = function()
{
    Boxs.style.display = "none";
    done.style.display ="none";
    proc.style.display ="block";
    loader.style.display ="block";
}

window.onclick = function(event) {
    if (event.target == Boxs) {
        Boxs.style.display = "none";
        done.style.display ="none";
        proc.style.display ="block";
        loader.style.display ="block";
    
    }
  }
