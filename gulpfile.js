//Component generator, inspired by: https://github.com/angular-class/NG6-starter

var gulp	 		= require('gulp'),
		path			= require('path'),
		rename		= require('gulp-rename'),
		template	= require('gulp-template'),
		yargs			= require('yargs').argv;


// helper method to resolveToApp paths
var resolveToApp = function (glob) {
  glob = glob || '';
  return path.join(root, glob); // app/{glob}
};

var resolveToComponents = function (glob) {
  glob = glob || '';
  return path.join(root, 'components', glob); // app/components/{glob}
};

var root = 'lib';

// map of all our paths
var paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // don't include spec files
  styl: resolveToApp('**/*.styl'), // our stylus files
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],

  entry: path.join(root, 'app/app.js'),
  output: root,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};


gulp.task('component', function () {
  var cap = function (val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  var namespace = yargs.namespace || 'main'
  var name = yargs.name;
  var parentPath = yargs.parent || '';
  var destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name),
      lowerCaseName: name.toLowerCase(),
      namespace: namespace
    }))
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

