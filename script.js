function stringChop(str, size) {
  // your code here
	
	let str1="";
	let arr=[];
	for(let i=0; i<str.length; i++){
		if(str1.length>=size){
			arr.push(str1);
			str1="";
			str1+=str[i];
		}else{
			str1+=str[i];
		}
	}
	arr.push(str1);
	return arr;
}



// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
