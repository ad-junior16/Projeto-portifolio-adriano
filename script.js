let firstBTN = document.getElementById("1")
let secondBTN = document.getElementById("2")
let thirdBTN = document.getElementById("3")
let firstINFO = document.getElementById("4")
let secondINFO = document.getElementById("5")
let thirdINFO = document.getElementById("6")

firstBTN.addEventListener("click" , changeFirst )
secondBTN.addEventListener("click" , changeSecond)
thirdBTN.addEventListener("click" , changeThird)

firstINFO.addEventListener("click" , changeFirst)
secondINFO.addEventListener("click" , changeSecond)
thirdINFO.addEventListener("click" , changeThird)

function changeFirst(){
    thirdBTN.classList.remove("select")
    secondBTN.classList.remove("select")
    firstBTN.classList.add("select")
    thirdINFO.classList.remove("select")
    secondINFO.classList.remove("select")
    firstINFO.classList.add("select")

}

function changeSecond(){
    firstBTN.classList.remove("select")
    thirdBTN.classList.remove("select")
    secondBTN.classList.add("select")
    firstINFO.classList.remove("select")
    thirdINFO.classList.remove("select")
    secondINFO.classList.add("select")
}

function changeThird(){
    firstBTN.classList.remove("select")
    secondBTN.classList.remove("select")
    thirdBTN.classList.add("select")
    firstINFO.classList.remove("select")
    secondINFO.classList.remove("select")
    thirdINFO.classList.add("select")
}