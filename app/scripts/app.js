
let inputScreen = document.querySelector(".input-screen");
   
   updateScreen = () => {
        let inputRange = document.querySelector(".input-range");
        document.querySelector(".input-screen").value = inputRange.value;
        updateColor();
    }
    updateRange = () => {
        let inputRange = document.querySelector(".input-range");
        inputRange.value = document.querySelector(".input-screen").value;
        updateColor();
    }
    function updateColor() {
        if (inputScreen.value < 0 || inputScreen.value > 100)
            inputScreen.style.border = "2px solid red";
        else 
            inputScreen.style.border = "2px solid #fff";
    }