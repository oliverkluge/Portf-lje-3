const inl = document.querySelector('#invoicelines').getContext('2d');
const chart = new Chart(inl, {
    type: 'bar',
    data: {
        labels: ['USA🇺🇸', 'Canada🇨🇦', 'France🇫🇷', 'Brazil🇧🇷', 'Germany🇩🇪', 'Denmark🇩🇰'],
        datasets: [{
            label: 'Invoice Lines',
            data: [494, 304, 190, 190, 152, 38],
            backgroundColor: ['red', 'lightgreen', 'lightblue','yellow','lime','pink',],
        }]
    }
});

const int = document.querySelector('#invoicetotal').getContext('2d');
const chart2 = new Chart(int, {
    type: 'bar',
    data: {
        labels: ['USA🇺🇸', 'Canada🇨🇦', 'France🇫🇷', 'Brazil🇧🇷', 'Germany🇩🇪', 'Denmark🇩🇰'],
        datasets: [{
            label: 'Invoice Total',
            data: [4667.06, 2689.96, 1722.10, 1677.10, 1392.48, 334.62],
            backgroundColor: ['red', 'lightgreen', 'lightblue','yellow','lime','pink'],
        }]
    }
});
