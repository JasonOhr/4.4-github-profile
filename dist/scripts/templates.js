this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"container\">\n    <div class=\"sidebar\">\n\n    </div>\n\n    <section class=\"repositories\">\n        <section class=\"search-area\">\n\n        </section>\n        <ul class=\"repo-url\">\n\n        </ul>\n\n    </section>\n</section>\n";
},"useData":true});
this["JST"]["organization"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "    <span><img src=\""
    + this.escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"/></span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["repository"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <li>\n        <div class=\"each-repo\">\n            <h3><a href=\""
    + alias3(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"html_url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h3>\n\n            <div class=\"repo-description\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n            <div class=\"updated-repo\">Updated "
    + alias3((helpers.update || (depth0 && depth0.update) || alias1).call(depth0,(depth0 != null ? depth0.updated_at : depth0),{"name":"update","hash":{},"data":data}))
    + "</div>\n                <span></span>\n                <span></span>\n\n        <span class=\"repo-activity\">\n            <span class=\"language\">"
    + alias3(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"language","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"stargazer-count\"><a class=\"octicon octicon-star\" href=\"stargazers_url\">"
    + alias3(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</a></span>\n            <span class=\"forks-count\"><a class=\"octicon octicon-git-branch\" href=\""
    + alias3(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"html_url","hash":{},"data":data}) : helper)))
    + "/network\">"
    + alias3(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</a></span>\n        </span>\n        </div>\n    </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["search_bar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<input type=\"search\" placeholder=\"Find a repository...\" class=\"search\">\n<button class=\"search-button\">Search</button>\n<ul class=\"search-list\">\n<li class=\"nav active\">All</li>\n<li class=\"nav\">Public</li>\n<li class=\"nav\">Private</li>\n<li class=\"nav\">Sources</li>\n<li class=\"nav\">Forks</li>\n<li class=\"nav\">Mirrors</li>\n<li><button class=\"new-repo\"><span class=\"octicon octicon-repo\"></span>New</button></li>\n</ul>\n";
},"useData":true});
this["JST"]["starred"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"http://github.com/stars\">"
    + this.escapeExpression(((helper = (helper = helpers.num_starred || (depth0 != null ? depth0.num_starred : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"num_starred","hash":{},"data":data}) : helper)))
    + "</a>";
},"useData":true});
this["JST"]["user"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n    <section class=\"user-basic\">\n        <img src=\""
    + alias3(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\"pic\"/>\n        <h1>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n        <h3>"
    + alias3(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"login","hash":{},"data":data}) : helper)))
    + "</h3>\n    </section>\n    <section class=\"user-info\">\n        <ul>\n            <li><span class=\"octicon octicon-organization\"></span><span class=\"user-meta\">"
    + alias3(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"company","hash":{},"data":data}) : helper)))
    + "</span></li>\n            <li><span class=\"octicon octicon-location\"></span><span class=\"user-meta\">"
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</span></li>\n            <li><a href=\""
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\"><span class=\"octicon octicon-mail\"></span><span class=\"user-meta\">"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</span></a></li>\n            <li><a href=\""
    + alias3(((helper = (helper = helpers.blog || (depth0 != null ? depth0.blog : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"blog","hash":{},"data":data}) : helper)))
    + "\"><span class=\"octicon octicon-link\"></span><span class=\"user-meta\">"
    + alias3(((helper = (helper = helpers.blog || (depth0 != null ? depth0.blog : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"blog","hash":{},"data":data}) : helper)))
    + "</span></a></li>\n            <li><span class=\"octicon octicon-clock\"></span><span class=\"user-meta\">Joined on "
    + alias3((helpers.join_date || (depth0 && depth0.join_date) || alias1).call(depth0,(depth0 != null ? depth0.created_at : depth0),{"name":"join_date","hash":{},"data":data}))
    + "</span></li>\n        </ul>\n    </section>\n    <section class=\"github-stats\">\n        <div class=\"stat-numbers\"><a href=\""
    + alias3(((helper = (helper = helpers.followers_url || (depth0 != null ? depth0.followers_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followers_url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followers","hash":{},"data":data}) : helper)))
    + "</a><span class=\"stat-number-label\">Followers</span></div>\n        <div class=\"stat-numbers starred\"><span class=\"mid stat-number-label\">Starred</span></div>\n        <div class=\"stat-numbers\"><a href=\""
    + alias3(((helper = (helper = helpers.following_url || (depth0 != null ? depth0.following_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"following_url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.following || (depth0 != null ? depth0.following : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"following","hash":{},"data":data}) : helper)))
    + "</a><span class=\"stat-number-label\">Following</span></div>\n    </section>\n    <section class=\"git-organs\">\n        <h4>Organizations</h4>\n        <div class=\"organizations\">\n\n        </div>\n    </section>";
},"useData":true});