const prevBtn = document.querySelector(".prevbutton");
const nextBtn = document.querySelector(".nextbutton");
const book = document.querySelector(".book");

const volumeBtn = document.querySelector("#Volume");
const pageBtn = document.querySelector("#GotoPages");
const playBtn = document.querySelector("#PlayPause");

// Pages
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11");
const paper12 = document.querySelector("#p12");
const paper13 = document.querySelector("#p13");
const paper14 = document.querySelector("#p14");
const paper15 = document.querySelector("#p15");
const paper16 = document.querySelector("#p16");
const paper17 = document.querySelector("#p17");
const paper18 = document.querySelector("#p18");
const paper19 = document.querySelector("#p19");
const paper20 = document.querySelector("#p20");
const paper21 = document.querySelector("#p21");
const paper22 = document.querySelector("#p22");
const paper23 = document.querySelector("#p23");
const paper24 = document.querySelector("#p24");
const paper25 = document.querySelector("#p25");
const paper26 = document.querySelector("#p26");
const paper27 = document.querySelector("#p27");
const paper28 = document.querySelector("#p28");
const paper29 = document.querySelector("#p29");
const paper30 = document.querySelector("#p30");
const paper31 = document.querySelector("#p31");
const paper32 = document.querySelector("#p32");
const paper33 = document.querySelector("#p33");
const paper34 = document.querySelector("#p34");
const paper35 = document.querySelector("#p35");
const paper36 = document.querySelector("#p36");

// Navigation Pages Dialog Buttons
const pageDisp1Btn = document.querySelector(".pageDisp1");
const pageDisp2Btn = document.querySelector(".pageDisp2");
const pageDisp3Btn = document.querySelector(".pageDisp3");
const pageDisp4Btn = document.querySelector(".pageDisp4");
const pageDisp5Btn = document.querySelector(".pageDisp5");
const pageDisp6Btn = document.querySelector(".pageDisp6");
const pageDisp7Btn = document.querySelector(".pageDisp7");
const pageDisp8Btn = document.querySelector(".pageDisp8");
const pageDisp9Btn = document.querySelector(".pageDisp9");
const pageDisp10Btn = document.querySelector(".pageDisp10");
const pageDisp11Btn = document.querySelector(".pageDisp11");
const pageDisp12Btn = document.querySelector(".pageDisp12");
const pageDisp13Btn = document.querySelector(".pageDisp13");
const pageDisp14Btn = document.querySelector(".pageDisp14");
const pageDisp15Btn = document.querySelector(".pageDisp15");
const pageDisp16Btn = document.querySelector(".pageDisp16");
const pageDisp17Btn = document.querySelector(".pageDisp17");
const pageDisp18Btn = document.querySelector(".pageDisp18");
const pageDisp19Btn = document.querySelector(".pageDisp19");
const pageDisp20Btn = document.querySelector(".pageDisp20");
const pageDisp21Btn = document.querySelector(".pageDisp21");
const pageDisp22Btn = document.querySelector(".pageDisp22");
const pageDisp23Btn = document.querySelector(".pageDisp23");
const pageDisp24Btn = document.querySelector(".pageDisp24");
const pageDisp25Btn = document.querySelector(".pageDisp25");
const pageDisp26Btn = document.querySelector(".pageDisp26");
const pageDisp27Btn = document.querySelector(".pageDisp27");
const pageDisp28Btn = document.querySelector(".pageDisp28");
const pageDisp29Btn = document.querySelector(".pageDisp29");
const pageDisp30Btn = document.querySelector(".pageDisp30");
const pageDisp31Btn = document.querySelector(".pageDisp31");
const pageDisp32Btn = document.querySelector(".pageDisp32");
const pageDisp33Btn = document.querySelector(".pageDisp33");
const pageDisp34Btn = document.querySelector(".pageDisp34");
const pageDisp35Btn = document.querySelector(".pageDisp35");

// Volume
var mainVolume = 100;

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

volumeBtn.addEventListener("click", volume);
pageBtn.addEventListener("click", pageDialog);
playBtn.addEventListener("click", PlayPause);

pageDisp1Btn.addEventListener("click", page1);
pageDisp2Btn.addEventListener("click", page2);
pageDisp3Btn.addEventListener("click", page3);
pageDisp4Btn.addEventListener("click", page4);
pageDisp5Btn.addEventListener("click", page5);
pageDisp6Btn.addEventListener("click", page6);
pageDisp7Btn.addEventListener("click", page7);
pageDisp8Btn.addEventListener("click", page8);
pageDisp9Btn.addEventListener("click", page9);
pageDisp10Btn.addEventListener("click", page10);
pageDisp11Btn.addEventListener("click", page11);
pageDisp12Btn.addEventListener("click", page12);
pageDisp13Btn.addEventListener("click", page13);
pageDisp14Btn.addEventListener("click", page14);
pageDisp15Btn.addEventListener("click", page15);
pageDisp16Btn.addEventListener("click", page16);
pageDisp17Btn.addEventListener("click", page17);
pageDisp18Btn.addEventListener("click", page18);
pageDisp19Btn.addEventListener("click", page19);
pageDisp20Btn.addEventListener("click", page20);
pageDisp21Btn.addEventListener("click", page21);
pageDisp22Btn.addEventListener("click", page22);
pageDisp23Btn.addEventListener("click", page23);
pageDisp24Btn.addEventListener("click", page24);
pageDisp25Btn.addEventListener("click", page25);
pageDisp26Btn.addEventListener("click", page26);
pageDisp27Btn.addEventListener("click", page27);
pageDisp28Btn.addEventListener("click", page28);
pageDisp29Btn.addEventListener("click", page29);
pageDisp30Btn.addEventListener("click", page30);
pageDisp31Btn.addEventListener("click", page31);
pageDisp32Btn.addEventListener("click", page32);
pageDisp33Btn.addEventListener("click", page33);
pageDisp34Btn.addEventListener("click", page34);
pageDisp35Btn.addEventListener("click", page35);

