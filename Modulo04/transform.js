const dados = [
  {
    title: 'Tela',
    dataHistorico: '1593226800000',
    saldoAtivos: 0.17,
    saldoCaixa: 449.68
  },
  {
    title: 'Speed',
    dataHistorico: '1593226800000',
    saldoAtivos: 10,
    saldoCaixa: 02
  },
  {
    title: 'Pioneiros',
    dataHistorico: '1593226800000',
    saldoAtivos: 0.78,
    saldoCaixa: 1361.16
  },
  {
    title: 'Hope',
    dataHistorico: '1593226800000',
    saldoAtivos: 0.79,
    saldoCaixa: 5140.34
  },
  {
    title: 'Speed',
    dataHistorico: '1593140400000',
    saldoAtivos: 13,
    saldoCaixa: 3
  },
  {
    title: 'Tela',
    dataHistorico: '1593140400000',
    saldoAtivos: 0.17,
    saldoCaixa: 451.28
  },
  {
    title: 'Hope',
    dataHistorico: '1593399600000',
    saldoAtivos: 0.79,
    saldoCaixa: 5240.21
  },
  {
    title: 'Pioneiros',
    dataHistorico: '1593399600000',
    saldoAtivos: 0.78,
    saldoCaixa: 1387.4
  },
  {
    title: 'Hope',
    dataHistorico: '1593140400000',
    saldoAtivos: -4859.21,
    saldoCaixa: 5129.3
  }
]

let datas = Array.from(new Set(dados.map((i) => i.dataHistorico)))

//console.log(datas)

const getData = (item) => {
  item['data'] = new Date(parseInt(item.dataHistorico)).toLocaleDateString()
  delete item.dataHistorico
  return item
}

const criarTitulos = (item) => {
  item[item.title] = 0
  return item
}

const somaSaldo = (item) => {
  item[item.title] = item.saldoAtivos + item.saldoCaixa
  delete item.saldoAtivos
  delete item.saldoCaixa
  delete item.title
  return item
}

const agruparData = (c, n) => {
  if (c.data === n.data) {
    let a = {
      ...c,
      values: []
    }
    a.values.push(c)
    return a
  }
  return n
}

const fase1 = dados.map(getData)
const fase2 = fase1.map(criarTitulos)

const fase3 = fase2.map(somaSaldo)
fase3.sort()
console.log(fase3)

const fase4 = fase3.reduce(agrupar)
console.log(fase4)

/*rows: [
    { Data: '01/01', Tela: 1523, Houpe: 1000 },
    { Data: '02/01', Tela: 1423, Houpe: 1050 },
    { Data: '03/01', Tela: 1623, Houpe: 1200 }
  ]  */
