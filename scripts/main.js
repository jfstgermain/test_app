require.config({    
	paths: {
	    sammy: "/scripts/libs/sammy-latest.min"
	}/*,
	shim: {
		"sammy": {
            deps: ["jquery"],
            exports: "Sammy"    
		},
        "jquery":{
            exports: "$"    
    	},
        "routes":["sammy"]
	}*/
});

require(["sammy"], function(Sammy) {	
	//the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        console.log(Sammy);
        var app = Sammy(function() {

            this.get('#/', function() {
              alert("sdsdsD");
            });
        });
        
        app.run();
    });
});
