//Get to dom element
const content = document.querySelector(".content");
userResult = document.querySelector(".user_result img");
cpuResult = document.querySelector(".cpu_result img");
result = document.querySelector(".result");
optionImgs = document.querySelectorAll(".option_img");
you = document.querySelector(".you");
com = document.querySelector(".com");

let userScore=0;
let compScore=0;

// Add event listener to each image element
optionImgs.forEach((img, index) => {
    img.addEventListener("click", (arg) => {
    img.classList.add("active");

      userResult.src = cpuResult.src = "img/Stone.png";
      result.textContent = "Wait..."
  
      // Loop through and remove 'active' class from other images
      optionImgs.forEach((img2, index2) => {
        index !== index2 && img2.classList.remove("active");
      });
  
      content.classList.add("start");

      //set time out for delay result
      let time = setTimeout(()=>{
        content.classList.remove("start");

 // Get the source of the clicked image
 let imageSrc = arg.target.tagName === 'IMG' ? arg.target.src : arg.target.querySelector("img")?.src;
 userResult.src = imageSrc;
 //Generate a randam no between 0 and 2
 let randomNumber= Math.floor(Math.random() *3);
 //Creat an array for CPU
 let cupImg = ["img/Stone.png","img/paper.png","img/scissors.png"];
 //Creat random option form arrar to CPU img
 cpuResult.src = cupImg[randomNumber];

 //Assign letter value for CPU option
 let cpuValue =["R","P","S"][randomNumber];
 //Assign letter value for user option
 let userValue =["R","P","S"][index];

 //creat object of wining partten
 let outcomrs = {
   RR:"Draw",
   RP:"Comp",
   RS:"User",
   PP:"Draw",
   PR:"User ",
   PS:"Comp",
   SS:"Draw",
   SR:"Comp",
   SP:"User"
 };

 // look up out come value based on CPU and user
 let outComeValue = outcomrs[userValue + cpuValue];

 //Display result
 result.textContent = userValue === cpuValue ?"Match Draw" : `${outComeValue} Won!!`;

//For display win count
 const winCount = ()=>{
  if(outComeValue == "Comp"){
    compScore++;
     com.textContent = compScore;
  }else if(outComeValue == "User"){
    userScore++;
    you.textContent = userScore;
  }
  };
  winCount();
 
      },1500)

    });
  });
  
 

 
    