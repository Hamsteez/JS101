let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription = munstersDescription.toLowerCase();

munstersDescription = munstersDescription.charAt(0).toUpperCase() +
                      munstersDescription.slice(1);
console.log(munstersDescription);