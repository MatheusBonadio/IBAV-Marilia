document.getElementById('print').onclick = function() {
  $.ajax({
    url: "/public/css/print.css",
    success: function(styleCss) {
      trab(styleCss);
    }
  });

  function trab(styleCss) {
    var data = document.getElementsByClassName('word_content')[0].innerHTML;
    var mywindow = window.open();
    mywindow.document.write('<html><head><title>A Posição Cristã Em Meio Ao Caos | IBAV Marília</title>');
    mywindow.document.write('<style>' + styleCss + '</style>');
    mywindow.document.write('</head><body><h1>A Posição Cristã Em Meio Ao Caos</h1>');
    mywindow.document.write(data);
    mywindow.document.write('</body></html>');
    mywindow.print();
    mywindow.close();
  }
}