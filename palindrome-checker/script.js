const input = document.getElementById('input');


function checkPalindrome() {
    const str = input.value.toLowerCase();
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
        // skip non-alphanumeric characters
        if (!str[l].match(/^[0-9a-z]+$/i) || !str[r].match(/^[0-9a-z]+$/i)) {
            l++;
            continue;
        }
        if (str[l] !== str[r]) {
            alert("Not a palindrome");
            return;
        }
        l++;
        r--;
    }
    
    alert("It is a Palindrome");
    return;
}

