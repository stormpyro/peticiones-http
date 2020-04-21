import { obtenerChiste } from "./http-provider";
const body = document.body;
let btns,
	olList,
	contador = 0;
const crearChisteHtml = () => {
	const html = `<h1 class="mt-5">Chistes</h1>
    <hr />

    <button class="btn btn-primary">Otro chiste</button>
    <button class="btn btn-danger">Eliminar chiste</button>
    <ol class="mt-2 list-group">
    </ol>`;
	const divChistes = document.createElement("div");
	divChistes.innerHTML = html;

	body.append(divChistes);
};

const eventos = () => {
	olList = document.querySelector("ol");
	btns = document.querySelectorAll("button");

	btns[0].addEventListener("click", async () => {
		try {
			btns[0].disabled = true;
			await obtenerChiste()
				.then((chiste) => {
					contador++;
					dibujarChiste(chiste);
				})
				.catch((err) => {
					throw err;
				});

			// dibujarChiste(await obtenerChiste());
			btns[0].disabled = false;
		} catch (error) {
			btns[0].disabled = false;
			throw error;
		}
	});

	btns[1].addEventListener("click", () => {
		try {
			btns[1].disabled = true;
			let hijos = olList.childNodes;
			olList.removeChild(hijos[hijos.length - 1]);
			contador--;
			btns[1].disabled = false;
		} catch (error) {
			throw error;
		}
	});
};

const dibujarChiste = (chiste) => {
	const olItem = document.createElement("li");
	olItem.innerHTML = `${contador}. <b>${chiste.id}</b>: ${chiste.value}`;
	olItem.classList.add("list-group-item");
	olList.append(olItem);
};

export const init = () => {
	crearChisteHtml();
	eventos();
};
