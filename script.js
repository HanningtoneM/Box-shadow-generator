const box = document.querySelector(".box");
const x = document.querySelector(".offset-x");
const y = document.querySelector(".offset-y");
const blurRadius = document.querySelector(".blur-radius");
const blurSpread = document.querySelector(".blur-spread");
const color = document.querySelector(".color");
const cssValue = document.querySelector(".css-value");

function updateBoxShadow() {
	const v = `${x.value}px ${y.value}px ${blurRadius.value}px ${blurSpread.value}px ${color.value}`;

	cssValue.value = v;
	box.style.boxShadow = v;
}

[x, y, blurRadius, blurSpread, color].forEach((element) => {
	element.oninput = updateBoxShadow;
});
updateBoxShadow();
