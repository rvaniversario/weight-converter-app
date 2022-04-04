const output = document.getElementById("output");
const input = document.getElementById("input");
const output1 = document.getElementById("output-1");
const output2 = document.getElementById("output-2");
const output1Title = document.getElementById("output-1-title");
const output2Title = document.getElementById("output-2-title");

output.style.visibility = "hidden";

function checkUnitType() {
  let unitType = document.getElementsByName("unit-type");
  let leng = unitType.length;

  for (i = 0; i < leng; i++) {
    if (unitType[i].checked) {
      if (unitType[i].value === "grams") {
        grams();
      } else if (unitType[i].value === "kg") {
        kg();
      } else {
        oz();
      }
    }
  }
}

function resetValues() {
  input.value = "";
  output1.innerHTML = "";
  output2.innerHTML = "";
}

function grams() {
  resetValues();
  input.placeholder = "Grams";
  output1Title.innerText = "Kilograms: ";
  output2Title.innerText = "Ounces: ";
  input.addEventListener("input", function (e) {
    output.style.visibility = "visible";
    let gramsValue = e.target.value;
    output1.innerHTML = gramsValue / 1000 + " kg";
    output2.innerHTML = gramsValue / 28.35 + " oz";
  });
}

function kg() {
  resetValues();
  input.placeholder = "Kilograms";
  output1Title.innerText = "Grams: ";
  output2Title.innerText = "Ounces: ";
  input.addEventListener("input", function (e) {
    output.style.visibility = "visible";
    let kgValue = e.target.value;
    output1.innerHTML = kgValue * 1000 + " g";
    output2.innerHTML = kgValue * 35.274 + " oz";
  });
}

function oz() {
  resetValues();
  input.placeholder = "Ounces";
  output1Title.innerText = "Grams: ";
  output2Title.innerText = "Kilograms: ";
  input.addEventListener("input", function (e) {
    output.style.visibility = "visible";
    let ozValue = e.target.value;
    output1.innerHTML = ozValue * 28.35 + " g";
    output2.innerHTML = ozValue / 35.274 + " kg";
  });
}
