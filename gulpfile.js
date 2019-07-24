const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const babel = require('gulp-babel');
const minify = require("gulp-babel-minify");

gulp.task('pug', () => {
    gulp.src('./src/layaut/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./public'))
});

gulp.task('guiaStyle', () => {
    gulp.src('./src/layaut/indexGuiaStyle.pug')
    .pipe(pug())
    .pipe(gulp.dest('./src/guiaStyile'))
});

gulp.task('sass', () => {
    return gulp.src([
    'src/scss/main.scss'
    ])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./public/'))
    .pipe(browserSync.stream());

});

gulp.task('babel', ()=>{
    gulp.src('./src/js/main.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(minify({
        mangle: {
            keepClassName: true
        }
    }))
    .pipe(gulp.dest('./public'))
})

gulp.task('serve', ['sass'], () =>{
    browserSync.init({
        server: './public'
    });

    gulp.watch([
        './src/scss/*.scss',
        './src/layaut/*.pug',
        './src/js/*.js',
        './src/layaut/indexGuiaStyle.pug'
    ], ['sass', 'pug', 'babel', 'guiaStyle']);


    gulp.watch(['src/*']).on('change', browserSync.reload);
});


gulp.task('default', [ 'sass', 'pug', 'serve', 'babel', 'guiaStyle']);