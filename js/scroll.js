/*function apareceScroll() {
	var html = document.getElementsByTagName('html')[0];
	var elementoAparece = document.getElementsByClassName("aparece");

	var seccionGaleriaLeft = document.getElementsByClassName("section-galeria-left");
	var seccionGaleriaRight = document.getElementsByClassName("section-galeria-right");

	document.addEventListener("wheel", function(){
		var topVent = html.scrollTop;
		for(i = 0; i < elementoAparece.length; i++)
		{
			var topElementoAparece = elementoAparece[i].offsetTop;
			if(topVent > topElementoAparece - 800)
			{
				//elementoAparece[i].style.animation = 'animated fadeInLeft';
				elementoAparece[i].style.animation = 'fadeInLeft 2s';
			}
		}

	})

}

function fadeInLeftScroll() {
	var html = document.getElementsByTagName('html')[0];
	var seccionGaleriaLeft = document.getElementsByClassName("section-galeria-left");
	var seccionGaleriaRight = document.getElementsByClassName("section-galeria-right");

	document.addEventListener("wheel", function(){
		var topVent = html.scrollTop;
		for(i = 0; i < seccionGaleriaLeft.length; i++)
		{
			var topSeccionGaleriaLeft = seccionGaleriaLeft[i].offsetTop;
			if(topVent > topSeccionGaleriaLeft - 900)
			{
				seccionGaleriaLeft[i].style.animation = 'fadeInRight 2s';
			}
		}


	})

}


apareceScroll();
fadeInLeftScroll();*/

//Video de cachorro para el scroll
let animado = document.querySelectorAll(".animated");
let animado2 = document.querySelectorAll(".animated2");
let animado3 = document.querySelectorAll(".animated3");
let animado4 = document.querySelectorAll(".animated4");

function mostrarScroll() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i = 0; i < animado.length; i++)
	{
		let alturaAnimado = animado[i].offsetTop;
		if(alturaAnimado - 500 < scrollTop)
		{
			animado[i].style.opacity = 1;
			animado[i].classList.add("fadeInLeft");
		}
	}
}

function mostrarScroll2() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i = 0; i < animado2.length; i++)
	{
		let alturaAnimado2 = animado2[i].offsetTop;
		if(alturaAnimado2 - 500 < scrollTop)
		{
			animado2[i].style.opacity = 1;
			animado2[i].classList.add("mostrarArriba");
		}
	}
}

function mostrarScroll3() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i = 0; i < animado3.length; i++)
	{
		let alturaAnimado3 = animado3[i].offsetTop;
		if(alturaAnimado3 - 500 < scrollTop)
		{
			animado3[i].style.opacity = 1;
			animado3[i].classList.add("fadeInRight");
		}
	}
}

function mostrarScroll4() {
	let scrollTop = document.documentElement.scrollTop;
	for (var i = 0; i < animado4.length; i++)
	{
		let alturaAnimado4 = animado4[i].offsetTop;
		if(alturaAnimado4 - 500 < scrollTop)
		{
			animado4[i].style.opacity = 1;
			animado4[i].classList.add("flipInX");
		}
	}
}

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('scroll', mostrarScroll2);
window.addEventListener('scroll', mostrarScroll3);
window.addEventListener('scroll', mostrarScroll4);