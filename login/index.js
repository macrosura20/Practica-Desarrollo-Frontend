import { loginController } from "./loginController.js";
import { notificationController } from "../notifications/notificationController.js"

const loginElement = document.querySelector('#logUser')
const notificationsElement = document.querySelector('.notifications')

notificationController(notificationsElement)
loginController(loginElement)