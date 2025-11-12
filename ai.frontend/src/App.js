import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5222/weatherforecast') // ndrysho portin nëse është ndryshe
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setForecast(data))
      .catch(error => console.error('Gabim gjatë marrjes së të dhënave:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Parashikimi i motit</h2>
        {forecast.length === 0 ? (
          <p>Duke ngarkuar të dhënat...</p>
        ) : (
          <ul>
            {forecast.map((item, index) => (
              <li key={index}>
                <strong>{item.date}</strong> - {item.summary} - {item.temperatureC}°C / {item.temperatureF}°F
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;