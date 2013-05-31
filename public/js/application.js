$(document).ready(function() {
  $('body').keyup(function(e){
    //if(e.keyCode == 46 && $("input:focus, textarea:focus").length == 0) {
    //  e.preventDefault();
    //  alert("delete key pressed!");
    //}
    e.preventDefault();
    console.log(e.which);
//    console.log(String.fromCharCode(code));
//    $(this).append(String.fromCharCode(code));
    switch(e.which)
    {
    case 188: 
      $(this).append(",");   
      break;
    case 190:
      $(this).append(".");
      break;
    case 187:
      $(this).append("=");
      break;
    case 57:
      $(this).append("(");
      break;
    case 48:
      $(this).append(")");
      break;
    case 222:
      $(this).append("\"");
      break;
    case 8:
      console.log($(this).text);
      break;
    case 186:
      $(this).append(":");
      break;
    case 191:
      $(this).append("/");
      break;
    case 37:
      $(this).append("<");
      break;
    case 39:
      $(this).append(">");
      break;
    case 13:
      $(this).append("\n");
      break;
    case 189:
      $(this).append("-");
      break;
    default:
      $(this).append(String.fromCharCode(e.which));
    } 
  });
  $('body').keydown(function(e){
    if (e.which === 8){
      e.preventDefault();
      var str = $(this).text().slice(0, -1)
      $(this).text(str);
      console.log("deleted");
    }
    if (e.which === 9){
      e.preventDefault();
      var page = $(this).text()
      $(this).html(page);
      console.log("replaced");
    }
  });
});
