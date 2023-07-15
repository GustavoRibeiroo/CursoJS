let num = [5, 8, 2, 4, 300]
num.push(1)
num.sort(Number)
console.log (num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeio valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
  console.log(`Valor não encontrado!`)
} else {
  console.log(`O valor 8 está na posição ${[pos]}`)
}
