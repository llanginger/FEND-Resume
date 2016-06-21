// $(function(){
	var model = {
		work: {
			jobs: [
				{
					employer : "Self-Employed",
					title : "Front End Web Developer",
					location : "Seattle",
					dates : "Current",
					description : "At the start of 2016 I decided to change career paths and learn to program. I've always had a love for computers so the change not only seemed obvious but was also deeply exciting to me. Several months later, my excitement has only grown and I'm looking forward to what my future holds!"
				},
				{
					employer : "Self-Employed",
					title : "Composer",
					location : "Seattle",
					dates : "All my life",
					description : "During my career as a composer I have written music for short films, award-winning multi-media projects, big-name agency ads, Ivy-league school promotional-pieces and more. My passion has always been to work to enhance complex work with my contribution. During my time in music I learned how to interpret the meaning behind my clients' requests so that they never feel ignored or worse."
				},
				{
					employer : "Butter Music and Sound.",
					title : "Assistant Composer.",
					location : "Manhattan.",
					dates : "2013-14.",
					description : "While at Butter Music and Sound, first as an intern and then later as an assistant-composer, I worked on producing demos for multiple high-profile ad campaigns, as well as assisting the more senior composers when required. After my internship concluded, I was tasked with reformatting and lengthening dozens of preexisting tracks in the company's library so as to make them appropriate to market as a standalone music library."
				}
			]

		},
		projects: {
		    projects: [
					{
						title : "What Did We Eat Now?",
						dates : "May, 2016",
						description : "A calorie-counting app designed to demonstrate a robust understanding of complex MV* (Backbone.js used in this project) concepts and applications",
						images : ["images/what-did-we-eat.png"],
						link : "http://llanginger.github.io/health-tracker/"
					},
					{
						title : "Take Me Somewhere New",
						dates : "April, 2016",
						description: "An app for enabling the user to discover new places and help them break their routines up. The purpose of the project was to get familiar and comfortable with using an MV* framework (Knockout.js), multiple 3rd party APIs and making AJAX requests to form a cohesive experience",
						images: ["images/take-me-lg.png"],
						link : "http://llanginger.github.io/FEND-neighborhoodMap/"
					},
					{
						title : "Retro Arcade Clone",
						dates : "March, 2016",
						description : "A fun little retro arcade game (Frogger) clone. The purpose of this project was to get comfortable working from some degree of pre-existing code, implementing new features and learning how js features such as requestAnimationFrame work",
						images : ["images/arcade-game-wide.png"],
						link : "http://llanginger.github.io/FEND-Frogger/"
					},
					{
						title : "Lenovo Ashton Kutcher.",
						dates : "Late 2013.",
						description : "Wrote all music and supervised recording session for a Lenovo TV ad featuring Ashton Kutcher. ",
						images : ["images/a-kut.jpg"],
						link : "https://vimeo.com/84821818"
					},
					{
						title : "Raising Sleeping Stones.",
						dates : "2012-2014.",
						description : "Co-wrote over 2 hrs of orchestral music for an award-winning, first-of-its-kind multi-media novel.",
						images : ["images/rst.png"],
						link : "http://raisingstones.com/index.html"
					},
					{
						title : "Pronica.",
						dates : "2014-15.",
						description : "I was responsible for all music and audio post-production in this project.",
						images : ["images/pronica.jpg"],
						link : "http://pronica.org/"
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
			],
			onlineCourses: [
				{
					school : "Udacity",
					title : "Front End Web Developer Nanodegree",
					dates : "2016",
					location : "Online",
					url :  "www.udacity.com"
				}
			]
		}
	};

	var controller = {
		init: function(){
			view.init();
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


	var view = {
		init: function(){
			this.render();
		},
		render: function(){

			// controller handles
			var educationSchools = controller.getEducationSchools();
			var educationOnline = controller.getEducationOnline();
			var jobs = controller.getWorkJobs();
			var projects = controller.getProjects();
			var bio = controller.getBio();
			var skills = controller.getBioSkills();

			// resume sections:

			// education section
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
			};

			// work history
			for (var job in jobs) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", jobs[job].title);
				var formattedLocation = HTMLworkLocation.replace("%data%", jobs[job].location);
				var formattedDates = HTMLworkDates.replace("%data%", jobs[job].dates);
				var formattedDescription = HTMLworkDescription.replace("%data%", jobs[job].description);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle, formattedTitle, formattedLocation, formattedDates, formattedDescription);
			};

			// featured projects
			for (var project in projects){
				$("#projects").append(HTMLprojectStart);
				var formattedTitle = HTMLprojectTitle.replace("%data%", projects[project].title).replace("%linkData%", projects[project].link);
				var formattedDates = HTMLprojectDates.replace("%data%", projects[project].dates);
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects[project].description);
				$(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
				if (projects[project].images.length > 0){
					for (var image in projects[project].images){
						var formattedImage = HTMLprojectImage.replace("%data%", projects[project].images[image]).replace("%linkData%", projects[project].link);
						$(".project-entry:last").append(formattedImage);
					}
				}
			};

			// bio stuff (this could be cleaned up, TODO)
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

			// where I've lived/worked
			$("#mapDiv").append(googleMap);
			$("#mapDiv").prepend("<h2>HELLO</h2>")
		}
	}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
controller.init();
