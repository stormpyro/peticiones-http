const jokeUrl = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";

const obtenerChiste = async () => {
	try {
		const resp = await fetch(jokeUrl);

		if (resp.ok) {
			return await resp.json().then(({ icon_url, id, value }) => {
				return { icon_url, id, value };
			});
		} else {
			throw Error("404 not found, servidor no encontrado");
		}
		/*Funcionamiento del throw. El throw lo que dice a JS es lanzame una EXCEPCIÓN que contenga el siguiente
        "texto". Y esa excepcion, debido a que estamos en un try-catch, es atrapada por el catch. Adicionalmente al llamar
        a obtenerChiste, este devuelve en el then lo que esta validado por try, y el error obtenido lo devuelve el catch. */
	} catch (error) {
		throw error;
	}
};
/*El try-catch funciona de la siguiente manera. El try intenta ejecutar cada linea de codigo dentro de su bloque. Si encuentra
algún error dentro del bloque. Pasa directamente el flujo al catch capturando el error en su parametro y cortando el flujo en el try.
Es decir deja de ejecutar el resto del bloque una vez encuentre un error y se pasa directamente al catch. */

const obtenerUsuarios = async () => {
	try {
		const respUser = await fetch(urlUsuarios);
		/*Cuando se almacena una promesa en una variable, es como decir que estas almacenando, lo que el then o el reject trae.
        Si yo llamo luego a esa variable, no deberia usar then, debido a que esta variable ya contiene lo que resuelve la promesa o lo
        que rejecta. Si solo llamara a la promesa directamente, ahi si que deberia usar then. */
		if (!respUser.ok) throw Error("Problema con el servidor de usuarios");
		const { data: usuarios } = await respUser.json();
		return usuarios;
	} catch (error) {
		throw error;
	}
};

export { obtenerChiste, obtenerUsuarios };