let currentLocation = 1;
let numOfPapers = 36;
let maxLocation = numOfPapers + 1;

var openedBook = false;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-160px)";
    nextBtn.style.transform = "translateX(160px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";

    openedBook = false;
}

// Next Page Button
function next() {
    // Reset Time
    voices();
    
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1: // Page 1
                openBook();
                paper1.classList.add("flipped");

                setTimeout(() => {
                    paper1.style.zIndex = 1;
                }, 150);

                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals1").play();
                break;
            case 2: // Page 2
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals2").play();
                break;
            case 3: // Page 2
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals3").play();
                break;
            case 4: // Page 2
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals4").play();
                break;
            case 5: // Page 2
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals5").play();
                break;
            case 6: // Page 2
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals6").play();
                break;
            case 7: // Page 2
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals7").play();
                break;
            case 8: // Page 2
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals8").play();
                break;
            case 9: // Page 2
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals9").play();
                break;
            case 10: // Page 10
                paper10.classList.add("flipped");
                paper10.style.zIndex = 10;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals10").play();
                break;
            case 11: // Page 11
                paper11.classList.add("flipped");
                paper11.style.zIndex = 11;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals11").play();
                break;
            case 12: // Page 12
                paper12.classList.add("flipped");
                paper12.style.zIndex = 12;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals12").play();
                break;
            case 13: // Page 13
                paper13.classList.add("flipped");
                paper13.style.zIndex = 13;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals13").play();
                break;
            case 14: // Page 14
                paper14.classList.add("flipped");
                paper14.style.zIndex = 14;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals14").play();
                break;
            case 15: // Page 15
                paper15.classList.add("flipped");
                paper15.style.zIndex = 15;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals15").play();
                break;
            case 16: // Page 16
                paper16.classList.add("flipped");
                paper16.style.zIndex = 16;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals16").play();
                break;
            case 17: // Page 17
                paper17.classList.add("flipped");
                paper17.style.zIndex = 17;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals17").play();
                break;
            case 18: // Page 18
                paper18.classList.add("flipped");
                paper18.style.zIndex = 18;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals18").play();
                break;
            case 19: // Page 19
                paper19.classList.add("flipped");
                paper19.style.zIndex = 19;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals19").play();
                break;
            case 20: // Page 20
                paper20.classList.add("flipped");
                paper20.style.zIndex = 20;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals20").play();
                break;
            case 21: // Page 21
                paper21.classList.add("flipped");
                paper21.style.zIndex = 21;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";
                
                document.getElementById("vocals21").play();
                break;
            case 22: // Page 22
                paper22.classList.add("flipped");
                paper22.style.zIndex = 22;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals22").play();
                break;
            case 23: // Page 23
                paper23.classList.add("flipped");
                paper23.style.zIndex = 23;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals23").play();
                break;
            case 24: // Page 24
                paper24.classList.add("flipped");
                paper24.style.zIndex = 24;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals24").play();
                break;
            case 25: // Page 25
                paper25.classList.add("flipped");
                paper25.style.zIndex = 25;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals25").play();
                break;
            case 26: // Page 26
                paper26.classList.add("flipped");
                paper26.style.zIndex = 26;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals26").play();
                break;
            case 27: // Page 27
                paper27.classList.add("flipped");
                paper27.style.zIndex = 27;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals27").play();
                break;
            case 28: // Page 28
                paper28.classList.add("flipped");
                paper28.style.zIndex = 28;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals28").play();
                break;
            case 29: // Page 29
                paper29.classList.add("flipped");
                paper29.style.zIndex = 29;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals29").play();
                break;
            case 30: // Page 30
                paper30.classList.add("flipped");
                paper30.style.zIndex = 30;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals30").play();
                break;
            case 31: // Page 31
                paper31.classList.add("flipped");
                paper31.style.zIndex = 31;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals31").play();
                break;
            case 32: // Page 32
                paper32.classList.add("flipped");
                paper32.style.zIndex = 32;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals32").play();
                break;
            case 33: // Page 33
                paper33.classList.add("flipped");
                paper33.style.zIndex = 33;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals33").play();
                break;
            case 34: // Page 34
                paper34.classList.add("flipped");
                paper34.style.zIndex = 34;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals34").play();
                break;
            case 35: // Page 34
                paper35.classList.add("flipped");
                paper35.style.zIndex = 35;
                document.getElementById("turnpage").play();
                document.getElementById("prev").style.visibility = "visible";

                document.getElementById("vocals35").play();
                break;
            case 36: // Back
                paper36.classList.add("flipped");
                paper36.style.zIndex = 36;
                closeBook(false);
                document.getElementById("closebook").play();
                document.getElementById("next").style.visibility = "hidden";
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

// Previous Page Button
function prev() {
    // Voices Reset Time
    voices();

    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2: // Front
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 36;
                document.getElementById("closebook").play();
                document.getElementById("prev").style.visibility = "hidden";
                break;
            case 3: // Page 2
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 35;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals1").play();
                break;
            case 4: // Page 3
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 34;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals2").play();
                break;
            case 5: // Page 4
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 33;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals3").play();
                break;
            case 6: // Page 5
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 32;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals4").play();
                break;
            case 7: // Page 6
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 31;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals5").play();
                break;
            case 8: // Page 7
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 30;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals6").play();
                break;
            case 9: // Page 8
                paper8.classList.remove("flipped");
                paper8.style.zIndex = 29;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals7").play();
                break;
            case 10: // Page 9
                paper9.classList.remove("flipped");
                paper9.style.zIndex = 28;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals8").play();
                break;
            case 11: // Page 10
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 27;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals9").play();
                break;
            case 12: // Page 11
                paper11.classList.remove("flipped");
                paper11.style.zIndex = 26;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals10").play();
                break;
            case 13: // Page 12
                paper12.classList.remove("flipped");
                paper12.style.zIndex = 25;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals11").play();
                break;
            case 14: // Page 13
                paper13.classList.remove("flipped");
                paper13.style.zIndex = 24;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals12").play();
                break;
            case 15: // Page 14
                paper14.classList.remove("flipped");
                paper14.style.zIndex = 23;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals13").play();
                break;
            case 16: // Page 15
                paper15.classList.remove("flipped");
                paper15.style.zIndex = 22;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals14").play();
                break;
            case 17: // Page 16
                paper16.classList.remove("flipped");
                paper16.style.zIndex = 21;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals15").play();
                break;
            case 18: // Page 17
                paper17.classList.remove("flipped");
                paper17.style.zIndex = 20;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals16").play();
                break;
            case 19: // Page 18
                paper18.classList.remove("flipped");
                paper18.style.zIndex = 19;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals17").play();
                break;
            case 20: // Page 19
                paper19.classList.remove("flipped");
                paper19.style.zIndex = 18;
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals18").play();
                break;
            case 21: // Page 20
                paper20.classList.remove("flipped");

                setTimeout(() => {
                    paper20.style.zIndex = 17;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals19").play();
                break;
            case 22: // Page 21
                paper21.classList.remove("flipped");
                
                setTimeout(() => {
                    paper21.style.zIndex = 16;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals20").play();
                break;
            case 23: // Page 22
                paper22.classList.remove("flipped");
                
                setTimeout(() => {
                    paper22.style.zIndex = 15;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals21").play();
                break;
            case 24: // Page 23
                paper23.classList.remove("flipped");
                
                setTimeout(() => {
                    paper23.style.zIndex = 14;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals22").play();
                break;
            case 25: // Page 24
                paper24.classList.remove("flipped");
                
                setTimeout(() => {
                    paper24.style.zIndex = 13;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals23").play();
                break;
            case 26: // Page 25
                paper25.classList.remove("flipped");
                
                setTimeout(() => {
                    paper25.style.zIndex = 12;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals24").play();
                break;
            case 27: // Page 26
                paper26.classList.remove("flipped");
                
                setTimeout(() => {
                    paper26.style.zIndex = 11;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals25").play();
                break;
            case 28: // Page 27
                paper27.classList.remove("flipped");
                
                setTimeout(() => {
                    paper27.style.zIndex = 10;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                
                document.getElementById("vocals26").play();
                break;
            case 29: // Page 28
                paper28.classList.remove("flipped");
                
                setTimeout(() => {
                    paper28.style.zIndex = 9;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                
                document.getElementById("vocals27").play();
                break;
            case 30: // Page 29
                paper29.classList.remove("flipped");
                
                setTimeout(() => {
                    paper29.style.zIndex = 8;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                
                document.getElementById("vocals28").play();
                break;
            case 31: // Page 30
                paper30.classList.remove("flipped");
                
                setTimeout(() => {
                    paper30.style.zIndex = 7;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                
                document.getElementById("vocals29").play();
                break;
            case 32: // Page 31
                paper31.classList.remove("flipped");
                
                setTimeout(() => {
                    paper31.style.zIndex = 6;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                
                document.getElementById("vocals30").play();
                break;
            case 33: // Page 32
                paper32.classList.remove("flipped");
                
                setTimeout(() => {
                    paper32.style.zIndex = 5;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                
                document.getElementById("vocals31").play();
                break;
            case 34: // Page 33
                paper33.classList.remove("flipped");
                
                setTimeout(() => {
                    paper33.style.zIndex = 4;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                
                document.getElementById("vocals32").play();
                break;
            case 35: // Page 34
                paper34.classList.remove("flipped");
                
                setTimeout(() => {
                    paper34.style.zIndex = 3;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                
                document.getElementById("vocals33").play();
                break;
            case 36: // Page 35
                paper35.classList.remove("flipped");
                
                setTimeout(() => {
                    paper35.style.zIndex = 2;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";
                
                document.getElementById("vocals34").play();
                break;
            case 37: // Page 36
                openBook();
                paper36.classList.remove("flipped");
                
                setTimeout(() => {
                    paper36.style.zIndex = 1;
                }, 150);
                
                document.getElementById("prevturnpage").play();
                document.getElementById("next").style.visibility = "visible";

                document.getElementById("vocals35").play();
                break;
            default:
                throw new Error("unkown state");
        }
        
        currentLocation--;
    }
}

// Play Voices
function voices()
{
    document.getElementById("prevturnpage").currentTime = 0;
    document.getElementById("turnpage").currentTime = 0;
    document.getElementById("closebook").currentTime = 0;

    // Pause Time
    document.getElementById("vocals1").pause();
    document.getElementById("vocals2").pause();
    document.getElementById("vocals3").pause();
    document.getElementById("vocals4").pause();
    document.getElementById("vocals5").pause();
    document.getElementById("vocals6").pause();
    document.getElementById("vocals7").pause();
    document.getElementById("vocals8").pause();
    document.getElementById("vocals9").pause();
    document.getElementById("vocals10").pause();
    document.getElementById("vocals11").pause();
    document.getElementById("vocals12").pause();
    document.getElementById("vocals13").pause();
    document.getElementById("vocals14").pause();
    document.getElementById("vocals15").pause();
    document.getElementById("vocals16").pause();
    document.getElementById("vocals17").pause();
    document.getElementById("vocals18").pause();
    document.getElementById("vocals19").pause();
    document.getElementById("vocals20").pause();
    document.getElementById("vocals21").pause();
    document.getElementById("vocals22").pause();
    document.getElementById("vocals23").pause();
    document.getElementById("vocals24").pause();
    document.getElementById("vocals25").pause();
    document.getElementById("vocals26").pause();
    document.getElementById("vocals27").pause();
    document.getElementById("vocals28").pause();
    document.getElementById("vocals29").pause();
    document.getElementById("vocals30").pause();
    document.getElementById("vocals31").pause();
    document.getElementById("vocals32").pause();
    document.getElementById("vocals33").pause();
    document.getElementById("vocals34").pause();
    document.getElementById("vocals35").pause();

    // Reset Time
    document.getElementById("vocals1").currentTime = 0;
    document.getElementById("vocals2").currentTime = 0;
    document.getElementById("vocals3").currentTime = 0;
    document.getElementById("vocals4").currentTime = 0;
    document.getElementById("vocals5").currentTime = 0;
    document.getElementById("vocals6").currentTime = 0;
    document.getElementById("vocals7").currentTime = 0;
    document.getElementById("vocals8").currentTime = 0;
    document.getElementById("vocals9").currentTime = 0;
    document.getElementById("vocals10").currentTime = 0;
    document.getElementById("vocals11").currentTime = 0;
    document.getElementById("vocals12").currentTime = 0;
    document.getElementById("vocals13").currentTime = 0;
    document.getElementById("vocals14").currentTime = 0;
    document.getElementById("vocals15").currentTime = 0;
    document.getElementById("vocals16").currentTime = 0;
    document.getElementById("vocals17").currentTime = 0;
    document.getElementById("vocals18").currentTime = 0;
    document.getElementById("vocals19").currentTime = 0;
    document.getElementById("vocals20").currentTime = 0;
    document.getElementById("vocals21").currentTime = 0;
    document.getElementById("vocals22").currentTime = 0;
    document.getElementById("vocals23").currentTime = 0;
    document.getElementById("vocals24").currentTime = 0;
    document.getElementById("vocals25").currentTime = 0;
    document.getElementById("vocals26").currentTime = 0;
    document.getElementById("vocals27").currentTime = 0;
    document.getElementById("vocals28").currentTime = 0;
    document.getElementById("vocals29").currentTime = 0;
    document.getElementById("vocals30").currentTime = 0;
    document.getElementById("vocals31").currentTime = 0;
    document.getElementById("vocals32").currentTime = 0;
    document.getElementById("vocals33").currentTime = 0;
    document.getElementById("vocals34").currentTime = 0;
    document.getElementById("vocals35").currentTime = 0;
}

// Show Volume Dialog
var IsVolumeEnable = false;

function volume(){
    if (IsVolumeEnable == false)
    {
        document.getElementById("idVol").style.visibility = "hidden";
        document.getElementById("vDlg").style.visibility = "visible";
        document.getElementById("Volume").style.opacity = "45%";
        IsVolumeEnable = true;
    }
    else
    {
        document.getElementById("idVol").style.visibility = "visible";
        document.getElementById("vDlg").style.visibility = "hidden";
        document.getElementById("Volume").style.opacity = "75%";
        IsVolumeEnable = false;
    }
}

// Show Volume Dialog
var IsPageEnable = false;

function pageDialog(){
    if (IsPageEnable == false)
    {
        document.getElementById("pDlg").style.left = "0px";
        document.getElementById("pDlg").style.width = "375px";
        document.getElementById("pDlg").style.visibility = "visible";
        document.getElementById("PagesName").style.visibility = "visible";
        document.getElementById("pageDispId").style.visibility = "visible";
        document.getElementById("GotoPages").style.opacity = "45%";
        document.getElementById("prevturnpage").play();
        IsPageEnable = true;
    }
    else
    {
        document.getElementById("pDlg").style.width = "0px";
        document.getElementById("pDlg").style.left = "-30px";
        document.getElementById("PagesName").style.visibility = "hidden";
        document.getElementById("GotoPages").style.opacity = "75%";
        document.getElementById("prevturnpage").play();

        
        setTimeout(() => { document.getElementById("pageDispId").style.visibility = "hidden"; }, 250);
        IsPageEnable = false;
    }
}

// Play/Pause Pages
var IsPlayEnable = false;
var pageCountA = 0;

function PlayPause(){
    if (IsPlayEnable == false)
    {
        document.getElementById("imgPlayPause").src = "graphics/pause.png";
        IsPlayEnable = true;

        // Next Page
        next();
        pageCountA = setTimeout(() => {next();}, 7000);
        pageCountA = setTimeout(() => {next();}, 16000);
        pageCountA = setTimeout(() => {next();}, 82000);
    }
    else
    {
        document.getElementById("imgPlayPause").src = "graphics/play.png";
        IsPlayEnable = false;

        voices();
    }
}

// ---------------------------------------------
// Volume Slider
// ---------------------------------------------

// Main Volume
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    mainVolume = parseInt(this.value);

    if (mainVolume >= 75 && mainVolume <= 100 )
    {
        document.getElementById("imgVolume").src = "graphics/volume-100%.png";
    }
    else if (mainVolume >= 50 && mainVolume <= 74 )
    {
        document.getElementById("imgVolume").src = "graphics/volume-50%.png";
    }
    else if (mainVolume >= 11 && mainVolume <= 49 )
    {
        document.getElementById("imgVolume").src = "graphics/volume-25%.png";
    }
    else if (mainVolume >= 1 && mainVolume <= 10 )
    {
        document.getElementById("imgVolume").src = "graphics/volume-10%.png";
    }
    else if (mainVolume == 0)
    {
        document.getElementById("imgVolume").src = "graphics/volume-mute.png";
    }

    // Check Main Volume
    if (mainVolume == 100)
    {  
        document.getElementById("prevturnpage").volume = mainVolume * 0.01;
        document.getElementById("turnpage").volume = mainVolume * 0.01;
        document.getElementById("closebook").volume = mainVolume * 0.01;
        
        document.getElementById("vocals1").volume = mainVolume * 0.01;       // Page 1
        document.getElementById("vocals2").volume = mainVolume * 0.01;       // Page 2
        document.getElementById("vocals3").volume = mainVolume * 0.01;       // Page 3
        document.getElementById("vocals4").volume = mainVolume * 0.01;       // Page 4
        document.getElementById("vocals5").volume = mainVolume * 0.01;       // Page 5
        document.getElementById("vocals6").volume = mainVolume * 0.01;       // Page 6
        document.getElementById("vocals7").volume = mainVolume * 0.01;       // Page 7
        document.getElementById("vocals8").volume = mainVolume * 0.01;       // Page 8
        document.getElementById("vocals9").volume = mainVolume * 0.01;       // Page 9
        document.getElementById("vocals10").volume = mainVolume * 0.01;      // Page 10
        document.getElementById("vocals11").volume = mainVolume * 0.01;      // Page 11
        document.getElementById("vocals12").volume = mainVolume * 0.01;      // Page 12
        document.getElementById("vocals13").volume = mainVolume * 0.01;      // Page 13
        document.getElementById("vocals14").volume = mainVolume * 0.01;      // Page 14
        document.getElementById("vocals15").volume = mainVolume * 0.01;      // Page 15
        document.getElementById("vocals16").volume = mainVolume * 0.01;      // Page 16
        document.getElementById("vocals17").volume = mainVolume * 0.01;      // Page 17
        document.getElementById("vocals18").volume = mainVolume * 0.01;      // Page 18
        document.getElementById("vocals19").volume = mainVolume * 0.01;      // Page 19
        document.getElementById("vocals20").volume = mainVolume * 0.01;      // Page 20
        document.getElementById("vocals21").volume = mainVolume * 0.01;      // Page 21
        document.getElementById("vocals22").volume = mainVolume * 0.01;      // Page 22
        document.getElementById("vocals23").volume = mainVolume * 0.01;      // Page 23
        document.getElementById("vocals24").volume = mainVolume * 0.01;      // Page 24
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 25
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 26
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 27
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 28
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 29
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 30
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 31
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 32
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 33
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 34
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 35
    }
    else if (mainVolume == 1)
    {
        document.getElementById("prevturnpage").volume = 0.01;
        document.getElementById("turnpage").volume = 0.01;
        document.getElementById("closebook").volume = 0.01;

        document.getElementById("vocals1").volume = 0.01;       // Page 1
        document.getElementById("vocals2").volume = 0.01;       // Page 2
        document.getElementById("vocals3").volume = 0.01;       // Page 3
        document.getElementById("vocals4").volume = 0.01;       // Page 4
        document.getElementById("vocals5").volume = 0.01;       // Page 5
        document.getElementById("vocals6").volume = 0.01;       // Page 6
        document.getElementById("vocals7").volume = 0.01;       // Page 7
        document.getElementById("vocals8").volume = 0.01;       // Page 8
        document.getElementById("vocals9").volume = 0.01;       // Page 9
        document.getElementById("vocals10").volume = 0.01;      // Page 10
        document.getElementById("vocals11").volume = 0.01;      // Page 11
        document.getElementById("vocals12").volume = 0.01;      // Page 12
        document.getElementById("vocals13").volume = 0.01;      // Page 13
        document.getElementById("vocals14").volume = 0.01;      // Page 14
        document.getElementById("vocals15").volume = 0.01;      // Page 15
        document.getElementById("vocals16").volume = 0.01;      // Page 16
        document.getElementById("vocals17").volume = 0.01;      // Page 17
        document.getElementById("vocals18").volume = 0.01;      // Page 18
        document.getElementById("vocals19").volume = 0.01;      // Page 19
        document.getElementById("vocals20").volume = 0.01;      // Page 20
        document.getElementById("vocals21").volume = 0.01;      // Page 21
        document.getElementById("vocals22").volume = 0.01;      // Page 22
        document.getElementById("vocals23").volume = 0.01;      // Page 23
        document.getElementById("vocals24").volume = 0.01;      // Page 24
        document.getElementById("vocals25").volume = 0.01;      // Page 25
        document.getElementById("vocals25").volume = 0.01;      // Page 26
        document.getElementById("vocals25").volume = 0.01;      // Page 27
        document.getElementById("vocals25").volume = 0.01;      // Page 28
        document.getElementById("vocals25").volume = 0.01;      // Page 29
        document.getElementById("vocals25").volume = 0.01;      // Page 30
        document.getElementById("vocals25").volume = 0.01;      // Page 31
        document.getElementById("vocals25").volume = 0.01;      // Page 32
        document.getElementById("vocals25").volume = 0.01;      // Page 33
        document.getElementById("vocals25").volume = 0.01;      // Page 34
        document.getElementById("vocals25").volume = 0.01;      // Page 35
    }
    else
    {
        document.getElementById("prevturnpage").volume = mainVolume * 0.01;
        document.getElementById("turnpage").volume = mainVolume * 0.01;
        document.getElementById("closebook").volume = mainVolume * 0.01;

        document.getElementById("vocals1").volume = mainVolume * 0.01;       // Page 1
        document.getElementById("vocals2").volume = mainVolume * 0.01;       // Page 2
        document.getElementById("vocals3").volume = mainVolume * 0.01;       // Page 3
        document.getElementById("vocals4").volume = mainVolume * 0.01;       // Page 4
        document.getElementById("vocals5").volume = mainVolume * 0.01;       // Page 5
        document.getElementById("vocals6").volume = mainVolume * 0.01;       // Page 6
        document.getElementById("vocals7").volume = mainVolume * 0.01;       // Page 7
        document.getElementById("vocals8").volume = mainVolume * 0.01;       // Page 8
        document.getElementById("vocals9").volume = mainVolume * 0.01;       // Page 9
        document.getElementById("vocals10").volume = mainVolume * 0.01;      // Page 10
        document.getElementById("vocals11").volume = mainVolume * 0.01;      // Page 11
        document.getElementById("vocals12").volume = mainVolume * 0.01;      // Page 12
        document.getElementById("vocals13").volume = mainVolume * 0.01;      // Page 13
        document.getElementById("vocals14").volume = mainVolume * 0.01;      // Page 14
        document.getElementById("vocals15").volume = mainVolume * 0.01;      // Page 15
        document.getElementById("vocals16").volume = mainVolume * 0.01;      // Page 16
        document.getElementById("vocals17").volume = mainVolume * 0.01;      // Page 17
        document.getElementById("vocals18").volume = mainVolume * 0.01;      // Page 18
        document.getElementById("vocals19").volume = mainVolume * 0.01;      // Page 19
        document.getElementById("vocals20").volume = mainVolume * 0.01;      // Page 20
        document.getElementById("vocals21").volume = mainVolume * 0.01;      // Page 21
        document.getElementById("vocals22").volume = mainVolume * 0.01;      // Page 22
        document.getElementById("vocals23").volume = mainVolume * 0.01;      // Page 23
        document.getElementById("vocals24").volume = mainVolume * 0.01;      // Page 24
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 25
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 26
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 27
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 28
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 29
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 30
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 31
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 32
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 33
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 34
        document.getElementById("vocals25").volume = mainVolume * 0.01;      // Page 35
    }
}

function resetPagesOpacity() {
    document.getElementById("pageDisp1_ID").style.opacity = "100%";
    document.getElementById("pageDisp2_ID").style.opacity = "100%";
    document.getElementById("pageDisp3_ID").style.opacity = "100%";
    document.getElementById("pageDisp4_ID").style.opacity = "100%";
    document.getElementById("pageDisp5_ID").style.opacity = "100%";
    document.getElementById("pageDisp6_ID").style.opacity = "100%";
    document.getElementById("pageDisp7_ID").style.opacity = "100%";
    document.getElementById("pageDisp8_ID").style.opacity = "100%";
    document.getElementById("pageDisp9_ID").style.opacity = "100%";
    document.getElementById("pageDisp10_ID").style.opacity = "100%";
    document.getElementById("pageDisp11_ID").style.opacity = "100%";
    document.getElementById("pageDisp12_ID").style.opacity = "100%";
    document.getElementById("pageDisp13_ID").style.opacity = "100%";
    document.getElementById("pageDisp14_ID").style.opacity = "100%";
    document.getElementById("pageDisp15_ID").style.opacity = "100%";
    document.getElementById("pageDisp16_ID").style.opacity = "100%";
    document.getElementById("pageDisp17_ID").style.opacity = "100%";
    document.getElementById("pageDisp18_ID").style.opacity = "100%";
    document.getElementById("pageDisp19_ID").style.opacity = "100%";
    document.getElementById("pageDisp20_ID").style.opacity = "100%";
    document.getElementById("pageDisp21_ID").style.opacity = "100%";
    document.getElementById("pageDisp22_ID").style.opacity = "100%";
    document.getElementById("pageDisp23_ID").style.opacity = "100%";
    document.getElementById("pageDisp24_ID").style.opacity = "100%";
    document.getElementById("pageDisp25_ID").style.opacity = "100%";
    document.getElementById("pageDisp26_ID").style.opacity = "100%";
    document.getElementById("pageDisp27_ID").style.opacity = "100%";
    document.getElementById("pageDisp28_ID").style.opacity = "100%";
    document.getElementById("pageDisp29_ID").style.opacity = "100%";
    document.getElementById("pageDisp30_ID").style.opacity = "100%";
    document.getElementById("pageDisp31_ID").style.opacity = "100%";
    document.getElementById("pageDisp32_ID").style.opacity = "100%";
    document.getElementById("pageDisp33_ID").style.opacity = "100%";
    document.getElementById("pageDisp34_ID").style.opacity = "100%";
    document.getElementById("pageDisp35_ID").style.opacity = "100%";
}

// -----------------------------------------------------------
// Page Finder (All Pages)
// -----------------------------------------------------------

function page1()
{
    resetPagesOpacity();

    if (currentLocation > 1)
    {
        while (currentLocation >= 3) {
            prev();
        }
    }
    else
        next();

    document.getElementById("pageDisp1_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp1_ID").style.opacity = "100%"; }, 6500);
}

function page2()
{
    resetPagesOpacity();

    if (currentLocation > 2)
    {
        while (currentLocation >= 4) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 2) {
            next();
        }
    }

    document.getElementById("pageDisp2_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp2_ID").style.opacity = "100%"; }, 15500);
}

function page3()
{
    resetPagesOpacity();

    if (currentLocation > 3)
    {
        while (currentLocation >= 5) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 3) {
            next();
        }
    }

    document.getElementById("pageDisp3_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp3_ID").style.opacity = "100%"; }, 81500);
}

function page4()
{
    resetPagesOpacity();

    if (currentLocation > 4)
    {
        while (currentLocation >= 6) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 4) {
            next();
        }
    }

    document.getElementById("pageDisp4_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp4_ID").style.opacity = "100%"; }, 6500);
}

function page5()
{
    resetPagesOpacity();

    if (currentLocation > 5)
    {
        while (currentLocation >= 7) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 5) {
            next();
        }
    }

    document.getElementById("pageDisp5_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp5_ID").style.opacity = "100%"; }, 7500);
}

function page6()
{
    resetPagesOpacity();

    if (currentLocation > 6)
    {
        while (currentLocation >= 8) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 6) {
            next();
        }
    }

    document.getElementById("pageDisp6_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp6_ID").style.opacity = "100%"; }, 7500);
}

function page7()
{
    resetPagesOpacity();

    if (currentLocation > 7)
    {
        while (currentLocation >= 9) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 7) {
            next();
        }
    }

    document.getElementById("pageDisp7_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp7_ID").style.opacity = "100%"; }, 7500);
}

function page8()
{
    resetPagesOpacity();

    if (currentLocation > 8)
    {
        while (currentLocation >= 10) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 8) {
            next();
        }
    }

    document.getElementById("pageDisp8_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp8_ID").style.opacity = "100%"; }, 7500);
}

function page9()
{
    resetPagesOpacity();

    if (currentLocation > 9)
    {
        while (currentLocation >= 11) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 9) {
            next();
        }
    }

    document.getElementById("pageDisp9_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp9_ID").style.opacity = "100%"; }, 7500);
}

function page10()
{
    resetPagesOpacity();

    if (currentLocation > 10)
    {
        while (currentLocation >= 12) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 10) {
            next();
        }
    }

    document.getElementById("pageDisp10_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp10_ID").style.opacity = "100%"; }, 7500);
}

function page11()
{
    resetPagesOpacity();

    if (currentLocation > 11)
    {
        while (currentLocation >= 13) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 11) {
            next();
        }
    }

    document.getElementById("pageDisp11_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp11_ID").style.opacity = "100%"; }, 7500);
}

