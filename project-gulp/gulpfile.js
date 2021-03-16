const gulp = require('gulp');
const sass = require('gulp-sass');

// Tarefas
function complilaStyles() {
  return gulp
    .src('styles/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('styles/'))
}


//Ativa a task
gulp.task('sass', complilaStyles)