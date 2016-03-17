
var work = {
	"jobs": [
		{
			"employer" : "Self-employed",
			"title" : "Composer",
			"location" : "Seattle",
			"dates" : "All my life",
			"description" : "ANullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
		},
		{
			"employer" : "Butter Music and Sound.",
			"title" : "Assistant Composer.",
			"location" : "Manhattan.",
			"dates" : "2013-14.",
			"description" : "Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
		},
		{
			"employer" : "Anglian",
			"title" : "Salesman",
			"location" : "Guildford",
			"dates" : "2008-9",
			"description" : "Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
		}
	]

}
var projects = {
    "projects": [
		{
			"title" : "Lenovo Ashton Kutcher.",
			"dates" : "Late 2013.",
			"description" : "Wrote all music and supervised recording session for a tv Ad for Lenovo featuring Ashton Kutcher. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur.",
			"images" : ["./images/a-kut.jpg"]
		},
		{
			"title" : "Raising Sleeping Stones.",
			"dates" : "2012-2014.",
			"description" : "Co-wrote over 2 hrs of orchestral music. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.",
			"images" : [""]
		},
		{
			"title" : "Pronica.",
			"dates" : "2014-15.",
			"description" : "I was responsible for all audio in this project.Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.",
			"images" : ["./images/pronica.jpg"]
		}
	]
}
var bio = {
		"name" : "Leo Langinger",
		"welcomeMessage" : "Hi there!!",
		"contacts" : ["llanginger@gmail.com.", "617-803-5227", "Seattle", "github.com/llanginger"],
		"role" : "Web Developer?",
		"skills" : ["Web Developer", "Film Composer", "Cool Guy\(?\)"],
		"bioPic" : "./images/profile-pic.jpg"
	}
var education = {
	"schools": [
		{
			"name" : "Berklee College of Music",
			"location" : "Boston",
			"degree" : "Bachelor's of Music",
			"majors" : "Contemporary Writing and Production",
			"dates" : "Grad: 2013 ",
			"url" : "https://www.berklee.edu/"
		},
		{
			"name" : "Davies Lang and Dick 6th Form College",
			"location" : "London",
			"degree" : "A-Levels",
			"majors" : "French, Spanish and Music",
			"dates" : "Grad: 2006 ",
			"url" : ""
		}
	],
	"onlineCourses": [
		{
			"school" : "Udacity",
			"title" : "Nanodegree",
			"dates" : "2016",
			"location" : "Online",
			"url" :  "www.udacity.com"
		}
	]
}

var displayEducation = function(){
	$("#education").append(HTMLschoolStart);
	for (school in education.schools){
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolName, formattedLocation, formattedDegree, formattedDates, formattedMajor);
	}
	for (item in education.onlineCourses){
		var formattedOTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
		var formattedOSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
		var formattedODates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].dates);
		var formattedOLocation = HTMLonlineLocation.replace("%data%", education.onlineCourses[item].location);
		var formattedOUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[item].url);
		$(".education-entry:last").append(formattedOSchoolName, formattedOTitle, formattedODates, formattedOLocation, formattedOUrl);
	}
}
displayEducation();


var displayWork = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle, formattedTitle, formattedLocation, formattedDates, formattedDescription);
	}
}
displayWork();



function displayProjects(){
	for (var project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
displayProjects();

//
// var displayBio = function(){
// 	$("#header").append(HTMLskillsStart)
//
// 	for (item in bio.bio){
// 		if (bio.bio[item].skills.length > 0){
// 			for (skill in bio.bio[item].skills){
// 				var formattedSkill = HTMLskills.replace("%data%", bio[item].skills);
// 				$("#skills").append(formattedSkill);
// 			}
// 		}
// 	}
// }
// displayBio();

var displaySkills = function(){
	if (bio.skills.length > 0) {
		$("#header").prepend(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
	};
};

displaySkills();

var displayContacts = function() {
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts[0]);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[1]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[3]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[2]);
	$("#topContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedLocation);
	$("#footerContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedLocation);
}

// var displayContacts = function(){
// 	for (contact in bio.contacts){
// 		$("#header").append(HTMLcontactGeneric);
// 		var formattedEmail = HTMLcontactGeneric.
// 	}
// }

displayContacts();
var displayBio = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(formattedBioPic);
}
displayBio();
// $("#header").append(education.schools[0].url);


$(document).click(function(loc) {
  // your code goes here
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

$("#mapDiv").append(googleMap);
