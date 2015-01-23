'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
			$("#testjs").text("Please wait...");
			$(".jumbotron p").toggleClass("active");
		});


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
	$("description").click(projectClick);

}
function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}
function changeTitle(e) {
	var project = $(this).find("p").text();
	var projectID = $('#project-description').val();
	$(projectID + ".project-description").toggle();
}
function projectClick(e) {
	e.preventDefault();

	//To be used with stretch goal TOGGLE
	var fileToToggle = $(this).find("p").text();
	console.log(fileToToggle);
	if (fileToToggle== "Waiting in Line")
		{
			fileToToggle = "Pizza Time, no more line";
			var header1 = $("#project1");
			header1.text(fileToToggle);
		}
	else if (fileToToggle == "Needfinding")
	{
		fileToToggle = "Found my purpose in Life";
		var header2 = $("#project2");
		header2.text(fileToToggle);
	}
	else if (fileToToggle == "Prototyping")
	{
		fileToToggle = "Monotyped";
		var header3 = $("#project3");
		header3.text(fileToToggle);
	}
	else if (fileToToggle == "Heuristic Evaluation")
	{
		fileToToggle = "I don't know what this means";
		var header4 = $("#project4");
		header4.text(fileToToggle);
	}
	else if (fileToToggle == "Visualization")
	{
		var header5 = $("#project5");
		header5.text("I can see clearly now");
	}
	else if (fileToToggle == "Social design")
	{
		var header6 = $("#project6");
		header6.text("Antisocial mesign");
	}
	else if (fileToToggle == "Gestural interaction")
	{
		var header7 = $("#project7");
		header7.text("Dang is this google glass");
	}
	else if (fileToToggle == "Design tools")
	{
		var header8 = $("#project8");
		header8.text("Hammers and things");
	}


	//In an event listener
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);
	var containingProject = $(this).closest("project");
	//console.log(containingProject);
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) { 
		containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}
}