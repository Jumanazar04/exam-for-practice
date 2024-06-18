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

document.addEventListener('DOMContentLoaded', (event) => {
    const slider1 = document.getElementById('slider1');
    const slider2 = document.getElementById('slider2');
    const slider3 = document.getElementById('slider3');
    const switchToggle = document.getElementById('switch');
  
    switchToggle.addEventListener('change', (event) => {
      const isDisabled = event.target.checked;
      slider1.disabled = isDisabled;
      slider2.disabled = isDisabled;
      slider3.disabled = isDisabled;
    });
  });

  window.onload = function() {
    const canvas = document.getElementById('lineChart');
    const ctx = canvas.getContext('2d');
  
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const data = [65, 59, 80, 81, 56, 55, 40];
    const canvasHeight = canvas.height;
    const canvasWidth = canvas.width;
    const chartHeight = canvasHeight - 40;
    const chartWidth = canvasWidth - 40;
    const maxData = Math.max(...data);
    const scaleFactor = chartHeight / maxData;
    const pointRadius = 5;
  
    // Draw the axes
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, canvasHeight - 20);
    ctx.lineTo(canvasWidth - 10, canvasHeight - 20);
    ctx.stroke();
  
    // Draw the line chart
    ctx.strokeStyle = 'rgb(75, 192, 192)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    data.forEach((value, index) => {
      const x = 50 + (chartWidth / (data.length - 1)) * index;
      const y = canvasHeight - 20 - value * scaleFactor;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      // Draw the data points
      ctx.fillStyle = 'rgb(75, 192, 192)';
      ctx.beginPath();
      ctx.arc(x, y, pointRadius, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.stroke();
  
    // Draw the labels
    ctx.fillStyle = '#000000';
    ctx.font = '16px Arial';
    labels.forEach((label, index) => {
      const x = 50 + (chartWidth / (data.length - 1)) * index;
      ctx.fillText(label, x - 10, canvasHeight - 5);
    });
  };
  