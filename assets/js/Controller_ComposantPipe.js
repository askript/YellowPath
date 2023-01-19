$(document).ready(function() {



	callServlet('ServletComposantPipe',{'typeOperation' : 'Pipe_checkData'}, 
				function(data) 
				{
					if(data != "Pipe_dataEmpty")
					{							
						/*document.getElementById("id_component_77368_45")[0].style.height = "450px";*/
						const obj = JSON.parse(data);
						
						let currentVal = "";
						jQuery.each( obj.keywords, function( i, val ) 
						{
							if(val.Valeur.startsWith("§§"))
							{
								currentVal = val.Valeur.substring(2);
								obj.keywords[i].Valeur = currentVal;
							}
						})
						
						let table = [''];
		
				
						// Text content of each Step
						
						let index = 0;
						let val1="";
						let val2="";	
						
						let currentText  = [''];
						
						obj.keywords.forEach(function(item){
							
						
					 	if (obj.keywords[index].Titre == undefined) {

						val1 = "";
						}else {
							
						val1 = obj.keywords[index].Titre
						}
						
						if( obj.keywords[index].Commentaire == undefined) {
						val2 = ""
						}else {
						val2 = obj.keywords[index].Commentaire;
						} 	
							
						table.push(item.Valeur);   
						this["text" + (index+1)] = "<h1 class='title'>"+ val1 + "</h1><p>"+ val2 +"</p>";
						currentText.push(this["text" + (index+1)]);
						index++;
		
						});
		
						
								
								
								

	
								
								let select = document.getElementsByName('stepSelection') // name of select value HERE *****************
				
								let y = document.getElementById("list"); // ID of select 
								let m = 1;
								let q1=document.querySelector('.progress_inner');//Place of path 
								
								
				
								
								//var lp = new ServletComposantPipe()
								
								// genrate div 
								while (m <= table.length ) {
								
									let newDiv = document.createElement("div");
									newDiv.setAttribute("id","step_progress_"+ m);
									newDiv.classList.add("progress_inner__step");
								   
									q1.appendChild(newDiv);
								
									m++;
									
									}
									
							

								
								let q2=document.querySelectorAll('.progress_inner__step');
								let m1 = 1;
								
								
								// generate labels
								
								while (m1 <= table.length-1 ) {
								
									let newlabel = document.createElement("label");
										 
									newlabel.setAttribute("for","step-"+ m1);
									newlabel.classList.add("labelStep");
									newlabel.textContent = table[m1]; //modif suppr value 
									   
									q2[m1].appendChild(newlabel);
									m1++;
								}
								
								//  Generate inputs 
								let j= 1;
								
								let q3=document.querySelector('.progress_inner__tabs');
								
								while ( j <= table.length-1 ) {
								
									let newDiv5 = document.createElement("input");
								
									newDiv5.setAttribute("id","step-"+ j);
									newDiv5.setAttribute("name","step");
									newDiv5.setAttribute("type","radio");
								
									
									q1.appendChild(newDiv5);
									j++;
								
								}
								
								
								// generate bars
								let newDiv  = {
									div1: document.createElement("div"),
									div2: document.createElement("div"),
									div3: document.createElement("div"),
								  };
								
								newDiv.div1.classList.add("progress_inner__bar");
								newDiv.div2.classList.add("progress_inner__bar--set");
								newDiv.div2.setAttribute("id","progress_bar_set");
								newDiv.div3.classList.add("progress_inner__tabs");
								q1.appendChild(newDiv.div1);
								q1.appendChild(newDiv.div2);
								q1.appendChild(newDiv.div3);
								
							
								
									// generate block for info creation 
								let q4=document.querySelector('.progress_inner__tabs');
								let newFrame = document.createElement("div");
									   
								
								
								
								
								newFrame.classList.add("tab");
								newFrame.setAttribute("id","tab1");
								q4.appendChild(newFrame);
								
								//take back list selection 
								
								/*let formulaire = document.forms.form7;
								let selection = formulaire.elements.list.value; // ICI récuperer selection de JAVA à REMPLACER PAR VALEUR LISTE SELECTIONNE*****************************************************
								
								*/
								
								// find index value of select 
								/*function test(chaine) {
									var nb   = document.getElementById('list').options.length;
									let postion = -1; 
									
									while(nb-- >0) {
										if(document.getElementById('list').options[nb].text === chaine) {
								
										  return(nb);
										}
									  
									}		  
								}
								*/
								


								
								
								let number = table.indexOf(currentVal);
								let number2 = table.length-1;
							
								
							
								let bar1 = document.querySelector('.progress_inner__bar');
								
								let h1 = 50/number2;
							
								/*bar1.style.cssText="left:"+h1+"%;";*/
								bar1.setAttribute("style", "left:"+h1+"%;")
								
								// Rules for  current value of selection list 
										// css Yellow color  labels  &  checked input on value of select 
								let p1=document.querySelector('.tab');
								let w = table.indexOf(currentVal) -1 ; // test selection by number
								let w2 = w+1;
						
								let boxes3 = document.getElementsByClassName("labelStep");
								let boxes4 = document.getElementsByClassName("progress_inner__step");
								let boxes5 = document.getElementsByName("step");
								let boxes6 = document.getElementsByClassName("progress_inner__bar");
								
								
								try{
									// text infos on current value 
									
									let logo = document.createElement("img");
									
									
									callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       	logo.src = data; 
	                                });
									
									boxes4[w2].appendChild(logo);
									logo.setAttribute("id", "image-corpo")
									let p=document.querySelector('.tab');
									p.innerHTML = currentText[w2];
									
									boxes3[w].style.cssText="color:#fbc500 ";
									boxes4[w2].classList.add("progress_inner__step3");
									
									
									boxes5[w].setAttribute("checked","checked");
									// progress bar on current value 
									boxes5[w].classList.add("cssStep"+w2 );
									boxes5[w].classList.add("cssStep"+w2+number2 );
								
									boxes6[0].classList.add("cssStep"+w2);
									boxes6[0].classList.add("cssStep"+w2+number2);
										
									
									 //Comments vizualizer comment/no comment
									 // size manager
									let activeComments = obj.activeComments;
									let sizeComments = obj.sizeComment;
									let hide = document.querySelector('.tab');
									let hidesize = document.querySelector('.progress_inner');
									
								
								
									
									if (activeComments == "1"){
										if (sizeComments == "1") {
											setIFrameHeight(200)
											hidesize.style.cssText="margin-top:30px";
											hide.style.cssText="padding: 0px 20px";
										}else if (sizeComments == "2"){
								     		setIFrameHeight(310)
								     		hide.style.cssText="padding: 0px 20px";
								     		}else if (sizeComments == "3"){
								     		setIFrameHeight(375)
								     		hide.style.cssText="padding: 0px 20px"; 
								     		} else {
											setIFrameHeight(290)
											}
										}else{
										
											setIFrameHeight(90)
											
											hide.style.cssText="opacity: 0";
											hidesize.style.cssText="margin-top:40px";	
										}
								
												/*alert("Vous devez spécifier si la présence de commentaires doit etre activé ou non  ")
												break;*/
									
									
									 }catch(err){
										let msg ='Aucun status n\'est présent sur le projet OU les valeurs de votre liste ne correspondent plus a celle parametrées dans le plugin ';
										/*alert(msg.toUpperCase()
											+
											'\nErreur rencontrée : ' +
											  '\nNom de l\'erreur : ' + err.name +
											  '\nMessage d\'erreur : ' + err.message +
											  'Emplacement de l\'erreur : ' + err.stack);*/
									  }
												
										// css  color  labels before select value  
										while (w >= 1 ) {
										
											let boxes2 = document.getElementsByClassName("progress_inner__step");
										
											boxes2[w].classList.add("progress_inner__step2");
										
											w -= 1;
										}
										
										
										
										
										//DOM CONTENT LOADED  ------------- After Page loading 
										/*window.addEventListener("DOMContentLoaded", (event) => {*/
											
								
											
										//progress bar adapted to number of select value 
									   
											
										
											
											
										
										let x = document.getElementsByName("step");
										
										
										// activation of function depending of the number of value [select]
										
										switch (number2) {
											case 1:
												//disposition of number  adapted to number of select value 
												let obj1 = document.querySelectorAll('.progress_inner__step');
												let z1 = 100/number2;
										
												for(let i =0;i<=1;i++)  {
													obj1[i].style.cssText="width:"+z1+"%;";
												} 
												//progress bar adapted to number of select value 
												let bar1 = document.querySelector('.progress_inner__bar');
												let h1 = 50/number2;
										
												bar1.style.cssText="left:"+h1+"%;";
										
												//background progress bar adapted to number of select value 
												let barset1 = document.querySelector('.progress_inner__bar--set');
												let k1 = 50/number2;
										
												
												barset1.classList.add("set"+number2);
												barset1.style.cssText="width:"+0+"%;left:"+k1+"%;";
												
												//Availability of click functions depending of number of select value
												x[0].addEventListener("click", myStep1);
											  break;
											case 2:
												let obj2 = document.querySelectorAll('.progress_inner__step');
												let z2 = 100/number2;
										
												for(let i =0;i<=2;i++)  {
													obj2[i].style.cssText="width:"+z2+"%;";
												} 
										
												let bar2 = document.querySelector('.progress_inner__bar');
												let h2 = 50/number2;
										
												bar2.style.cssText="left:"+h2+"%;";
										
												let barset2 = document.querySelector('.progress_inner__bar--set');
												let k2 = 50/number2;
											   
												barset2.classList.add("set"+number2);
												barset2.style.cssText="";
												barset2.style.cssText="width:"+50+"%;left:"+k2+"%;";
												
												
												x[0].addEventListener("click", myStep1);
												x[1].addEventListener("click", myStep2);
											  break;
										
											case 3:
										
												let obj3 = document.querySelectorAll('.progress_inner__step');
												let z3 = 100/number2;
										
												for(let i =0;i<=3;i++)  {
										
													obj3[i].style.cssText="width:"+z3+"%;";
												} 
										
												let bar3 = document.querySelector('.progress_inner__bar');
												let h3 = 50/number2;
										
												bar3.style.cssText="left:"+h3+"%;";
										
												let barset3 = document.querySelector('.progress_inner__bar--set');
												let k3 = 50/number2;
											   
												barset3.classList.add("set"+number2);
										
												barset3.style.cssText="width:"+67+"%; left:"+k3+"%;";
										   
										
												x[0].addEventListener("click", myStep1);
												x[1].addEventListener("click", myStep2);
												x[2].addEventListener("click", myStep3);
											  break;
											case 4:
												let obj4 = document.querySelectorAll('.progress_inner__step');
												let z4 = 100/number2;
										
												for(let i =0;i<=4;i++)  {
													
													obj4[i].style.cssText="width:"+z4+"%;";
												} 
										
												let bar4 = document.querySelector('.progress_inner__bar');
												let h4 = 50/number2;
											
												bar4.style.cssText="left:"+h4+"%;";
										
												let barset4 = document.querySelector('.progress_inner__bar--set');
												let k4 = 50/number2;
											   
												
												
												barset4.classList.add("set"+number2);
												barset4.style.cssText="width:"+75+"%;left:"+k4+"%;";
												
											 
										
												x[0].addEventListener("click", myStep1);
												x[1].addEventListener("click", myStep2);
												x[2].addEventListener("click", myStep3);
												x[3].addEventListener("click", myStep4);
											  break;
											case 5:
												
												let obj5 = document.querySelectorAll('.progress_inner__step');
												let z5 = 100/number2;
										
												for(let i =0;i<=5;i++)  {
													obj5[i].style.cssText="width:"+z5+"%;";
												} 
										
												let bar5 = document.querySelector('.progress_inner__bar');
												let h5 = 50/number2;
										
												bar5.style.cssText="left:"+h5+"%;";
										
												let barset5 = document.querySelector('.progress_inner__bar--set');
												let k5 = 50/number2;
											   
												
												
												barset5.classList.add("set"+number2);
												barset5.style.cssText="width:"+80+"%;left:"+k5+"%;";
												
												
										
												x[0].addEventListener("click", myStep1);
												x[1].addEventListener("click", myStep2);
												x[2].addEventListener("click", myStep3);
												x[3].addEventListener("click", myStep4);
												x[4].addEventListener("click", myStep5);
										
											  break;
											case 6:
												let obj6 = document.querySelectorAll('.progress_inner__step');
												let z6 = 100/number2;
										
												for(let i =0;i<=6;i++)  {
													obj6[i].style.cssText="width:"+z6+"%;";
												} 
												
												let bar6 = document.querySelector('.progress_inner__bar');
												let h6 = 50/number2;
										
												bar6.style.cssText="left:"+h6+"%;";
										
												let barset6 = document.querySelector('.progress_inner__bar--set');
												let k6 = 50/number2;
											   
												
												barset6.classList.add("set"+number2);
												barset6.style.cssText="width:"+83+"%;left:"+k6+"%;";
										
										
												x[0].addEventListener("click", myStep1);
												x[1].addEventListener("click", myStep2);
												x[2].addEventListener("click", myStep3);
												x[3].addEventListener("click", myStep4);
												x[4].addEventListener("click", myStep5);
												x[5].addEventListener("click", myStep6);
												
											  break;
											case 7:
												let obj7 = document.querySelectorAll('.progress_inner__step');
												let z7 = 100/number2;
										
												for(let i =0;i<=7;i++)  {
													obj7[i].style.cssText="width:"+z7+"%;";
												} 
										
												let bar7 = document.querySelector('.progress_inner__bar');
												let h7 = 50/number2;
										
												bar7.style.cssText="left:"+h7+"%;";
										
												let barset7 = document.querySelector('.progress_inner__bar--set');
												let k7 = 50/number2;
											   
												
												
												barset7.classList.add("set"+number2);
												barset7.style.cssText="";
												barset7.style.cssText="width:"+86+"%;left:"+k7+"%;";
										
										
												x[0].addEventListener("click", myStep1);
												x[1].addEventListener("click", myStep2);
												x[2].addEventListener("click", myStep3);
												x[3].addEventListener("click", myStep4);
												x[4].addEventListener("click", myStep5);
												x[5].addEventListener("click", myStep6);
												x[6].addEventListener("click", myStep7);
										
											  break;
											case 8:
											   
												let obj8 = document.querySelectorAll('.progress_inner__step');
												let z8= 100/number2;
										
												for(let i =0;i<=8;i++)  {
													obj8[i].style.cssText="width:"+z8+"%;";
												} 
												let bar8 = document.querySelector('.progress_inner__bar');
												let h8 = 50/number2;
										
												bar8.style.cssText="left:"+h8+"%;";
												
												let barset8 = document.querySelector('.progress_inner__bar--set');
												let k8 = 50/number2;
											   
												
											   
												barset8.classList.add("set"+number2);
												barset8.style.cssText="width:"+88+"%;left:"+k8+"%;";
										
													
										
												x[0].addEventListener("click", myStep1);
												x[1].addEventListener("click", myStep2);
												x[2].addEventListener("click", myStep3);
												x[3].addEventListener("click", myStep4);
												x[4].addEventListener("click", myStep5);
												x[5].addEventListener("click", myStep6);
												x[6].addEventListener("click", myStep7);
												x[7].addEventListener("click", myStep8);
											  break;
											case 9:
												let obj9 = document.querySelectorAll('.progress_inner__step');
												let z9 = 100/number2;
										
												for(let i =0;i<=9;i++)  {
													obj9[i].style.cssText="width:"+z9+"%;";
												} 
										
												let bar9 = document.querySelector('.progress_inner__bar');
												let h9 = 50/number2 +0.2;
									
												bar9.style.cssText="left:"+h9+"%;";
										
												let barset9 = document.querySelector('.progress_inner__bar--set');
												let k9 = 50/number2;
											   
												
												
												barset9.classList.add("set"+number2);
												barset9.style.cssText="width:"+89+"%;left:"+k9+"%;";
												
												
										
												x[0].addEventListener("click", myStep1);
												x[1].addEventListener("click", myStep2);
												x[2].addEventListener("click", myStep3);
												x[3].addEventListener("click", myStep4);
												x[4].addEventListener("click", myStep5);
												x[5].addEventListener("click", myStep6);
												x[6].addEventListener("click", myStep7);
												x[7].addEventListener("click", myStep8);
												x[8].addEventListener("click", myStep9);
											  break;
											case 10:
											
												let obj10 = document.querySelectorAll('.progress_inner__step');
												let z10 = 100/number2;
										
												for(let i =0;i<=10;i++)  {
													obj10[i].style.cssText="width:"+z10+"%;";
												} 
										
												let bar10 = document.querySelector('.progress_inner__bar');
												let h10 = 50/number2;
										
												bar10.style.cssText="left:"+h10+"%;";
											
												let barset10 = document.querySelector('.progress_inner__bar--set');
												let k10 = 50/number2;
												   
												barset10.classList.add("set"+number2)
												barset10.style.cssText="width:"+90+"%;left:"+k10+"%;";
												
												for(let i =0;i<=10;i++)  {
													obj10[i].style.cssText="width:"+z10+"%;";
												} 
										
												x[0].addEventListener("click", myStep1);
												x[1].addEventListener("click", myStep2);
												x[2].addEventListener("click", myStep3);
												x[3].addEventListener("click", myStep4);
												x[4].addEventListener("click", myStep5);
												x[5].addEventListener("click", myStep6);
												x[6].addEventListener("click", myStep7);
												x[7].addEventListener("click", myStep8);
												x[8].addEventListener("click", myStep9);
												x[9].addEventListener("click", myStep10);
											  break;
											default:
										
											  alert("Vous avez géneré trop de valeurs[Etapes]")
											  break;
										  }
										  
										
										
										
										
										
										// Animation function (click)  progress bar  
										let buttonClicked = false;
										
										function myStep1(event){
												//disable dble click 
												if (buttonClicked) {
     											 event.preventDefault();
      											 return false;
    											}
											    buttonClicked = true;
											    setTimeout(function() { buttonClicked = false; }, 900);
											

												let p1=document.querySelector('.tab');
												p1.innerHTML = text1;
												
												
									
												let s2= 1;
												while(s2 <= 1) {
													let barStep = document.getElementById("step-"+s2);
													barStep.classList.remove('cssStep'+s2+number2); 						
													s2++
												}
								
										
												let s =1;

												//Gauge
												while ( s < table.length){
													let barStep = document.getElementById("step-"+s);
													barStep.classList.add('cssStep1'+number2); 
													s++
												}
												
												let barStep1 = document.getElementsByClassName("progress_inner__bar")
												let s3 = 1;
										
												while (s3 <= table.length){
											
													barStep1[0].classList.remove('cssStep'+s3+number2);
												
													s3++;
											
												}
												barStep1[0].classList.add('cssStep1'+number2); 
												
												
												//Changing color circle 
											
											let c= 1;
											let x = table.length;
											let y = table.length-1;
											let boxes2 = document.getElementsByClassName("progress_inner__step");
											
											
											while (c <= 1 ) {

											
											boxes2[c].classList.add("progress_inner__step2");
											c++;
											}

											while( x > 2 ) {
											
												if (boxes2[y].classList.contains("progress_inner__step2")) {
									
      												  boxes2[y].classList.remove("progress_inner__step2");
    												}
    												y--;
    												x--;
											}
										
											
												
												
												
												
												//image insertion 
											const militech = document.querySelectorAll('.progress_inner__step');

											// delete img 
											const oldDiv = document.querySelector('#image-corpo');
											oldDiv.classList.add("teleportation");	
												
											setTimeout(function() {
													
											if (oldDiv) {
												oldDiv.classList.add("transition")
												oldDiv.parentNode.removeChild(oldDiv);
											}	
											}, 400);
												
											// Create new img 
												const newDiv = document.createElement('img');
												newDiv.classList.add("teleportation2");	
											 // new image 
											 	setTimeout(function() {
												callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       			newDiv.src = data; 
	                                				});
  												  newDiv.src = data;
												  newDiv.setAttribute("id", "image-corpo");
												  militech[1].appendChild(newDiv);
												}, 600);
													
												
										// Send value of the step to  push  in idchamp java 
										if (obj.activeModifications == "1"){
										sendValChamp(obj.fieldTarget, obj.keywords[0].Valeur);
										
										}
										}
										
										
										function myStep2(event){
											
										
											//disable dble click 
												if (buttonClicked) {
     											 event.preventDefault();
      											 return false;
    											}
											    buttonClicked = true;
											    setTimeout(function() { buttonClicked = false; }, 900);
											
											
											
											let p2=document.querySelector('.tab');
											p2.innerHTML = text2;
										
											
										
											let s2= 1;
											while(s2 <= 2) {
												let barStep = document.getElementById("step-"+s2);
												barStep.classList.remove('cssStep'+s2+number2); 

												s2++
											}
												    
												//Gauge
											
											let s =2;


											while ( s < table.length){
												let barStep = document.getElementById("step-"+s);
												barStep.classList.add('cssStep2'+number2); 
											
												s++
											}
											
											let barStep1 = document.getElementsByClassName("progress_inner__bar")
											let s3 = 1;
										
											while (s3 <= table.length){
										
												barStep1[0].classList.remove('cssStep'+s3+number2);
												s3++;
											
											}
											barStep1[0].classList.add('cssStep2'+number2); 
											
											
											//Changing color circle 
											
											let c= 1;
											let x = table.length;
											let y = table.length-1;
											let boxes2 = document.getElementsByClassName("progress_inner__step");
											
											
											while (c <= 2 ) {

											
											boxes2[c].classList.add("progress_inner__step2");
											c++;
											}

											while( x > 3 ) {
											
												if (boxes2[y].classList.contains("progress_inner__step2")) {
									
      												  boxes2[y].classList.remove("progress_inner__step2");
    												}
    												y--;
    												x--;
											}
										
										
											
											
											
											
											//image insertion 
											const militech = document.querySelectorAll('.progress_inner__step');

											// delete img 
											const oldDiv = document.querySelector('#image-corpo');
											oldDiv.classList.add("teleportation");	
												
											setTimeout(function() {
													
											if (oldDiv) {
													oldDiv.classList.add("transition")
												    oldDiv.parentNode.removeChild(oldDiv);
											}	
											}, 400);
												
											// Create new img 
												const newDiv = document.createElement('img');
												newDiv.classList.add("teleportation2");	
											 // new image 
											 	setTimeout(function() {
												callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       			newDiv.src = data; 
	                                				});
  												  newDiv.src = data;
												  newDiv.setAttribute("id", "image-corpo");
												  militech[2].appendChild(newDiv);
												}, 600);
												
												  	
											// Send value of the step to  push  in idchamp java 
											if (obj.activeModifications == "1"){
											sendValChamp(obj.fieldTarget, obj.keywords[1].Valeur);
											}
											}
										
										function myStep3(event){
										//disable dble click 
												if (buttonClicked) {
     											 event.preventDefault();
      											 return false;
    											}
											    buttonClicked = true;
											    setTimeout(function() { buttonClicked = false; }, 900);
										 let p3=document.querySelector('.tab');


											p3.innerHTML = text3;
										
											
											let s2= 1;
											while(s2 <= 3) {
												let barStep = document.getElementById("step-"+s2);
												barStep.classList.remove('cssStep'+s2+number2); 
		
												s2++
											}

												//Gauge
													
											
											let s =3;

											while ( s < table.length){
												let barStep = document.getElementById("step-"+s);
												barStep.classList.add('cssStep3'+number2);  
									 
												s++
											}
											
											let barStep1 = document.getElementsByClassName("progress_inner__bar")
											let s3 = 1;
										
											while (s3 <= table.length){
												barStep1[0].classList.remove('cssStep'+s3+number2);
												s3++;
										
											}
											barStep1[0].classList.add('cssStep3'+number2); 
											
											
											
											//Changing color circle 
											
											let c= 1;
											let x = table.length;
											let y = table.length-1;
											let boxes2 = document.getElementsByClassName("progress_inner__step");
											
											
											while (c <= 3 ) {

											
											boxes2[c].classList.add("progress_inner__step2");
											c++;
											}

											while( x > 4 ) {
											
												if (boxes2[y].classList.contains("progress_inner__step2")) {
									
      												  boxes2[y].classList.remove("progress_inner__step2");
    												}
    												y--;
    												x--;
											}
										
											
											
											
											
											
											
											
											
											//image insertion 
											const militech = document.querySelectorAll('.progress_inner__step');

											// delete img 
											const oldDiv = document.querySelector('#image-corpo');
											oldDiv.classList.add("teleportation");	
												
											setTimeout(function() {
													
											if (oldDiv) {
												oldDiv.classList.add("transition")
												oldDiv.parentNode.removeChild(oldDiv);
											}	
											}, 400);
												
											// Create new img 
												const newDiv = document.createElement('img');
												newDiv.classList.add("teleportation2");	
											 // new image 
											 	setTimeout(function() {
												callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       			newDiv.src = data; 
	                                				});
  												  newDiv.src = data;
												  newDiv.setAttribute("id", "image-corpo");
												  militech[3].appendChild(newDiv);
												}, 600);
												
												    
											// Send value of the step to  push  in idchamp java 
										if (obj.activeModifications == "1"){
										sendValChamp(obj.fieldTarget, obj.keywords[2].Valeur);
										}
										}
										
										
										function myStep4(event){
											//disable dble click 
												if (buttonClicked) {
     											 event.preventDefault();
      											 return false;
    											}
											    buttonClicked = true;
											    setTimeout(function() { buttonClicked = false; }, 900);
										
											let p4=document.querySelector('.tab');
											p4.innerHTML = text4;
										
											let s2= 1;
											while(s2 <= 4) {
												let barStep = document.getElementById("step-"+s2);
												barStep.classList.remove('cssStep'+s2+number2); 
												s2++
											}
												//Gauge
											
											let s =4;
	
											
											while ( s < table.length){
												let barStep = document.getElementById("step-"+s);
												barStep.classList.add('cssStep4'+number2);
												s++
											}
											
											let barStep1 = document.getElementsByClassName("progress_inner__bar")
											let s3 = 1;
										
											while (s3 <= table.length){
										
												barStep1[0].classList.remove('cssStep'+s3+number2);
												s3++;
										
											}
											barStep1[0].classList.add('cssStep4'+number2); 
											
											//Changing color circle 
											
											let c= 1;
											let x = table.length;
											let y = table.length-1;
											let boxes2 = document.getElementsByClassName("progress_inner__step");
											
											
											while (c <= 4 ) {

											
											boxes2[c].classList.add("progress_inner__step2");
											c++;
											}

											while( x > 5 ) {
											
												if (boxes2[y].classList.contains("progress_inner__step2")) {
									
      												  boxes2[y].classList.remove("progress_inner__step2");
    												}
    												y--;
    												x--;
											}
										
											
											
											
											
												//image insertion 
											const militech = document.querySelectorAll('.progress_inner__step');

											// delete img 
											const oldDiv = document.querySelector('#image-corpo');
											oldDiv.classList.add("teleportation");	
												
											setTimeout(function() {
													
											if (oldDiv) {
												oldDiv.classList.add("transition")
												oldDiv.parentNode.removeChild(oldDiv);
											}	
											}, 400);
												
											// Create new img 
												const newDiv = document.createElement('img');
												newDiv.classList.add("teleportation2");	
											 // new image 
											 	setTimeout(function() {
												callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       			newDiv.src = data; 
	                                				});
  												  newDiv.src = data;
												  newDiv.setAttribute("id", "image-corpo");
												  militech[4].appendChild(newDiv);
												}, 600);
												
											// Send value of the step to  push  in idchamp java 
										if (obj.activeModifications == "1"){
										sendValChamp(obj.fieldTarget, obj.keywords[3].Valeur);
										}
										
										}
										
										
										function myStep5(event){
											//disable dble click 
												if (buttonClicked) {
     											 event.preventDefault();
      											 return false;
    											}
											    buttonClicked = true;
											    setTimeout(function() { buttonClicked = false; }, 900);
											let p5=document.querySelector('.tab');
										
											p5.innerHTML = text5;
										
											let s2= 1;
											while(s2 <= 5) {
												let barStep = document.getElementById("step-"+s2);
												barStep.classList.remove('cssStep'+s2+number2); 
												s2++
											}
										
											
												//Gauge
										
											let s =5;

											while ( s < table.length){
												let barStep = document.getElementById("step-"+s);
												barStep.classList.add('cssStep5'+number2);
												s++
											}
											
											let barStep1 = document.getElementsByClassName("progress_inner__bar")
											let s3 = 1;
										
											while (s3 <= table.length){
										
												barStep1[0].classList.remove('cssStep'+s3+number2);
												s3++;
										
											}
											barStep1[0].classList.add('cssStep5'+number2); 
											
											
											//Changing color circle 
											
											let c= 1;
											let x = table.length;
											let y = table.length-1;
											let boxes2 = document.getElementsByClassName("progress_inner__step");
											
											
											while (c <= 5 ) {

											
											boxes2[c].classList.add("progress_inner__step2");
											c++;
											}

											while( x > 6 ) {
											
												if (boxes2[y].classList.contains("progress_inner__step2")) {
									
      												  boxes2[y].classList.remove("progress_inner__step2");
    												}
    												y--;
    												x--;
											}
										









												//image insertion 
											const militech = document.querySelectorAll('.progress_inner__step');

											// delete img 
											const oldDiv = document.querySelector('#image-corpo');
											oldDiv.classList.add("teleportation");	
												
											setTimeout(function() {
													
											if (oldDiv) {
												oldDiv.classList.add("transition")
												oldDiv.parentNode.removeChild(oldDiv);
											}	
											}, 400);
												
											// Create new img 
												const newDiv = document.createElement('img');
												newDiv.classList.add("teleportation2");	
											 // new image 
											 	setTimeout(function() {
												callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       			newDiv.src = data; 
	                                				});
  												  newDiv.src = data;
												  newDiv.setAttribute("id", "image-corpo");
												  militech[5].appendChild(newDiv);
												}, 600);
												
											// Send value of the step to  push  in idchamp java 
											if (obj.activeModifications == "1"){
										sendValChamp(obj.fieldTarget, obj.keywords[4].Valeur);
										
										}
										
										}
										
										
										function myStep6(event){
											//disable dble click 
												if (buttonClicked) {
     											 event.preventDefault();
      											 return false;
    											}
											    buttonClicked = true;
											    setTimeout(function() { buttonClicked = false; }, 900);
											let p6=document.querySelector('.tab');
										
											p6.innerHTML = text6;
										
											let s2= 1;
											while(s2 <= 6) {
												let barStep = document.getElementById("step-"+s2);
												barStep.classList.remove('cssStep'+s2+number2); 
												s2++
											}
										
												//Gauge
											let s =6;
											
											while ( s < table.length){
												let barStep = document.getElementById("step-"+s);
												barStep.classList.add('cssStep6'+number2);
												s++
											}
											
											let barStep1 = document.getElementsByClassName("progress_inner__bar")
											let s3 = 1;
										
											while (s3 <= table.length){
										
												barStep1[0].classList.remove('cssStep'+s3+number2);
												s3++;
										
											}
											barStep1[0].classList.add('cssStep6'+number2); 
											
											
											//Changing color circle 
											
											let c= 1;
											let x = table.length;
											let y = table.length-1;
											let boxes2 = document.getElementsByClassName("progress_inner__step");
											
											
											while (c <= 6 ) {

											
											boxes2[c].classList.add("progress_inner__step2");
											c++;
											}

											while( x > 7 ) {
											
												if (boxes2[y].classList.contains("progress_inner__step2")) {
									
      												  boxes2[y].classList.remove("progress_inner__step2");
    												}
    												y--;
    												x--;
											}
										
										
											
											
											//image insertion 
											const militech = document.querySelectorAll('.progress_inner__step');

											// delete img 
											const oldDiv = document.querySelector('#image-corpo');
											oldDiv.classList.add("teleportation");	
												
											setTimeout(function() {
													
											if (oldDiv) {
												oldDiv.classList.add("transition")
												oldDiv.parentNode.removeChild(oldDiv);
											}	
											}, 400);
												
											// Create new img 
												const newDiv = document.createElement('img');
												newDiv.classList.add("teleportation2");	
											 // new image 
											 	setTimeout(function() {
												callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       			newDiv.src = data; 
	                                				});
  												  newDiv.src = data;
												  newDiv.setAttribute("id", "image-corpo");
												  militech[6].appendChild(newDiv);
												}, 600);

											// Send value of the step to  push  in idchamp java 
										if (obj.activeModifications == "1"){
											
											
										sendValChamp(obj.fieldTarget, obj.keywords[5].Valeur);
										}
										}
										
										
										function myStep7(event){
											//disable dble click 
												if (buttonClicked) {
     											 event.preventDefault();
      											 return false;
    											}
											    buttonClicked = true;
											    setTimeout(function() { buttonClicked = false; }, 900);
											let p6=document.querySelector('.tab');
										
											p6.innerHTML = text7;
										
											let s2= 1;
											while(s2 <= 7) {
												let barStep = document.getElementById("step-"+s2);
												barStep.classList.remove('cssStep'+s2+number2); 
												s2++
											}
										
											let s =7;
											
											while ( s < table.length){
												let barStep = document.getElementById("step-"+s);
												barStep.classList.add('cssStep7'+number2);
												s++
											}
											
											let barStep1 = document.getElementsByClassName("progress_inner__bar")
										
						    
												//Gauge

											let s3 = 1;
											while (s3 <= table.length){
										
												barStep1[0].classList.remove('cssStep'+s3+number2);
												s3++;
										
											}
											barStep1[0].classList.add('cssStep7'+number2);  
											
											
											//Changing color circle 
											
											let c= 1;
											let x = table.length;
											let y = table.length-1;
											let boxes2 = document.getElementsByClassName("progress_inner__step");
											
											
											while (c <= 7 ) {

											
											boxes2[c].classList.add("progress_inner__step2");
											c++;
											}

											while( x > 8 ) {
											
												if (boxes2[y].classList.contains("progress_inner__step2")) {
									
      												  boxes2[y].classList.remove("progress_inner__step2");
    												}
    												y--;
    												x--;
											}
										
											
											
											//image insertion 
											const militech = document.querySelectorAll('.progress_inner__step');

											// delete img 
											const oldDiv = document.querySelector('#image-corpo');
											oldDiv.classList.add("teleportation");	
												
											setTimeout(function() {
													
											if (oldDiv) {
												oldDiv.classList.add("transition")
												oldDiv.parentNode.removeChild(oldDiv);
											}	
											}, 400);
												
											// Create new img 
												const newDiv = document.createElement('img');
												newDiv.classList.add("teleportation2");	
											 // new image 
											 	setTimeout(function() {
												callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       			newDiv.src = data; 
	                                				});
  												  newDiv.src = data;
												  newDiv.setAttribute("id", "image-corpo");
												  militech[7].appendChild(newDiv);
												}, 600);
												

											// Send value of the step to  push  in idchamp java 
										if (obj.activeModifications == "1"){
										sendValChamp(obj.fieldTarget, obj.keywords[6].Valeur);
										}
										}
										
										
										function myStep8(event){
											//disable dble click 
												if (buttonClicked) {
     											 event.preventDefault();
      											 return false;
    											}
											    buttonClicked = true;
											    setTimeout(function() { buttonClicked = false; }, 900);
											let p8=document.querySelector('.tab');
										
											p8.innerHTML = text8;
										
											let s2= 1;
											while(s2 <= 8) {
												let barStep = document.getElementById("step-"+s2);
												barStep.classList.remove('cssStep'+s2+number2); 
												s2++
											}
											
   
												//Gauge

											let s =8;
											
											while ( s < table.length){
												let barStep = document.getElementById("step-"+s);
												barStep.classList.add('cssStep8'+number2);
												s++
											}
											
											let barStep1 = document.getElementsByClassName("progress_inner__bar")
											let s3 = 1;
											while (s3 <= table.length){
										
												barStep1[0].classList.remove('cssStep'+s3+number2);
												s3++;
										
											}
											barStep1[0].classList.add('cssStep8'+number2); 
											
											
											//Changing color circle 
											
											let c= 1;
											let x = table.length;
											let y = table.length-1;
											let boxes2 = document.getElementsByClassName("progress_inner__step");
											
											
											while (c <= 8 ) {

											
											boxes2[c].classList.add("progress_inner__step2");
											c++;
											}

											while( x > 9 ) {
											
												if (boxes2[y].classList.contains("progress_inner__step2")) {
									
      												  boxes2[y].classList.remove("progress_inner__step2");
    												}
    												y--;
    												x--;
											}
										
										
											
											
											
											
												//image insertion 
											const militech = document.querySelectorAll('.progress_inner__step');

											// delete img 
											const oldDiv = document.querySelector('#image-corpo');
											oldDiv.classList.add("teleportation");	
												
											setTimeout(function() {
													
											if (oldDiv) {
												oldDiv.classList.add("transition")
												oldDiv.parentNode.removeChild(oldDiv);
											}	
											}, 400);
												
											// Create new img 
												const newDiv = document.createElement('img');
												newDiv.classList.add("teleportation2");	
											 // new image 
											 	setTimeout(function() {
												callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       			newDiv.src = data; 
	                                				});
  												  newDiv.src = data;
												  newDiv.setAttribute("id", "image-corpo");
												  militech[8].appendChild(newDiv);
												}, 600);
												
											// Send value of the step to  push  in idchamp java 
										if (obj.activeModifications == "1"){
										sendValChamp(obj.fieldTarget, obj.keywords[7].Valeur);
										}
										}
										
										
										function myStep9(event){
											//disable dble click 
												if (buttonClicked) {
     											 event.preventDefault();
      											 return false;
    											}
											    buttonClicked = true;
											    setTimeout(function() { buttonClicked = false; }, 900);
											let p9=document.querySelector('.tab');
										
											p9.innerHTML = text9;
										
											let s2= 1;
											while(s2 <= 9) {
												let barStep = document.getElementById("step-"+s2);
												barStep.classList.remove('cssStep'+s2+number2); 
												s2++
											}
											let s =9;
											
											while ( s < table.length){
												let barStep = document.getElementById("step-"+s);
												barStep.classList.add('cssStep9'+number2);
												s++
											}
											
											let barStep1 = document.getElementsByClassName("progress_inner__bar")
										
												let s3 = 1;
											while (s3 <= table.length){
										
												barStep1[0].classList.remove('cssStep'+s3+number2);
												s3++;
										
											}
										
											barStep1[0].classList.add('cssStep9'+number2); 
											
											//Changing color circle 
											
											let c= 1;
											let x = table.length;
											let y = table.length-1;
											let boxes2 = document.getElementsByClassName("progress_inner__step");
											
											
											while (c <= 9) {

											
											boxes2[c].classList.add("progress_inner__step2");
											c++;
											}

											while( x > 10 ) {
											
												if (boxes2[y].classList.contains("progress_inner__step2")) {
									
      												  boxes2[y].classList.remove("progress_inner__step2");
    												}
    												y--;
    												x--;
											}
										
										
											
											
											
												//image insertion 
											const militech = document.querySelectorAll('.progress_inner__step');

											// delete img 
											const oldDiv = document.querySelector('#image-corpo');
											oldDiv.classList.add("teleportation");	
												
											setTimeout(function() {
													
											if (oldDiv) {
												oldDiv.classList.add("transition")
												oldDiv.parentNode.removeChild(oldDiv);
											}	
											}, 400);
												
											// Create new img 
												const newDiv = document.createElement('img');
												newDiv.classList.add("teleportation2");	
											 // new image 
											 	setTimeout(function() {
												callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       			newDiv.src = data; 
	                                				});
  												  newDiv.src = data;
												  newDiv.setAttribute("id", "image-corpo");
												  militech[9].appendChild(newDiv);
												}, 600);
												
											// Send value of the step to  push  in idchamp java 
										if (obj.activeModifications == "1"){
										sendValChamp(obj.fieldTarget, obj.keywords[8].Valeur);
										}
										}
										
										
										function myStep10(event){
											//disable dble click 
												if (buttonClicked) {
     											 event.preventDefault();
      											 return false;
    											}
											    buttonClicked = true;
											    setTimeout(function() { buttonClicked = false; }, 900);
							
											let p10=document.querySelector('.tab');
										
											p10.innerHTML = text10;
											let s2= 1;
										
											while(s2 <= 10) {
												let barStep = document.getElementById("step-"+s2);
												barStep.classList.remove('cssStep'+s2+number2); 
												s2++
											}
												//Gauge
										
										
											let s =10;
											
											while ( s < table.length){
												let barStep = document.getElementById("step-"+s);
												barStep.classList.add('cssStep10'+number2);
												s++
											}
										
										 
											let barStep1 = document.getElementsByClassName("progress_inner__bar")
										
											let s3 = 1;
											while (s3 <= table.length){
										
												barStep1[0].classList.remove('cssStep'+s3+number2);
												s3++;
										
											}
											barStep1[0].classList.add('cssStep10'+number2); 
											
											
											//Changing color circle 
											
											let c= 1;
											let x = table.length;
											let y = table.length-1;
											let boxes2 = document.getElementsByClassName("progress_inner__step");
											
											
											while (c <= 5 ) {

											
											boxes2[c].classList.add("progress_inner__step2");
											c++;
											}

									
										
											
											
											
											
												//image insertion 
											const militech = document.querySelectorAll('.progress_inner__step');

											// delete img 
											const oldDiv = document.querySelector('#image-corpo');
											oldDiv.classList.add("teleportation");	
												
											setTimeout(function() {
													
											if (oldDiv) {
													oldDiv.classList.add("transition")
												    oldDiv.parentNode.removeChild(oldDiv);
											}	
											}, 800);
												
											// Create new img 
												const newDiv = document.createElement('img');
												newDiv.classList.add("teleportation2");	
											 // new image 
											 	setTimeout(function() {
												callServlet('ServletComposantPipe',{'typeOperation':'Pipe_getUrlImage'},function(data){  
                                       			newDiv.src = data; 
	                                				});
  												  newDiv.src = data;
												  newDiv.setAttribute("id", "image-corpo");
												  militech[10].appendChild(newDiv);
												}, 900);
												
											
											
											// Send value of the step to  push  in idchamp java 
										if (obj.activeModifications == "1"){
										sendValChamp(obj.fieldTarget, obj.keywords[9].Valeur);
										}
											};
											
											
																					     const div = document.createElement('div');
  div.className = 'arrow-left';


  const body = document.querySelector('.progress_inner');
  const title = document.querySelector('.title');

  body.appendChild(div);

  const element = document.querySelector('.arrow-left');
// Active ou désactive les classes "state1" et "state2" de l'élément
 element.addEventListener('click', function() {

   element.classList.toggle('state1');
   body.classList.toggle('state2');
   title.classList.toggle('state3');

});

										
										 		
					}
					 
				
				
					
				}, function (error) 
				{
					console.log("Error - ServletComposantPipe : " + error.message);
				});
				
				
				
				
});