$(document).ready(function(){
  $('#signin').submit(function(e){
    e.preventDefault();
    $.post('/user_signup', $(this).serialize(), function(r){
      $(this).hide();
    });
  });
  
  $('#export').submit(function(e){
    e.preventDefault();
    alert('Saved your page!');
    //var data = $('body').html();
    //$.post('/export_page', data, function(r){
    //  alert("Saved your Page");
    //});
  });
});
