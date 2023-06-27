const body = document.getElementsByTagName("body")[0]
const buttonTheme = document.getElementById("checkbox")
buttonTheme.checked = false // Desmarcado como padrão
function changeTheme() {
  if (buttonTheme.checked) {
    body.style.backgroundColor = "#292C35" /* cor quando marcado */
  } else {
    body.style.backgroundColor = "#f1f1f1" /* Cor padrão quando desmarcado */
  }
}
