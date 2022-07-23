const fs = require("fs");
const path = require("path");

class Kanjis {
	coleccion_kanjis = [];
	path = "./data/kanjis.json";
	pathsvg = "./data/colorized-kanji-contrast";

	constructor() {
		this.cargarKanjis();
	}

	cargarKanjis = () => {
		if (!fs.existsSync(this.path)) return;
		const info = fs.readFileSync(this.path, { encoding: "utf-8" });
		let kanjis = JSON.parse(info).kanjivg.kanji;

		this.coleccion_kanjis = kanjis.map((kanji) => {
			return {
				id: kanji.id,
				valor: kanji.g["kvg:element"],
			};
		});
	};

	buscarKanjiSVG(cadena = "") {
		let kanjisBuscados = [];
		[...cadena].forEach((char) => {
			const kanjiBuscado = this.coleccion_kanjis.find((kanji) => kanji.valor === char); //Busco los kanjis ingresados en el textarea caracter por caracter
			if (kanjiBuscado) {
				let str = kanjiBuscado.id;
				str = str.split("_")[1];
				const path1 = this.pathsvg + "/" + str + ".svg";
				console.log(path1);
				const info = fs.readFileSync(path1, { encoding: "utf-8" });
				kanjiBuscado.svg = info;
				// console.log(kanjiBuscado);
				kanjisBuscados.push(kanjiBuscado);
			}
		});
		return kanjisBuscados;
	}
}

module.exports = Kanjis;
