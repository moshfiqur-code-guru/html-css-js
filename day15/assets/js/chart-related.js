const canvas = document.getElementById('bar');
canvas.width = 800;
canvas.height = 500
// const ctx = canvas.getContext("2d");
//
// ctx.moveTo(50, 50)
// ctx.lineTo(50, 300)
// ctx.lineWidth = 100;
// ctx.stroke()

// console.log(ctx)
// ctx.arc(100, 100, 60, 0, Math.PI * 2);
//
// ctx.fill()
// ctx.fill()

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
    labels: labels,
    datasets: [{
        label: 'Month wise progress',
        data: [30, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(254, 60, 132, 0.2)',
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
        borderWidth: 2
    }]
};

const newLegendClickHandler = function (e, legendItem, legend) {
    console.log(legendItem)
    console.log(legend)
    /*const index = legendItem.datasetIndex;
    const type = legend.chart.config.type;

    if (index > 1) {
        // Do the original logic
        if (type === 'pie' || type === 'doughnut') {
            pieDoughnutLegendClickHandler(e, legendItem, legend)
        } else {
            defaultLegendClickHandler(e, legendItem, legend);
        }

    } else {
        let ci = legend.chart;
        [
            ci.getDatasetMeta(0),
            ci.getDatasetMeta(1)
        ].forEach(function(meta) {
            meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
        });
        ci.update();
    }*/
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                onClick: newLegendClickHandler,
                labels: {
                    color: 'rgb(255, 99, 132)',
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = 'Demo';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        }
    },
};


new Chart(canvas, config);
