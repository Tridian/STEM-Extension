These are the main files for the extension. The code is a bit hard to follow, but comments are there to guide anyone editing this. I do reccomend you know at least the basics
of chrome extensions before changing this, as there are probably some inner workings I deemed too complicated (read: forgot) to explain. The code is far from the most efficient 
thing possible, (or efficient at all for that matter) but it works well enough. Onto the important matters, excuse the order of these notes, as I am simply writing things as they
come to mind. It may seem like a jumble but it is all important information, particularly if you don’t already know how this works: 

There are only two files that should need to be changed regularly. popup.html, which provides the base framework for the extension, such as coach order and their links, and popup.js 
which provides the external javascript, doing things such as defining what happens once a nameplate is clicked on. Other files include the manifest.json which shouldn't need to be 
changed ever, as it is the file that tells chrome that this jumble of files is an extension.The CSS should only be changed should you wish to rewrite the colour scheme, layout, ect. 
The icon image and name images are too. They are entirely for visual style, so don’t be afraid to change them, as long as they are there!

Ensure you follow proper templates for adding things, nothing but the UI needs to be organized, but it helps to keep track of everything if you do organize it in some form.
Ensure the UI is alphabetical. You can do this by inserting the html blocks in their alphabetical locations. There are some nicknames in the code, to make it more easier to follow. 
Ensure they are in alphabetical order by their display plate rather than their nickname. (Coach Bill Metcalf, referred to as hecalf in the code, should be treated as "B. Metcalf" 
rather than "hecalf") Try to make link  names only one line long, as if they are longer, the UI just looks weird. I don’t know what to say about this, as short of a redesign, I don’t 
know how to make it look better at this moment.



After that exposition dump, here is the part you probably came here for root cause of some common errors:

1. Mistaking a sub folder with a folder. Ensure the only subfolders affected are the ones specifically named in the function. Palumbo's function should be the only one
to impact Palumbos subfolder, for example. It's sort of difficult to explain unless you understand the code, I try to explain the best I can in the files, but some research
on JS may be required.

2. Forgetting to remove references to nonexistent Id's. Should an ID change make sure you change it in all instances, it produces some weird symptoms (the java just stops entirely
from the first mistaken line after) if a non existent folder is referenced. A good way to weed this out as an issue is to use your best friend, the inspect console. Don't be
afraid to inspect a particular element if it's causing problems, the console may point out errors, simple and complex. 

3. Removing placeholder class. In the CSS file there is a placeholder class. This is there to prevent some CSS from being skipped. At this point, I don't know why it happens.
this is probably the issue if the buttons look odd (uncolored border, generic looking buttons.

4. Not everything is included in the appear/disappear functions. The signs of this are usually things not disappearing. To fix this ensure that all other clickables are set to 
disappear/appear, and the subfolder does the opposite. The sub should appear in the appear function and disappear in the disappear function. 
 
5. Apple being complicated. Due to the way apple handles files, if this is uploaded to google drive from a mac, and downloaded to a PC, the manifest may corrupt. Only solution
I know of is to start from a backup that wasn't downloaded to a mac. PC is better for this sort of thing anyway. The symptoms of this are opening the UI of the extension and seeing 
only a jumble of random characters.



Do not hesitate to add to this list. This is all I can think of as of writing this, if more come up, be sure to add them in case future issues come up. 

If you have any questions at all about how things work or proper procedures, don't hesitate to email me at brennanpowell56@gmail.com. That is unless there's been significant changes, 
if that's the case please change that email address. :P But seriously, if something happens I will do my best to help troubleshoot, I'll also update it if needed. I have no issue 
with remaining hands-on with this project. I owe STEM and it's staff at least that much for all they have done for me. Also forgive any spelling/grammar issues that may be present 
in this file and others, because as someone who intends to be a professional, I must be unprofessional by not utilizing simple tools such as spell check. 





Below are some templates to make creating new coaches easier. I go more in depth into how to use these in the actual files they come from:


New Coach Template:

<button id="Name">
<img src="Name.PNG" alt="Name" height="25px" Width="87.5px">
  <div  id="Namesub" class= "sub"> <a target="_blank" href="Link1URL" style="text-decoration:none; color: #000000">Link1 Name</a> 
<br> 
 <a target="_blank" href="Link2URL" style="text-decoration:none; color: #000000">Link2 Name</a>
</div>
</button>
<div class="fillspace(#oflinks)" id="Namesp"> 
</div>

Single Link Template:

<a target="_blank" href="link url">
<button id="Name">
<img src="Name.PNG" alt="Name" height="25px" Width="87.5px">
</button>
</a>
<div class="fillspace(#oflinks)" id="Namesp"> 
</div>

Click Listener Template:  
document.getElementById("Name").addEventListener("click", Nameappear; 

Appear Template:

function Nameappear(){
	document.getElementById("Link1").style.display="None";
	document.getElementById("Link2").style.display="None";;
	document.getElementById("Namesub").style.display="Block";
	
	document.getElementById("Link1sp").style.display="None";
	document.getElementById("Link2sp").style.display="None";
	document.getElementById("fillend").style.display="inline-block";
	
	document.getElementById("Name").removeEventListener("click", Nameappear);
	document.getElementById("Name").addEventListener("click", Namedisappear);

Disappear Template:

function Nameappear(){
	document.getElementById("Link1").style.display="inline-block";	
	document.getElementById("Link2").style.display="inline-block";;
	document.getElementById("Namesub").style.display="None";
	
	document.getElementById("Link1sp").style.display="inline-block";
	document.getElementById("Link2sp").style.display="inline-block";
	document.getElementById("fillend").style.display="inline-block";
	
	document.getElementById("Name").removeEventListener("click", Nameappear);
	document.getElementById("Name").addEventListener("click", Namedisappear)


Big shoutouts to Coach Caranna for supporting me and keeping me on track during this project. You helped me to complete my first major
programming endeavor, and I very much appreciate that. Thanks for keeping this alive. -Brennan Powell Class of 2017 5/9/17


