const btnTheme = document.getElementById('btn-theme')
const textTheme = document.getElementById('text-theme')
btnTheme.addEventListener('click', () => {
	if (document.getElementById('body').className == "darkModeSwitcher") {
		textTheme.innerText = "Modo Claro"
		document.getElementById('body').classList.add('lightModeSwitcher');
		document.getElementById('body').classList.remove('darkModeSwitcher');
	} else {
		textTheme.innerText = "Modo Oscuro"
		document.getElementById('body').classList.add('darkModeSwitcher');
		document.getElementById('body').classList.remove('lightModeSwitcher');
	}
});