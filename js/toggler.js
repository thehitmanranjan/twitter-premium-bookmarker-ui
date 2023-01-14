let togglerButton = document.getElementsByClassName("navigation__container__toggler")[0]
togglerButton.addEventListener("click", expandList)

function expandList() {
    let activeList = document.getElementsByClassName("navigation__list")[0]
    console.log("activeList= ", activeList)
    if (activeList.classList.contains("active-list")){
        activeList.classList.remove("active-list")
        activeList.classList.add("inactive-list")
    }
    else {
        activeList.classList.add("active-list")
        activeList.classList.remove("inactive-list")
    }
}