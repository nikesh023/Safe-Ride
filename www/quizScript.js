var currentQuestion=0;
var score =0;
var totQuestions=questions.length;

var container=document.getElementById('container');
var questionEl=document.getElementById('question');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var resultCont=document.getElementById('result');

var nxtButton=document.getElementById('nxtBTN');
function loadQuestion(questionIndex) {
	var q=questions[questionIndex];
	questionEl.textContent=(questionIndex+1)+'.'+q.question;
	opt1.textContent=q.option1;
	opt2.textContent=q.option2;
	opt3.textContent=q.option3;
	opt4.textContent=q.option4;
};
function loadNxtQues(){
	var selectedOption=document.querySelector('input[type=radio]:checked')
	if (!selectedOption) {
		alert('Please select your answer!');
	}

	var answer=selectedOption.value;
	
	if (answer==1) {
		score+=5;
	}
	if (answer==2) {
		score+=4;
	}
	if (answer==3) {
		score+=2;
	}
	if (answer==4) {
		score+=0;
	}
	selectedOption.checked=false;
	currentQuestion++;
	if (currentQuestion==totQuestions-1) {
		nxtButton.textContent="Finish";
	}
	if (currentQuestion==totQuestions) {
		container.style.display='none';
		resultCont.style.display='';
		//resultCont.textContent="Your Score:"+ score;
		if (score<10) {
			resultCont.textContent="Your is Score:"+ score +" You can save your life if you avoid risky habbit of drunk driving! ";
			
		}
		if (score>=10&&score<25) {
			resultCont.textContent="Your is Score:"+ score +" You should follow the tips to help you avoid drunk driving. ";
		}
		if (score>=25&&score<=30) {
			resultCont.textContent="Your is Score:"+ score +" You are a passive drinker but you should avoid drunk driving. ";
		}
		return;

	}
	loadQuestion(currentQuestion);

}
loadQuestion(currentQuestion);