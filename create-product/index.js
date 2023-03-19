import { createProductController } from "./createProductController.js";

const token = localStorage.getItem('token')

if (!token) {
  window.location = './index.html'
} else {
  const createProductFormElement = document.querySelector('#createProductForm');
  createProductController(createProductFormElement)
}