var slidepage = 2;
var s1 = document.getElementById("slide1");
var s2 = document.getElementById("slide2");
var s3 = document.getElementById("slide3");

var b1 = document.getElementById("button1");
var b2 = document.getElementById("button2");
var b3 = document.getElementById("button3");

var m1 = document.getElementById("missionTilte");
var m2 = document.getElementById("missionImg");
var m3 = document.getElementById("mission");

var w1 = document.getElementById("WhyUsTilte");
var w2 = document.getElementById("WhyUsImg");
var w3 = document.getElementById("WhyUs");


firstrun()

setInterval(() => 
{
    if (slidepage == 1)
    {
        slide1.style.display = "block";
        slide2.style.display = "none";
        slide3.style.display = "none";
        console.log("slide1 ...");
        slidepage ++;
        b1.style.backgroundColor = "#F26B8A";
        b2.style.backgroundColor = "white";
        b3.style.backgroundColor = "white";
    }

    else if (slidepage == 2)
    {
        slide1.style.display = "none";
        slide2.style.display = "block";
        slide3.style.display = "none";
        console.log("slide2 ...");
        slidepage ++;
        b1.style.backgroundColor = "white";
        b2.style.backgroundColor = "#F26B8A";
        b3.style.backgroundColor = "white";
    }

    else if (slidepage == 3)
    {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "block";
        console.log("slide3 ...");
        slidepage =1;
        b1.style.backgroundColor = "white";
        b2.style.backgroundColor = "white";
        b3.style.backgroundColor = "#F26B8A";
    }
}, 6000);

function firstrun()
{
    b1.style.backgroundColor = "#F26B8A";
}



function ChooseSlide1()
{
    slide1.style.display = "block";
    slide2.style.display = "none";
    slide3.style.display = "none";
    slidepage = 2;

    b1.style.backgroundColor = "#F26B8A";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
}

function ChooseSlide2()
{
    slide1.style.display = "none";
    slide2.style.display = "block";
    slide3.style.display = "none";
    slidepage = 3;

    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "#F26B8A";
    b3.style.backgroundColor = "white";
}

function ChooseSlide3()
{
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "block";
    slidepage = 1;

    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "#F26B8A";
}

function ChooseTilte1()
{
    w1.style.backgroundColor = "#FA87A1";
    w2.style.display = "none";
    w3.style.display = "none";

    m1.style.backgroundColor = "rgb(255, 243, 230)";
    m2.style.display = "block";
    m3.style.display = "block";
}


function ChooseTilte2()
{
    m1.style.backgroundColor = "#FA87A1";
    m2.style.display = "none";
    m3.style.display = "none";

    w1.style.backgroundColor = "rgb(255, 243, 230)";
    w2.style.display = "block";
    w3.style.display = "block";
}