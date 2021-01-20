let munstersDescription = "The Munsters are creepy and spooky.";

function swapCaps(str) {
  let lower = str.split('');
  let swapped = [];
  lower.map(function checkLower(char) {
    if (char === char.toLowerCase()) {
      swapped.push(char.toUpperCase());
    } else {
      swapped.push(char.toLowerCase());
    }
    return swapped.join('');
  });
  console.log(swapped.join(''));
}

swapCaps(munstersDescription);