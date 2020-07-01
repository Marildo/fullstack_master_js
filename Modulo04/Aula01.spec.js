const vet = [1, 2, 3, 4, 5]
const valorInicial = 10

const somador = (c, n) => c + n
const filterPares = (v) => v % 2 === 0
const filterImpares = (v) => v % 2 !== 0

describe('Aula 01', () => {
  it('Somar vetores com reduce e valor inicial ', () => {
    const soma = vet.reduce(somador, valorInicial)
    expect(soma).toBe(25)
  })

  it('Somar items pares do array ', () => {
    const somaPar = vet.filter(filterPares).reduce(somador)
    expect(somaPar).toBe(6)
  })

  it('Somar items impares do array ', () => {
    const somaPar = vet.filter(filterImpares).reduce(somador)
    expect(somaPar).toBe(9)
  })
})
