const labels = [
    '16-22',
    '23-29',
    '30-5',
    '6-12',
    '13-19',
    '20-26',
    '27-3',
    '4-10',
    '11-17',
    '18-24',
    '25-31'
  ];

const data = {
    labels: labels,
    datasets: [{
      label: 'Line Charts',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [800, 1400, 1000, 2000, 1500, 1750, 1350, 1900, 2200, 1500, 2500],
    }]
  };

const config = {
    type: 'line',
    data: data,
    options: { maintainAspectRatio: false,
               scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
    }
};

const chartlLine = new Chart(
    document.getElementById('chart-line'),
    config
);
