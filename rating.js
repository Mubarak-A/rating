var BtnOne = document.querySelector("#btn__one");
var BtnTwo = document.querySelector("#btn__two");
var BtnThree = document.querySelector("#btn__three");
var BtnFour = document.querySelector("#btn__four");
var BtnFive = document.querySelector("#btn__five");
var Result = document.querySelector("#result--txt");
var BtnSubmit = document.querySelector("#submit__btn");
var BtnRate = document.querySelectorAll(".rate");
var RatingView = document.querySelector(".first--container");
var ResultView = document.querySelector(".second--container");

for (var i=0;i<5;i++) {
BtnRate[i].addEventListener("click", function() {
        switch (this.innerHTML){
                case "1":
                        Result.innerHTML = "You selected 1 out of 5";
                        BtnOne.classList.add("click--cl");
                        BtnTwo.classList.remove("click--cl");
                        BtnThree.classList.remove("click--cl");
                        BtnFour.classList.remove("click--cl");
                        BtnFive.classList.remove("click--cl");
                break;
                case "2":
                        Result.innerHTML = "You selected 2 out of 5";
                        BtnTwo.classList.add("click--cl");
                        BtnOne.classList.remove("click--cl");
                        BtnThree.classList.remove("click--cl");
                        BtnFour.classList.remove("click--cl");
                        BtnFive.classList.remove("click--cl");
                break;
                case "3":
                        Result.innerHTML = "You selected 3 out of 5";
                        BtnThree.classList.add("click--cl");
                        BtnOne.classList.remove("click--cl");
                        BtnTwo.classList.remove("click--cl");
                        BtnFour.classList.remove("click--cl");
                        BtnFive.classList.remove("click--cl");
                break;
                case "4":
                        Result.innerHTML = "You selected 4 out of 5";
                        BtnFour.classList.add("click--cl");
                        BtnOne.classList.remove("click--cl");
                        BtnTwo.classList.remove("click--cl");
                        BtnThree.classList.remove("click--cl");
                        BtnFive.classList.remove("click--cl");
                break;
                case "5":
                        Result.innerHTML = "You selected 5 out of 5";
                        BtnFive.classList.add("click--cl");
                        BtnOne.classList.remove("click--cl");
                        BtnTwo.classList.remove("click--cl");
                        BtnThree.classList.remove("click--cl");
                        BtnFour.classList.remove("click--cl");
                break;
        }
})
}

BtnSubmit.addEventListener("click", function() {
        if (BtnOne.classList.contains("click--cl") || BtnTwo.classList.contains("click--cl") || BtnThree.classList.contains("click--cl") || BtnFour.classList.contains("click--cl") || BtnFive.classList.contains("click--cl")  ) {
                RatingView.classList.add("either__view");
                ResultView.classList.remove("either__view");
        }
})
