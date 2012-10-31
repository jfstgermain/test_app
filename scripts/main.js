require.config({    
	paths: {
	    sammy: "libs/sammy-latest.min",
        logger: "libs/logger"
	},
	shim: {
        "logger":["jquery"]
	}
});

require(["sammy", "logger"], function(Sammy) {	
    console.log("js");
	//the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        var app = Sammy(function() {

            this.get('#/', function() {
              alert("sdsdsD");
            });
        });
        
        app.run();
        log('inside coolFunc', this, null);
    });
});
