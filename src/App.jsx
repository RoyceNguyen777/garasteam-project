import './App.scss'
import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import LineChart from './components/LineChart';
import Temperature from './components/Temperature';
import Time from './components/Time';

function App() {
  const [data, setData] = useState([
    {
      name: 'Facebook',
      type: 'line',
      stack: 'Total',
      data: [212, 113, 432, 234, 256, 330, 310]
    }
  ])
  const [dataTime, setDataTime] = useState({
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds()
  })
  const [dataTemperture, setDataTemperture] = useState(35)
  const [dataHumidity, setDataHumidity] = useState(15)

  const handleClick1 = () => {
    console.log("Button 1");
  }
  const handleClick2 = () => {
    console.log("Button 2");
  }
  const handleClick3 = () => {
    console.log("Button 3");
  }
  const handleClick4 = () => {
    console.log("Button 4");
  }
  const handleLineChart = (data) => {
    setData(data)
  }
  const handleTime = (data) => {
    setDataTime(data)
  }
  const handleTemperture = data => {
    setDataTemperture(data)
  }

  const handleHumidity = data => {
    setDataHumidity(data)
  }
  return (
    <>
      <div className="container">
        <div className="wrapper-chart">
          <div className="layout-left">
            <LineChart data={data} onChange={handleLineChart} />
          </div>
          <div className="layout-right-1">
            <Temperature type={"temper"} data={dataTemperture} />
          </div>
          <div className="layout-right-2">
            <Temperature type={"humidity"} data={dataHumidity} />
          </div>
          <div className="layout-right-3">
            <Time hour={dataTime.hour} min={dataTime.min} sec={dataTime.sec} />
          </div>
        </div>
        <div className="wrapper-button">
          <Button size="large" color='orange' onClick={handleClick1}>BUTTON 1</Button>
          <Button size="large" color='orange' onClick={handleClick2}>BUTTON 2</Button>
          <Button size="large" color='orange' onClick={handleClick3}>BUTTON 3</Button>
          <Button size="large" color='orange' onClick={handleClick4}>BUTTON 4</Button>
        </div>
      </div>

    </>

  );
}

export default App;
