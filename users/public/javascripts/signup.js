async function onSubmitSignUp(event) {
    event.preventDefault();
    const user = document.getElementById("userSignup").value;
    const password = document.getElementById("passwordSignup").value;
    /*
        VALIDAR O FORMULÁRIO
    */

    // const response = await fetch("http://localhost:3000/users", {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         email: user,
    //         password
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json', 
    //     }
    // });
    // const data = await response.json();
    const { data } = await axios.post("http://localhost:3000/users", {
        email: user,
        password
    });
    window.alert(`Usuário cadastrado com id ${data.id}`);
    window.location.href = "/";
}

window.onload = function() {
    const form = document.getElementById("formSignup");
    form.addEventListener("submit", onSubmitSignUp);
}