function addToCal(value) {
  document.getElementById('cal').value += value;
}

function reset() {
  document.getElementById('cal').value = '';
}

function Equal() {
  const display = document.getElementById('cal');
  try {
      display.value = eval(display.value);
      
  } catch {
      display.value = 'Error';
  }
}