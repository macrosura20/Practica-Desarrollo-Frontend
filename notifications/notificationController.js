import { buildNotificationsView } from "./notificationView.js"
import { pubSub } from "../pubSub.js"

export function notificationController(notificationsElement){

    function showMessage(message){
        notificationsElement.innerHTML = buildNotificationsView(message)
        setTimeout(() => {
            notificationsElement.innerHTML = ''
        }, 5000)
        
    }

    pubSub.subscribe(pubSub.TOPICS.SHOW_NOTIFICATION, (message) =>{
        showMessage(message)
    })
    
    return showMessage
}