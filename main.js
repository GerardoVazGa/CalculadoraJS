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

           // Number buttons
        for(let i = 0; i < 12; i++){
            let button = document.createElement("button")
            button.classList.add(`btn${i}`)
            let textButton = document.createTextNode(i+1)
    
            button.appendChild(textButton)

            container.appendChild(button)
        }

        let lastBtnNumbers = ["9", "10", "11"]
        let newContent = ["00", 0, "."]
        for(let i = 0; i < lastBtnNumbers.length; i++){
            let button = document.querySelector(`.btn${lastBtnNumbers[i]}`);
            if (button) {
                button.textContent = newContent[i];
            }
        }

    }

    // Operators button and result
    let operators = ["+", "-", "*",  "/", "="]
    let i = 1
    for(let op of operators){
        let btnOp = document.createElement("button")
        btnOp.classList.add(`btnOp${i}`)
        btnOp.textContent = op

        container.appendChild(btnOp)
        i++
    }

}