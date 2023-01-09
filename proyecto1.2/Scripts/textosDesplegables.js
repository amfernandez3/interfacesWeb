const button = document.getElementById('buttonText');
const text = document.getElementById('text');
const button2 = document.getElementById('buttonText2');
const text2 = document.getElementById('text2');
const button3 = document.getElementById('buttonText3');
const text3 = document.getElementById('text3');
const button4 = document.getElementById('buttonText4');
const text4 = document.getElementById('text4');

button.addEventListener('click', function() {
  if (text.style.display === 'none') {
    text.style.display = 'block';
    
  } else {
    text.style.display = 'none';
  }
});

button2.addEventListener('click', function() {
  if (text2.style.display === 'none') {
    text2.style.display = 'block';
    
  } else {
    text2.style.display = 'none';
  }
});

button3.addEventListener('click', function() {
  if (text3.style.display === 'none') {
    text3.style.display = 'block';
    
  } else {
    text3.style.display = 'none';
  }
});

  button4.addEventListener('click', function() {
    if (text4.style.display === 'none') {
      text4.style.display = 'block';
      
    } else {
      text4.style.display = 'none';
    }
});