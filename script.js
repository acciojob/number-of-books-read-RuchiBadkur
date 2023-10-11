const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	 let entries = Object.entries(library);
	// // console.log(entries);
	let count = 0;
for(i in entries){
    // in -> keys
    // console.log(entries[i]);
    for(j of entries[i]){
        // console.log(j);
        for(k in j){
            // console.log(j[k] +" "+typeof j[k]);
            if(j[k] === true){
                count++;
                // console.log("count "+count);
            }
        }
            
    }
}
    // console.log(count);
	return count;
	
};
// Do not change the code below

alert(numberOfBooksRead());
