//JavaScript calculater

function submitAnswer(){
    //body..
    var firstvalue = parseInt(
        document.getElementById('firstvalue').value);
       
       
       
        var secoundvalue = parseInt(
        document.getElementById('secoundvalue').value);

   
       var operaters = document.getElementById('operaters').value;

       //show result
       var result = document.getElementById("result");

       if (operaters === "+") {
        result.innerHTML = firstvalue + secoundvalue;
      } else if (operaters === "-") {
        result.innerHTML = firstvalue - secoundvalue;
      } else if (operaters === "*") {
        result.innerHTML = firstvalue * secoundvalue;
      } else if (operaters === "/") {
        result.innerHTML = firstvalue / secoundvalue;
      }
      
    }