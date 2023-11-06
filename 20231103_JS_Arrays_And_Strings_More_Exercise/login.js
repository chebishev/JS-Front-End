function solve(array) {
  function reverseString(str) {
    if (str === "")
      // This is the terminal case that will end the recursion
      return "";
    else return reverseString(str.substr(1)) + str.charAt(0);
  }

  username = array.shift();
  password = reverseString(username);
  incorrectPasswordsCounter = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === password) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      incorrectPasswordsCounter++;
      if (incorrectPasswordsCounter === 4) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    }
  }
}
solve(["Acer", "login", "go", "let me in", "recA"]);
solve(["momo", "omom"]);
solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
