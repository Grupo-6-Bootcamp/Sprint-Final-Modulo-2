var ctx = document.getElementById('hemograma').getContext('2d');
/*Hemograma*/
const names = ['Hemoglobina', 'Hematocrito', 'Leucocitos', 'Neutrófilos', 'Linfocitos', 'Monocitos', 'Eosinófilos', 'Basófilos'];
const value = [12.5, 3.38, 7.5, 3.4, 0.5, 0.5, 1.2, 10.5];



var myChart = new Chart(ctx, {
    type: 'line',
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
