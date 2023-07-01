// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let control = true

while (control) {
  const nome = prompt('Informe o nome')
  const senha = prompt('informe a senha')
  if (nome !== senha) {
    control = false
  }
}
