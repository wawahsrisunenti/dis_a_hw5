<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registration & List data_register</title>
    <!-- Bootstrap CSS for styling -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
</head>

<body class="bg-dark text-white">
    <div class="container mt-5">
        <!-- Tab Navigation -->
        <ul class="nav nav-tabs" id="myTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="registration-tab" data-bs-toggle="tab" href="#registration" role="tab"
                    aria-controls="registration" aria-selected="true">Registrasi</a>
            </li>
            <li class="nav-item" role="presentation">
            <a class="nav-link" id="list-data_register-tab" data-bs-toggle="tab" href="#list-data_register"
                    role="tab" aria-controls="list-data_register" aria-selected="false">List Data</a>
            </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content" id="myTabsContent">
            <!-- Tab Registration -->
            <div class="tab-pane fade show active" id="registration" role="tabpanel" aria-labelledby="registration-tab">
                <form id="registration-form">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="name" required>
                    </div>
                    <div class="mb-3">
                        <label for="age" class="form-label">Umur</label>
                        <input type="number" class="form-control" id="age" required>
                    </div>
                    <div class="mb-3">
                        <label for="money" class="form-label">Uang Sangu</label>
                        <input type="number" class="form-control" id="money" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

            <!-- Tab List data_register -->
            <div class="tab-pane fade" id="list-data_register" role="tabpanel" aria-labelledby="list-data_register-tab">
                <div id="resume"></div>
                <table class="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th class="col-5" scope="col">Nama</th>
                            <th class="col-3" scope="col">Umur</th>
                            <th class="col-4" scope="col">Uang Sangu</th>
                        </tr>
                    </thead>
                    <tbody id="data_register-list"></tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Js of Bootstrap to give animation style -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous">
    </script>

    <!-- Vanilla Javascript -->
    <script src="js/records.js"></script>
</body>

</html>