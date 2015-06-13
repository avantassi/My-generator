'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

    prompting: function () {  

      /* Место для общения */  

      this.log("Тебе не нужны никакие файлы...");

    },

    writing: {  

      /* Место для работы с файлами */ 

      app: function(){

        this.directory('css', 'css'); 
        this.directory('jade', 'jade'); 
        this.directory('img', 'img'); 
        this.directory('js', 'js'); 
        this.directory('sass', 'sass'); 

        this.copy('.gitignore','.gitignore');
        this.copy('readme.md','readme.md');
        this.copy('index.jade','index.jade');
        this.copy('bower.json','bower.json');
        this.copy('package.json','package.json');
      },

    },

    install: function () {  

      /* Место для установки пакетов */  

      this.npmInstall(
        ['gulp', 'gulp-jade', 'gulp-sass', 'gulp-watch', 'browser-sync'],
        {'saveDev': true}
        );

    },

    end: function () {  

      /* Место для завершения */  

      this.installDependencies(); 

    },

})
