noty({text: '<%= flash[:notice] %>',
  animation: {
    open: {height: 'toggle'},
    close: {height: 'toggle'},
    easing: 'swing',
    timeout: 10,
    speed: 500
  }});
setTimeout(function(){
  $.noty.closeAll()
}, 3000);