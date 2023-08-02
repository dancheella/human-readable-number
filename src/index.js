module.exports = function toReadable(number) {
    // Массивы словесных представлений чисел
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero';
    } else if (number < 20) {
        return units[number];
    } else if (number < 100) {
        return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + units[number % 10] : '');
    } else {
        return units[Math.floor(number / 100)] + ' hundred' + (number % 100 !== 0 ? ' ' + toReadable(number % 100) : '');
    }
}
