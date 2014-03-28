html2canvas(document.body, {
  onrendered: function(canvas) {
        var imageLink = canvas.toDataURL();
        window.open(imageLink);
      console.log(imageLink);
  }
});