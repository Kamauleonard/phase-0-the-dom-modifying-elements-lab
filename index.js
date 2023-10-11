// Solution 1
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// Solution 2
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Solution 3
newHeader.innerHTML = "YOUR-NAME is the champion";

// Solution 4
document.body.appendChild(newHeader);
