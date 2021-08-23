import React, {useState} from 'react';
import './App.css';
import InputArea from './components/InputArea'
import Table from './components/Table'
import testData from './data/testData'

function App() {
  const[item, setItem] = useState(null);

  function handleSearch(event) {
    const searchText = event.target.value;
    const response = testData.filter(data => data.name===searchText);

    if (response.length > 0) {
      setItem({
        name: response[0].name,
        stock: response[0].stock,
      })
    }
  }

  return (
     <div>
      <div className="search-container">
        <InputArea
          onSearch={handleSearch}
        />
        <div className="table">
          {item !== null && <Table name={item.name} stock={item.stock}/>}
        </div>
      </div>

      </div>
  );
}

export default App;
