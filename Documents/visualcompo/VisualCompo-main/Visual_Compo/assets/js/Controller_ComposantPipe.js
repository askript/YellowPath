$(document).ready(function() 

{	console.log("Z");
	callServlet('ServletComposantPipe',{'typeOperation' : 'Pipe_checkData'}, 
				function(data) 
				{
					console.log('check1');
					if(data != "Pipe_dataEmpty")
					{
						console.log('check2');
						const keywords = data.split("|");
						let positionCurrentVal = -1;
						let currentVal = "";
						console.log('check3');
						console.log('key'+ keywords);
							console.log('k'+ data);
						jQuery.each( keywords, function( i, val ) 
						{

							if(val.startsWith("§§"))
							{
								currentVal = val.substring(2);
								positionCurrentVal = i;
								let transorm = data.replace('§§', ''); 
								let transform2 = transorm.split('|');
								
								let table = [''];
				
								transform2.forEach(function(item){
								table.push(item);   
								});
								console.log(table);
								
								
								/*document.getElementById("id_component_77368_45")[0].style.height = "450px";*/
						
									


								// Text content of each Step
								let text1 = "<h1>Info 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>";
								let text2 = "<h1>Info 2</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>";
								let text3 = "<h1>Info 3</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>";
								let text4 = "<h1>Info 4</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>";
								let text5 = "<h1>Info 5</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>";
								let text6 = "<h1>Info 6</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>";
								let text7 = "<h1>Info 7</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>";
								let text8 = "<h1>Info 8</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>";
								let text9 = "<h1>Info 9</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>";
								let text10 = "<h1>Info 10</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>";
								
								let select = document.getElementsByName('stepSelection') // name of select value HERE *****************
								console.log(select);
								let y = document.getElementById("list"); // ID of select 
								let m = 1;
								let q1=document.querySelector('.progress_inner');//Place of path 
								
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
								
								console.log(selection);*/
								
								// find index value of select 
								function test(chaine) {
								    var nb   = document.getElementById('list').options.length;
								    let postion = -1; 
								    
								    while(nb-- >0) {
								        if(document.getElementById('list').options[nb].text === chaine) {
								
								      	  return(nb);
								        }
								      
								    }		  
								}
								
								
								
								let number = table.indexOf(currentVal);
								let number2 = table.length-1;
								
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
								    boxes3[w].style.cssText="color:#fbc500 ";
								    boxes4[w2].classList.add("progress_inner__step3");
								    boxes5[w].setAttribute("checked","checked");
								    // progress bar on current value 
								    boxes5[w].classList.add("cssStep"+w2 );
								    boxes5[w].classList.add("cssStep"+w2+number2 );
								
								    boxes6[0].classList.add("cssStep"+w2);
								    boxes6[0].classList.add("cssStep"+w2+number2);
								        
								    // text infos on current value 
								    let currentText  = [text1,text2,text3,text4,text5,text6,text7,text8,text9,text10];
								
								    p1.innerHTML = currentText[w];
								
								}catch(err){
								    let msg ='Aucun status n\'est présent sur le projet';
								    alert(msg.toUpperCase()
								        +
								        '\nErreur rencontrée : ' +
								          '\nNom de l\'erreur : ' + err.name +
								          '\nMessage d\'erreur : ' + err.message +
								          'Emplacement de l\'erreur : ' + err.stack);
								}
								
								
								
								
								
								// css  color  labels before select value  
								while (w >= 1 ) {
								
								    let boxes2 = document.getElementsByClassName("progress_inner__step");
								
								    boxes2[w].classList.add("progress_inner__step2");
								
								    w -= 1;
								}
								
								
								
								
								//DOM CONTENT LOADED  ------------- After Page loading 
								window.addEventListener("DOMContentLoaded", (event) => {
									
									
									
								//progress bar adapted to number of select value 
						        let bar1 = document.querySelector('.progress_inner__bar');
						        let h1 = 50/number2;
						
						        bar1.style.cssText="left:"+h1+"%;";
									
									
									
									
								
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
								        /*let bar1 = document.querySelector('.progress_inner__bar');
								        let h1 = 50/number2;
								
								        bar1.style.cssText="left:"+h1+"%;";*/
								
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
								        let h9 = 50/number2;
								
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
								  
								
								// Animation function (click)  
								function myStep1(){
								        let p1=document.querySelector('.tab');
								        p1.innerHTML = text1;
								        
								        let s2= 1;
								        while(s2 <= 1) {
								            let barStep = document.getElementById("step-"+s2);
								            barStep.classList.remove('cssStep'+s2+number2); 
								            s2++
								        }
								
								        let s =1;
								        
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
								
								}
								
								
								
								function myStep2(){
								    let p2=document.querySelector('.tab');
								    p2.innerHTML = text2;
								
								    let s2= 1;
								    while(s2 <= 2) {
								        let barStep = document.getElementById("step-"+s2);
								        barStep.classList.remove('cssStep'+s2+number2); 
								        s2++
								    }
								    
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
								}
								
								function myStep3(){
								
								 let p3=document.querySelector('.tab');
								
								    p3.innerHTML = text3;
								
								    let s2= 1;
								    while(s2 <= 3) {
								        let barStep = document.getElementById("step-"+s2);
								        barStep.classList.remove('cssStep'+s2+number2); 
								        s2++
								    }
								
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
								}
								
								
								function myStep4(){
								
								    let p4=document.querySelector('.tab');
								    p4.innerHTML = text4;
								
								    let s2= 1;
								    while(s2 <= 4) {
								        let barStep = document.getElementById("step-"+s2);
								        barStep.classList.remove('cssStep'+s2+number2); 
								        s2++
								    }
								    
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
								}
								
								
								function myStep5(){
								    let p5=document.querySelector('.tab');
								
								    p5.innerHTML = text5;
								
								    let s2= 1;
								    while(s2 <= 5) {
								        let barStep = document.getElementById("step-"+s2);
								        barStep.classList.remove('cssStep'+s2+number2); 
								        s2++
								    }
								
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
								}
								
								
								function myStep6(){
								    let p6=document.querySelector('.tab');
								
								    p6.innerHTML = text6;
								
								    let s2= 1;
								    while(s2 <= 6) {
								        let barStep = document.getElementById("step-"+s2);
								        barStep.classList.remove('cssStep'+s2+number2); 
								        s2++
								    }
								
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
								}
								
								
								function myStep7(){
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
								
								    let s3 = 1;
								    while (s3 <= table.length){
								
								        barStep1[0].classList.remove('cssStep'+s3+number2);
								        s3++;
								
								    }
								    barStep1[0].classList.add('cssStep7'+number2);  
								}
								
								
								function myStep8(){
								    let p8=document.querySelector('.tab');
								
								    p8.innerHTML = text8;
								
								    let s2= 1;
								    while(s2 <= 8) {
								        let barStep = document.getElementById("step-"+s2);
								        barStep.classList.remove('cssStep'+s2+number2); 
								        s2++
								    }
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
								}
								
								
								function myStep9(){
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
								}
								
								
								function myStep10(){
								
								    let p10=document.querySelector('.tab');
								
								    p10.innerHTML = text10;
								    let s2= 1;
								
								    while(s2 <= 10) {
								        let barStep = document.getElementById("step-"+s2);
								        barStep.classList.remove('cssStep'+s2+number2); 
								        s2++
								    }
								
								    
								    
								
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
								
								
								}
								          });
									
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
							}
							else
							{
								if(positionCurrentVal == -1)
								{

								}
								else
								{
									
								}							
							}
						});
						
						








						
					}
				}, function (error) 
				{
					console.log("Error - ServletComposantPipe : " + error.message);
				});
				
	
				
				
				
});