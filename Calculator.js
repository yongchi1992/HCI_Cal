
    var num1 = 0; 
    var num2 = 0; 
    var set_num2 = false;
    var pressequal =  false;
    var pressoperator = false;

	function appContent(button){

		var content = document.getElementById("content");
		var result = document.getElementById("content");
		var operator = document.getElementById("operator");
		var text = button.innerText;

		if("C" == text){
			content.innerText = "0";
			operator.innerText = "";
			num1 = 0;
			num2 = 0;
			set_num2 = false;
			pressequal =  false;
			pressoperator = false;
		}else if("±" == text){
			content.innerText = - content.innerText;
		}else if("=" == text){
			var resultText = content.innerText;
			pressequal = true;
			if(operator.innerText == "+"){
				resultText = Number(num1) + Number(num2);
			}else if(operator.innerText == "-"){
				resultText = Number(num1) - Number(num2);
			}else if(operator.innerText == "×"){
				resultText = Number(num1) * Number(num2);
			}else if(operator.innerText == "÷"){
				if(num2 == 0){
					resultText = "Not a number";
				}else{
					resultText = Number(num1) / Number(num2);
				}
			}
			content.innerText = resultText;
			operator.innerText = "";
			num1 = Number(resultText);
			set_num2 = false;
			pressoperator = false;
		}else if("+"==text || "-"==text || "×"==text || "÷"==text ){
			if(content.innerText == "Not a number"){
				content.innerText = 0;
			}
			if(pressoperator == false || set_num2 == false){
				operator.innerText = text ;
				num1 = content.innerText;
				num2 = num1;
				pressequal = false;
				pressoperator = true;
			}else if(pressoperator == true  && set_num2 == true){
				if(operator.innerText == "+"){
					resultText = Number(num1) + Number(num2);
				}else if(operator.innerText == "-"){
					resultText = Number(num1) - Number(num2);
				}else if(operator.innerText == "×"){
					resultText = Number(num1) * Number(num2);
				}else if(operator.innerText == "÷"){
					if(num2 == 0){
						resultText = "Not a number";
					}else{
						resultText = Number(num1) / Number(num2);
					}
				}
				content.innerText = resultText;
				num1 = Number(resultText);
				operator.innerText = text ;
				set_num2 = false;
			}

		}else if("." == text){
			if(content.innerText.indexOf(".")==-1){
				content.innerText = content.innerText + text;
			}
		}else{
			if(pressequal == false){
				if(content.innerText == "0" || (operator.innerText != "" && set_num2 == false ) ){
					num1 = Number(content.innerText);
					content.innerText = "";
					if(operator.innerText != ""){
						set_num2 = true;
					}
				}
				content.innerText = content.innerText + text;
				num2 = Number(content.innerText);

			}
			else if(pressequal == true){
				content.innerText = "";
				content.innerText = content.innerText + text;
				
				num1 = Number(content.innerText);
				
				pressequal = false;
			}

		}
		
	}

	
