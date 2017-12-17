$(function() {

  $('.board-category-filter').on('click', function(e){
    $(this).toggleClass('clicked');
    $('.'+$(this).data('toggle')).toggle();
  });
});
