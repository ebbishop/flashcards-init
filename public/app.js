var flashcards = angular.module('flashcards',[]);

flashcards.controller('FlashCardCtrl', function($scope){
  // var rand = Math.floor(Math.random()*$scope.flashCards.length)
  $scope.attempts = [];
  // $scope.initialize = function(){
  //   console.log('initialize');
  //   $scope.answeredCorrectly = false;
  //   $scope.answered = false;
  //   $scope.attempts = [];
  // }

  $scope.currentFlashcard = 0;
  $scope.flashCard = $scope.flashCards[$scope.currentFlashcard];

  $scope.answerQuestion = function($stateParams){
    if($scope.attempts.indexOf($stateParams.answer)===-1 && !$scope.answeredCorrectly){
      $scope.attempts.push($stateParams.answer);
      $scope.answered=true;
      if($stateParams.answer.correct){
        $scope.answeredCorrectly = true;
      }else{
        $scope.answeredCorrectly = false;
      }
    }
  }

  // $scope.nextQuestion = function(){
  //   console.log($scope.currentFlashcard);
  //   $scope.flashCard = $scope.flashCards[$scope.currentFlashcard++];
  //   $scope.initialize();
  // }
})

flashcards.controller('MainCtrl', function($scope){
  $scope.flashCards = [
    {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true },
            { text: 'Something lame, who cares, whatever.', correct: false },
            { text: 'Some kind of fish, right?', correct: false }
        ]
    },
    {
        question: 'What is a controller?',
        answers: [
            { text: 'Something that manages my front-end routes', correct: false },
            { text: 'A function that allows me to manage a scope', correct: true },
            { text: 'An Angular template', correct: false }
        ]
    },
    {
        question: 'What does {{ }} do?',
        answers: [
            { text: 'It runs some Javascript', correct: false },
            { text: 'It looks for variables in HTML', correct: false },
            { text: 'It runs an Angular expression that accesses my $scope', correct: true }
        ]
    }
];
})

flashcards.filter('caps', function(){
  return function(text){
    return text.toUpperCase();
  }
})
