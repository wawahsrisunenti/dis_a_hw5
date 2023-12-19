const registerList = [];

function average() {
  let totalAge = 0;
  let totalMoney = 0;

  for (const register of registerList) {
    totalAge += register.age;
    totalMoney += register.money;
  }

  const averageAge = totalAge / registerList.length;
  const averageMoney = totalMoney / registerList.length;

  return {
    averageAge,
    averageMoney,
  };
}

function tampilkanData() {
  const resume = document.getElementById("resume");
  const registerTable = document.getElementById("register-list");
  const { averageAge, averageMoney } = average();

  resume.innerHTML = `On average, registrations have an allowance of ${averageMoney.toFixed(
    2
  )} dengan rata-rata umur ${averageAge.toFixed(2)}`;

  registerTable.innerHTML = "";
  for (const register of registerList) {
    const row = `
            <tr>
                <td>${register.name}</td>
                <td>${register.age}</td>
                <td>${register.money}</td>
            </tr>
        `;
    registerTable.innerHTML += row;
  }
}

document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const money = parseFloat(document.getElementById("money").value);

    if (name.length < 10 || age < 25 || money < 100000 || money > 1000000) {
      alert(
        "Invalid data. Ensure the Name is at least 10 characters, Age is at least 25 years, and Allowance is between 100 thousand to 1 million."
      );
      return;
    }

    registerList.push({
      name,
      age,
      money,
    });

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("money").value = "";

    tampilkanData();
  });
