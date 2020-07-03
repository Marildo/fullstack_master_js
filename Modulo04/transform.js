const dados = [
  {
    "title": "Tela",
    "dataHistorico": "1593140400000",
    "saldoAtivos": 0.17,
    "saldoCaixa": 451.28
  },
  {
    "title": "Pioneiros",
    "dataHistorico": "1593140400000",
    "saldoAtivos": -1955.22,
    "saldoCaixa": 1361.21
  },
  {
    "title": "Hope",
    "dataHistorico": "1593140400000",
    "saldoAtivos": -4859.21,
    "saldoCaixa": 5129.3
  },
  {
    "title": "Speed",
    "dataHistorico": "1593140400000",
    "saldoAtivos": 1,
    "saldoCaixa": 1
  },
  {
    "title": "Tela",
    "dataHistorico": "1593226800000",
    "saldoAtivos": 0.17,
    "saldoCaixa": 449.68
  },
  {
    "title": "Speed",
    "dataHistorico": "1593226800000",
    "saldoAtivos": 2,
    "saldoCaixa": 2
  },
  {
    "title": "Pioneiros",
    "dataHistorico": "1593226800000",
    "saldoAtivos": 0.78,
    "saldoCaixa": 1361.16
  },
  {
    "title": "Hope",
    "dataHistorico": "1593226800000",
    "saldoAtivos": 0.79,
    "saldoCaixa": 5140.34
  },
  {
    "title": "Hope",
    "dataHistorico": "1593399600000",
    "saldoAtivos": 0.79,
    "saldoCaixa": 5240.21
  },
  {
    "title": "Pioneiros",
    "dataHistorico": "1593399600000",
    "saldoAtivos": 0.78,
    "saldoCaixa": 1387.4
  },
  {
    "title": "Tela",
    "dataHistorico": "1593399600000",
    "saldoAtivos": 0.17,
    "saldoCaixa": 439.52
  },
  {
    "title": "Speed",
    "dataHistorico": "1593399600000",
    "saldoAtivos": 3,
    "saldoCaixa": 3
  },
  {
    "title": "Hope",
    "dataHistorico": "1593486000000",
    "saldoAtivos": 0.79,
    "saldoCaixa": 5221.51
  },
  {
    "title": "Pioneiros",
    "dataHistorico": "1593486000000",
    "saldoAtivos": 0.78,
    "saldoCaixa": 1393.5
  },
  {
    "title": "Tela",
    "dataHistorico": "1593486000000",
    "saldoAtivos": 0.17,
    "saldoCaixa": 430.01
  },
  {
    "title": "Speed",
    "dataHistorico": "1593486000000",
    "saldoAtivos": 4,
    "saldoCaixa": 4
  },
  {
    "title": "Pioneiros",
    "dataHistorico": "1593572400000",
    "saldoAtivos": 0.78,
    "saldoCaixa": 1414.72
  },
  {
    "title": "Tela",
    "dataHistorico": "1593572400000",
    "saldoAtivos": 0.17,
    "saldoCaixa": 448.88
  },
  {
    "title": "Hope",
    "dataHistorico": "1593572400000",
    "saldoAtivos": 0.79,
    "saldoCaixa": 5340.69
  },
  {
    "title": "Speed",
    "dataHistorico": "1593572400000",
    "saldoAtivos": 5,
    "saldoCaixa": 5
  }
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
  item.saldo = item.saldoAtivos + item.saldoCaixa
  delete item.saldoAtivos
  delete item.saldoCaixa
  return item
}

const keys = Array.from(new Set(dados.map((i) => i.title)))
keys.unshift('data')
keys.push('Total')

const fase1 = dados.map(getData)

const fase2 = fase1.map(somaSaldo)
//console.log(fase2)

//const fase3 = fase1.map(criarTitulos)
//console.log(fase3)


let datas = Array.from(new Set(fase2.map((i) => i.data)))

let fase4 = []
for (let i = 0; i < datas.length; i++) {
  const values = fase2.filter(item => item.data === datas[i])
 fase4.push(values)
}
//console.log(fase4)


const totaliza = (item) => {
  const agg = {}
  for (let index = 0; index < item.length; index++) {
    const element = item[index];
    agg.data = element.data
    agg[element.title] = element.saldo
  }

  const total = item. map(i => i.saldo).reduce((c,n) => c +n)

  agg.Total = total

  return agg
}

const fase5 = fase4.map(totaliza)

console.log(fase5)


/*
const fase5 = []
for (const value of fase4) {
  const obj = {}
  let Total = 0
  for (const v of value) {
    for (const key of keys) {    
      if(v[key]){
        obj[key] = v[key]
        if(key !== 'data'){
          Total =+ v[key]
        } 
      }
    }
  }
  obj.Total = Total
  fase5.push(obj)
}

////console.log(fase5)

/*


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
  keys.push('Total')
  
  const fase1 = dados.map(getData)
  
  console.log(fase1)
  
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
  
  console.log(fase4)
  
  const fase5 = []
  for (const value of fase4) {
    const obj = {}
    let Total = 0
    for (const v of value) {
      for (const key of keys) {    
        if(v[key]){
          obj[key] = v[key]
          if(key !== 'data'){
            Total =+ v[key]
          } 
        }
      }
    }
    obj.Total = Total
    fase5.push(obj)
  }
  
  console.log(fase5)
  */