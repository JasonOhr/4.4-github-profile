(function(){
  'use strict';
  $('body').prepend(JST['application']());

  $(document).ready(function(){
    //$('body').prepend(JST['application']());

    $.ajax({
      url: "https://api.github.com/user",
      headers: {
        "Authorization": "token " + GITHUB_TOKEN
      }
    }).then(function(whatever){
      console.log(whatever);
      return whatever;
    }).then(app)
    .then( function(){
          return $.ajax({
            url:"https://api.github.com/users/JasonOhr/orgs"

          })
        }

    ).then(renderOrganizations);
  });
  $.ajax({
    url:'https://api.github.com/users/JasonOhr/repos'

  }).then(renderRepos);

  function app(gitStuff){
    renderSidebar (gitStuff);

  }
  function renderOrganizations(gitOrgs){
    console.log(gitOrgs);
    $('.organizations').append(JST['organization'](gitOrgs));
  }
  function renderRepos(repos){
    $(".repo-url").append(JST['repository'](repos));
  }

  function renderSidebar(user){
    $('.sidebar').append(JST['user'](user));
  }

  Handlebars.registerHelper('date', function(date){
    var d = Date.parse(date);
    d = new Date(d);

    return (d.toDateString());

  })
})();

