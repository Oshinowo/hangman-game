var words = ['javascript', 'php', 'ruby', 'python','css', 'html', 'react', 'angular','django', 'flask', 'node', 'java', 'c++', 'bootstap'];
		var randomWord = words[Math.floor(Math.random() * words.length)];
		// console.log(randomWord);
		var answerArray = [];
		for (var i = 0; i < randomWord.length; i++) {
				answerArray[i] = ' _ ';
		}
		// console.log(answerArray);
		var remainingLetters = randomWord.length;
		var guessTime = 5;
		while(remainingLetters > 0){
		alert(answerArray.join(' '));
		var guess = prompt('Please input a letter or click cancel to stop playing');
		if (guess === null) {
			break;
		}else if (guess.length !== 1) {
			alert('Please input a single letter');
		}else{
			for (var j = 0; j < randomWord.length; j++) {
				if (randomWord[j] === guess.toLowerCase()) {
					answerArray[j] = guess;
					remainingLetters--;
				}
			}
		}
	}
		alert(answerArray.join(''));
		alert('Congratulations,the answer is ' + randomWord);