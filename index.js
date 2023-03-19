import { notificationController } from "./notifications/notificationController.js"
import { productListController } from "./product-list/productListController.js"
import { userActionsController } from "./user-actions/userActionsController.js"

const productListElement = document.querySelector('.product-list')
const notificationsElement = document.querySelector('.notifications')
const userActionsElement = document.querySelector('.user-actions')


productListController(productListElement)
userActionsController(userActionsElement)
notificationController(notificationsElement)