$('#menuBtn').click(function() {
  $('#mainNav').toggleClass('active');
})

//slider jquery
// $('#prevBtn').click(function() {})
// $('#nextBtn').click(function() {})

var updateSliderInterval;
var startInterval = false;

function updateSlider(id) {
  startInterval = false;
  if(id == 'nextBtn') {
    // logic for next button
    if($('.slider .images li:last-child').hasClass('active')) {
      $('.slider .images li.active').removeClass('active');
      $('.slider .indicators li.active').removeClass('active');
      $('.slider .images li:first-child').addClass('active');
      $('.slider .indicators li:first-child').addClass('active');
    } else {
      $('.slider .images li.active + li').addClass('temp-active');
      $('.slider .indicators li.active + li').addClass('temp-active');
      $('.slider .images li.active').removeClass('active');
      $('.slider .indicators li.active').removeClass('active');

      $('.slider .images li.temp-active').addClass('active');
      $('.slider .indicators li.temp-active').addClass('active');
      $('.slider .images li.temp-active').removeClass('temp-active');
      $('.slider .indicators li.temp-active').removeClass('temp-active');
    }
  } else {
    // logic for prev button
    if($('.slider .images li:first-child').hasClass('active')) {
      $('.slider .images li.active').removeClass('active');
      $('.slider .images li:last-child').addClass('active');
      $('.slider .indicators li.active').removeClass('active');
      $('.slider .indicators li:last-child').addClass('active');
    } else {
      $('.slider .images li.active').prev().addClass('temp-active');
      $('.slider .images li.active').removeClass('active');
      $('.slider .indicators li.active').prev().addClass('temp-active');
      $('.slider .indicators li.active').removeClass('active');

      $('.slider .images li.temp-active').addClass('active');
      $('.slider .images li.temp-active').removeClass('temp-active');
      $('.slider .indicators li.temp-active').addClass('active');
      $('.slider .indicators li.temp-active').removeClass('temp-active');
    }
  }
}

$('#prevBtn, #nextBtn').click(function() {
  updateSlider(this.id);
})

function interval() {
  updateSliderInterval = setInterval(function() {
    updateSlider('nextBtn');
  }, 10000);
}
interval();

$('.slider').mouseenter(function() {
  console.log('stop');
  clearInterval(updateSliderInterval);
})

$('.slider').mouseout(function(e) {
  console.log('start');
  if(startInterval) {
    interval();
  }
  startInterval = true;
})

$('.slider').mousemove(function(e) {
  console.log();
  if(e.target.classList.contains('btn')) {
    startInterval = false;
  }
})

$('.btn').mouseenter(function() {
  console.log('stop');
  clearInterval(updateSliderInterval);
})

$('.btn').mouseout(function(e) {
  console.log('start');
  if(startInterval) {
    interval();
  }
  startInterval = true;
})

// $('.btn').mousemove(function(e) {
//   console.log();
//   if(e.target.classList.contains('btn')) {
//     startInterval = false;
//   }
// })

/****************************************/
/*********** RESEARCH SLIDER*************/
/****************************************/

function updateResearchSlider(id) {

  if(id == 'nextResBtn') {
    // logic for next button
    if($('.research .research_box:last-child').hasClass('active')) {
      $('.research .research_box.active').removeClass('active');
      $('.research .research_box:first-child').addClass('active');

    } else {
      $('.research .research_box.active + .research_box').addClass('temp-active');
      $('.research .research_box.active').removeClass('active');
      $('.research .research_box.temp-active').addClass('active');
      $('.research .research_box.temp-active').removeClass('temp-active');

    }
  } else {
    // logic for prev button
    if($('.research .research_box:first-child').hasClass('active')) {
      $('.research .research_box.active').removeClass('active');
      $('.research .research_box:last-child').addClass('active');
    } else {
      $('.research .research_box.active').prev().addClass('temp-active');
      $('.research .research_box.active').removeClass('active');
      $('.research .research_box.temp-active').addClass('active');
      $('.research .research_box.temp-active').removeClass('temp-active');
    }
  }
}

$('#prevResBtn, #nextResBtn').click(function() {
  updateResearchSlider(this.id);
})
