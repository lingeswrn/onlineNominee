var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
/* var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var fontmin = require('gulp-fontmin');
var imagemin = require('gulp-imagemin');
var nodemon = require('gulp-nodemon'); */

var paths = {
	scripts:[
				'public/assets/javascripts/angular.js',
				'public/assets/javascripts/angular-route.js',
				'public/controllers/app.js'
			],
	styles:['css/style.css',
			'css/style-res.css',
			'css/font-awesome.min.css'
			],
	fonts: ['fonts/*.ttf',
			'fonts/*.woff',
			'fonts/*.woff2'
			],
	images:['image/bg-employer.jpg',
			'image/back-to-top.png',
			'image/arrow1.png'
			],
	iPhoneSlider:['image/mobile/new/*.png']
};

gulp.task('scripts',function(){
	gulp.src(paths.scripts)
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/dist/js'))
});
/* 
gulp.task('css',function(){
	return gulp.src(paths.styles)
		.pipe(concatCss("style.css"))
		.pipe(minifyCSS({
			keepBreaks: true
		}))
		.pipe(gulp.dest('dist/css/'))
});

gulp.task('fonts', function () {
    return gulp.src(paths.fonts)
        .pipe(fontmin())
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('image', function () {
    gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image'))
});

gulp.task('imageSlider', function () {
    gulp.src(paths.iPhoneSlider)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image/mobile/'))
}); */



gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  /* gulp.watch(paths.styles, ['css']);
  gulp.watch(paths.fonts, ['fonts']);
  gulp.watch(paths.image, ['image']);
  gulp.watch(paths.iPhoneSlider, ['imageSlider']);
  gulp.watch(["server.js"], ['server']); */
});

gulp.task('default', ['watch', 'scripts']);