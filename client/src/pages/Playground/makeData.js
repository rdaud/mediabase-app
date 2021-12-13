import namor from 'namor'

const data = [
    {
      veículo: 'Google',
      arquivo: '200x250px, GIF, HTML',
      prazo: '',
      veiculação: '',
      status: 'Em produção',
      criativos: [{
        id: '23432434',
        nome: 'Heineken 2022',
        arquivo: 'url.com/232312',
        prazo: '2021/12/22',
        veiculação: '2021/12/31',
        status: 'Em produção'
      }],
      subRows: [{
        id: '23432434',
        nome: 'Heineken 2022',
        arquivo: 'url.com/232312',
        prazo: '2021/12/22',
        veiculação: '2021/12/31',
        status: 'Em produção'
      }]
    },
    {
      veículo: 'Facebook',
      arquivo: '200x250px, GIF, HTML',
      prazo: '',
      veiculação: '',
      status: 'Em produção',
      criativos: [{
        id: '23432434',
        nome: 'Heineken 2022',
        arquivo: 'url.com/232312',
        prazo: '2021/12/22',
        veiculação: '2021/12/31',
        status: 'Em produção'
      }],      
      subRows: [{
        id: '23432434',
        nome: 'Heineken 2022',
        arquivo: 'url.com/232312',
        prazo: '2021/12/22',
        veiculação: '2021/12/31',
        status: 'Em produção'
      }]
    },
    {
      veículo: 'OOH',
      arquivo: '200x250px, GIF, HTML',
      prazo: '',
      veiculação: '',
      status: 'Em produção',
      criativos: [{
        id: '23432434',
        nome: 'Heineken 2022',
        arquivo: 'url.com/232312',
        prazo: '2021/12/22',
        veiculação: '2021/12/31',
        status: 'Em produção'
      }]
    }]
  

  export default function makeData() {
   
        return [...data]
     
  }