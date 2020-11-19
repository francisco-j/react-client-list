import ClientCard from './ClientCard';
import axios from 'axios';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {

  const [clients, setClients] = useState([])
  const [filter, setFilter] = useState('')

  useEffect( () => {
    async function callApi () {
      const {data} =  await axios.get('http://localhost:5000/api/users')
      console.log({response: data});
      setClients(data)
    }
    callApi()
  }, [])

  const clientList = () => clients
    .filter(client => client.name.toLowerCase().includes(filter.toLowerCase()))
    .map(client => <ClientCard key={client.id} client={client} />)

  return (
    <div className="App">
      <input onChange={e=>setFilter(e.target.value)} value={filter}/>
      {clientList()}
    </div>
  );
}

export default App;
