const gulp = require('gulp');
const sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');

// Tarefas
function complilaStyles() {
  return gulp
    .src('styles/scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    // .pipe(autoprefixer({
    //   browsers: ['last 2 versions'],
    //   cascade: false
    // }))
    .pipe(gulp.dest('styles/'))
}


//Ativa a task
gulp.task('sass', complilaStyles)


//Gulp Watch task
function watch() {
  gulp.watch('styles/scss/*.scss', complilaStyles)
}

//Add a uma tarefa para execultar
gulp.task('default', watch)