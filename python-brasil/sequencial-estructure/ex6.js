// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
// do a program that ask how much do you earn per hour and the number of hours worked in the month. Calculate and show the total of your wage.

let perHour = prompt('Quanto você ganha por hora')
perHour = Number(perHour.replace(',', '.'))
let hoursWorked = prompt('Informe quantas horas você trabalha no mês')
hoursWorked = Number(hoursWorked)

const wage = (perHour * hoursWorked).toLocaleString('pt-br', {
 style: 'currency',
 currency: 'BRL'
})

alert(`Seu salário é de ${wage}`)
