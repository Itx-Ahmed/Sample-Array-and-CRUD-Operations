//   We'll use a sample array called fruits and demonstrate each 
// CRUD operation (insert item, Update item, Delete item).

const  fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

 console.log(fruits); 

  //  this will  display the whole array element
 

  //  this code mean to add elements after Banana
 let index = fruits.indexOf("Banana"); 

 if(index!== -1){
     fruits.splice(index + 1, 0, "Watermelon","Kiwi","peach"); 


       let updateitem = fruits.map((item => item === "Watermelon" ? "Strawberry" : item)); 

       console.log(updateitem); 

        // deleting the orange from the arry.
      let orangeIndex = fruits.indexOf("Orange"); 

       if(orangeIndex !== -1){
          fruits.splice(orangeIndex,1 );
          console.log(fruits); 
         
       }

   
        //  updated the item
        let result = updateitem.map((item => item == "Grapes" ? "try" : item));
         console.log(result); 
       

         let  myitem = updateitem.indexOf("try"); 

         if(updateitem!== -1); 
         updateitem.splice(updateitem,1);
         console.log(updateitem); 
}


 

// //  crud opeartion on array

// const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

// // //    update item use push method to add element.  but this  will add element in the last. 

// //     fruits.push("Kiwi"); 
// //     console.log(fruits); 
    

// //     //  add item in the first of an array

// //    fruits.unshift("strabery"); 
// //  console.log(fruits);

// // //  remove element from the first of an array use shift method. 

// //    fruits.shift(); 
// //  console.log(fruits); 

// //  let updateitem = fruits.map((item => item === "Apple" ? "pineApple" : item)); 

// //    console.log(updateitem); 

 

  






 
