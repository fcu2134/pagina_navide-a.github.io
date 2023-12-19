const treeContainer = document.createElement("pre");
const mainContainer = document.querySelector(".main-container");

const createTree = (size) => {
  for (let i = 0; i < size; i++) {
    const spanElement = document.createElement("span");
    const branch = i === 0 || i === size - 1 ? "*\n" : `${"*".repeat(i * 2)}\n`;
    spanElement.textContent = branch;
    treeContainer.appendChild(spanElement);
  }
  mainContainer.appendChild(treeContainer);
};

const getRandomValue = (max, min = 1) => {
  return Math.floor(Math.random() * max) + min;
};

const createSnow = (density) => {
  for (let i = 0; i < density; i++) {
    const snowFlake = document.createElement("span");
    const horizontalPosition = `${getRandomValue(100)}%`;
    const fallDelay = `${getRandomValue(100)}s`;
    const fallDuration = `${getRandomValue(20, 5)}s`;
    const flakeSize = `${getRandomValue(7, 1)}px`;
    const flakeOpacity = Math.random().toFixed(2);

    snowFlake.classList.add("snow");
    snowFlake.style.opacity = flakeOpacity;
    snowFlake.style.width = flakeSize;
    snowFlake.style.height = flakeSize;
    snowFlake.style.animation = `fall ${fallDuration} ${fallDelay} linear infinite`;
    snowFlake.style.right = horizontalPosition;

    mainContainer.appendChild(snowFlake);
  }
};
  
 
  

createTree(12);
createSnow(300);

simplyCountdown('#cuenta', {
	year: 2023, // requerido po papu
	month: 12, // requerido 
	day: 19, // requerido
	hours: 15, // definido en  0 [0-23] intregradoo
	minutes: 40, // definido en  0 [0-59] integer
	seconds: 0, // definido en 0 [0-59] integer
	words: { //como se vera 
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
	},
	plural: true, //usaras prural?
	inline: false, 
	inlineClass: 'simply-countdown-inline', 
	
	enableUtc: false, //Usar hora mundial?
	onEnd: function() {
		document.getElementById('portada').classList.add('oculta');
		

        
		return; 

	}, 
	refresh: 1000, 
	sectionClass: 'simply-section', 
	amountClass: 'simply-amount', 
	wordClass: 'simply-word', 
	zeroPad: false,
	countUp: false
});
