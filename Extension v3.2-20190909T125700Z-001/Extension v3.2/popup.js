document.addEventListener("DOMContentLoaded", function(){  
	document.getElementById("Appleby").addEventListener("click",Applebyappear); 
	document.getElementById("Shecalf").addEventListener("click",Shecalfappear);
	document.getElementById("Graber").addEventListener("click", Graberappear);
	document.getElementById("Hecalf").addEventListener("click", Hecalfappear);
	document.getElementById("Palumbo").addEventListener("click", Palumboappear);
	document.getElementById("Rauschenberger").addEventListener("click", Rauschenbergerappear);
//  document.getElementById("Hanna").addEventListener("click", Hannaappear);
	document.getElementById("Popa").addEventListener("click", Popaappear);
	document.getElementById("Chen").addEventListener("click", Chenappear);
	document.getElementById("Griffith").addEventListener("click", Griffithappear);
	document.getElementById("Hughes").addEventListener("click", Hughesappear);
//  document.getElementById("Dreslinski").addEventListener("click", Dreslinskiappear);
	document.getElementById("York").addEventListener("click", Yorkappear);
//  document.getElementById("Kaffen").addEventListener("click", Kaffenappear);
//  document.getElementById("Cown").addEventListener("click", Cownappear);
//  document.getElementById("Howard").addEventListener("click", Howardappear);
//  document.getElementById("Impact").addEventListener("click", Impactappear);
//  document.getElementById("Pose").addEventListener("click", Poseappear);
});
/* adds the eventlisteners for all multilink folders. These run the appear function when clicked. Make sure there is a listener for all multilink folders
Event Listener Template:  document.getElementById("Name").addEventListener("click", Nameappear; 
*/

function Applebyappear(){
	document.getElementById("Applebysub").style.display="Block";
	document.getElementById("Site").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Impact").style.display="None";
//  document.getElementById("Pose").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
	document.getElementById("Griffith").style.display="None";
//  document.getElementById("Hanna").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
	document.getElementById("Classroom").style.display="None";
//  document.getElementById("Dreslinski").style.display="None";
	document.getElementById("Hughes").style.display="None";
	document.getElementById("York").style.display="None";
	document.getElementById("Cohen").style.display="None";
//  document.getElementById("Cown").style.display="None";
	document.getElementById("Graber").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
	document.getElementById("fillend6").style.display="inline-block";
	
	document.getElementById("Appleby").removeEventListener("click", Applebyappear);
	document.getElementById("Appleby").addEventListener("click", Applebydisappear)
}
function Shecalfappear(){
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Shecalfsub").style.display="Block";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Hughes").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
//  document.getElementById("Howard").style.display="None";
	document.getElementById("Griffith").style.display="None";
//  document.getElementById("Hanna").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("Cohen").style.display="None";
//  document.getElementById("Dreslinski").style.display="None";
//  document.getElementById("Pose").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
	document.getElementById("Graber").style.display="None";
//  document.getElementById("Cown").style.display="None";
	document.getElementById("York").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
//  document.getElementById("Howardsp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
	document.getElementById("fillend9").style.display="inline-block";
	
	document.getElementById("Shecalf").removeEventListener("click", Shecalfappear);
	document.getElementById("Shecalf").addEventListener("click", Shecalfdisappear)
}
function Graberappear(){
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Griffith").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Hughes").style.display="None";
	document.getElementById("Treen").style.display="None";
//  document.getElementById("Pose").style.display="None";
	document.getElementById("Popa").style.display="None";
//  document.getElementById("Hanna").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
	document.getElementById("York").style.display="None";
	document.getElementById("Classroom").style.display="None";
