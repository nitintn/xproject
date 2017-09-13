sap.ui.jsview("xproject.view.Project", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.Project
	 */
	getControllerName: function() {
		return "xproject.controller.Project";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.Project
	 */
	createContent: function(oController) {
		
	    var oTable = new sap.m.Table("projects", {
	        inset: true,
	        headerText: "Projects",
	        columns: [
	            new sap.m.Column({
	                header: new sap.m.Label({ text: "Start Date" })
	            }),
	            new sap.m.Column({ 
	            	header: new sap.m.Label({ text: "End Date" }) 
	            }),
	            new sap.m.Column({
	                header: new sap.m.Label({ text: "Title" })
	            }),
	            new sap.m.Column({
	            	header: new sap.m.Label({ text: "Lead" })
	            })
	        ],
			items: {
    			path: "/",
    			template: new sap.m.ColumnListItem({
        		cells: [
        			new sap.m.Text({
            			text: "{startDate}"
        			}),
        			new sap.m.Text({
            			text: "{endDate}"
            		}),
            		new sap.m.Text({
                		text: "{title}"
            		}),
            		new sap.m.Text({
                		text: "{projectLead}"
            		})
            	]})
			}	        
	    });
	    
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			content: [oTable]
		});

		var app = new sap.m.App("myApp", {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});