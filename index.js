<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration & List of Registrants</title>
    <!-- Bootstrap CSS untuk styling -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>

<body class="bg-dark text-white">
    <div class="container mt-5">
        <!-- Tab Navigation -->
        <ul class="nav nav-tabs" id="myTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="registration-tab" data-bs-toggle="tab" href="#registration" role="tab"
                    aria-controls="registration" aria-selected="true">Registration</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="list-pendaftar-tab" data-bs-toggle="tab" href="#list-pendaftar" role="tab"
                    aria-controls="list-pendaftar" aria-selected="false">List Registrants</a>
            </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content" id="myTabsContent">
            <!-- Tab Registrasi -->
            <div class="tab-pane fade show active" id="registration" role="tabpanel" aria-labelledby="registration-tab">
                <form id="registration-form">
                    <div class="mb-3 mt-5">
                        <label for="name" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Umur</label>
                        <input type="number" class="form-control" id="age" required>
                    </div>
                    <div class="mb-3">
                        <label for="money" class="form-label">Uang Sangu (Rp)</label>
                        <input type="number" class="form-control" id="money" required>
                    </div>
                    <button type="submit" class="btn btn-success">SUBMIT</button>
                </form>
            </div>

            <!-- Tab List Pendaftar -->
            <div class="tab-pane fade" id="list-pendaftar" role="tabpanel" aria-labelledby="list-pendaftar-tab">
                <table class="table table-bordered mt-5">
                    <thead>
                        <tr>
                            <th class="col-5">Nama</th>
                            <th class="col-3">Umur</th>
                            <th class="col-4">Uang Sangu(RP)</th>
                        </tr>
                    </thead>
                    <tbody id="pendaftar-list"></tbody>
                </table>
                <h3 id="average-age"></h3>
                <h3 id="average-money"></h3>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS untuk efek tab -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous">
    </script>

    <!-- JavaScript kustom -->
    <script src="JavaScript/data.js"></script>
</body>

</html>