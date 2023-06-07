const hour = document.querySelector("#hour")
const minutes = document.querySelector("#minutes")
const second = document.querySelector("#second")
const ampm = document.querySelector("#ampm")

function run(){
    updateClock();
    changeBackgroundImage();
}

run();
function updateClock(){
    let getHour = new Date().getHours();
    let getMinute = new Date().getMinutes();
    let getSecond = new Date().getSeconds();

    let ampm = "AM";
    if(getHour > 12 ){
        getHour = getHour +12;
        ampm="PM";
    }else{
        
    }

    getHour = getHour < 10 ? "0" + getHour : getHour;
    hour.innerText =getHour;
    minutes.innerText= getMinute;
    second.innerText=getSecond;
    ampm, (innerText=ampm);
    setTimeout(() => {
        updateClock()
    }, 1000);
}

function changeBackgroundImage() {
    var backgroundImageUrls = ['morning.jpeg','noon.jpeg','evening.jpeg','night.jpeg']
    var currentIndex = 0;
     
    setInterval(function(){
        document.body.style.backgroundImage="url("+backgroundImageUrls[currentIndex] + ")";
        currentIndex++
        if (currentIndex == backgroundImageUrls.length) {
            currentIndex = 0;
        }
    } ,5000)
}