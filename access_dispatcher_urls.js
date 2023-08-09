/////////////////////////////////////////////////////////////////////////////////
//This is to automate accessing the dispatcher URLs for data refreshes (JavaScript)
//This is to be ran as a browser snippet


// Task #1 Create a prompt that shows a pop up that allows the user to type in brand year and trim => DONE!
function getCarDetailsPreview() {
    let brand = prompt("Please enter the Brand");
    let brandText;
    if (brand == null || brand == "") {
        brandText = "User cancelled the prompt.";
    } else {
        brandText = "The Brand you typed is " + brand + " thanks!";
    }

    let year = prompt("Please enter the Year");
    let yearText;
    if (year == null || year == "") {
        yearText = "User cancelled the prompt.";
    } else {
        yearText = "The Year you typed is " + year + " thanks!";
    }

    let trim = prompt("Please enter the Trim");
    let trimText;
    if (trim == null || trim == "") {
        trimText = "User cancelled the prompt.";
    } else {
        ///////////////////////////////////
        // This code snippet can be found in the confluence documentation and is meant for internal use only
        ///////////////////////////////////
    }

};

function getCarDetailsProd() {
    let brand = prompt("Please enter the Brand");
    let brandText;
    if (brand == null || brand == "") {
        brandText = "User cancelled the prompt.";
    } else {
        brandText = "The Brand you typed is " + brand + " thanks!";
    }

    let year = prompt("Please enter the Year");
    let yearText;
    if (year == null || year == "") {
        yearText = "User cancelled the prompt.";
    } else {
        yearText = "The Year you typed is " + year + " thanks!";
    }

    let trim = prompt("Please enter the Trim");
    let trimText;
    if (trim == null || trim == "") {
        trimText = "User cancelled the prompt.";
    } else {
        ///////////////////////////////////
        // This code snippet can be found in the confluence documentation and is meant for internal use only
        ///////////////////////////////////
    }

}

// Task #2 add an option to determine if you're doing this for preview or prod => DONE!
if (confirm("Is this for www-preview?")) {
    // User clicked "OK"
    console.log("yes this is for www-preview")
    getCarDetailsPreview();
} else if (confirm("Is this for prod?")) {
    // User clicked "Cancel"
    getCarDetailsProd();
    console.log("yes this is for prod")
} else {
    // User clicked "Cancel"
    console.log("no option was selected")
}

// Task #3 add typo fallbacks for the trims => PENDING!


//KEY NOTES!!!!!!!!!
// ips = {
//     "UPDATE LOCALLY",
//     "https://XX.XXX.XX.XX"
// }
// userInputB = brand
// userInputB = fixFormat(userInputB);
// userInputT = trim
// userInputT = fixFormat(userInputT);
// openTabs("preview", userInputB, year, userInputT)
// openTabs (env,brand,year,trim = null) {
//     for(var i = 0; i < ips.length; i++) {
//         if(!trim)
//             window.open(ips[i] + "." + env + "." + brand);
//         else    
//             window.open(ips[i] + "." + env + "." + brand + "." + trim);
//     }
//     window.open("data.js");

// }

// fixFormat(variable) {
//     variable.toLowerCase()
//     variable = variable.replace("-","_");
//     if(variable.contains("4xe")) {
//         //4xe specific format changes
//     }
//     return variable
// }

