import React from 'react';
import './App.scss';

import LineChart from './components/LineChart'


function App() {
  return (
    <div className="App">
      <LineChart
        title="Line"
        xAxisData={
          ["Tencent", "MI", "Google", "Facebook", "Alibaba", "Baidu"]
        }
        series={
          [
            {
              name: "评分",
              type: "line",
              data: [6, 6.7, 8, 7, 7.8, 5],
              smooth: true
            },
            {
                name: "点赞",
                type: "line",
                data: [6, 4, 8, 5, 9, 5.4],
                smooth: true
              },
          ]
        }
      />
    </div>
  );
}

export default App;
