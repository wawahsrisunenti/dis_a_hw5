<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrasi & List Pendaftar</title>
    <!-- Sertakan Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-white">
    <div class="container mt-5">
        <!-- Tab Navigation -->
        <ul class="nav nav-tabs" id="myTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="registrasi-tab" data-bs-toggle="tab" href="#registrasi" role="tab" aria-controls="registrasi" aria-selected="true">Registrasi</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="list-pendaftar-tab" data-bs-toggle="tab" href="#list-pendaftar" role="tab" aria-controls="list-pendaftar" aria-selected="false">List Pendaftar</a>
            </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content" id="myTabsContent">
            <!-- Tab Registrasi -->
            <div class="tab-pane fade show active" id="registrasi" role="tabpanel" aria-labelledby="registrasi-tab">
                <form id="registration-form">
                    <div class="mb-3">
                        <label for="nama" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="nama" required>
                    </div>
                    <div class="mb-3">
                        <label for="umur" class="form-label">Umur</label>
                        <input type="number" class="form-control" id="umur" required>
                    </div>
                    <div class="mb-3">
                        <label for="uang-sangu" class="form-label">Uang Sangu</label>
                        <input type="number" class="form-control" id="uang-sangu" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

            <!-- Tab List Pendaftar -->
            <div class="tab-pane fade" id="list-pendaftar" role="tabpanel" aria-labelledby="list-pendaftar-tab">
                <div id="resume"></div>
                <table class="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Umur</th>
                            <th>Uang Sangu</th>
                        </tr>
                    </thead>
                    <tbody id="pendaftar-list"></tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Sertakan Bootstrap JS (Dibutuhkan untuk Bootstrap) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

    <!-- Sertakan JavaScript terpisah -->
    <script src="script.js"></script>
</body>
</html>