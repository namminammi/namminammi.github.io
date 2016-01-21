module.exports = function(grunt){

	grunt:initConfig({
		copy:{
			target:{
				files:{
					'prod/':['dev/**']
				}
			}
		},

	});
grunt.loadNpmTasks('grunt-contrib');
grunt.registerTask('default', ['copy']);

};