//  document.getElementById("Dreslinski").style.display="None";
//  document.getElementById("Cown").style.display="None";
	document.getElementById("Cohen").style.display="None";
	document.getElementById("Grabersub").style.display="Block";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
	document.getElementById("fillend3").style.display="inline-block";
	document.getElementById("Graber").removeEventListener("click", Graberappear);
	document.getElementById("Graber").addEventListener("click", Graberdisappear)
}
function Hecalfappear(){
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Griffith").style.display="None";
	document.getElementById("Hecalfsub").style.display="Block";
	document.getElementById("Palumbo").style.display="None";
//  document.getElementById("Howard").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
//  document.getElementById("Hanna").style.display="None";
//  document.getElementById("Pose").style.display="None";
	document.getElementById("York").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Cohen").style.display="None";
	document.getElementById("Hughes").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
//  document.getElementById("Dreslinski").style.display="None";
	document.getElementById("Graber").style.display="None";
//  document.getElementById("Cown").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
//  document.getElementById("Howardsp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
	document.getElementById("fillend2").style.display="inline-block";
	document.getElementById("Hecalf").removeEventListener("click", Hecalfappear);
	document.getElementById("Hecalf").addEventListener("click", Hecalfdisappear)
}
/*function Hannaappear(){
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Griffith").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Hughes").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Pose").style.display="None";
	document.getElementById("Popa").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Hannasub").style.display="Block";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("York").style.display="None";
	document.getElementById("Cohen").style.display="None";
	document.getElementById("Dreslinski").style.display="None";
	document.getElementById("Kaffen").style.display="None";
	document.getElementById("Cown").style.display="None";
	document.getElementById("Graber").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Posesp").style.display="None";
	document.getElementById("Popasp").style.display="None";
	document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Cownsp").style.display="None";
	document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
	
	document.getElementById("fillend3").style.display="inline-block";
	document.getElementById("Hanna").removeEventListener("click", Hannaappear);
	document.getElementById("Hanna").addEventListener("click", Hannadisappear)
}*/
function Popaappear(){
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Griffith").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Hughes").style.display="None";
//  document.getElementById("Dreslinski").style.display="None";
//  document.getElementById("Pose").style.display="None";
//  document.getElementById("Hanna").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("York").style.display="None";
	document.getElementById("Cohen").style.display="None";
//  document.getElementById("Cown").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
	document.getElementById("Graber").style.display="None";
	document.getElementById("Popasub").style.display="Block";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
	document.getElementById("fillend3").style.display="inline-block";
	document.getElementById("Popa").removeEventListener("click", Popaappear);
	document.getElementById("Popa").addEventListener("click", Popadisappear);
}
function Palumboappear(){
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Griffith").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
//  document.getElementById("Howard").style.display="None";
	document.getElementById("Palumbosub").style.display="Block";
	document.getElementById("Rauschenberger").style.display="None";
//  document.getElementById("Pose").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
//  document.getElementById("Hanna").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("Hughes").style.display="None";
//  document.getElementById("Dreslinski").style.display="None";
	document.getElementById("Cohen").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
//  document.getElementById("Cown").style.display="None";
	document.getElementById("York").style.display="None";
	document.getElementById("Graber").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
//  document.getElementById("Howardsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("fillend2").style.display="inline-block";
	
	document.getElementById("Palumbo").removeEventListener("click", Palumboappear);
	document.getElementById("Palumbo").addEventListener("click", Palumbodisappear);
}
function Rauschenbergerappear(){
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Griffith").style.display="None";
	document.getElementById("Palumbo").style.display="None";
//  document.getElementById("Howard").style.display="None";
	document.getElementById("Rauschenbergersub").style.display="Block";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
//  document.getElementById("Hanna").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("Hughes").style.display="None";
	document.getElementById("York").style.display="None";
	document.getElementById("Cohen").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
//  document.getElementById("Pose").style.display="None";
//  document.getElementById("Dreslinski").style.display="None";
//  document.getElementById("Cown").style.display="None";
	document.getElementById("Graber").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
//  document.getElementById("Howardsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("fillend2").style.display="inline-block";
	
	document.getElementById("Rauschenberger").removeEventListener("click", Rauschenbergerappear);
	document.getElementById("Rauschenberger").addEventListener("click", Rauschenbergerdisappear)
}

function Chenappear(){
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Griffith").style.display="None";
	document.getElementById("Chensub").style.display="Block";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
//  document.getElementById("Dreslinski").style.display="None";
//  document.getElementById("Pose").style.display="None";
//  document.getElementById("Hanna").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("Hughes").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("York").style.display="None";
//  document.getElementById("Cown").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
	document.getElementById("Cohen").style.display="None";
	document.getElementById("Graber").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("fillend2").style.display="inline-block";
	
	document.getElementById("Chen").removeEventListener("click", Chenappear);
	document.getElementById("Chen").addEventListener("click", Chendisappear)
}

