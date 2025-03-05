function crearBtns(){
    let container = document.querySelector(".container")
    let btnsCe = ["btnErase", "btnClear", "btnPercent"]

    for(let i = 0; i < btnsCe.length; i++){
        let btnCleErPer = document.createElement("button")
        btnCleErPer.classList.add(btnsCe[i])

        if(btnCleErPer.classList.contains(btnsCe[0])){
            btnCleErPer.textContent = "C"
        }else if(btnCleErPer.classList.contains(btnsCe[1])){
            btnCleErPer.textContent = "Delete"
        }else{
            btnCleErPer.textContent = "%"
        }

        container.appendChild(btnCleErPer)
    }

}
