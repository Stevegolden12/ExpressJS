$(document).ready(function () {
  $('.deleteUser').on('click', deleteUser)
})

function deleteUser() {
  var confirmation = confirm("Are you sure?");

  if (confirmation) {
    alert(1);
  }
}