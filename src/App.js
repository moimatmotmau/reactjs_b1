import './App.css';
import {useEffect, useState} from 'react'
import List from './components/List';

function App() {

 const reactArr = [
   {
     name:'thanh dat',
     age:22
   },
   {
   name:'nam dat',
    age:2
  },
  {
    name:'thanh ',
    age:30
  },
 ]

 const JavaArr = [
  {
    name:'minh ',
    age:22
  },
  {
   name:'Linh',
   age:22
 },
 {
   name:'Bê ',
   age:30
 },
]

  const [dataReact, setDataReact] = useState(reactArr)
  const [dataJava, setDataJava] = useState(JavaArr)


  useEffect(()=>{
    if(dataReact.length === 0){
      alert("class dang trong")
    }else if(dataJava.length === 0 ){
      alert("class trong")
    }
  },[dataJava,dataReact])

  const handleTransferReact = (index) => {
    const itemTransfer = dataReact.splice(index,1)
    console.log(itemTransfer)
    setDataJava([
        ...dataJava,
        itemTransfer
    ])
}

const handleTransferJava = (index) => {
  const itemTransfer = dataJava.splice(index,1)
  setDataReact([
      ...dataReact,
      ...itemTransfer
  ])
}

  return (
    <div className='app'>
      <List data={dataReact} name="React" handleClick={handleTransferReact} />
            <List data={dataJava} name="Java" handleClick={handleTransferJava} />
    </div>
  )
}
export default App;
