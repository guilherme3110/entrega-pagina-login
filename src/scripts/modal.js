
function showLoginModal() {
  const body = document.querySelector("body")
  const login__link = document.querySelector('.login__link')

  login__link.addEventListener('click', (event) => {
    const modal = createModal()
    body.appendChild(modal)

    return body;
  })
  
}
showLoginModal()


function createModal() {

  const section = document.createElement('section')
  const form = document.createElement('form')
  const title = document.createElement('title')
  const closeBtn = document.createElement('span')
  const emailLabel = document.createElement('label')
  const emailInput = document.createElement('input')
  const passLabel = document.createElement('label')
  const passInput = document.createElement('input')
  const subBtn = document.createElement('button')

  section.classList.add('login__modal')

  form.classList.add('login__form')

  title.innerText = "Recuperando a senha"

  closeBtn.innerText = 'X'
  closeBtn.id = 'closeBtn'

  emailLabel.htmlFor = 'email'
  emailLabel.innerText = 'Email'
  emailInput.name = 'email'
  emailInput.id = 'email'
  emailInput.type = 'text'
  emailInput.placeholder = 'Digite seu email'
  

  passLabel.htmlFor = 'Confirmação de email'
  passLabel.innerText = 'Confirmação de email'
  passInput.name = 'password'
  passInput.id = 'password'
  passInput.type = 'password'
  passInput.placeholder = 'Digite sua nova senha'

  subBtn.type = 'submit'
  subBtn.id = 'subBtn'
  subBtn.innerText = 'Enviar'

  form.append(title, closeBtn, emailLabel, emailInput, passLabel, passInput, subBtn)

  section.appendChild(form)
  
  closeBtn.addEventListener('click', () => {
    section.remove()
  })
  return section
  
}

function closeModal(){
  const modalContainer = document.querySelector('.login__link')
  const closeModalBtn = document.querySelector('#closeBtn')

  closeModalBtn.addEventListener('click', () => {
    modalContainer.remove()
  })
}