function Griffithappear(){
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Impact").style.display="None";
//  document.getElementById("Pose").style.display="None";
	document.getElementById("Popa").style.display="None";
	document.getElementById("Hughes").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
	document.getElementById("Griffithsub").style.display="Block";
//  document.getElementById("Dreslinski").style.display="None";
//  document.getElementById("Hanna").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("York").style.display="None";
	document.getElementById("Cohen").style.display="None";
//  document.getElementById("Cown").style.display="None";
	document.getElementById("Graber").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
	document.getElementById("fillend2").style.display="inline-block";
	
	document.getElementById("Griffith").removeEventListener("click", Griffithappear);
	document.getElementById("Griffith").addEventListener("click", Griffithdisappear)
}
function Hughesappear(){
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Palumbo").style.display="None";
//  document.getElementById("Pose").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
	document.getElementById("Hughessub").style.display="Block";
	document.getElementById("Griffith").style.display="None";
//  document.getElementById("Hanna").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("Cohen").style.display="None";
	document.getElementById("Impact").style.display="None";
//  document.getElementById("Dreslinski").style.display="None";
	document.getElementById("Graber").style.display="None";
	document.getElementById("York").style.display="None";
//  document.getElementById("Cown").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
	 
	 
	document.getElementById("fillend2").style.display="inline-block";
	
	document.getElementById("Hughes").removeEventListener("click", Hughesappear);
	document.getElementById("Hughes").addEventListener("click", Hughesdisappear)
}