function page12()
{
    resetPagesOpacity();

    if (currentLocation > 12)
    {
        while (currentLocation >= 14) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 12) {
            next();
        }
    }

    document.getElementById("pageDisp12_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp12_ID").style.opacity = "100%"; }, 7500);
}

function page13()
{
    resetPagesOpacity();

    if (currentLocation > 13)
    {
        while (currentLocation >= 15) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 13) {
            next();
        }
    }

    document.getElementById("pageDisp13_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp13_ID").style.opacity = "100%"; }, 7500);
}

function page14()
{
    resetPagesOpacity();

    if (currentLocation > 14)
    {
        while (currentLocation >= 16) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 14) {
            next();
        }
    }

    document.getElementById("pageDisp14_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp14_ID").style.opacity = "100%"; }, 7500);
}

function page15()
{
    resetPagesOpacity();

    if (currentLocation > 15)
    {
        while (currentLocation >= 17) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 15) {
            next();
        }
    }

    document.getElementById("pageDisp15_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp15_ID").style.opacity = "100%"; }, 7500);
}

function page16()
{
    resetPagesOpacity();

    if (currentLocation > 16)
    {
        while (currentLocation >= 18) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 16) {
            next();
        }
    }

    document.getElementById("pageDisp16_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp16_ID").style.opacity = "100%"; }, 7500);
}

