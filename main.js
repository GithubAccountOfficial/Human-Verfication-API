function verfication() {
  let letter_choice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let random_text = "";
  let random_number;
  for (let times = 6; times > 0; times--) {
    random_number = Math.floor(Math.random() * 26) + 1;
    random_text = random_text + letter_choice[random_number];
  };
  let verify = prompt(`Enter the Following letter Below. ( ${random_text} )`);
  if (verify === random_text) {
    alert("Verfication Complete");
    return true;
  } else {
    alert("Incorrect Verfication");
    return false;
  };
};
