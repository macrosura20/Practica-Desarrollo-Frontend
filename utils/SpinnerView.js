export function buildSpinnerView() {
    return `<div class="spinner"><div></div><div></div><div></div></div>`
  }

export function hideSpinner(Element) {
    const spinnerElement = Element.querySelector('.spinner');
    spinnerElement.classList.add('hide');
}