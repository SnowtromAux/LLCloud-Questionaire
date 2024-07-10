import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Page from './components/Page';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/get-object')
      .then(response => response.json())
      .then(data => {console.log(data);setData(data);})
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
     <Router>
       <Routes>
        {Object.entries(data).map(([key, value]) => (
          <Route
            key={key}
            exact path={key}
            element={<Page data = {value}></Page>}
          />
          // <a href = {key}>xd</a>
        ))}
       </Routes>
     </Router>
    </div>
  );
}

export default App;
