function checkAge(age1, age2, age3) {
  older = 0
  younger = 0
  camilaAge = 0
  if (age1 > age2 && age1 > age3) {
    console.log('first')
    older = age1
    if (age2 > age3) {
      console.log('first if')
      camilaAge = age3
      younger = age2
    } else {
      younger = age2
      camilaAge = age3
    }
  } else if (age2 > age3 && age2 > age1) {
    older = age2
    console.log('else if')
    if (age3 > age1) {
      camilaAge = age3
      younger = age1
    }
  } else {
    older = age3
    console.log('else')
    if (age1 > age2) {
      camilaAge = age1
      younger = age2
    } else {
      younger = age1
      camilaAge = age2
    }
  }
  console.log(camilaAge)
}

console.log(checkAge(35, 34, 36))
