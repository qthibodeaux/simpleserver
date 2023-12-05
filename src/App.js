import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient';

function App() {
  const [name, setName] = useState("")

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts () {
    try {
      const { data, error } = await supabase
        .from("products")
        .then("*")
        .limit(10)
        if (error) throw error;
        setName(data)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
