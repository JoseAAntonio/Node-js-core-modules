const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
	const urlInfo = url.parse(req.url, true);
	const name = urlInfo.query.name;

	if (!name) {
		fs.readFile("../index.html", (err, data) => {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	} else {
		const nameNewLine = name + "\r\n";

		fs.appendFile("../arquivo.txt", nameNewLine, (err, data) => {
			res.writeHead(302, {
				Location: "/",
			});
			res.end();
		});
	}
});

fs.unlink("arquivo.txt", (err) => {
	err ? console.log(err) : console.log("Arquivo removido");
});

const arqAntigo = "arquivo2.txt";
const arqNovo = "arquivoRenomeado.txt";

fs.rename(arqAntigo, arqNovo, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`o arquivo ${arqAntigo} foi renomeado para ${arqNovo}`);
});

server.listen(port, () => {
	console.log(`servidor rodando na porta ${port}`);
});
