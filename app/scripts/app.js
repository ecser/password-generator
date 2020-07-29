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

    const modUppercase = document.querySelector('.uppercase'),
          modLowercase = document.querySelector('.lowercase'),
          modNumbers = document.querySelector('.numbers'),
          modSymbols = document.querySelector('.symbols'),
          button = document.querySelector('.button-generation');

    let modDataStart = [modUppercase, modLowercase, modNumbers, modSymbols];
    let modDataFinal = [];

    function createArr() {
        for(let i = 0; i < modDataStart.length; i++) 
            modDataFinal[i] = modDataStart[i].checked ? true : false;
    }

    function buildUppercase() {
        if(modDataFinal[0] == true) {
            let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            let a = Math.floor(Math.random() * arr.length);
            return arr[a];
        }
    }
    function buildLowercase() {
        if(modDataFinal[1] == true) {
            let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let a = Math.floor(Math.random() * arr.length);
            return arr[a];
        } 
    }
    function buildNumbers() {
        if(modDataFinal[2] == true) {
            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            let a = Math.floor(Math.random() * arr.length);
            return arr[a];
        } 
    }
    function buildSymbols() {
        if(modDataFinal[3] == true) {
            let arr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
            let a = Math.floor(Math.random() * arr.length);
            return arr[a];
        } 
    }
    
    function build() {
            createArr();

            if(modDataFinal.indexOf(true) != -1) {

            let inputRangeV = document.querySelector(".input-range").value;
            let arr = [buildUppercase, buildLowercase, buildNumbers, buildSymbols];
            let randomElement = arr[Math.floor(Math.random() * arr.length)];
            let password = '';
            const rezult = document.querySelector('.rezult');
            const error = document.querySelector('.error');
      
            while(password.length < inputRangeV) {
                randomElement = arr[Math.floor(Math.random() * arr.length)]();
                if(randomElement != undefined)
                    password += randomElement;
            }
                rezult.value = password;
                error.style.display = 'none';
        
        } else {
            const error = document.querySelector('.error');
            const rezult = document.querySelector('.rezult');
            rezult.value = '';
            error.style.display = 'block';
        }
    } 

    button.addEventListener('click', build);
    
    const copy = document.querySelector('.copy');
    const rezult = document.querySelector('.rezult');
    
    copy.addEventListener('click', function(){
        rezult.select();
        document.execCommand('copy');
    });