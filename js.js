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


