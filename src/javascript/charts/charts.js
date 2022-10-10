import './lineChartFunct'

// Traffic line chart

const dataLine = {
    datasets: [{
      backgroundColor: 'rgba(76, 71, 175, 0.2)',
      borderColor: 'rgba(76, 71, 175, 0.3)',
      borderWidth: 1,
      fill: true,
      tension: 0.4,
      pointStyle: 'circle',
      pointRadius: 3,
      pointHoverRadius: 1.5,
      label: 'Concurrence',
      data: [ //Hourly chart
        {x:'16-22', y:800}, {x:'23-29', y:1400}, {x:'30-5', y:1000},
        {x:'6-12', y:2000}, {x:'13-19', y:1500}, {x:'20-26', y:1750},
        {x:'27-3', y:1350}, {x:'4-10', y:1900}, {x:'11-17', y:2200},
        {x:'18-24', y:1500}, {x:'25-31', y:2500}]
    }]
  };   

const configLine = {
    type: 'line',
    data: dataLine,
    options: { maintainAspectRatio: false,
               scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 2500,
                        alignToPixels: true,
                        ticks: {
                            stepSize: 500,
                            font: {
                                size: 9.2,
                                weight: 'bold'
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                }
    }
};

const chartLine = new Chart(
    document.getElementById('chart-line'),
    configLine
);

// daily traffic chart

const dataBar = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        data: [70, 110, 170, 80, 225, 200, 100],
        borderColor: 'none',
        backgroundColor: 'rgba(76, 71, 175, 0.8)',
      }]
}

const configBar = {
    type: 'bar',
    data: dataBar,
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        }
      }
    },
  };

const chartBar = new Chart(
    document.getElementById('chart-bar'),
    configBar
);

// mobile user chart 

const dataDon = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [
      {
        data: [68, 18, 16],
        backgroundColor: [
            'rgba(76, 71, 175, 0.8)', 
            "#A0C6A0", 
            "#45BFBE"
        ],
        borderWidth: 0,
        hoverOffset: 4,
      }]
};

const configDon = {
    type: 'doughnut',
    data: dataDon,
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                font: {
                    weight: 'bold',
                }
            }
        }
      }
    }
};

const chartDon = new Chart(
    document.getElementById('chart-donut'),
    configDon
);

export { dataLine,
         chartLine }