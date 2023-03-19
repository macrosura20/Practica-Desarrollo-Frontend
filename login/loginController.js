import { isEmailValid } from "../utils/isEmailValid.js"
import { loginUser } from "./login.js"
import { pubSub } from "../pubSub.js";
import { buildSpinnerView, hideSpinner } from "../utils/SpinnerView.js"


export function loginController(loginElement){
    loginElement.addEventListener('submit', (event) =>{
        event.preventDefault()

        const emailElement = loginElement.querySelector('#username') 

        if (!isEmailValid(emailElement.value)){
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, 'Email inválido')
        }else{
            logUser(loginElement)
        }

    })

    async function logUser(loginElement){
        const formData = new FormData(loginElement)
        const username = formData.get('username')
        const password = formData.get('password')
        loginElement.innerHTML = buildSpinnerView()
         try {
            const jwt = await loginUser(username, password)
            localStorage.setItem('token', jwt)
            window.location = './index.html'
         } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, error.message)
            setTimeout(() => {
                window.location = './login.html'
            }, 2000)
         } finally{
            hideSpinner(loginElement)
            
         }

        
    }
}