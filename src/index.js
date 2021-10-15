// Подключение картинки
// import Icon from './icon.png';

// подключение стилей
import './style.scss';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello Webpack 5';
    element.classList.add('hello');

    // Пример использования картинки
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());


console.log('this is index.js')