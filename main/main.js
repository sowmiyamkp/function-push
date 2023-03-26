  
 //push in arrray
 
 
 let one=[1,2,3,4,5];
 
 let two=[6,7,8,9,10];
 
 function merge(one,two)
 {
	 for(i=0;i<two.length;i++)
	 {
		 (one.push(two[i]));
	 }
	 console.log(one);
 }
 merge(one,two);