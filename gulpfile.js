var gulp 				= require('gulp'),
		watch 			= require('gulp-watch'),
		prefixer 		= require('gulp-autoprefixer'),
		uglify 			= require('gulp-uglify'),
		sass 			= require('gulp-sass'),
		uncss			= require('gulp-uncss'),
		sourcemaps 	    = require('gulp-sourcemaps'),
		rigger 			= require('gulp-rigger'),
		cleanCSS 		= require('gulp-clean-css'),
		imagemin 		= require('gulp-imagemin'),
		pngquant 		= require('weflow-imagemin'),
		browserSync     = require("browser-sync"),
		reload 			= browserSync.reload;

var path = {
	build: {
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/',
		img: 'build/img/',
		fonts: 'build/fonts/'
	},
	src: {
		html: 'src/*.html',
		js: 'src/js/main.js',
		style: 'src/style/main.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	watch: { 
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/style/**/*.scss',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: './build'
};

var config = {
	server: {
		baseDir: "./build"
	},
	tunnel: false,
	host: 'localhost',
	port: 8000,
	logPrefix: ""
};

gulp.task('html:build', function () {
	return gulp.src(path.src.html) 
		.pipe(rigger()) 
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
	return gulp.src(path.src.js)
		.pipe(rigger())
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream: true})); 
});

gulp.task('style:build', function () {
	return gulp.src(path.src.style)		
		.pipe(sass())
		.pipe(prefixer({
			browsers: ["last 3 versions"]
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
		
});

gulp.task('image:build', function () {
	return gulp.src(path.src.img) 
		.pipe(imagemin({ 
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.img))
		.pipe(reload({stream: true}));
		
});

gulp.task('fonts:build', function() {
	return gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts))
	
});

gulp.task('uncss', function() {
  return gulp.src([
	  'build/css/main.css'
	])
	.pipe(uncss({
	  html: [
		'http://localhost:8000',
		'src/*.html',
		'src/**/*.html'
	  ]
	}))
	.pipe(gulp.dest('build/css'));
});

gulp.task('build', gulp.series(
	'html:build',
	'js:build',
	'style:build',
	'fonts:build',
	'image:build',
));

// gulp.task('watch', function(done){
// 	 gulp.watch([path.watch.html], function(event, cb) {
// 		 gulp.start('html:build', console.log('start buld'));
// 	});
// 	gulp.watch([path.watch.style], function(event, cb) {
// 		 gulp.start('style:build', console.log('start style'));
// 	});
// 	 gulp.watch([path.watch.js], function(event, cb) {
// 		 gulp.start('js:build', console.log('start js'));
// 	});
// 	 gulp.watch([path.watch.img], function(event, cb) {
// 		 gulp.start('image:build');
// 	});
// 	 gulp.watch([path.watch.fonts], function(event, cb) {
// 		 gulp.start('fonts:build');
// 	});
// 	done();
// });
gulp.task('watch', function(done){
	gulp.watch([path.watch.html], gulp.series('html:build'));

	gulp.watch([path.watch.style], gulp.series('style:build'));

	gulp.watch([path.watch.js], gulp.series('js:build'));

	gulp.watch([path.watch.img], gulp.series('image:build'));

	 gulp.watch([path.watch.fonts], gulp.series('fonts:build'));
	done();
});

gulp.task('webserver', function (done) {
	browserSync(config);
	done(); 
});

gulp.task('default', gulp.series('build', 'webserver', 'watch', 'uncss'));