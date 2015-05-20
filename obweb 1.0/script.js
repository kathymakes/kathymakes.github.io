
(function () {
  $('section').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        setCurrentSection(this.element.id);
      } else {
        setCurrentSection($(this.element).prev()[0].id);
      }
    }
  });

  var currentSection;

  function setCurrentSection(section) {
    if (currentSection != undefined) {
      currentSection.removeClass('currentSection');
    }

    currentSection = $('a[href=#' + section + ']');
    currentSection.addClass('currentSection');
  }

  $('.headingsBlock a').click(function () {
    setTimeout(function () {
      window.scrollBy(0,1);
    }, 1);
  });
})();