/*function Dreslinskiappear(){
	document.getElementById("Dreslinskisub").style.display="Block";
	 
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
	document.getElementById("Howard").style.display="None";
	document.getElementById("Pose").style.display="None";
	document.getElementById("Griffith").style.display="None";
	document.getElementById("York").style.display="None";
	document.getElementById("Hanna").style.display="None";
	document.getElementById("Cown").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("Hughes").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Cohen").style.display="None";
	document.getElementById("Kaffen").style.display="None";
	document.getElementById("Graber").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("Howardsp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Popasp").style.display="None";
	document.getElementById("Hannasp").style.display="None";
	document.getElementById("Posesp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Cownsp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
	document.getElementById("fillend2").style.display="inline-block";
	
	
	document.getElementById("Dreslinski").removeEventListener("click", Dreslinskiappear);
	document.getElementById("Dreslinski").addEventListener("click", Dreslinskidisappear)
}*/
function Yorkappear(){
	document.getElementById("Yorksub").style.display="Block";
//  document.getElementById("Dreslinski").style.display="None";
	 
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Griffith").style.display="None";
//  document.getElementById("Cown").style.display="None";
//  document.getElementById("Hanna").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("Hughes").style.display="None";
//  document.getElementById("Kaffen").style.display="None";
//  document.getElementById("Howard").style.display="None";
//  document.getElementById("Pose").style.display="None";
	document.getElementById("Cohen").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Graber").style.display="None";
	
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	 
	document.getElementById("Yorksp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
//  document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Chensp").style.display="None";
//  document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
//  document.getElementById("Cownsp").style.display="None";
//  document.getElementById("Posesp").style.display="None";
	document.getElementById("Popasp").style.display="None";
//  document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	 
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
	document.getElementById("fillend7").style.display="inline-block";
	
	document.getElementById("York").removeEventListener("click", Yorkappear);
	document.getElementById("York").addEventListener("click", Yorkdisappear)
}
/*function Kaffenappear(){
	document.getElementById("York").style.display="None";
	document.getElementById("Kaffensub").style.display="Block";
	document.getElementById("Dreslinski").style.display="None";
	document.getElementById("Cown").style.display="None";
	document.getElementById("Pose").style.display="None";
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
	document.getElementById("Howard").style.display="None";
	document.getElementById("Griffith").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Hanna").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("Hughes").style.display="None";
	document.getElementById("Cohen").style.display="None";
	 
	document.getElementById("Graber").style.display="None";
	
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Cownsp").style.display="None";
	document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
	document.getElementById("Howardsp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Posesp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Popasp").style.display="None";
	document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
	document.getElementById("fillend5").style.display="inline-block";
	
	document.getElementById("Kaffen").removeEventListener("click", Kaffenappear);
	document.getElementById("Kaffen").addEventListener("click", Kaffendisappear);
}*/

/*function Cownappear(){
	document.getElementById("Cownsub").style.display="Block";
	document.getElementById("Dreslinski").style.display="None";
	document.getElementById("Appleby").style.display="None";
	document.getElementById("Site").style.display="None";
	document.getElementById("Chen").style.display="None";
	document.getElementById("Portal").style.display="None";
	document.getElementById("Shecalf").style.display="None";
	document.getElementById("Hecalf").style.display="None";
	document.getElementById("Pose").style.display="None";
	document.getElementById("Palumbo").style.display="None";
	document.getElementById("Rauschenberger").style.display="None";
	document.getElementById("Treen").style.display="None";
	document.getElementById("Popa").style.display="None";
	document.getElementById("Griffith").style.display="None";
	document.getElementById("Hanna").style.display="None";
	document.getElementById("Classroom").style.display="None";
	document.getElementById("Hughes").style.display="None";
	document.getElementById("Kaffen").style.display="None";
	document.getElementById("Cohen").style.display="None";
	document.getElementById("Graber").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Applebysp").style.display="None";
	document.getElementById("Sitesp").style.display="None";
	document.getElementById("Yorksp").style.display="None";
	document.getElementById("Cownsp").style.display="None";
	document.getElementById("Griffithsp").style.display="None";
	document.getElementById("Dreslinskisp").style.display="None";
	document.getElementById("Portalsp").style.display="None";
	document.getElementById("Shecalfsp").style.display="None";
	document.getElementById("Hecalfsp").style.display="None";
	document.getElementById("Chensp").style.display="None";
	document.getElementById("Kaffensp").style.display="None";
	document.getElementById("Hughessp").style.display="None";
	document.getElementById("Impactsp").style.display="None";
	document.getElementById("Palumbosp").style.display="None";
	document.getElementById("Posesp").style.display="None";
	document.getElementById("Rauschenbergersp").style.display="None";
	document.getElementById("Popasp").style.display="None";
	document.getElementById("Hannasp").style.display="None";
	document.getElementById("Classroomsp").style.display="None";
	document.getElementById("Cohensp").style.display="None";
	document.getElementById("Grabersp").style.display="None";
	document.getElementById("fillend3").style.display="inline-block";
	
	document.getElementById("Cown").removeEventListener("click", Cownappear);
	document.getElementById("Cown").addEventListener("click", Cowndisappear)
}*/

/*These are the appear functions. Ensure every multilink folder has one
To create one, use this template: 

function Nameappear(){																These are the links, none of them should be displayed except the name of the function. Ensure the sub appears as well, in block form.
	document.getElementById("Link1").style.display="None";	
	document.getElementById("Link2").style.display="None";;
	document.getElementById("Namesub").style.display="Block";
	
	document.getElementById("Link1sp").style.display="None";						These are all space fillers, none of these should display except for the ending filler, which should in inline-block form.
	document.getElementById("Link2sp").style.display="None";
	document.getElementById("fillend").style.display="inline-block";
	
	document.getElementById("Name").removeEventListener("click", Nameappear);		This removes the click to appear listener and adds a click to disappear listener
	document.getElementById("Name").addEventListener("click", Namedisappear)
	*/
	

/*function Cowndisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
	document.getElementById("Portal").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
	document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Dreslinski").style.display="Block";
	document.getElementById("Pose").style.display="Block";
	document.getElementById("Kaffen").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block";
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Chen").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
	
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Impact").style.display="Block";
	document.getElementById("York").style.display="Block";
	document.getElementById("Cownsub").style.display="None";

	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Kaffensp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
	document.getElementById("Dreslinskisp").style.display="inline-block";
	document.getElementById("Hannasp").style.display="inline-block";
	
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend2").style.display="None";
	
	document.getElementById("Cown").addEventListener("click", Cownappear);
	document.getElementById("Cown").removeEventListener("click", Cowndisappear);
}*/
/*function Kaffendisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
	document.getElementById("Cown").style.display="Block";
	document.getElementById("Portal").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
	document.getElementById("Hanna").style.display="Block";
	document.getElementById("Pose").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Impact").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block"
	
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Chen").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	
	document.getElementById("York").style.display="Block";
	document.getElementById("Kaffensub").style.display="None";
	document.getElementById("Dreslinski").style.display="Block";
	
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Impact").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Kaffensp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
	document.getElementById("Dreslinskisp").style.display="inline-block";
	document.getElementById("Hannasp").style.display="inline-block";
	
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend2").style.display="None";
	
	document.getElementById("Kaffen").addEventListener("click", Kaffenappear);
	document.getElementById("Kaffen").removeEventListener("click", Kaffendisappear);
}*/
function Yorkdisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
	document.getElementById("Portal").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
//  document.getElementById("Cown").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block";
	document.getElementById("Appleby").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
	document.getElementById("Chen").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Yorksub").style.display="None";
	//  ocument.getElementById("Dreslinski").style.display="Block";
	document.getElementById("Impact").style.display="Block";
//  document.getElementById("Howard").style.display="None";
	document.getElementById("Impact").style.display="None";
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
//  document.getElementById("Kaffensp").style.display="inline-block";
//  document.getElementById("Howardsp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block";
//  document.getElementById("Cownsp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend7").style.display="None";
	document.getElementById("York").addEventListener("click", Yorkappear);
	document.getElementById("York").removeEventListener("click", Yorkdisappear);
}
/*function Dreslinskidisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
	document.getElementById("York").style.display="Block";
	document.getElementById("Cown").style.display="Block";
	document.getElementById("Portal").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
	document.getElementById("Kaffen").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Pose").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
	document.getElementById("Hanna").style.display="Block";
	document.getElementById("Impact").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block";
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Chen").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Dreslinskisub").style.display="None";
	
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Kaffensp").style.display="inline-block";
	document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
	document.getElementById("Dreslinskisp").style.display="inline-block";
	document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend2").style.display="None";
	document.getElementById("Dreslinski").addEventListener("click", Dreslinskiappear);
	document.getElementById("Dreslinski").removeEventListener("click", Dreslinskidisappear);
}*/

	
function Hughesdisappear(){
	document.getElementById("Appleby").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
	document.getElementById("York").style.display="Block";
	document.getElementById("Site").style.display="Block";
	document.getElementById("Portal").style.display="Block";
//  document.getElementById("Dreslinski").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
//  document.getElementById("Cown").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Impact").style.display="Block";
	document.getElementById("Graber").style.display="Block"
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Chensp").style.display="Block";
	document.getElementById("Griffithsp").style.display="Block";
	document.getElementById("Hughessub").style.display="None"
	
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
//  document.getElementById("Kaffensp").style.display="inline-block";
//  document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend2").style.display="None";
	
	document.getElementById("Hughes").addEventListener("click", Hughesappear);
	document.getElementById("Hughes").removeEventListener("click", Hughesdisappear);
}
	function Griffithdisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
	document.getElementById("Portal").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
	document.getElementById("York").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
