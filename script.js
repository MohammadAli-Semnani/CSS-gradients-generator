//IN GOD WE TRUST //


//selected Element
const $ = document;
let buttons = $.querySelectorAll(".buttons button");
let colorA = $.getElementById("color-a")
let colorB = $.getElementById("color-b")
let submitBtn = $.getElementById("submit");
let copyBtn = $.getElementById("copy");
let textArea = $.getElementById("code");

//get color value 
let colorA_value;
let colorB_value;
let getArrow;

//access to buttons 
buttons.forEach((button) => {
    
    button.addEventListener("click", (e) => {
        //remove active class of another button and set active class to target button
        let current = document.querySelector(".active"); 
        current.classList.remove("active");
        e.target.className += " active";
        
        submitBtn.addEventListener("click", () => {
            getArrow = button.dataset.arrow;
            colorA_value = colorA.value;
            colorB_value = colorB.value;
            generatColor(getArrow, colorA_value, colorB_value);
            
        });
        
    });
});

//copy Btn
let copyText = () => {
    copyBtn.addEventListener("click", () => {
        let areaValue = textArea.value
        navigator.clipboard.writeText(areaValue);
        //show (Copied!) text for 1 second
        let interval = setInterval(() => {
            if (copyBtn.innerHTML === "Copy") {
                clearInterval(interval);
            }
            copyBtn.innerHTML = "Copy";
        }, 1000);
        copyBtn.innerHTML = "copied!";
    })
}

// create css code
let generatColor = (arrow,colorA,colorB) => {
    let gradientTemplate = `linear-gradient(to ${arrow} , ${colorA}, ${colorB})`;
    document.body.style.backgroundImage = gradientTemplate;
    textArea.textContent = `background-image: ${gradientTemplate}`
    copyText();
    
}

