let clicks = 0;

const clickCount = () => {
    clicks += 1;
    document.getElementById('clicks').innerHTML = clicks;
}