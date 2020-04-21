import "../css/componentes.css";

export const saludar = ({ nombre }) => {
	console.log("Se llamo a la función saludar");

	const h2 = document.createElement("h2");
	h2.innerText = `Hola ${nombre}`;

	document.body.append(h2);
};
