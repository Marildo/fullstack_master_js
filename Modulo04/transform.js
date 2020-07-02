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
    title: 'Pioneiros',
    dataHistorico: '1593140400000',
    saldoAtivos: 13,
    saldoCaixa: 3
  },
  {
    title: 'Hope',
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
    title: 'Speed',
    dataHistorico: '1593399600000',
    saldoAtivos: 0.79,
    saldoCaixa: 5240.21
  },
  {
    title: 'Tela',
    dataHistorico: '1593399600000',
    saldoAtivos: 0.78,
    saldoCaixa: 1387.4
  },
]

/*rows: [
    { Data: '01/01', Tela: 1523, Houpe: 1000 },
    { Data: '02/01', Tela: 1423, Houpe: 1050 },
    { Data: '03/01', Tela: 1623, Houpe: 1200 }
  ]  */

const getData = (item) => {
  item['data'] = new Date(parseInt(item.dataHistorico)).toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' })
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

const keys = Array.from(new Set(dados.map((i) => i.title)))
keys.unshift('data')

const fase1 = dados.map(getData)
const fase2 = fase1.map(criarTitulos)
const fase3 = fase2.map(somaSaldo)
//console.log(fase3)


let datas = Array.from(new Set(fase3.map((i) => i.data)))
datas.sort()

let fase4 = []
for (let i = 0; i < datas.length; i++) {
  const values = fase3.filter(item => item.data === datas[i])
 fase4.push(values)
}

const fase5 = []
for (const value of fase4) {
  const obj = {}
  for (const v of value) {
    for (const key of keys) {
      if(v[key])
        obj[key] = v[key]
    }
  }
  fase5.push(obj)
}

console.log(fase5)