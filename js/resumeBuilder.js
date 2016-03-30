// $(function(){
	var model = {
		work: {
			jobs: [
				{
					employer : "Self-employed",
					title : "Composer",
					location : "Seattle",
					dates : "All my life",
					description : "ANullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
				},
				{
					employer : "Butter Music and Sound.",
					title : "Assistant Composer.",
					location : "Manhattan.",
					dates : "2013-14.",
					description : "Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
				},
				{
					employer : "Anglian",
					title : "Salesman",
					location : "Guildford",
					dates : "2008-9",
					description : "Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
				}
			]

		},
		projects: {
		    projects: [
					{
						title : "Lenovo Ashton Kutcher.",
						dates : "Late 2013.",
						description : "Wrote all music and supervised recording session for a tv Ad for Lenovo featuring Ashton Kutcher. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur.",
						images : ["./images/a-kut.jpg"]
					},
					{
						title : "Raising Sleeping Stones.",
						dates : "2012-2014.",
						description : "Co-wrote over 2 hrs of orchestral music. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.",
						images : [""]
					},
					{
						title : "Pronica.",
						dates : "2014-15.",
						description : "I was responsible for all audio in this project.Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.",
						images : ["./images/pronica.jpg"]
					}
			]
		},
		bio: {
				name : "Leo Langinger",
				welcomeMessage : "Hi there!!",
				contacts : ["llanginger@gmail.com.", "617-803-5227", "Seattle", "github.com/llanginger"],
				role : "Web Developer?",
				skills : ["Web Developer", "Film Composer", "Cool Guy\(?\)"],
				bioPic : "./images/profile-pic.jpg"
			},
		education: {
			schools: [
				{
					name : "Berklee College of Music",
					location : "Boston",
					degree : "Bachelor's of Music",
					majors : "Contemporary Writing and Production",
					dates : "Grad: 2013 ",
					url : "https://www.berklee.edu/"
				},
				{
					name : "Davies Lang and Dick 6th Form College",
					location : "London",
					degree : "A-Levels",
					majors : "French, Spanish and Music",
					dates : "Grad: 2006 ",
					url : ""
				}
			],		onlineCourses: [
				{
					school : "Udacity",
					title : "Nanodegree",
					dates : "2016",
					location : "Online",
					url :  "www.udacity.com"
				}
			]
		}
	};

	var controller = {
		init: function(){
			educationView.init();
			workView.init();
			projectsView.init();
			bioView.init();
		},
		getWorkJobs: function(){
			return model.work.jobs;
		},
		getProjects: function(){
			return model.projects.projects;
		},
		getBioSkills: function(){
			return model.bio.skills;
		},
		getBio: function(){
			return model.bio;
		},
		getEducationSchools: function(){
			return model.education.schools;
		},
		getEducationOnline: function(){
			return model.education.onlineCourses;
		}

	}

	// var view = {


		var educationView = {
			init: function(){
				this.render();
			},
			render: function(){
				var educationSchools = controller.getEducationSchools();
				var educationOnline = controller.getEducationOnline();
				$("#education").append(HTMLschoolStart);
				for (var school in educationSchools){
					var formattedSchoolName = HTMLschoolName.replace("%data%", educationSchools[school].name);
					var formattedLocation = HTMLschoolLocation.replace("%data%", educationSchools[school].location);
					var formattedDegree = HTMLschoolDegree.replace("%data%", educationSchools[school].degree);
					var formattedMajor = HTMLschoolMajor.replace("%data%", educationSchools[school].majors);
					var formattedDates = HTMLschoolDates.replace("%data%", educationSchools[school].dates);
					$(".education-entry:last").append(formattedSchoolName, formattedLocation, formattedDegree, formattedDates, formattedMajor);
				};
				for (var item in educationOnline){
					var formattedOTitle = HTMLonlineTitle.replace("%data%", educationOnline[item].title);
					var formattedOSchoolName = HTMLonlineSchool.replace("%data%", educationOnline[item].school);
					var formattedODates = HTMLonlineDates.replace("%data%", educationOnline[item].dates);
					var formattedOLocation = HTMLonlineLocation.replace("%data%", educationOnline[item].location);
					var formattedOUrl = HTMLonlineURL.replace("%data%", educationOnline[item].url);
					$(".education-entry:last").append(formattedOSchoolName, formattedOTitle, formattedODates, formattedOLocation, formattedOUrl);
				}
			}
		}



		var workView = {
			init: function(){
				this.render();
			},
			render: function(){
				var jobs = controller.getWorkJobs();
				for (var job in jobs) {
					$("#workExperience").append(HTMLworkStart);
					var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
					var formattedTitle = HTMLworkTitle.replace("%data%", jobs[job].title);
					var formattedLocation = HTMLworkLocation.replace("%data%", jobs[job].location);
					var formattedDates = HTMLworkDates.replace("%data%", jobs[job].dates);
					var formattedDescription = HTMLworkDescription.replace("%data%", jobs[job].description);
					var formattedEmployerTitle = formattedEmployer + formattedTitle;
					$(".work-entry:last").append(formattedEmployerTitle, formattedTitle, formattedLocation, formattedDates, formattedDescription);
				}
			}
		}



		var projectsView = {
			init: function(){
				this.render();
			},
			render: function(){
				var projects = controller.getProjects();
				for (var project in projects){
					$("#projects").append(HTMLprojectStart);
					var formattedTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
					var formattedDates = HTMLprojectDates.replace("%data%", projects[project].dates);
					var formattedDescription = HTMLprojectDescription.replace("%data%", projects[project].description);
					$(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
					if (projects[project].images.length > 0){
						for (var image in projects[project].images){
							var formattedImage = HTMLprojectImage.replace("%data%", projects[project].images[image]);
							$(".project-entry:last").append(formattedImage);
						}
					}
				}
			}
		};


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

		// var skillsView = {
		// 	init: function(){
		// 		this.render();
		// 	},
		// 	render: function(){
		// 		var skills = controller.getBioSkills();
		// 		if (skills.length > 0) {
		// 			$("#header").prepend(HTMLskillsStart);
		// 			var formattedSkill = HTMLskills.replace("%data%", skills[0]);
		// 			$("#skills").append(formattedSkill);
		// 			formattedSkill = HTMLskills.replace("%data%", skills[1]);
		// 			$("#skills").append(formattedSkill);
		// 			formattedSkill = HTMLskills.replace("%data%", skills[2]);
		// 			$("#skills").append(formattedSkill);
		// 		};
		// 	}
		// };

		var bioView = {
			init: function(){
				this.render();
			},
			render: function(){
				var bio = controller.getBio();
				var skills = controller.getBioSkills();
				console.log(skills);
				if (skills.length > 0) {
					$("#header").prepend(HTMLskillsStart);
					var formattedSkill = HTMLskills.replace("%data%", skills[0]);
					$("#skills").append(formattedSkill);
					formattedSkill = HTMLskills.replace("%data%", skills[1]);
					$("#skills").append(formattedSkill);
					formattedSkill = HTMLskills.replace("%data%", skills[2]);
					$("#skills").append(formattedSkill);
				};
				var formattedEmail = HTMLemail.replace("%data%", bio.contacts[0]);
				var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[1]);
				var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[3]);
				var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[2]);
				var formattedName = HTMLheaderName.replace("%data%", bio.name);
				var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
				$("#topContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedLocation);
				$("#footerContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedLocation);
				$("#header").prepend(formattedName);
				$("#header").prepend(formattedBioPic);

			}
		}



		// var displayBio = function(){
		// 	var formattedName = HTMLheaderName.replace("%data%", bio.name);
		// 	$("#header").prepend(formattedName);
		// 	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		// 	$("#header").prepend(formattedBioPic);
		// }



		$(document).click(function(loc) {
		  // your code goes here
			var x = loc.pageX;
			var y = loc.pageY;

			logClicks(x,y);
		});

		$("#mapDiv").append(googleMap);
	// }
	controller.init();


// })
