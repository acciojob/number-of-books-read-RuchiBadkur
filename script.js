const numberOfBooksRead = () => {
  // write your code here
	 let entries = Object.entries(library);
	console.log(entries);
	let count = 0;
for(i in entries){
    // in -> keys
    console.log(entries[i]);
    for(j of entries[i]){
        console.log(j);
        for(k in j){
            console.log(j[k] +" "+typeof j[k]);
            if(j[k] === true){
                count++;
                console.log("count "+count);
            }
        }
            
    }
}
    console.log(count);
};
// Do not change the code below

alert(numberOfBooksRead());
