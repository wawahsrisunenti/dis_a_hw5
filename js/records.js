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

    pendaftarList.push({ name, age, money });

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("money").value = "";

    tampilkanData();
  });