//  document.getElementById("Dreslinski").style.display="Block";
	document.getElementById("Impact").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block";
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Chensp").style.display="Block";
	document.getElementById("Griffithsub").style.display="None"
	
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
//  document.getElementById("Cownsp").style.display="inline-block";
//  document.getElementById("Kaffensp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend2").style.display="None";
	
	document.getElementById("Griffith").addEventListener("click", Griffithappear);
	document.getElementById("Griffith").removeEventListener("click", Griffithdisappear);
}
	
function Chendisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
	document.getElementById("Portal").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("York").style.display="Block";
//  document.getElementById("Dreslinski").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
//  document.getElementById("Cown").style.display="Block";
	document.getElementById("Impact").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block"
	document.getElementById("Griffith").style.display="Block";
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Chensub").style.display="None"
	
	document.getElementById("Applebysp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
//  document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
//  document.getElementById("Kaffensp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend2").style.display="None";
	
	document.getElementById("Chen").addEventListener("click", Chenappear);
	document.getElementById("Chen").removeEventListener("click", Chendisappear);
}
	

function Applebydisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
//  document.getElementById("Cown").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
	document.getElementById("Portal").style.display="Block";
	document.getElementById("Chen").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
//  document.getElementById("Dreslinski").style.display="Block"
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
	document.getElementById("Impact").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("York").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block"
	document.getElementById("Applebysub").style.display="None";
	
