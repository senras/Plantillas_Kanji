const { Router } = require("express");
const router = Router();

const Kanjis = require("../models/kanjis");

router.get("/", async (req, res) => {
	const kanjis = await imprimirKanjis();
	res.render("index", { kanjis });
});

router.get("/about", (req, res) => {
	res.render("about");
});

router.get("/contact", (req, res) => {
	res.render("contact");
});

router.get("/kanjis", async (req, res) => {
	const kanjis = await imprimirKanjis("本");
	res.render("kanjis", { kanjis });
});

const imprimirKanjis = async (kanjiString) => {
	const kanjis = new Kanjis();
	const buscados = await kanjis.buscarKanjiSVG(kanjiString);
	return buscados;
};

// router.get("/about", (req, res) => {
// 	res.render("about");
// });

module.exports = router;
