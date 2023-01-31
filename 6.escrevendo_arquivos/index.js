const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
	const urlInfo = url.parse(req.url, true);
	const name = urlInfo.query.name;

	if (!name) {
		fs.readFile("index.html", (err, data) => {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	} else {
		fs.writeFile("arquivo.txt", name, (err, data) => {
			res.writeHead(302, {
				Location: "/",
			});
			res.end();
		});
	}
});

server.listen(port, () => {
	console.log(`servidor rodando na porta ${port}`);
});

//'writeFile' substitui tudo que está em um arquivo, para atualizar utilizamos o 'appendFile' que possui a mesma utilização do write, porém nos permite unir conteúdo
