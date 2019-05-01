function shift() {
    // Input
    var inString = document.getElementById("in").value;

    // Grab our shift modifier and make sure it is less than 26 by using modulo.
    var shift = Number(document.getElementById("shift").value) % 26;

    // If our shift is negative, it is easier to handle by going forward.
    if (shift < 0) {
        shift += 26;
    }
    
    // Processing

    var outString = "";

    // First, loop through the length of our input string.
    for (var i = 0; i < inString.length; i++) {
        // In each iteration, we want to turn our letter into its ASCII value.
        var letter = inString.charCodeAt(i);

        var shifted = letter - shift;

        if (letter >= 65 && letter <= 90) { // Are we uppercase?

            if (shifted < 65) { // Have we shifted past 'A'?
                // If so, we want to find how far we shifted past, and then subtract that from the max letter value.

                shifted = 91 - (65 - shifted);
            }

        } else if (letter >= 97 && letter <= 122) { // Perhaps lowercase then?

            if (shifted < 97) { // Have we shifted past 'a'?
                // If so, we want to find how far we shifted past, and then subtract that from the max letter value.

                shifted = 123 - (97 - shifted)
            }
        } else {  // If neither, we don't want this letter, its a special character.
            continue;
        }

        //Finally, transform our ASCII value into its respective character and append it to our output string.
        outString += String.fromCharCode(shifted)
    }


    /*
    One-Statement Solution. Fancy, but not readable, so it's a no-go.
    
    var outString = inString
                    .split("")
                    .map(letter => letter.charCodeAt(0))
                    .filter(letter => (letter >= 65 && letter <= 90) || (letter >= 97 && letter <= 122))
                    .map(letter => letter >= 65 && letter <= 90
                        ? (letter - SHIFT < 65 ? 91 - (65 - (letter - SHIFT)) : (letter - SHIFT > 90 ? 64 + ((letter - SHIFT) - 90) : letter - SHIFT))
                        : (letter - SHIFT < 97 ? 123 - (97 - (letter - SHIFT)) : (letter - SHIFT > 122 ? 96 + ((letter - SHIFT) - 97)))
                    )
                    .map(letter => String.fromCharCode(letter))
                    .join("");
    */

	// Output
    document.getElementById("out").innerHTML = outString;
}