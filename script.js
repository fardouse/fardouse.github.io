const greetings = [
  'Welcome',        // English
  'Hello',          // English alternative
  'مرحبا',          // Arabic
  'Bonjour',        // French
  'Hola',           // Spanish
  'Ciao',           // Italian
  'こんにちは',     // Japanese
  '안녕하세요',      // Korean
];

const greetingElement = document.getElementById('greeting');
let i = 0;
let j = 0;
let currentText = '';
let isDeleting = false;

function type() {
    const fullText = greetings[i];

    if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
    } else {
    currentText = fullText.substring(0, currentText.length + 1);
    }

    greetingElement.textContent = currentText;

    let typeSpeed = 150;

    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && currentText === fullText) {
    typeSpeed = 1000; 
    isDeleting = true;
    } else if (isDeleting && currentText === '') {
    isDeleting = false;
    i = (i + 1) % greetings.length;
    typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

type();
