function crearBtns(){
    let container = document.querySelector(".container")

    // Clear, Delete and Percent buttons
    const btnsCe = [
        {class: "btnErase", content: "C"},
        {class: "btnClear", content: "Delete"},
        {class: "btnPercent", content: "%"}
    ]

    btnsCe.forEach((btnCe) => {
        generateButtons([btnCe.class], btnCe.content)
    })

    // Number buttons
    for(let i = 1; i < 10; i++){
        generateButtons([`btn${i}`, 'buttons'], i, `btn${i}`)
    }


    let newContent = [
        {class: "btn00", content: "00"},
        {class: "btn0", content: 0},
        {class: "btndot", content: "."} 
    ]

    newContent.forEach((item) => {
        generateButtons([item.class, 'buttons'], item.content)
    })

    

    // Operators button and result
    let operators = ["+", "-", "*",  "/", "="]
    let i = 1
    for(let [index, op] of operators.entries()){
        generateButtons([`btnOp${index + 1}`], op)
    }

}

function generateButtons(classesList, content, id = "")  {
    let container = document.querySelector(".container")
    let newButton  = document.createElement("button");
    newButton.classList.add(...classesList)
    newButton.id = id;
    newButton.textContent = content

    container.appendChild(newButton)
}

function textArea(){
    let container = document.querySelector(".container")

    let textArea = document.createElement("textarea")
    textArea.classList.add("display")

    textArea.disabled = true
    textArea.placeholder = "0"

    container.appendChild(textArea)
    
}

textArea()
crearBtns()

let container = document.querySelector(".container")

container.addEventListener('keydown', (event) => {
    let display = document.querySelector(".display")
    event.preventDefault() // Prevent default behavior of keydown

    if(/^[0-9+\-*/.]+$/.test(event.key)) {
        display.textContent += event.key;
        return;
    }

    switch(event.key) {
        case 'Backspace':
        case 'Delete':
            if(display.textContent.length > 0){
                display.textContent = display.textContent.slice(0, -1)
            }
            break;
        case 'Enter':
        case '=':
            resultado(display.textContent)
            break;
        case 'Escape':
        case 'C':
            display.textContent = ""
            break;
        case '%':
            let procentVal = parseFloat(display.textContent)
            display.textContent = procentVal / 100
            break;
        case '.':
            if(!display.textContent.includes('.')) {
                display.textContent += '.'
            }
            break;
        default:
            break
    }
})

container.addEventListener("click", (event) =>{
    let display = document.querySelector(".display")
    console.log(event)
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