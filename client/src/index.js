import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/css/index.css';
import './assets/css/media.css';
import * as serviceWorker from './serviceWorker';


import {
    Chart as ChartJS,
    registerables,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ...registerables,
  )


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
