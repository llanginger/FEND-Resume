function logClicks(a,t){clickLocations.push({x:a,y:t}),console.log("x location: "+a+"; y location: "+t)}function initializeMap(){function a(){var a=[];return a.push(model.bio.contacts[2]),model.education.schools.forEach(function(t){a.push(model.education.schools.location)}),model.work.jobs.forEach(function(t){a.push(model.work.jobs.location),console.log(a)}),a}function t(a){var t=a.geometry.location.lat(),e=a.geometry.location.lng(),s=a.formatted_address,o=window.mapBounds,n=new google.maps.Marker({map:map,position:a.geometry.location,title:s}),i=new google.maps.InfoWindow({content:s});google.maps.event.addListener(n,"click",function(){}),o.extend(new google.maps.LatLng(t,e)),map.fitBounds(o),map.setCenter(o.getCenter())}function e(a,e){e===google.maps.places.PlacesServiceStatus.OK&&t(a[0])}function s(a){var t=new google.maps.places.PlacesService(map);a.forEach(function(a){var s={query:a};t.textSearch(s,e)})}var o,n={disableDefaultUI:!0,scrollwheel:!1};map=new google.maps.Map(document.querySelector("#mapDiv"),n),window.mapBounds=new google.maps.LatLngBounds,o=a(),s(o)}var HTMLheaderName='<h1 id="name">%data%</h1><hr>',HTMLheaderRole="<span>%data%</span>",HTMLcontactGeneric='<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',HTMLmobile='<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',HTMLemail='<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',HTMLtwitter='<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',HTMLgithub='<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',HTMLblog='<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',HTMLlocation='<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',HTMLbioPic='<img src="%data%" class="biopic">',HTMLwelcomeMsg='<span class="welcome-message">%data%</span>',HTMLskillsStart='<ul id="skills" class="flex-box op-filter"></ul>',HTMLskills='<li class="flex-item"><span class="white-text">%data%</span></li>',HTMLworkStart='<div class="work-entry"></div>',HTMLworkEmployer='<a href="#">%data%',HTMLworkTitle=" - %data%</a>",HTMLworkDates='<div class="date-text">%data%</div>',HTMLworkLocation='<div class="location-text">%data%</div>',HTMLworkDescription="<p><br>%data%</p>",HTMLprojectStart='<div class="project-entry"></div>',HTMLprojectTitle='<a href="#">%data%</a>',HTMLprojectDates='<div class="date-text">%data%</div>',HTMLprojectDescription="<p><br>%data%</p>",HTMLprojectImage='<div class="bg-grey"><img src="%data%" class="img-responsive"></div>',HTMLschoolStart='<div class="education-entry"></div>',HTMLschoolName='<a href="#">%data%<hr>',HTMLschoolDegree=" -- %data%</a>",HTMLschoolDates='<div class="date-text">%data%</div>',HTMLschoolLocation='<div class="location-text">%data%</div>',HTMLschoolMajor="<em><br>Major: %data%</em>",HTMLonlineClasses="<h3>Online Classes</h3>",HTMLonlineSchool='<a href="#">%data%<hr>',HTMLonlineTitle=" -- %data%</a>",HTMLonlineDates='<div class="date-text">%data%</div>',HTMLonlineLocation='<div class="location-text">%data%</div>',HTMLonlineURL='<br><a href="#">%data%</a>',internationalizeButton="<button>Internationalize</button>",googleMap='<div id="map"></div>';$(document).ready(function(){$("button").click(function(){var a=inName()||function(){};$("#name").html(a)})}),clickLocations=[],$(document).click(function(a){});var map;window.addEventListener("load",initializeMap),window.addEventListener("resize",function(a){map.fitBounds(mapBounds)});