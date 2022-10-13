const inl = document.querySelector('#invoice').getContext('2d');
const chart = new Chart(inl, {
    type: 'bar',
    data: {
        labels: ['USA🇺🇸', 'Canada🇨🇦', 'France🇫🇷', 'Brazil🇧🇷', 'Germany🇩🇪', 'Denmark🇩🇰'],
        datasets: [{
            label: 'Money spend (Dollars)',
            data: [4667, 2689, 1722, 1677, 1392, 334],
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }, {
            label: 'Invoice Lines',
            data: [494, 304, 190, 190, 152, 38],
            backgroundColor: 'rgba(50, 150, 150, 0.8)'
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
