const form = document.getElementById("eventForm");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const dados = new FormData(form);

    const resposta = await fetch(
        "https://api.sheetmonkey.io/form/w4yeALRr6RStbfDkovP54b",
        {
            method: "post",
            body: dados
        }
    );

    if (resposta.ok) {
        alert("Resposta enviada com sucesso!");
        form.reset();
    } else {
        alert("Ocorreu um erro ao enviar o formulário.");
    }
});