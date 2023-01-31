const http = require("http");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {
	const urlInfo = url.parse(req.url, true);
	console.log(urlInfo);
	const name = urlInfo.query.name;

	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");

	if (!name) {
		res.end(
			"<h1>Preencha o seu nome</h1><form method='GET'><input type='text' name='name' /><input type='submit' value='Enviar' /></form>"
		);
	} else {
		res.end(`<h1>Bem vindo ${name}</h1>`);
	}
});

server.listen(port, () => {
	console.log(`servidor rodando na porta ${port}`);
});

//NOTE - result of the parsed url (urlInfo)
//   Url {
//     protocol: null,
//     slashes: null,
//     auth: null,
//     host: null,
//     port: null,
//     hostname: null,
//     hash: null,
//     search: null,
//     query: [Object: null prototype] {}
//   ,
//     pathname: '/favicon.ico',
//     path: '/favicon.ico',
//     href: '/favicon.ico'
//   }
