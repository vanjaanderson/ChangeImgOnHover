/*
**********************************************************************************
  changeImgOnHover.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  Author: Vanja Maria Anderson
  Description: A small jQuery-plugin that changes images on hover.
  Date: 2014-06-19
  Version: 1.0
  Website: http://vanjaanderson.com
  Development: https://github.com/vanjaanderson/
********************************************************************************** 
*/
$(document).ready(function() {
  (function($) {
    $.fn.changeImgOnHover = function() {
      $('.hover').each(function() {
        // Get filename in src attribute, minus extension
        var imgName = $(this).attr('src').slice(0,-4);
        // Get files extension
        var extName = $(this).attr('src').split('.').pop();
        // Name of hover-img
        var hoverImg = imgName + '_hover.' + extName;
        // Name of default image
        var origImg = imgName + '.' + extName;

        $(this).mouseover(function() {
          $(this).attr('src', hoverImg);
        });
        $(this).mouseout(function() {
          $(this).attr('src', origImg);
        });
      });
      console.log('Plugin works fine!');
    };
  }) (jQuery);

  // Trigger function on images with class 'hover'.
  $('.hover').changeImgOnHover();
});