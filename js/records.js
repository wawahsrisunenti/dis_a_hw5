const registerRecord = [];

function countAverage() {
  let totalAge = 0;
  let totalMoney = 0;

  for (const register of registerRecord) {
    totalAge += register.age;
    totalMoney += register.money;
  }

  const ageAverage = totalAge / registerRecord.length;
  const moneyAverage = totalMoney / registerRecord.length;

  return {
    ageAverage,
    moneyAverage,
  };
}

function showRecord() {
  const showAverageAge = document.getElementById("average-age");
  const showAverageMoney = document.getElementById("average-money");
  const showRegisterRecord = document.getElementById("register-list");
  const { ageAverage, moneyAverage } = countAverage();

  showRegisterRecord.innerHTML = "";
  for (const register of registerRecord) {
    const row = `
            <tr>
                <td>${register.name}</td>
                <td>${register.age}</td>
                <td>${register.money}</td>
            </tr>
        `;
    showRegisterRecord.innerHTML += row;
  }
  showAverageAge.innerHTML = `The average age of registrants is ${ageAverage.toFixed(
    0
  )}`;
  showAverageMoney.innerHTML = `The average uang sangu of registrants is Rp ${moneyAverage.toFixed(
    2
  )},-`;
}

document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const money = parseFloat(document.getElementById("money").value);

    if (name.length < 10) {
      alert("Name is too short. Ensure the Name is at least 10 characters.");
    } else if (age < 25) {
      alert(
        "Sorry, you are not eligible to register. Minimum age required is 25 years."
      );
    } else if (money < 100000 || money > 1000000) {
      alert(
        "Invalid Uang Sangu. Uang Sangu must be between 100 thousand to 1 million."
      );
    } else {
      registerRecord.push({
        name,
        age,
        money,
      });

      alert("Record Has Been Entered");

      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("money").value = "";

      showRecord();
    }
  });
