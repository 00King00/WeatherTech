var gulp 			= require('gulp'),
	pug 		  	= require('gulp-pug'),
	autoprefixer 	= require('gulp-autoprefixer'),
	scss			= require('gulp-sass'),
	browserSync 	= require("browser-sync"),
	reload 			= browserSync.reload,
	server     		= require('gulp-server-livereload'),
	watch 			= require('gulp-watch'),
	cleancss 		= require('gulp-cleancss'),
	plumber     = require('gulp-plumber');



gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(server({
      directoryListing: false,
      open: true,
      livereload: {
      enable: true,

      }
    }))
    .pipe(plumber())

});

gulp.task('html', function(){
  gulp.src('./dev/*.pug')
  	.pipe(watch('./dev/*.pug'))
  	.pipe(pug({
    	"pretty": true
  }))
  .pipe(gulp.dest('./app/'))
  gulp.src('./dev/js/*.js')
	  .pipe(watch ('./dev/js/*.js'))
    .pipe(plumber())
	  .pipe(gulp.dest('./app/js'))
});

gulp.task('scss', function() {
	gulp.src(['./dev/sass/*.sass', './dev/scss/*.scss' ])
	.pipe(watch(['./dev/sass/*.sass','./dev/scss/*.scss' ]))
  .pipe(plumber())
	.pipe(scss())
	.pipe(autoprefixer({
		browsers: ['last 20 versions']

	}))
	.pipe(gulp.dest('./app/css/'))
});

gulp.task('images', function() {
    gulp.src('./dev/images/**')
    .pipe(watch('./dev/images/**'))
    .pipe(plumber())
    .pipe(gulp.dest('./app/images/'))
    gulp.src('./dev/*.ico')
    .pipe(gulp.dest('./app/'))
});
gulp.task('libs', function() {
    gulp.src('./dev/libs/**')
    .pipe(gulp.dest('./app/libs/'))
});
gulp.task('fonts', function() {
    gulp.src('./dev/fonts/**')
    .pipe(watch('./dev/fonts/**'))
    .pipe(plumber())
    .pipe(gulp.dest('./app/fonts/'))
});

gulp.task('default', ['html', 'scss', 'libs', 'images','webserver','fonts']);
