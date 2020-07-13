let linkPlay = document.createElement("a");
linkPlay.href = "#";
linkPlay.text = 'GIVE ME A DROP';

let linkStop = document.createElement("a");
linkStop.href = "#";
linkStop.text = 'stop';

let buttonPlay = document.createElement('div');
buttonPlay.id = 'PLAY';
buttonPlay.className = 'button-container';
buttonPlay.hidden = false;
buttonPlay.appendChild(linkPlay);
document.getElementById("section").appendChild(buttonPlay);

let buttonStop = document.createElement('div');
buttonStop.id = 'STOP';
buttonStop.className = 'button-container';
buttonStop.hidden = true;
buttonStop.appendChild(linkStop);
//document.body.appendChild(buttonStop);
document.getElementById("section").appendChild(buttonStop);


createLoop('wub');
createLoop('plucks');
createLoop('drums');

function createLoop(nameLoop, loopNumber) {
    let loop = new SeamlessLoop();
    loop.callback(soundsLoaded);

    function soundsLoaded() {
        buttonPlay.addEventListener("click", function () {
            loopNumber = getRandomInRange(1, 10);
            loop.addUri(`${nameLoop}/${loopNumber}.ogg`, 1714, `${nameLoop}`);
            loop.start(`${nameLoop}`);
            buttonPlay.hidden = true;
            buttonStop.hidden = false;
        });
        buttonStop.addEventListener("click", function () {
            loop.addUri(`${nameLoop}/${loopNumber}.ogg`, 1714, `${nameLoop}`);
            loop.stop(`${nameLoop}`);
            buttonPlay.hidden = false;
            buttonStop.hidden = true;
        });
    }


}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}