function page17()
{
    resetPagesOpacity();

    if (currentLocation > 17)
    {
        while (currentLocation >= 19) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 17) {
            next();
        }
    }

    document.getElementById("pageDisp17_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp17_ID").style.opacity = "100%"; }, 7500);
}

function page18()
{
    resetPagesOpacity();

    if (currentLocation > 18)
    {
        while (currentLocation >= 20) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 18) {
            next();
        }
    }

    document.getElementById("pageDisp18_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp18_ID").style.opacity = "100%"; }, 7500);
}

function page19()
{
    resetPagesOpacity();

    if (currentLocation > 19)
    {
        while (currentLocation >= 21) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 19) {
            next();
        }
    }

    document.getElementById("pageDisp19_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp19_ID").style.opacity = "100%"; }, 7500);
}

function page20()
{
    resetPagesOpacity();

    if (currentLocation > 20)
    {
        while (currentLocation >= 22) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 20) {
            next();
        }
    }

    document.getElementById("pageDisp20_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp20_ID").style.opacity = "100%"; }, 7500);
}

function page21()
{
    resetPagesOpacity();

    if (currentLocation > 21)
    {
        while (currentLocation >= 23) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 21) {
            next();
        }
    }

    document.getElementById("pageDisp21_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp21_ID").style.opacity = "100%"; }, 7500);
}

