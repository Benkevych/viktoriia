$('.carousel').on('slid.bs.carousel', function () {
  if ($('#item2-1').hasClass('active')) {

    $('#left1').removeClass('hide');
  } else {
    $('#left1').addClass('hide');
  }
  if ($('#item1-1').hasClass('active')) {

    $('#right1').removeClass('hide');
  } else {
    $('#right1').addClass('hide');
  }

  if ($('#item2-2').hasClass('active')) {

    $('#left2').removeClass('hide');
  } else {
    $('#left2').addClass('hide');
  }
  if ($('#item1-2').hasClass('active')) {

    $('#right2').removeClass('hide');
  } else {
    $('#right2').addClass('hide');
  }
});
