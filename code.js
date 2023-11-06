var text = document.getElementById("text");
var output = document.getElementById("output");
var shift = document.getElementById("shift");
var A0, A1, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, A2, A20, A21, A22, A23, A24, A25, A3, A4, A5, A6, A7, A8, A9, F, F1, a, b;
  A0 = {
      "A": "B","B": "C","C": "D","D": "E","E": "F","F": "G","G": "H","H": "I","I": "J","J": "K","K": "L","L": "M","M": "N","N": "O","O": "P","P": "Q","Q": "R","R": "S","S": "T","T": "U","U": "V","V": "W","W": "X","X": "Y","Y": "Z","Z": "A"
  };
  A1 = {
      "A": "C","B": "D","C": "E","D": "F","E": "G","F": "H","G": "I","H": "J","I": "K","J": "L","K": "M","L": "N","M": "O","N": "P","O": "Q","P": "R","Q": "S","R": "T","S": "U","T": "V","U": "W","V": "X","W": "Y","X": "Z","Y": "A","Z": "B"
  };
  A2 = {
    "A": "D","B": "E","C": "F","D": "G","E": "H","F": "I","G": "J","H": "K","I": "L","J": "M","K": "N","L": "O","M": "P","N": "Q","O": "R","P": "S","Q": "T","R": "U","S": "V","T": "W","U": "X","V": "Y","W": "Z","X": "A","Y": "B","Z": "C"
  };
  A3 = {
    "A": "E","B": "F","C": "G","D": "H","E": "I","F": "J","G": "K","H": "L","I": "M","J": "N","K": "O","L": "P","M": "Q","N": "R","O": "S","P": "T","Q": "U","R": "V","S": "W","T": "X","U": "Y","V": "Z","W": "A","X": "B","Y": "C","Z": "D"
  };
  A4 = {
    "A": "F","B": "G","C": "H","D": "I","E": "J","F": "K","G": "L","H": "M","I": "N","J": "O","K": "P","L": "Q","M": "R","N": "S","O": "T","P": "U","Q": "V","R": "W","S": "X","T": "Y","U": "Z","V": "A","W": "B","X": "C","Y": "D","Z": "E"
  };
  A5 = {
    "A": "G","B": "H","C": "I","D": "J","E": "K","F": "L","G": "M","H": "N","I": "O","J": "P","K": "Q","L": "R","M": "S","N": "T","O": "U","P": "V","Q": "W","R": "X","S": "Y","T": "Z","U": "A","V": "B","W": "C","X": "D","Y": "E","Z": "F"
  };
  A6 = {
    "A": "H","B": "I","C": "J","D": "K","E": "L","F": "M","G": "N","H": "O","I": "P","J": "Q","K": "R","L": "S","M": "T","N": "U","O": "V","P": "V","Q": "X","R": "Y","S": "Z","T": "A","U": "B","V": "C","W": "D","X": "E","Y": "F","Z": "G"
  };
  A7 = {
    "A": "I","B": "J","C": "K","D": "L","E": "M","F": "N","G": "O","H": "P","I": "Q","J": "R","K": "S","L": "T","M": "U","N": "V","O": "W","P": "X","Q": "Y","R": "Z","S": "A","T": "B","U": "C","V": "D","W": "E","X": "F","Y": "G","Z": "H"
  };
  A8 = {
    "A": "J","B": "K","C": "L","D": "M","E": "N","F": "O","G": "P","H": "Q","I": "R","J": "S","K": "T","L": "U","M": "V","N": "W","O": "X","P": "Y","Q": "Z","R": "A","S": "B","T": "C","U": "D","V": "E","W": "F","X": "G","Y": "H","Z": "I"
  };
  A9 = {
    "A": "K","B": "L","C": "M","D": "N","E": "O","F": "P","G": "Q","H": "R","I": "S","J": "T","K": "U","L": "V","M": "W","N": "X","O": "Y","P": "Z","Q": "A","R": "B","S": "C","T": "D","U": "E","V": "F","W": "G","X": "H","Y": "I","Z": "J"
  };
  A10 = {
    "A": "L","B": "M","C": "N","D": "O","E": "P","F": "Q","G": "R","H": "S","I": "T","J": "U","K": "V","L": "W","M": "X","N": "Y","O": "Z","P": "A","Q": "B","R": "C","S": "D","T": "E","U": "F","V": "G","W": "H","X": "I","Y": "J","Z": "K"
  };
  A11 = {
    "A": "M","B": "N","C": "O","D": "P","E": "Q","F": "R","G": "S","H": "T","I": "U","J": "V","K": "W","L": "X","M": "Y","N": "Z","O": "A","P": "B","Q": "C","R": "D","S": "E","T": "F","U": "G","V": "H","W": "I","X": "J","Y": "K","Z": "L"
  };
  A12 = {
    "A": "N","B": "O","C": "P","D": "Q","E": "R","F": "S","G": "T","H": "U","I": "V","J": "W","K": "X","L": "Y","M": "Z","N": "A","O": "B","P": "C","Q": "D","R": "E","S": "F","T": "G","U": "H","V": "I","W": "J","X": "K","Y": "L","Z": "M"
  };
  A13 = {
    "A": "O","B": "P","C": "Q","D": "R","E": "S","F": "T","G": "U","H": "V","I": "W","J": "X","K": "Y","L": "Z","M": "A","N": "B","O": "C","P": "D","Q": "E","R": "F","S": "G","T": "H","U": "I","V": "J","W": "K","X": "L","Y": "M","Z": "N"
  };
  A14 = {
    "A": "P","B": "Q","C": "R","D": "S","E": "T","F": "U","G": "V","H": "W","I": "X","J": "Y","K": "Z","L": "A","M": "B","N": "C","O": "D","P": "E","Q": "F","R": "G","S": "H","T": "I","U": "J","V": "K","W": "L","X": "M","Y": "N","Z": "O"
  };
  A15 = {
    "A": "Q","B": "R","C": "S","D": "K","E": "U","F": "V","G": "W","H": "X","I": "Y","J": "Z","K": "A","L": "B","M": "C","N": "D","O": "E","P": "F","Q": "G","R": "H","S": "I","T": "J","U": "K","V": "L","W": "M","X": "N","Y": "O","Z": "P"
  };
  A16 = {
    "A": "R","B": "S","C": "T","D": "U","E": "V","F": "W","G": "X","H": "Y","I": "Z","J": "A","K": "B","L": "C","M": "D","N": "E","O": "F","P": "G","Q": "H","R": "I","S": "J","T": "K","U": "L","V": "M","W": "N","X": "O","Y": "P","Z": "Q"
  };
  A17 = {
    "A": "S","B": "T","C": "U","D": "V","E": "W","F": "X","G": "Y","H": "Z","I": "A","J": "B","K": "C","L": "D","M": "E","N": "F","O": "G","P": "H","Q": "I","R": "J","S": "K","T": "L","U": "M","V": "N","W": "O","X": "P","Y": "Q","Z": "R"
  };
  A18 = {
    "A": "T","B": "U","C": "V","D": "W","E": "X","F": "Y","G": "Z","H": "A","I": "B","J": "C","K": "D","L": "E","M": "F","N": "G","O": "H","P": "I","Q": "J","R": "K","S": "L","T": "M","U": "N","V": "O","W": "P","X": "Q","Y": "R","Z": "S"
  };
  A19 = {
    "A": "U","B": "V","C": "W","D": "X","E": "Y","F": "Z","G": "A","H": "B","I": "C","J": "D","K": "E","L": "F","M": "G","N": "H","O": "I","P": "J","Q": "K","R": "L","S": "M","T": "N","U": "O","V": "P","W": "Q","X": "R","Y": "S","Z": "T"
  };
  A20 = {
    "A": "V","B": "W","C": "X","D": "Y","E": "Z","F": "A","G": "B","H": "C","I": "D","J": "E","K": "F","L": "G","M": "H","N": "I","O": "J","P": "K","Q": "L","R": "M","S": "N","T": "O","U": "P","V": "Q","W": "R","X": "S","Y": "T","Z": "U"
  };
  A21 = {
    "A": "W","B": "X","C": "Y","D": "Z","E": "A","F": "B","G": "C","H": "D","I": "E","J": "F","K": "G","L": "H","M": "U","N": "J","O": "K","P": "L","Q": "M","R": "N","S": "O","T": "P","U": "Q","V": "R","W": "S","X": "T","Y": "U","Z": "V"
  };
  A22 = {
    "A": "X","B": "Y","C": "Z","D": "A","E": "B","F": "C","G": "D","H": "E","I": "F","J": "G","K": "H","L": "I","M": "J","N": "K","O": "L","P": "M","Q": "N","R": "O","S": "P","T": "Q","U": "R","V": "S","W": "T","X": "U","Y": "V","Z": "W"
  };
  A23 = {
    "A": "Y","B": "Z","C": "A","D": "B","E": "C","F": "D","G": "E","H": "F","I": "G","J": "H","K": "I","L": "J","M": "K","N": "L","O": "M","P": "N","Q": "O","R": "P","S": "Q","T": "R","U": "S","V": "T","W": "U","X": "V","Y": "W","Z": "X"
  };
  A24 = {
    "A": "Z","B": "A","C": "B","D": "C","E": "D","F": "E","G": "F","H": "G","I": "H","J": "I","K": "J","L": "K","M": "L","N": "M","O": "N","P": "O","Q": "P","R": "Q","S": "R","T": "S","U": "T","V": "U","W": "V","X": "W","Y": "X","Z": "Y"
  };
  A25 = {
    "A": "A","B": "B","C": "C","D": "D","E": "E","F": "F","G": "G","H": "H","I": "I","J": "J","K": "K","L": "L","M": "M","N": "N","O": "O","P": "P","Q": "Q","R": "R","S": "S","T": "T","U": "U","V": "V","W": "W","X": "X","Y": "Y","Z": "Z"
  };
