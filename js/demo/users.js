$( document ).ready(function() {
  if ($('.body_dropzone').length) {
    Dropzone.autoDiscover = false;
    var myDropzone = new Dropzone(
      ".dropzone", {
        maxFiles: 1,
        headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        dictDefaultMessage: "Drag file here to upload",
        maxFilesize: 6,
        addRemoveLinks: true,
        processQueue: true,
        acceptedFiles: ".xls,.xlsx,.csv",
        init: function() {
          var myDropzone = this;
          try {
            myDropzone.on("complete", function(file, response) {
              myDropzone.removeFile(file);
            });
            myDropzone.on('success', function(file, response) {
              console.log('success');
            });
            myDropzone.on('error', function(file, response) {
              console.log('error');
            });

          } catch (e) {
            console.log(e);
          }
        }
      }
    );
  }
});
