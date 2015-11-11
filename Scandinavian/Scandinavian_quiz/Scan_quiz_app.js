var app =angular.module('quizApp', []);

app.directive('quiz', function(quizFactory){
	return {
		restrict: 'AE',
		scope:{},
		templateUrl:'Scandinavian_quiz/Scan_template.html',
		link: function(scope, elem, attrs){
			scope.start = function(){
				scope.id =0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};

			scope.reset = function(){
				scope.inProgress =false;
				scope.score =0;
			}

			scope.getQuestion = function(){
				var q = quizFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode =true;
					scope.right_answer = q.right_answer;
					scope.right_answer_url= q.right_answer_url;
				}else{
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function(){
				if(!$('input[name=answer]:checked').length)return;
				var answer = $('input[name=answer]:checked').val();
				if(answer==scope.options[scope.answer]){
					scope.score++;
					scope.correctAnswer =true;
				}else{
					scope.correctAnswer=false;
				}
				scope.answerMode = false;
			};

			scope.nextQuestion = function(){
				scope.id++;
				scope.getQuestion();
			}
			scope.reset();

		}
	}
});

app.factory('quizFactory', function(){
	var questions = [
	{
		question: "Which scandinavian country has no royal family?",
		options: ["Denmark", "Sweden", "Iceland", "Norway"],
		answer: 2,
		right_answer: "Iceland",
		right_answer_url: "https://answers.yahoo.com/question/index?qid=20110606185712AAL1LhZ"
	},
	{
		question: "Which scandinavian language doesn't come from old norse?",
		options:["Finland", "Faroe Island", "Norway", "Denmark"],
		answer:0,
		right_answer: "Finland",
		right_answer_url:"https://www.quora.com/Why-is-Finnish-so-different-from-other-Scandinavian-languages"
	},
	{
		question:"Dogme 95 movement has started in?",
		options:["Norway", "Denmark", "Sweden", "Iceland"],
		answer:1,
		right_answer:"Denmark",
		right_answer_url:"https://en.wikipedia.org/wiki/Dogme_95"
	},
	{
		question:"Moomins comes from?",
		options:["Iceland", "Sweden", "Finland", "Denmark"],
		answer:2,
		right_answer:"Finland",
		right_answer_url:"https://en.wikipedia.org/wiki/Moomin"
	},
	{
		question:"Pippi Longstocking was originally written in?",
		options:["Danish", "Finnish", "Norwegian", "Swedish"],
		answer:3,
		right_answer:"Swedish",
		right_answer_url:"https://en.wikipedia.org/wiki/Pippi_Longstocking"
	}
	];

	return {
		getQuestion: function(id){
			if(id < questions.length){
				return questions[id];
			}else{
				return false;
			}
		}
	};
});










