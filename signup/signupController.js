import { pubSub } from "../pubSub.js";
import { createUser } from "./signup.js";
import { buildSpinnerView, hideSpinner } from "../utils/SpinnerView.js"
import { isEmailValid } from "../utils/isEmailValid.js"

export function signupController(signupElement) {

  signupElement.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    const emailElement = signupElement.querySelector('#username');
    const passwordElement = signupElement.querySelector('#password');
    const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');
    signupElement.innerHTML = buildSpinnerView()
    
    if (isEmailValid(emailElement.value) &&
        isPasswordValid(passwordElement.value, passwordConfirmElement.value)) {
          try {
            await createUser(emailElement.value, passwordElement.value)
            signupElement.reset();
            window.location = './index.html'
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Usuario creado correctamente')
          } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
          }finally{
            hideSpinner(signupElement)
          }
        }else{
          pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION,'Email invalido')
        }
    })

  function isPasswordValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION,'Las contraseñas no son iguales')
      return false
    }
    return true
  }
}
