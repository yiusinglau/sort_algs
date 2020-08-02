let sort = (value) => {
	if (value === "Bubble") {
		var numbers = [5, 11, 14, 7, 5, 8, 3, 6, 1, 7];
		var num = numbers.join() + "<br>";
		let counter = 0;
		let counter1 = 0;
		let len = numbers.length;
		let len1 = len;
		var a = "";
		for (let i = 0; i < len1; i++) {
			for (let j = 0; j < len; j++) {
				counter1++;
				if(numbers[j] > numbers[j+1]) {
					let tmp = numbers[j];
					numbers[j] = numbers[j+1];
					numbers[j+1] = tmp;
					counter++;
					num = num + numbers.join() + "<br>";
				}
			}
		}
		document.getElementById("order").innerHTML = num;
		document.getElementById("counter").innerHTML = "Number of switches: " + counter;
		document.getElementById("counter1").innerHTML = "Number of comp: " + counter1;
		
	}
	else if (value === "insert") {
		var numbers = [5,11,14,7,5,8,3,6,1,7];
		var num = numbers.join() + "<br>";
		let counter = 0;
		let counter1 = 0;
		let len = numbers.length;
		let len1 = len;
		//insert code here
		for (let i = 1; i < len; i++) {
			let key = numbers[i];
			let j = i - 1;
			
			while (j >= 0 && numbers[j] > key) {
				numbers[j+1] = numbers[j];
				j = j - 1;
				counter1++;		
				if (numbers[j] > key){
					counter1++;
				}
			}
			
			numbers[j+1] = key;
			
			if (num.includes(numbers.join())){
				
			}	
			else{
				counter++;
				num = num + numbers.join() + "<br>";
			}
			
		}	
		document.getElementById("order").innerHTML = num;
		document.getElementById("counter").innerHTML = "Number of switches: " + counter;
		document.getElementById("counter1").innerHTML = "Number of comp: " + counter1;
		
	}
	else if(value === "merge") {
		var numbers = [5, 11, 14, 7, 5, 8, 3, 6, 1, 7];
		var num = numbers.join() + "<br>";
		let counter = 0;
		let counter1 = 0;
		let len = numbers.length;
		let len1 = len;
		//insert code here
		document.getElementById("order").innerHTML = num;
		document.getElementById("counter").innerHTML = "Number of switches: " + counter;
		document.getElementById("counter1").innerHTML = "Number of comp: " + counter1;		
	}
}


//bubbleSort(numbers);