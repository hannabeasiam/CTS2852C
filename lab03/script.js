function valid(){
	//prompt user input number between 20 to 100 integer
	var inputNumber = parseInt(prompt('Please enter number between 20~100',''));
	console.log(typeof(inputNumber));
	//input number's data type or number range is not valid, display warning and prompt again.
	while((inputNumber<20 || inputNumber>100) || (Number.isNaN(inputNumber)==true)){
		//if not validate data type - prompt again display 'this is not valid number'
		if(Number.isNaN(inputNumber)==true){
			alert('input valid data type');
			var inputNumber = Number(prompt('enter number 20~100',''));
			console.log(inputNumber);
			}
		//if number is not in range
		else if(inputNumber<20 || inputNumber>100){
			alert('please input number range between 20-100');
			var inputNumber = Number(prompt('enter number 20~100',''));
			console.log(inputNumber);
			}
	}
	// Returns if a value is valid number
	return inputNumber;
}
function second(){
	var remain = valid();
	console.log(remain);
	//store kind of coins under array coins
	var coins=[16,8,4,2,1];
  document.write('Based on Input Value : ' + remain + '<hr />');
	
	for (i=0; i <5;i++){
		var numberOfCoins = Number(remain/coins[i]);
		//if division is 0, skip printing
		if (Number(numberOfCoins < 1)) continue;
		document.write('Number of Coin ' + coins[i] + ' : ' + parseInt(numberOfCoins) + '<br />');
		remain = Number(remain%coins[i]);
	};
}



