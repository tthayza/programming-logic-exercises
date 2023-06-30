// Faça um Programa que leia três números e mostre-os em ordem decrescente.
const first = -99
const second = -100
const third = -9
let biggest
let smallest
let middle
let decreasingNumbers = []

if (first > second && first > third) {
  biggest = first
  if (second > third) {
    middle = second
    smallest = third
  } else {
    middle = third
    smallest = second
  }
} else if (second > third && second > first) {
  biggest = second
  if (third > first) {
    middle = third
    smallest = first
  } else {
    smallest = third
    middle = third
  }
} else if (third > second && third > first) {
  biggest = third
  if (second > first) {
    middle = second
    smallest = first
  } else {
    middle = first
    smallest = second
  }
}

decreasingNumbers = [smallest, middle, biggest]
console.log(decreasingNumbers)
