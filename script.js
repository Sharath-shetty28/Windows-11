let taskbar=document.getElementsByClassName("taskbar")[0]
let stratmenu=document.getElementsByClassName("stratmenu")[0]
taskbar.addEventListener("click",()=>{
    console.log("clicked the window icon")
    if(stratmenu.style.bottom ==="50px"){
        stratmenu.style.bottom="-650px"
    }
    else{
        stratmenu.style.bottom="50px"
    }
})
