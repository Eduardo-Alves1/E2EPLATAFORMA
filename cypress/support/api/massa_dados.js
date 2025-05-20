const URL = 'https://plataforma.dev.e2etreinamentos.com.br/api/massa-teste/gerar';

async function getMassa(err, res) {
    const res = await fetch(URL)
    console.log(res)
    if (res.status === 200) {
        const obj = await res.json();
        console.log(obj);
    }

    var amail_u_gerado = obj.json().emailE2E;

}
getMassa()