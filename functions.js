$("button").on("click", function () {
    var $this = $(this);
   // $this.hide();
    html2canvas(document.body, {
      onrendered: function(canvas) {
            var imageLink = canvas.toDataURL();
            window.open(imageLink);
          console.log(new Date(), imageLink);
          $this.show();
      }
    });
});