

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [64, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(254, 99, 132, 0.2)',
            'rgba(254, 159, 64, 0.2)',
            'rgba(254, 205, 86, 0.2)',
            'rgba(74, 192, 192, 0.2)',
            'rgba(53, 162, 235, 0.2)',
            'rgba(152, 102, 255, 0.2)',
            'rgba(200, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(254, 99, 132)',
            'rgb(254, 159, 64)',
            'rgb(254, 205, 86)',
            'rgb(74, 192, 192)',
            'rgb(53, 162, 235)',
            'rgb(152, 102, 255)',
            'rgb(200, 203, 207)'
        ],
        borderWidth: 0
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

const ctx = document.getElementById('bar');

new Chart(ctx,config);