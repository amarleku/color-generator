let qs = selector => document.querySelector(selector);
function getRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgb = red + ', ' + green + ', ' + blue;
    return rgb;
};

qs('.rgb-btn').addEventListener('click', () => {
    const rgbColor = `rgb(${getRGB()})`;

    qs('.rgb').style.backgroundColor = rgbColor;

    qs('.rgb-name').textContent = rgbColor;
});

let hexShort = () => Math.random().toString(16).substr(-6);
qs('.hex-btn').addEventListener('click', () => {
    let hexColor = `#${hexShort()}`;
    qs('.hex').style.backgroundColor = hexColor;

    qs('.hex-name').textContent = hexColor;
});

let characters = 'ABCDEF0123456789';

function getHEX() {
    let result = '';
    let charLength = characters.length;

    let p = Math.floor(Math.random() * charLength);

    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLength));
    };
    return result;
};