//  document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
//  document.getElementById("Kaffensp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block"
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend5").style.display="None";
	
	document.getElementById("Appleby").addEventListener("click", Applebyappear);
	document.getElementById("Appleby").removeEventListener("click", Applebydisappear);
}
function Shecalfdisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Chen").style.display="Block";
	document.getElementById("Site").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
//  document.getElementById("Cown").style.display="Block";
//  document.getElementById("Dreslinski").style.display="Block"
	document.getElementById("Portal").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
	document.getElementById("York").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Impact").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block"
	document.getElementById("Shecalfsub").style.display="None";
//  document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block"
//  document.getElementById("Kaffensp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend9").style.display="None";
	
	document.getElementById("Shecalf").addEventListener("click", Shecalfappear);
	document.getElementById("Shecalf").removeEventListener("click", Shecalfdisappear);
}

function Graberdisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
	document.getElementById("Site").style.display="Block";
//  document.getElementById("Cown").style.display="Block";
	document.getElementById("Portal").style.display="Block";
	document.getElementById("Impact").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
	document.getElementById("York").style.display="Block";
	document.getElementById("Chen").style.display="Block";
//  document.getElementById("Dreslinski").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block";
	document.getElementById("Grabersub").style.display="None";
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
//  document.getElementById("Kaffensp").style.display="inline-block";
//  document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block"
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend3").style.display="None";
	
	document.getElementById("Graber").addEventListener("click", Graberappear);
	document.getElementById("Graber").removeEventListener("click", Graberdisappear);
}
function Hecalfdisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("York").style.display="Block";
	document.getElementById("Site").style.display="Block";
//  document.getElementById("Cown").style.display="Block";
//  document.getElementById("Dreslinski").style.display="Block"
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Portal").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
	document.getElementById("Chen").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Impact").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block"
	document.getElementById("Hecalfsub").style.display="None";
	
	document.getElementById("Applebysp").style.display="inline-block";
//  document.getElementById("Kaffensp").style.display="inline-block";
//  document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend2").style.display="None";
	
	document.getElementById("Hecalf").addEventListener("click", Hecalfappear);
	document.getElementById("Hecalf").removeEventListener("click", Hecalfdisappear);
	
}
/*function Hannadisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
	document.getElementById("Kaffen").style.display="Block";
	document.getElementById("York").style.display="Block";
	document.getElementById("Cown").style.display="Block";
	document.getElementById("Portal").style.display="Block";
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
	document.getElementById("Pose").style.display="Block";
	document.getElementById("Chen").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
	document.getElementById("Dreslinski").style.display="Block";
	document.getElementById("Impact").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
	document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block";
	document.getElementById("Hannasub").style.display="None";
	
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Kaffensp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Dreslinskisp").style.display="inline-block"
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
	document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend3").style.display="None";
	
	document.getElementById("Hanna").addEventListener("click", Hannaappear);
	document.getElementById("Hanna").removeEventListener("click", Hannadisappear);
	
}*/

function Popadisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
//  document.getElementById("Cown").style.display="Block";
	document.getElementById("Portal").style.display="Block";
	document.getElementById("York").style.display="Block";
	document.getElementById("Impact").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
	document.getElementById("Chen").style.display="Block";
//  document.getElementById("Dreslinski").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block";
	document.getElementById("Popasub").style.display="None";
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
//  document.getElementById("Cownsp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block";
//  document.getElementById("Kaffensp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend2").style.display="None";	
	document.getElementById("Popa").addEventListener("click", Popaappear);
	document.getElementById("Popa").removeEventListener("click", Popadisappear);
}
function Palumbodisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
	 
	document.getElementById("Portal").style.display="Block";
	document.getElementById("York").style.display="Block";
//  document.getElementById("Dreslinski").style.display="Block"
	document.getElementById("Impact").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
//  document.getElementById("Cown").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
	document.getElementById("Hecalf").style.display="Block";
	
	document.getElementById("Chen").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block";
	document.getElementById("Palumbosub").style.display="None";
