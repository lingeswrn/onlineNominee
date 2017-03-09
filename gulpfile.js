var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var fontmin = require('gulp-fontmin');
var imagemin = require('gulp-imagemin');
/*var nodemon = require('gulp-nodemon'); */

var paths = {
	scripts:[
				'public/assets/javascripts/angular.js',
				'public/assets/javascripts/angular-route.js',
				'public/assets/javascripts/jquery.js',
				'public/assets/javascripts/bootstrap.js',
				'public/assets/javascripts/fileUpload.js',
				'public/controllers/app.js',
				'public/controllers/homeController.js',
				'public/controllers/educationController.js',
				'public/controllers/loginController.js',
				'public/controllers/registrationController.js',
				'public/controllers/profileController.js'
			],
	styles:['public/assets/stylesheets/bootstrap.css',
			'public/assets/stylesheets/style.css',
			'public/assets/stylesheets/font-awesome.css'
			],
	fonts: ['public/assets/fonts/*.ttf',
			'public/assets/fonts/*.woff',
			'public/assets/fonts/*.woff2'
			],
	images:['public/assets/images/banner.jpg',
			'public/assets/images/dp.png',
			'public/assets/images/Logo.png',
			'public/assets/images/or.png'
			]
};

gulp.task('scripts',function(){
	gulp.src(paths.scripts)
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/dist/js'))
});
 
gulp.task('css',function(){
	return gulp.src(paths.styles)
		.pipe(concatCss("all.min.css"))
		.pipe(minifyCSS({
			keepBreaks: true
		}))
		.pipe(gulp.dest('public/dist/css/'))
});

gulp.task('fonts', function () {
    return gulp.src(paths.fonts)
        .pipe(fontmin())
        .pipe(gulp.dest('public/dist/fonts'));
});

gulp.task('image', function () {
    gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest('public/dist/images'))
});

/*gulp.task('imageSlider', function () {
    gulp.src(paths.iPhoneSlider)
        .pipe(imagemin())
        .pipe(gulp.dest('dist/image/mobile/'))
}); */



gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['css']);
  gulp.watch(paths.fonts, ['fonts']);
  gulp.watch(paths.image, ['image']);
  /* gulp.watch(paths.iPhoneSlider, ['imageSlider']);
  gulp.watch(["server.js"], ['server']); */
});

gulp.task('default', ['watch', 'scripts', 'css', 'image', 'fonts']);