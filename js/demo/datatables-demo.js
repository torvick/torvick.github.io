// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable( {
    "bPaginate": false,
    "bLengthChange": true,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": false
  });
});
