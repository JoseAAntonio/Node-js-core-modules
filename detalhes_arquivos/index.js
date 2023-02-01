const fs = require("fs");

fs.stat("novoArquivo.txt", (err, stats) => {
	try {
		console.log(stats.isDirectory());
		console.log(stats.isFile());
		console.log(stats.size);
		console.log(stats.ctime);
	} catch (error) {
		console.log(err);
	}
});
