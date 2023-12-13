module.exports = function(grunt) {

    // Configuração do Grunt
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // Exemplo de uma tarefa de minificação
      uglify: {
        my_target: {
          files: [{
            expand: true,
            cwd: 'src/scripts',
            src: '**/*.js',
            dest: 'dist/scripts'
          }]
        }
      },

      less: {
        development: {
          options: {
            paths: ['src/less'], // Caminho para os arquivos LESS
          },
          files: {
            'dist/css/style.css': 'src/less/style.less', // Arquivo de saída e arquivo LESS de entrada
          },
        },
      },
    });
  
    // Carrega os plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
  
    // Tarefa padrão
    grunt.registerTask('default', ['uglify', 'less']);
  };
  