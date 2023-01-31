const url = require("url");

const address = "https://meusite.com.br/catalog?produtos=cadeira";
const parsedUrl = new url.URL(address);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get("produtos"));

console.log(parsedUrl);

//NOTE - result for the last console.log - parsedUrl
// URL {
//     href: 'https://meusite.com.br/cata
//   log?produtos=cadeira',
//     origin: 'https://meusite.com.br',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'meusite.com.br',
//     hostname: 'meusite.com.br',
//     port: '',
//     pathname: '/catalog',
//     search: '?produtos=cadeira',
//     searchParams: URLSearchParams { 'p
//   rodutos' => 'cadeira' },
//     hash: ''
//   }