function page22()
{
    resetPagesOpacity();

    if (currentLocation > 22)
    {
        while (currentLocation >= 24) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 22) {
            next();
        }
    }

    document.getElementById("pageDisp22_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp22_ID").style.opacity = "100%"; }, 7500);
}

function page23()
{
    resetPagesOpacity();

    if (currentLocation > 23)
    {
        while (currentLocation >= 25) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 23) {
            next();
        }
    }

    document.getElementById("pageDisp23_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp23_ID").style.opacity = "100%"; }, 7500);
}

function page24()
{
    resetPagesOpacity();

    if (currentLocation > 24)
    {
        while (currentLocation >= 26) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 24) {
            next();
        }
    }

    document.getElementById("pageDisp24_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp24_ID").style.opacity = "100%"; }, 7500);
}

function page25()
{
    resetPagesOpacity();

    if (currentLocation > 25)
    {
        while (currentLocation >= 27) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 25) {
            next();
        }
    }

    document.getElementById("pageDisp25_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp25_ID").style.opacity = "100%"; }, 7500);
}

function page26()
{
    resetPagesOpacity();

    if (currentLocation > 26)
    {
        while (currentLocation >= 28) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 26) {
            next();
        }
    }

    document.getElementById("pageDisp26_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp26_ID").style.opacity = "100%"; }, 7500);
}

