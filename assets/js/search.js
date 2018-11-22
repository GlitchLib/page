const docs_url = "https://glitchlib.github.io/docs/latest/all"

let memberSearchIndex = [];
let packageSearchIndex = [];
let typeSearchIndex = [];
let wikiIndex = [];

$.getScript(docs_url + "/member-search-index.js",
  function (data) {
    memberSearchIndex = data.memberSearchIndex.map(function(v) {
      return {
        package: v.p,
        class: v.c,
        member: v.l,
        url: docs_url + `/${v.p.replace(".", "/")}/${v.c}.html#${(v.url) ? v.url : v.l}`,
      }
    })
  }
);

$.getScript(docs_url + "/package-search-index.js",
  function (data) {
    packageSearchIndex = data.packageSearchIndex.map(function(v) {
      return {
        package: v.l,
        url: docs_url + `/${v.l.replace(".", "/")}/package-summary.html`,
      }
    })
  }
);

$.getScript(docs_url + "/type-search-index.js",
  function (data) {
    typeSearchIndex = data.typeSearchIndex.map(function(v) {
      return {
        package: v.p,
        class: v.l,
        url: docs_url + `/${v.p.replace(".", "/")}/${v.l}.html`,
      }
    })
  }
);

$.getJSON("/api/wiki.json", function (data) {
  wikiIndex = data;
});

function searchMember(query, response) {
  response(memberSearchIndex.filter(function(value) {
    return value.package.toLowerCase().includes(query.toLowerCase()) || value.member.toLowerCase().includes(query.toLowerCase()) || value.class.toLowerCase().includes(query.toLowerCase());
  }));
};

function searchPackage(query, response) {
  response(memberSearchIndex.filter(function(value) {
    return value.package.toLowerCase().includes(query.toLowerCase());
  }));
};

function searchType(query, response) {
  response(memberSearchIndex.filter(function(value) {
    return value.package.toLowerCase().includes(query.toLowerCase()) || value.class.toLowerCase().includes(query.toLowerCase());
  }));
};

function searchWiki(query, response) {
  response(wikiIndex.filter(function(value) {
    return value.title.toLowerCase().includes(query.toLowerCase()) || value.content.toLowerCase().includes(query.toLowerCase()) || value.keywords.includes(query) || value.tags.includes(query)
  }));
}

$(document).ready(function () {
  
});