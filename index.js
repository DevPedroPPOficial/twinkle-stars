function addStar() {
    const getRandomPos = () => {
        return `${Math.random() * 100}%`;
    }

    const divElement = document.createElement('div');
    divElement.className = 'star';

    divElement.style.left = getRandomPos();
    divElement.style.top = getRandomPos();

    divElement.onanimationend = function () {
        this.remove();
    }

    document.body.appendChild(divElement);
}

function getRandomRGB() {
    const getColor = () => {
        return Math.round(Math.random() * 255);
    }

    return `rgb(${getColor()},${getColor()},${getColor()})`;
}

setInterval(addStar, 50);