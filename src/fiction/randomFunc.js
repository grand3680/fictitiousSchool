export function changeValueRandomly(element) {
    setInterval(function() {
        var randomChars = '';
        var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 20; i++) {
        randomChars += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }

        element.textContent = randomChars;
    }, 150);
}