function page27()
{
    resetPagesOpacity();

    if (currentLocation > 27)
    {
        while (currentLocation >= 29) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 27) {
            next();
        }
    }

    document.getElementById("pageDisp27_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp27_ID").style.opacity = "100%"; }, 7500);
}

function page28()
{
    resetPagesOpacity();

    if (currentLocation > 28)
    {
        while (currentLocation >= 30) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 28) {
            next();
        }
    }

    document.getElementById("pageDisp28_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp28_ID").style.opacity = "100%"; }, 7500);
}

function page29()
{
    resetPagesOpacity();

    if (currentLocation > 29)
    {
        while (currentLocation >= 31) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 29) {
            next();
        }
    }

    document.getElementById("pageDisp29_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp29_ID").style.opacity = "100%"; }, 7500);
}

function page30()
{
    resetPagesOpacity();

    if (currentLocation > 30)
    {
        while (currentLocation >= 32) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 30) {
            next();
        }
    }

    document.getElementById("pageDisp30_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp30_ID").style.opacity = "100%"; }, 7500);
}

function page31()
{
    resetPagesOpacity();

    if (currentLocation > 31)
    {
        while (currentLocation >= 33) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 31) {
            next();
        }
    }

    document.getElementById("pageDisp30_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp30_ID").style.opacity = "100%"; }, 7500);
}

function page32()
{
    resetPagesOpacity();

    if (currentLocation > 32)
    {
        while (currentLocation >= 34) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 32) {
            next();
        }
    }

    document.getElementById("pageDisp30_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp30_ID").style.opacity = "100%"; }, 7500);
}

function page33()
{
    resetPagesOpacity();

    if (currentLocation > 33)
    {
        while (currentLocation >= 35) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 33) {
            next();
        }
    }

    document.getElementById("pageDisp30_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp30_ID").style.opacity = "100%"; }, 7500);
}

function page34()
{
    resetPagesOpacity();

    if (currentLocation > 34)
    {
        while (currentLocation >= 36) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 34) {
            next();
        }
    }

    document.getElementById("pageDisp30_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp30_ID").style.opacity = "100%"; }, 7500);
}

function page35()
{
    resetPagesOpacity();

    if (currentLocation > 35)
    {
        while (currentLocation >= 37) {
            prev();
        }
    }
    else
    {
        while (currentLocation <= 35) {
            next();
        }
    }

    document.getElementById("pageDisp30_ID").style.opacity = "45%";
    setTimeout(() => { document.getElementById("pageDisp30_ID").style.opacity = "100%"; }, 7500);
}