let schet = document.getElementById("click")
let tak1 = document.getElementById("click1")
let jup1 = document.getElementById("click2")
let ters1 = document.getElementById("click3")
let koshuu = 0;
let koshuu1 = 0;
let koshuu2 = 0;
let koshuu3 = 0;
let res = () => {
  
        koshuu +=1
        schet.innerHTML = koshuu 

}

let jup = ()=> {
    koshuu1 +=2;
    jup1.innerHTML = koshuu1

}

let tak = ()=> {
    koshuu2 +=2;
    tak1.innerHTML = koshuu2 -1

}

let ters = ()=> {
    koshuu3 -=1;
    ters1.innerHTML = koshuu3

}



let san1 = 0;
let result = document.getElementById("schet")
let audio = new Audio("new_message_notice.mp3")
let esep = ()=> {
    san1++;
    result.value = san1
    if (san1 === 100) {
        audio.play();
    }
}

function resetCounter() {
    let count = '';
    document.getElementById('schet').value = count;
  }