document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById('portfolio');
    const text = "I'm Ravishka Dulshan"; 
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); 
        }
    }

    type(); 
});

