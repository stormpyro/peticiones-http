import { saludar } from "./js/componentes";
import "./styles.css";
(() => {
	"use strict";

	const crearElemento = (elemento = "p") => document.createElement(elemento);
	const encabezado1 = crearElemento("h1"),
		separador = crearElemento("hr"),
		body = document.body,
		descripcion = crearElemento();
	encabezado1.innerText = "Hola desde Webpack";
	descripcion.innerText =
		"Te ayuda a empaquetar toda tu aplicación, a ofuscar el código y a minimizarlo. \n Dejándolo listo para producción." +
		" Además del webpack-dev-server, que te ayuda a lanzar tu aplicación en tiempo real en un puerto local. ";
	body.append(encabezado1);
	body.append(separador);
	body.append(descripcion);
	saludar({ nombre: "Renatto" });
})();