while (true) {
if (shift.value === "1") {
  output.innerHTML(A0[text.value])
}
if (shift.value === "2") {
  output.innerHTML(A1[text.value])
}
if (shift.value === "3") {
  output.innerHTML(A2[text.value])
}
if (shift.value === "4") {
  output.innerHTML(A3[text.value])
}
if (shift.value === "5") {
  output.innerHTML(A4[text.value])
}
if (shift.value === "6") {
  output.innerHTML(A5[text.value])
}
if (shift.value === "7") {
  output.innerHTML(A6[text.value])
}
if (shift.value === "8") {
  output.innerHTML(A7[text.value])
}
if (shift.value === "9") {
  output.innerHTML(A8[text.value])
}
if (shift.value === "10") {
  output.innerHTML(A9[text.value])
}
if (shift.value === "11") {
  output.innerHTML(A10[text.value])
}
if (shift.value === "12") {
  output.innerHTML(A11[text.value])
}
if (shift.value === "13") {
  output.innerHTML(A12[text.value])
}
if (shift.value === "14") {
  output.innerHTML(A13[text.value])
}
if (shift.value === "15") {
  output.innerHTML(A14[text.value])
}
if (shift.value === "16") {
  output.innerHTML(A15[text.value])
}
if (shift.value === "17") {
  output.innerHTML(A16[text.value])
}
if (shift.value === "18") {
  output.innerHTML(A17[text.value])
}
if (shift.value === "19") {
  output.innerHTML(A18[text.value])
}
if (shift.value === "20") {
  output.innerHTML(A19[text.value])
}
if (shift.value === "21") {
  output.innerHTML(A20[text.value])
}
if (shift.value === "22") {
  output.innerHTML(A21[text.value])
}
if (shift.value === "23") {
  output.innerHTML(A22[text.value])
}
if (shift.value === "24") {
  output.innerHTML(A23[text.value])
}
if (shift.value === "25") {
  output.innerHTML(A24[text.value])
}
if (shift.value === "26") {
  output.innerHTML(A25[text.value])
}
}
