 
//  1. Declare a variable using let with any name you like, but without a value.
    let myVariable;

//  2. On a separate line, assign the variable the String: "Moo!"
    myVariable = "Moo!";

//  3. Log out this variable to the terminal using console.log
    console.log(myVariable);

// Repeat the above steps but try using a const variable. Comment this new part of code and explain what is happening.

    // You can not declare a const variable without a value. Hence, we have to assign a value to a const variable when we declare it. 
    const myConstVariable = "Moo!";
    
    // We cannot reassign a value to a const variable, hence the value of myConstVariable will always be "Moo!".
    // If we try to reassign a value to myConstVariable, we will get an error.
    myConstVariable = "Moo-Moo!"; // This will throw an error.
    
    console.log(myConstVariable); // This will not be executed because of the error above.  