function getIt(){
  $('p').on('click',function(){
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load',function(){
    $('img').addClass("tasty");
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
  })
}

function pressIt() {
  $(document).on('keydown',function(e){
    if (e.which === 71) {
      alert("G was pressed")
    }
  })
}

$(document).ready(function(){


frameIt();
getIt();
submitIt();
pressIt();

});
