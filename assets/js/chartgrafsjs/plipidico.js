var ctx = document.getElementById('plipidico').getContext('2d'); 
/*Perfil lipídico*/
const names = ['Triglicéridos', 'Colesterol', 'HDL', 'LDL', 'VLDL', 'Lipoproteína A', 'Lipoproteína B', 'Lipoproteína C'];
const value = [1.5, 2.5, 3.5, 4.5, 5.5, 3.5, 7.5, 1.9];



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
