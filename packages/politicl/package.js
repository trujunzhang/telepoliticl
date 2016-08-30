Package.describe({
  name: "politicl",
  summary: "All resources for this host",
  version: '0.26.5-nova',
  git: "https://github.com/TelescopeJS/telescope-getting-started.git"
});

Npm.depends({
  // NPM package dependencies
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
  ]);

  // both
  // client

  api.addAssets([
    'images/logo.png'
  ], ['client']);

  // server

});
