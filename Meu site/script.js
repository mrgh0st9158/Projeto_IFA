
function abrir_formulario(){
  document.getElementById("section_inicial").classList.add("esconder_elemento")
  document.getElementById("section_form").classList.remove("esconder_elemento")
}



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
        form.reset();

        document.getElementById("section_form").classList.add("esconder_elemento")
        document.getElementById("section_final").classList.remove("esconder_elemento")
    } else {
        alert("Ocorreu um erro ao enviar o formulário.");
    }
});