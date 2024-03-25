function validateForm() {
  if (document.forms["formPendaftaran"]["nama"].value == "") {
    alert("Nama Tidak Boleh Kosong");
    document.forms["formPendaftaran"]["nama"].focus();
    return false;
  }
  if (document.forms["formPendaftaran"]["email"].value == "") {
    alert("Email must not be empty.");
    document.forms["formPendaftaran"]["email"].focus();
    return false;
  }
  if (document.forms["formPendaftaran"]["jurusan"].selectedIndex < 1) {
    alert("Select Destination.");
    document.forms["formPendaftaran"]["jurusan"].focus();
    return false;
  }
}
