const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let resultDisplayed = false;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-value');


        //start of 
        if (btn.id === 'clear') {
          currentInput = '';
          display.textContent = '0';
        } else if (btn.id === 'equal') {
          try {
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
          } catch {
            display.textContent = 'Error';
            currentInput = '';
          }


          // qwerty
        } else if (value) {
          if (display.textContent === '0' || resultDisplayed) {
            currentInput = value;
            resultDisplayed = false;
          } else {
            currentInput += value;
          }
          display.textContent = currentInput;
        }
      });
    });