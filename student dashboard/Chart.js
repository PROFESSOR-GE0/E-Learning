document.addEventListener('DOMContentLoaded', () => {
      const ctx = document.getElementById('radarStatsChart');
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Basic Algebra', 'Fraction', 'Basic Operation', 'Geometry', 'Number theory'],
          datasets: [{
            label: 'Skill Scores',
            data: [80, 70, 65, 75, 60, 85],
            fill: true,
            backgroundColor: 'rgba(81, 16, 105, 0.2)',
            borderColor: '#fff',
            pointBackgroundColor: '#511069',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#511069'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: '#fff',
                font: { size: 14 }
              }
            }
          },
          scales: {
            r: {
              angleLines: { color: '#ddd' },
              grid: { color: '#eee' },
              pointLabels: {
                color: '#fff',
                font: { size: 10}
              },
              ticks: {
                color: '#999',
                backdropColor: 'transparent'
              }
            }
          }
        }
      });
    });