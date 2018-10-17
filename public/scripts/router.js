
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

  // モーダルから戻ってきた時にアップデートが必要なタグをアップデート
  if(riot.needUpdateTag){
    var root = riot.needUpdateTag.root;
    var parentDiv = root.parentElement;

    if(parentDiv){ // アカウント　＞　投稿詳細　＞　戻る　＞　戻る　でundefinedになる
      var newElementName = 'for-update-' + Math.floor(Math.random()*100000);
      var newElement = document.createElement(newElementName);
      
      parentDiv.appendChild(newElement);

      riot.needUpdateTag.unmount();
      riot.mount(newElement, 'module-post-card', {content: riot.needUpdateContent});
    }

    riot.needUpdateTag = undefined;
    riot.needUpdateContent = undefined;
  }

  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  // ヘッターの中身の指定
  riot.mount('header', 'util-header', {status: 'normal'});
  riot.update();

  if(riot.enableReloadContent){
    setTimeout(function() {
      if(session.user){
        console.log('reload global-timeline');
        $('content').addClass('not-opacity');
        riot.mount('content', 'page-global-timeline', {content: 'content'});
        riot.update();
      }
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
      if(session.user){
        $('content').addClass('not-opacity');
        var uid = session.user.uid;
        riot.mount('content', 'page-account', {uid: uid});
        riot.update();
      }
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

riot.route('/posts/*', function(tagName) {
  riot.mount('header', 'util-header', {status: 'post_detail'});
  riot.mount('modal-content', 'page-post', {postid: tagName});
  riot.update();
})

riot.route('/create-post', function(tagName) {
  riot.mount('header', 'util-header', {status: 'create_post'});
  riot.mount('modal-content', 'page-create-post', {
    placeholder: "What's happening?"
  });
  riot.update();
})

riot.route('/create-comment/*', function(postId) {
  riot.mount('header', 'util-header', {
    status: 'create_comment',
    postId: postId
  });
  riot.mount('modal-content', 'page-create-post', {
    placeholder: "Your reply...",
  });
  riot.update();
})

riot.route('/follow/*', function(tagName) {
  riot.mount('header', 'util-header', {status: 'back_with_edit'});
  riot.mount('modal-content', 'page-follow', {uid: tagName});
  riot.update();
})

riot.route('/follower/*', function(tagName) {
  riot.mount('header', 'util-header', {status: 'back_with_edit'});
  riot.mount('modal-content', 'page-follower', {uid: tagName});
  riot.update();
})


riot.route(function(tagName) {
  location.href = './#login';
  /*
  if(riot.enableFadeIn) $('content').removeClass('not-opacity');

  riot.enableFadeIn = true;

  $(document).trigger("custom:close");

  setTimeout(function() {
    $('content').addClass('not-opacity');
    riot.mount('content', 'page-top', {content: 'content'});
    riot.update();
  }, 400);
  */

});

riot.route.start(true);
console.log('route start');

var tags = riot.mount('app');
