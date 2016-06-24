'use strict';

// assertation libs
const lab = exports.lab = require('lab').script();
const code = require('code');

// controller
const glossaryCtrl = require('../../../../../src/components/glossary/views/glossary/glossary.controller');

lab.experiment('glossary controller', ()=> {
  let scope;
  let glossaryCollection;

  lab.beforeEach((done)=>{
    scope = {};
    glossaryCollection = [{
      title: 'Title 1',
      content: '<p>Content 1 <a href="/read-more">Read More</a></p>'
    }, {
      title: 'Title 2',
      content: '<p>Content 2 <a href="/read-more">Read More</a></p>'
    }];

    glossaryCtrl(scope, glossaryCollection);

    done();
  });

  lab.test('$scope.glossaryCollection populates from resolved glossaryCollection', (done) => {
    code.expect(scope.glossaryCollection).to.be.an.array();
    code.expect(scope.glossaryCollection).to.have.length(2);
    done();
  });

  lab.test('$scope.transformLinks should create absolute URLs and set target _blank', (done) => {
    let transformed = scope.transformLinks(glossaryCollection[0].content);

    code.expect(transformed.indexOf('https://healthcare.gov')).to.not.equal(-1);
    code.expect(transformed.indexOf('target="_blank"')).to.not.equal(-1);
    code.expect(transformed).to.equal('<p>Content 1 <a target="_blank" href="https://healthcare.gov/read-more">Read More</a></p>')
    done();
  });

  lab.test('$scope.setTerm sets activeSearchTerm to passed value', (done) => {
    code.expect(scope.activeSearchTerm).to.equal('');
    scope.setTerm('test');
    code.expect(scope.activeSearchTerm).to.equal('test');
    done();
  });
});
