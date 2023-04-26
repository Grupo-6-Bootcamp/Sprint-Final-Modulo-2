var ctx = document.getElementById('coagtable').getContext('2d');
/*Tabla de coagulacion*/
const names = ['Tiempo de protrombina', 'Tiempo de tromboplastina parcial activada', 'Tiempo de trombina', 'Tiempo de sangrado', 'Tiempo de coagulación', 'Tiempo de tromboplastina parcial activada', 'Tiempo de trombina', 'Tiempo de sangrado', 'Tiempo de coagulación'];
const value = [1.5, 2.5, 3.5, 4.5, 5.5, 3.5, 7.5, 5.9];



var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Valores',
            data: value,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor:[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1.5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

