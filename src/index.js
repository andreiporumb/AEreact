import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Performance from './performance';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';


const Profiler = React.unstable_Profiler;
function getMetrics(compName, mode, actualTime, baseTime) {
    requestAnimationFrame(() => {
      document.getElementById("demo").innerText = `
       ComponnentId: ${compName}
       Mode:         ${mode}
       BaseTime:     ${baseTime}
       ActualTime:   ${actualTime}
      `;
    });
    console.log(compName, mode, actualTime, baseTime);
  }


const routing = (



  <Router>
    <div>
CSIE MASTER AE 2020
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/performance">Performance</Link>
        </li>
      <li><a href="https://github.com/andreiporumb/AEreact">GitHub</a>
</li>
      </ul>

      <Route exact path="/" component={App} />
      <Route path="/performance" component={Performance} />

    </div>
  </Router>


);
ReactDOM.render(routing, document.getElementById('root'))


