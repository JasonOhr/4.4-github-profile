(function(){
  'use strict';
  $('body').prepend(JST['application']());

  $(document).ready(function(){
    //$('body').prepend(JST['application']());

    $.ajax({
      url: "https://api.github.com/users/JasonOhr"
      //url: "https://api.github.com/user",
      //headers: {
      //  "Authorization": "token " + GITHUB_TOKEN
      //}
    }).then(function(whatever){
      console.log(whatever);
      return whatever;
    }).then(app)
    .then(function(){
          return $.ajax({
            url: "https://api.github.com/users/JasonOhr/starred"
          })
        })
    .then(renderStarred)
    .then( function(){
          return $.ajax({
            url:"https://api.github.com/users/JasonOhr/orgs"

          })
        }

    ).then(renderOrganizations);
  });
  $.ajax({
    url:'https://api.github.com/users/JasonOhr/repos?sort=created'

  }).then(renderRepos);

  function app(gitStuff){
    renderSidebar (gitStuff);

  }
  function renderStarred(totalStarred){
    $('.starred').prepend(JST['starred']({
      num_starred:totalStarred.length
    }));
  }
  function renderOrganizations(gitOrgs){
    //console.log(gitOrgs);
    $('.organizations').append(JST['organization'](gitOrgs));
  }
  function renderRepos(repos){
    $(".repo-url").append(JST['repository'](repos));
    renderSearchArea();
  }

  function renderSidebar(user){
    $('.sidebar').append(JST['user'](user));
  }
  function renderSearchArea(){
    $('.search-area').append(JST['search_bar']());
  }


  Handlebars.registerHelper('date', function(date){
    var d = Date.parse(date);
    d = new Date(d);

    return (d.toDateString());

  });
  Handlebars.registerHelper('join_date', function(date){
    return moment(date).format('LL');

  });
  Handlebars.registerHelper('update', function(date){
    //console.log(moment(date).fromNow());
    if(moment(date).fromNow() === "a month ago"){
      return moment(date).format('MMMM D')
    }else return moment(date).fromNow();



  });
})();

