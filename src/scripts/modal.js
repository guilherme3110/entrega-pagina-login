function showLogin() {
  const body = document.querySelector("body");
  const loginBtn = document.querySelector('');

  loginBtn.addEventListener("click", (event) => {
    const modal = createModal("Bem vindo de volta", "Entrar");

    body.appendChild(modal)
    closeModal();
    loginBtn();
  });
  
}

function showSignupModal() {
  const body = querySelector("body");
  const signupBtn = document.querySelector("#");

  signupBtn.addEventListener("click", () => {
    const modal = createModal("cadastro", "Enviar");

    body.appendChild(modal);

    closeModal();
    createUser();
  });
}

function createModal(textTitle, textButton) {
  const section = document.createElement("section");
  const form = document.createElement("form");
  const title = document.createElement("h2");
  const closeBtn = document.createElement("span");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const passLabel = document.createElement("label");
  const passInput = document.createElement("input");
  const subBtn = document.createElement("button");


  section.classList.add("modal__container");

  form.classList.add("modal__form");

  title.innerText = textTitle;


  closeBtn.innerText = "X";
  closeBtn.id = "closeBtn";

  emailLabel.htmlFor = "email";
  emailLabel.innerText = "Email: ";
  emailInput.name = "email";
  emailInput.id = "email";
  emailInput.type = "text";
  emailInput.required;
  emailInput.placeholder = "Digite seu melhor email";

  passLabel.htmlFor = "password";
  passLabel.innerText = "Senha: ";
  passInput.name = "password";
  passInput.id = "password";
  passInput.type = "password";
  passInput.required;
  passInput.placeholder = "********";

  subBtn.type = "submit";
  subBtn.id = "subBtn";
  subBtn.innerText = textButton;

  form.append(
    title,
    closeBtn,
    emailLabel,
    emailInput,
    passLabel,
    passInput,
    subBtn
  );

  section.appendChild(form);

  return section;

}

function closeModal() {
  const modalContainer = document.querySelector(".modal__container");
  const closeModalBtn = document.querySelector("#closeBtn");

  closeModalBtn.addEventListener("click", () => {
    modalContainer.remove();
  });
}

function createUser() {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const subBtn = document.querySelector("#subBtn");
  const modalContainer = document.querySelector(".modal__container");

  subBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const user = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    if (emailInput.value !== "" && passwordInput.value !== "") {
      users.push(user);
      alert("Conta criada com sucesso");
    } else {
      alert("Por favor informe seu email e senha");
    }

    console.log(users);

    modalContainer.remove();
  });
}

function login() {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const subBtn = document.querySelector("#subBtn");
  let count = 0;

  subBtn.addEventListener("click", (event) => {
    event.preventDefault();

    for (let i = 0; i < users.length; i++) {
      if (
        emailInput.value === users[i].email &&
        passwordInput.value === users[i].password
      ) {
        count++;
        window.location.replace("/src/pages/dashboard.html");
      }
    }

    if (emailInput.value === "" && passwordInput.value === "") {
      alert("Por favor informe seu email e senha");
    } else if (count === 0) {
      alert("Email ou senha inválidos, por favor tente novamente");
    }
  });
}

showLoginModal();
showSignupModal()