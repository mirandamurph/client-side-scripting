document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');

    const isPalindrome = (str) => {
        const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        
        const reversedStr = cleanedStr.split('').reverse().join('');
        
        return cleanedStr === reversedStr;
    };

    const checkPalindrome = () => {
        const inputValue = textInput.value;

        if (inputValue.trim() === '') {
            alert('Please input a value');
           
            resultDiv.textContent = ''; 
            return;
        }

        if (isPalindrome(inputValue)) {
            resultDiv.textContent = `${inputValue} is a palindrome`;
        } else {
            resultDiv.textContent = `${inputValue} is not a palindrome`;
        }
    };

    checkBtn.addEventListener('click', checkPalindrome);
});
