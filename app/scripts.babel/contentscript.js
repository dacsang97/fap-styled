'use strict';

if ($('#ctl00_divUser').text()) {
  // Add Container
  // $('#ctl00_mainContent_divMain').addClass('container');

  // Remove box, add col-md-4
  $('.topAthletes').removeClass('topAthletes').addClass('col-md-5');

  // Remove wrapper box news
  $('.listBoxWrapper').removeClass('listBoxWrapper').addClass('panel-body');

  // Remove class of input
  $('input').removeAttr('class');
  $('input').removeAttr('style');
  
  //----- Style for search bar -----//
  $('input[type=text]').addClass('form-control');
  $('input[type=text]').wrap('<div class="col-md-8 xi"></div>')
  $('input[type=submit]').addClass('form-control btn btn-info btn-round');
  $('input[type=submit]').wrap('<div class="col-md-4 xi"></div>')

  // Wrap input in form-group
  $('.xi').wrapAll('<div class="form-group row"></div>');
  //----- Style for search bar -----//


  // Remove bootstrap theme
  $('LINK[href*="Content/bootstrap-theme.min.css"]').remove();
  $('LINK[href*="Content/bootstrap.min.css"]').remove();
  $('LINK[href*="Content/bootstrap.css"]').remove();
  $('LINK[href*="fu.css"]').remove();
  // Unwrap table 
  $('table, tbody, tr, td').contents().unwrap();

  // Wrap to panel
  $('.box.col-md-5').contents().wrapAll('<div class="panel panel-primary"></div>')
  $('.blueTitle').contents().unwrap().wrap('<div class="panel-heading"></div>');


  // Right panel
  $('.box').not('.col-md-5').addClass('col-md-7');
  $('.box.col-md-7').removeAttr('style');
  $('.box.col-md-7').contents().wrapAll('<div class="panel panel-danger"></div>');
  $('.orangeTitle').contents().unwrap().wrap('<div class="panel-heading"></div>');

  $('.box').wrapAll('<div class="row content"></div>');
  var rowBox = $('.row.content');
  rowBox.children().each(function(i,box){
    console.log(box);
    rowBox.prepend(box)
  })
  $('ul').addClass('list-group');
  $('ul > li').addClass('list-group-item');
  console.log('ekko')
} else {
  
}