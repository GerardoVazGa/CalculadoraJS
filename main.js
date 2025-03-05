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

function textArea(){
    let container = document.querySelector(".container")

    let textArea = document.createElement("textarea")
    textArea.classList.add("display")

    textArea.disabled = true

    container.appendChild(textArea)


    
}

textArea()
crearBtns()

let container = document.querySelector(".container")

container.addEventListener("click", (event) =>{
    let display = document.querySelector(".display")
    if(event.target.tagName === "BUTTON"){
        console.log(event.target.textContent)

        //Clear Event
        if(event.target.textContent === "C"){
            display.textContent = ""
            return
        }

        // Equal or Result Event
        if(event.target.textContent === "="){
            resultado(display.textContent)
            return
        }

        // Delete operation Event 
        if(event.target.textContent === "Delete"){
            if(display.textContent.length > 0){
                display.textContent = display.textContent.slice(0, -1)
            }
            return
        }

        // Percent Event
        if(event.target.textContent === "%"){
            let procentVal = parseFloat(display.textContent)
            display.textContent = procentVal / 100
            return
        }
        display.textContent += event.target.textContent
    }

})

// Operation Result
let resultado = (operacion) =>{
    try{
        let display = document.querySelector(".display")
        let result = eval(operacion)
        display.textContent = result
    }catch{
        display.textContent = "Error"
    }
}