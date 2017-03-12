$(function() {
  
  var $imdSelect = $('.imd-select');
  var $imdSelector = $imdSelect.find('.imd-selector');
  var $imdSelectList = $imdSelect.find('.imd-select-list');
  var $imdSelectListItem = $imdSelectList.children('li');
  
  
  // Hover
  $imdSelector.hover(function(){
    $(this).addClass('imd-focus');
  }, function() {
    $(this).removeClass('imd-focus');
  });
  
  // click to open menu list
  $(document).click(function(e){
    if(!$imdSelector.is(e.target) && $imdSelector.has(e.target).length === 0) {
      $imdSelectList.hide();
    } else {
      $imdSelectList.slideToggle('fast');
    }
  });
  
  // get menu list to selector
  $imdSelectListItem.each(function(){
    $(this).click(function(){
      // console.log($(this).text());
      $imdSelectListItem.removeClass('selected');
      $(this).addClass('selected');
      $imdSelector.text($(this).text())
    });
  });
  
});