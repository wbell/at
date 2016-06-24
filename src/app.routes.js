'use strict';

var routes = function routes($stateProvider, $urlRouterProvider) {

  // default view is blog
  $urlRouterProvider.otherwise('/blog');

  $stateProvider

  // blog
  .state({
    name: 'blog',
    url: '/blog',
    templateUrl: './src/components/blog/views/blog/blog.html',
    controller: 'at.blogModule.blogCtrl',
    resolve: {
      blogCollection: [
        'at.apiModule.apiFactory',
        function(api){
          return api.get('blog').then(function(response){
            return response.data.blog;
          });
        }
      ]
    }
  })

  // glossary
  .state({
    name: 'glossary',
    url: '/glossary',
    templateUrl: './src/components/glossary/views/glossary/glossary.html',
    controller: 'at.glossaryModule.glossaryCtrl'
  })

  // contact
  .state({
    name: 'contact',
    url: '/contact',
    templateUrl: './src/components/contact/views/contact/contact.html',
    controller: 'at.contactModule.contactCtrl'
  });

};

module.exports = routes;
