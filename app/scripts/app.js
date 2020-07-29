const inputScreen = document.querySelector(".input-screen"),
    inputRange = document.querySelector(".input-range");

    updateScreen = () => {
        document.querySelector(".input-screen").value = inputRange.value;
        updateColor();
    }

    updateRange = () => {
        inputRange.value = document.querySelector(".input-screen").value;
        updateColor();
    }

    updateColor = () => {
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

    let modDataStart = [modUppercase, modLowercase, modNumbers, modSymbols],
        modDataFinal = [];

    createArr = () => {
        for(let i = 0; i < modDataStart.length; i++) 
            modDataFinal[i] = modDataStart[i].checked ? true : false;
    }

    buildUppercase = () => {
        if(modDataFinal[0] == true) {
            let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            return arr[Math.floor(Math.random() * arr.length)];
        }
    }

    buildLowercase = () => {
        if(modDataFinal[1] == true) {
            let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            return arr[Math.floor(Math.random() * arr.length)];
        } 
    }

    buildNumbers = () => {
        if(modDataFinal[2] == true) {
            let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            return arr[Math.floor(Math.random() * arr.length)];
        } 
    }

    buildSymbols = () => {
        if(modDataFinal[3] == true) {
            let arr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
            return arr[Math.floor(Math.random() * arr.length)];
        } 
    }
    
    const rezult = document.querySelector('.rezult'),
          error = document.querySelector('.error'),
          copy = document.querySelector('.copy');

    build = () => {
        createArr();

        if(modDataFinal.indexOf(true) != -1) {
            let arr = [buildUppercase, buildLowercase, buildNumbers, buildSymbols],
                inputRangeV = document.querySelector(".input-range").value,
                randomElement = arr[Math.floor(Math.random() * arr.length)],
                password = '';

            while(password.length < inputRangeV) {
                randomElement = arr[Math.floor(Math.random() * arr.length)]();
                if(randomElement != undefined)
                    password += randomElement;
            }
                rezult.value = password;
                error.style.display = 'none';
        } else {
            rezult.value = '';
            error.style.display = 'block';
        }
    } 

    button.addEventListener('click', build);
    
    copy.addEventListener('click', () => {
        rezult.select();
        document.execCommand('copy');
    });