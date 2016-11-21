Framework7.prototype.plugins.statistics = function (app, params) {
if (!params) return;
  


    return {
        hooks: {
            appInit: function () {

//BUTTON CLICK------------------------------------
             

                var textarea = document.getElementById("txtarea");
                


                //QSTART----------------------------------------


                $$("#btn_start").on('click',function(){
                         var correct = "0";
                         
                        parseInt(localStorage.setItem("correct", correct));
                       
                        location.href='quizlist.html'

                });

                //QSTART END----------------------------------------



                //QUIZLIST----------------------------------------

                $$("#list").on('click',function(){
                  location.href='list.html'
                });

                $$("#secondquiz").on('click',function(){
                  location.href='question1q2.html'
                });


                //QUIZLIST END----------------------------------------



                


                //QUIZ 2 BUTTONS----------------------------------------
                $$("#btn_q1q2").on('click',function(){
					var selectedOption = document.querySelector('input[type=radio]:checked');
						if(!selectedOption){
							alert('Please select your answer!');
						return;
					}
					
                    if (q1a2q2.checked){
					
                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));
                              
                             }
                      

                  location.href='question2q2.html'
                });
                $$("#btn_q2q2").on('click',function(){
					var selectedOption = document.querySelector('input[type=radio]:checked');
						if(!selectedOption){
							alert('Please select your answer!');
						return;
					}
					
                    if (q2a2q2.checked){
                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));
                    }
                              

                  location.href='question3q2.html'       
                });
                $$("#btn_q3q2").on('click',function(){
				var selectedOption = document.querySelector('input[type=radio]:checked');
						if(!selectedOption){
							alert('Please select your answer!');
						return;
					}
					
                    if (q3a4q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));}
                                  
                  location.href='question4q2.html'    
                });
                $$("#btn_q4q2").on('click',function(){
				var selectedOption = document.querySelector('input[type=radio]:checked');
						if(!selectedOption){
							alert('Please select your answer!');
						return;
					}
					
                    if (q4a1q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));}                    



                  location.href='question5q2.html'
                });
                $$("#btn_q5q2").on('click',function(){
				var selectedOption = document.querySelector('input[type=radio]:checked');
						if(!selectedOption){
							alert('Please select your answer!');
						return;
					}
                    if (q5a3q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));


                  
                }

                    else{

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct);
                       
                       
                    }          
                      
                     location.href='question6q2.html'
                });
				$$("#btn_q6q2").on('click',function(){
				var selectedOption = document.querySelector('input[type=radio]:checked');
						if(!selectedOption){
							alert('Please select your answer!');
						return;
					}
                    if (q6a3q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));


                  
                }

                    else{

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct);
                       
                       
                    }          
                      
                     location.href='question7q2.html'
                });
				$$("#btn_q7q2").on('click',function(){
				var selectedOption = document.querySelector('input[type=radio]:checked');
						if(!selectedOption){
							alert('Please select your answer!');
						return;
					}
                    if (q7a4q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));


                  
                }

                    else{

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct);
                       
                       
                    }          
                      
                     location.href='question8q2.html'
                });
				$$("#btn_q8q2").on('click',function(){
				var selectedOption = document.querySelector('input[type=radio]:checked');
						if(!selectedOption){
							alert('Please select your answer!');
						return;
					}
                    if (q8a1q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));


                  
                }

                    else{

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct);
                       
                       
                    }          
                      
                     location.href='question9q2.html'
                });
				$$("#btn_q9q2").on('click',function(){
				var selectedOption = document.querySelector('input[type=radio]:checked');
						if(!selectedOption){
							alert('Please select your answer!');
						return;
					}
                    if (q9a2q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));


                  
                }

                    else{

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct);
                       
                       
                    }          
                      
                     location.href='question10q2.html'
                });
				$$("#btn_q10q2").on('click',function(){
				var selectedOption = document.querySelector('input[type=radio]:checked');
						if(!selectedOption){
							alert('Please select your answer!');
						return;
					}
                    if (q10a3q2.checked){

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct)+1;
                        parseInt(localStorage.setItem("correct", newVal));


                  
                }

                    else{

                    var correct = localStorage.getItem("correct");
                    var newVal = parseInt(correct);
                       
                       
                    }          
                      
                     location.href='score.html'
                });
                //QUIZ 2 BUTTONS END--------------------------------------
                


                //SEE RESULT----------------------------------------
                $$("#btn_results").on('click',function(){
                    var correct = localStorage.getItem("correct");
                  textarea.value=correct;
                  
                  
                });
                //SEE RESULT END----------------------------------------
                
                //BACK TO MENU----------------------------------------
                $$("#btn_menu").on('click',function(){

                  location.href='quizlist.html'
                });
              //BACK TO MENU- END---------------------------------------
			  
			   $$("#btn_list1").on('click',function(){

                  location.href='list1.html'
                });
			
			 $$("#btn_list2").on('click',function(){

                  location.href='list2.html'
                });
				 $$("#btn_list3").on('click',function(){

                  location.href='list3.html'
                });
			
			 $$("#btn_list4").on('click',function(){

                  location.href='list4.html'
                });
				$$("#btn_list5").on('click',function(){

                  location.href='list5.html'
                });
				 $$("#btn_list6").on('click',function(){

                  location.href='list6.html'
                });
			
			 $$("#btn_list7").on('click',function(){

                  location.href='list7.html'
                });
				$$("#btn_list8").on('click',function(){

                  location.href='list8.html'
                });
			
			 $$("#btn_list9").on('click',function(){

                  location.href='list9.html'
                });
				$$("#btn_list10").on('click',function(){

                  location.href='list10.html'
                });
				
                //BACK TO INDEX----------------------------------------
                $$("#btn_index").on('click',function(){

                  location.href='index.html'
                });
				//BACK TO MENU- END---------------------------------------
				
				//HOW TO PLAY----------------------------------------
				$$("#btn_howtoplay").on('click',function(){

                  location.href='help.html'
                });
				
		}
		
	    }
    };
};

var $$ = Dom7;
var app = new Framework7({
    statistics:true
});

