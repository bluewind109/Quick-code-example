//Submit form when press enter in input field
$('#searchCompFrm input[type="text"]').keypress(function (e) {
  var code = e.keyCode || e.which;
  if (code === 13) {
    e.preventDefault();
    $('#searchCompFrm #searchCompBtn').click();
  }
});