//  document.getElementById("Cownsp").style.display="inline-block";
	document.getElementById("Applebysp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
//  document.getElementById("Kaffensp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
	document.getElementById("Sitesp").style.display="inline-block";
	 
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	 
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend2").style.display="None";
	
	document.getElementById("Palumbo").addEventListener("click", Palumboappear);
	document.getElementById("Palumbo").removeEventListener("click", Palumbodisappear);
}
function Rauschenbergerdisappear(){
	document.getElementById("Appleby").style.display="Block";
	document.getElementById("Site").style.display="Block";
	document.getElementById("Portal").style.display="Block";
//  document.getElementById("Dreslinski").style.display="Block";
	 
	document.getElementById("Hughes").style.display="Block";
	document.getElementById("Shecalf").style.display="Block";
//  document.getElementById("Kaffen").style.display="Block";
	document.getElementById("York").style.display="Block";
//  document.getElementById("Cown").style.display="Block";
	document.getElementById("Impact").style.display="Block";
	document.getElementById("Griffith").style.display="Block";
	
	document.getElementById("Hecalf").style.display="Block";
	document.getElementById("Chen").style.display="Block";
	document.getElementById("Palumbo").style.display="Block";
//  document.getElementById("Pose").style.display="Block";
	document.getElementById("Rauschenberger").style.display="Block";
	document.getElementById("Treen").style.display="Block";
	document.getElementById("Popa").style.display="Block";
//  document.getElementById("Hanna").style.display="Block";
	document.getElementById("Classroom").style.display="Block";
	document.getElementById("Cohen").style.display="Block";
	document.getElementById("Graber").style.display="Block";
	document.getElementById("Rauschenbergersub").style.display="None";
	
	document.getElementById("Applebysp").style.display="inline-block";
	 
	document.getElementById("Sitesp").style.display="inline-block";
//  document.getElementById("Kaffensp").style.display="inline-block";
	document.getElementById("Yorksp").style.display="inline-block";
	document.getElementById("Griffithsp").style.display="inline-block";
	document.getElementById("Impactsp").style.display="inline-bdrelock";
	document.getElementById("Impactsp").style.display="inline-block";
//  document.getElementById("Posesp").style.display="inline-block";
//  document.getElementById("Cownsp").style.display="inline-block";
//  document.getElementById("Dreslinskisp").style.display="inline-block";
	document.getElementById("Hughessp").style.display="inline-block";
	document.getElementById("Portalsp").style.display="inline-block";
	document.getElementById("Treensp").style.display="inline-block";
	document.getElementById("Chensp").style.display="inline-block";
	document.getElementById("Shecalfsp").style.display="inline-block";
	document.getElementById("Hecalfsp").style.display="inline-block";
	document.getElementById("Palumbosp").style.display="inline-block";
	document.getElementById("Rauschenbergersp").style.display="inline-block";
	document.getElementById("Popasp").style.display="inline-block";
//  document.getElementById("Hannasp").style.display="inline-block";
	document.getElementById("Classroomsp").style.display="inline-block";
	document.getElementById("Cohensp").style.display="inline-block";
	document.getElementById("Grabersp").style.display="inline-block";
	document.getElementById("fillend2").style.display="None";
	
	document.getElementById("Rauschenberger").addEventListener("click", Rauschenbergerappear);
	document.getElementById("Rauschenberger").removeEventListener("click", Rauschenbergerdisappear);
}
/*These are the disappear functions. Ensure every multilink folder has one
To create one, use this template: 

function Nameappear(){																These are the links, all of them should be displayed. Ensure the sub for the function name DOES NOT appear.
	document.getElementById("Link1").style.display="inline-block";	
	document.getElementById("Link2").style.display="inline-block";;
	document.getElementById("Namesub").style.display="None";
	
	document.getElementById("Link1sp").style.display="inline-block";				These are all space fillers, all of these should display in inline-blcok form except for the ending filler, which should not display.
	document.getElementById("Link2sp").style.display="inline-block";
	document.getElementById("fillend").style.display="inline-block";
	
	document.getElementById("Name").removeEventListener("click", Nameappear);		This removes the click to disappear listener and adds a click to sappear listener
	document.getElementById("Name").addEventListener("click", Namedisappear)
	*/