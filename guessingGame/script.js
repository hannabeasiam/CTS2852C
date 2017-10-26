

//constent score for each player is 501
var player1 = 501;
var player2 = 501;
//prompt two player name
var result = 'return word';
function game(){
	var p1 = prompt('Player1, Enter your name','p1');
	var p2 = prompt('Player2, Enter Your name','p2');

  //prompt user 20 times i<20
	for (var i=0; i<3; i++){

		//two player input thair number call valid function to validate user input
		var input1 = valid(p1);
		console.log(input1);
		var input2 = valid(p2);
		console.log(input2);

		player1 = player1 - input1;
		player2 = player2 - input2;
		console.log(player1);
		console.log(player2);

		console.log('i is '+i)

		if(player1 ==0 && input1%2==0){
			result = 'Contrat!!' + p1 +'\n' + 'You are the Winner';
			alert(result);
			return result;
			break;

		}
		else if(player2 ==0 && input2%2==0){
			result = 'Contrat!!' + p2 +'\n' + 'You are the Winner';
			alert(rerult);
			return result;
			break;

		}
		//catch last 20th trial i==19
		else if(i==2){
			if(player1 < player2){
				result = 'Congrat!!' + '\n' + 'No one heat zero, but your score was lower ' + p1 +'\n' + 'You are the Winner';
				alert(result);
				return result;
				break;

			}
			else if(player1 > player2){
				result = 'Congrat!!' + '\n' + 'No one heat zero, but your score was lower ' + p2 +'\n' + 'You are the Winner';
				alert(result);
				return result;
				break;

			}
		}

//close for loop
		};
		//return result;
return result;

//close function game
}

var message = result;
function display(){

	console.log(message);
	alert(message);
}

//user must enter number between 0 to 180 so apply if condition
function valid(name){
	//prompt user input number between 0 to 180 integer
	var inputNumber = Number(prompt(name+', Please enter number between 0~180','input here'));
	console.log(typeof(inputNumber));
	//input number's data type or number range is not valid, display warning and prompt again.
	while((inputNumber<0 || inputNumber>180) || (Number.isNaN(inputNumber)==true) || inputNumber==null){
		//if not validate data type - prompt again display 'this is not valid number'
		if(Number.isNaN(inputNumber)==true || inputNumber==null){
			alert('input valid data type');
			var inputNumber = Number(prompt(name+', enter number 0~180','input here'));
			console.log(inputNumber);
			}
		//if number is not in range
		else if(inputNumber<0 || inputNumber>180){
			alert('please input number range between 0~180');
			var inputNumber = Number(prompt(name+', enter number 0~180','input here'));
			console.log(inputNumber);
			}
	}
	return inputNumber;

	}
