function appendToDisplay(value) {
    document.getElementById('result').value += value;
  }

  function clearDisplay() {
    document.getElementById('result').value = '';
  }

  function calculate() {
    try {
      document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }


     // Function to trigger button click based on key press
     function handleKeyPress(event) {
        const key = event.key;
  
        // Map keys to corresponding button values
        const keyMap = {
          "1": "1",
          "2": "2",
          "3": "3",
          "4": "4",
          "5": "5",
          "6": "6",
          "7": "7",
          "8": "8",
          "9": "9",
          "0": "0",
          "/": "/",
          "": "", // You may consider using '*' for multiplication
          "-": "-",
          "+": "+",
          ".": ".",
          "Enter": "=",
          "c": "C",
          "C": "C",
          "Backspace": "C", // Backspace to clear
        };
  
        // Find the corresponding button and trigger its click event
        const buttonValue = keyMap[key];
        if (buttonValue !== undefined) {
          const button = document.querySelector(input[value="${buttonValue}"]);
          if (button) {
            button.click();
          }
        }
      }
  
      // Attach the event listener to the document
      document.addEventListener("keydown", handleKeyPress);



let x = document.getElementById('c1');

x.addEventListener('click', function() {
    document.getElementById('classic calculator').style.display="block";
    document.getElementById('Programming calculator').style.display="none";
});


let y = document.getElementById('p1');

y.addEventListener('click', function() {
    document.getElementById('Programming calculator').style.display="block";
    document.getElementById('classic calculator').style.display="none";
});
/*var element = document.getElementById('o');

    element.addEventListener('click', function() {
        // Some code to handle the click event
        document.getElementById('d').style.display="none";
    });
*/
