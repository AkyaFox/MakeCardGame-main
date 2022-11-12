// Criação de conta no MakeCardGame

const btn = document.getElementById("b");

btn.addEventListener("click", function () {
    const form = document.getElementById("signup-org");
    const auth = getAuth();

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = form.elements["email"].value;
        const password = form.elements["pass"].value;
        console.log("email: ", email);
        console.log("password: ", password);
        console.log("name: ", firebase.name);

        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                alert("Cadastrado!");
                console.log(result);
            })
            .catch((e) => alert(e.message));
    });
});

