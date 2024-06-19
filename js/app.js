const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburgerr");
const nav = document.querySelector('nav')

hamburger.addEventListener('click', (e)=>{
    e.preventDefault();

    nav.classList.toggle('hamburgerClick')
})

hamburgerClose.addEventListener('click', (e)=>{
    e.preventDefault();

    nav.classList.toggle('hamburgerClick')
})


document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('lineChart').getContext('2d');
  const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
          datasets: [{
              label: 'Sotuvlar',
              data: [65, 59, 80, 81, 56, 55, 60, 75, 70, 90, 85, 95], 
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 1,
              fill: true,
          }]
      },
      options: {
          responsive: true,
          scales: {
              x: {
                  beginAtZero: true
              },
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});

