import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [copy, setCopy] = useState('');
  useEffect(() => {
    const makeAPIRequest = async () => {
      const apiResponse = await fetch('/api');
      const data = await apiResponse.json();
      setCopy(data.copy);
    }
    makeAPIRequest();
  }, []);
  return (
    <div className="App">
      {copy}
    </div>
  );
}

export default App;
