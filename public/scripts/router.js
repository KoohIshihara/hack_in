
riot.enableReloadContent = true;

/*
riot.route('/test/*', function(tagName) {
  riot.mount('modal-content', 'page-test', {content: 'content'});
  riot.update();
})

riot.route('/about', function(tagName) {

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  if(riot.enableReloadContent){
    setTimeout(function() {
      $('content').addClass('not-opacity');
      riot.mount('content', 'page-about', {content: 'content'});
      riot.update();
    }, 400);
  }else{
    riot.enableReloadContent = true;
  }
})
*/

riot.route('/login', function(tagName) {

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  if(riot.enableReloadContent){
    setTimeout(function() {
      $('content').addClass('not-opacity');
      riot.mount('content', 'page-login', {content: 'content'});
      riot.update();
    }, 400);
  }else{
    riot.enableReloadContent = true;
  }
})

riot.route('/global-timeline', function(tagName) {

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  // ヘッターの中身の指定
  riot.mount('header', 'util-header', {status: 'normal'});
  riot.update();

  if(riot.enableReloadContent){
    setTimeout(function() {
      $('content').addClass('not-opacity');
      riot.mount('content', 'page-global-timeline', {content: 'content'});
      riot.update();
    }, 400);
  }else{
    riot.enableReloadContent = true;
  }
})

riot.route('/mypage', function(tagName) {

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  // ヘッターの中身の指定
  riot.mount('header', 'util-header', {status: 'normal'});
  riot.update();

  if(riot.enableReloadContent){
    setTimeout(function() {
      $('content').addClass('not-opacity');
      var uid = session.user.uid;
      riot.mount('content', 'page-account', {uid: uid});
      riot.update();
    }, 400);
  }else{
    riot.enableReloadContent = true;
  }
})

/*
riot.route('/users/*', function(tagName) {

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    $('content').addClass('not-opacity');
    riot.mount('content', 'page-account', {content: tagName});
    riot.update();
  }, 400);
})
*/

// modal
riot.route('/users/*', function(tagName) {
  riot.mount('header', 'util-header', {status: 'back_with_edit'});
  riot.mount('modal-content', 'page-account', {uid: tagName});
  riot.update();
})

riot.route('/create-post', function(tagName) {
  riot.mount('header', 'util-header', {status: 'create_post'});
  riot.mount('modal-content', 'page-create-post', {content: 'content'});
  riot.update();
})




riot.route(function(tagName) {
  
  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    $('content').addClass('not-opacity');
    riot.mount('content', 'page-top', {content: 'content'});
    riot.update();
  }, 400);
});

riot.route.start(true);
console.log('route start');

var tags = riot.mount('app');
