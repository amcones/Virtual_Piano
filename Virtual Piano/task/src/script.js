document.addEventListener("keydown",function (event){
    if(event.key==="a") {
        let audioA=new Audio("./white_keys/A.mp3");
        audioA.play();
        return;
    }else if(event.key==="s") {
        let audioS=new Audio("./white_keys/S.mp3");
        audioS.play();
        return;
    }else if(event.key==="d") {
        let audioD=new Audio("./white_keys/D.mp3");
        audioD.play();
        return;
    }else if(event.key==="f") {
        let audioF=new Audio("./white_keys/F.mp3");
        audioF.play();
        return;
    }else if(event.key==="g") {
        let audioG=new Audio("./white_keys/G.mp3");
        audioG.play();
        return;
    }else if(event.key==="h") {
        let audioH=new Audio("./white_keys/H.mp3");
        audioH.play();
        return;
    }else if(event.key==="j") {
        let audioJ=new Audio("./white_keys/J.mp3");
        audioJ.play();
        return;
    }
    console.log('Unknown key pressed down.')
});
document.addEventListener("keydown",function (event){
    if(event.key==="w") {
        let audioW=new Audio("./white_keys/W.mp3");
        audioW.play();
        return;
    }else if(event.key==="e") {
        let audioE=new Audio("./white_keys/E.mp3");
        audioE.play();
        return;
    }else if(event.key==="t") {
        let audioT=new Audio("./white_keys/T.mp3");
        audioT.play();
        return;
    }else if(event.key==="y") {
        let audioY=new Audio("./white_keys/Y.mp3");
        audioY.play();
        return;
    }else if(event.key==="u") {
        let audioU=new Audio("./white_keys/U.mp3");
        audioU.play();
        return;
    }
    console.log('Unknown key pressed down.')
});

