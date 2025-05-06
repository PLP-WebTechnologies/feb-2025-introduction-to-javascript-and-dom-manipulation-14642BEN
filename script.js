function changeText() {
    document.getElementById('dynamic-text').textContent = "The text has been changed!";
  }
  
  function changeColor() {
    const paragraph = document.getElementById('color-paragraph');
    paragraph.style.color = paragraph.style.color === 'blue' ? 'black' : 'blue';
  }
  
  function toggleElement() {
    const container = document.getElementById('container');
    const existing = document.getElementById('new-paragraph');
  
    if (existing) {
      existing.remove();
    } else {
      const newPara = document.createElement('p');
      newPara.id = 'new-paragraph';
      newPara.textContent = 'This is a dynamically added paragraph!';
      container.appendChild(newPara);
    }
  }
  