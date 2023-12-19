const pendaftarList = [];

function hitungRataRata() {
  let totalUmur = 0;
  let totalUangSangu = 0;

  for (const pendaftar of pendaftarList) {
    totalUmur += pendaftar.umur;
    totalUangSangu += pendaftar.uangSangu;
  }

  const rataRataUmur = totalUmur / pendaftarList.length;
  const rataRataUangSangu = totalUangSangu / pendaftarList.length;

  return {
    rataRataUmur,
    rataRataUangSangu,
  };
}

function tampilkanData() {
  const averageAge = document.getElementById("average-age");
  const averageMoney = document.getElementById("average-money");
  const pendaftarTable = document.getElementById("pendaftar-list");
  const { rataRataUmur, rataRataUangSangu } = hitungRataRata();

  pendaftarTable.innerHTML = "";
  for (const pendaftar of pendaftarList) {
    const row = `
            <tr>
                <td>${pendaftar.nama}</td>
                <td>${pendaftar.umur}</td>
                <td>${pendaftar.uangSangu}</td>
            </tr>
        `;
    pendaftarTable.innerHTML += row;
  }
  averageAge.innerHTML = `The average age of registrants is ${rataRataUmur.toFixed(
    0
  )}`;
  averageMoney.innerHTML = `The average uang sangu of registrants is Rp ${rataRataUangSangu.toFixed(
    2
  )}`;
}

document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("name").value;
    const umur = parseInt(document.getElementById("age").value);
    const uangSangu = parseFloat(document.getElementById("money").value);

    if (nama.length < 10) {
      alert("Name is too short. Ensure the Name is at least 10 characters.");
    } else if (umur < 25) {
      alert(
        "Sorry, you are not eligible to register. Minimum age required is 25 years."
      );
    } else if (uangSangu < 100000 || uangSangu > 1000000) {
      alert(
        "Invalid Uang Sangu. Uang Sangu must be between 100 thousand to 1 million."
      );
    }

    pendaftarList.push({
      nama,
      umur,
      uangSangu,
    });

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("money").value = "";

    tampilkanData();
  });
