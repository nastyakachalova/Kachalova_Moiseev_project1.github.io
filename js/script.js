var left_arr = document.getElementById("reviews-prev");
var right_arr = document.getElementById("reviews-next");
var curr_review_num = 1;


function prev_review(){
    var orig_review = document.getElementById("review-"+curr_review_num);
    var new_review_num = curr_review_num - 1;
    if (new_review_num < 1) new_review_num = 8;
    var new_review = document.getElementById("review-"+new_review_num);
    orig_review.style.display = "none";
    new_review.style.display = "block";
    var counter = document.getElementById("reviews-scroller");
    counter.innerHTML = "0" + new_review_num;
    curr_review_num = new_review_num;
}

function next_review(){
    var orig_review = document.getElementById("review-"+curr_review_num);
    var new_review_num = curr_review_num + 1;
    if (new_review_num > 8) new_review_num = 1;
    var new_review = document.getElementById("review-"+new_review_num);
    orig_review.style.display = "none";
    new_review.style.display = "block";
    var counter = document.getElementById("reviews-scroller");
    counter.innerHTML = "0" + new_review_num;
    curr_review_num = new_review_num;
}

function faq1(){
    var q = document.getElementById("q-1");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq2(){
    var q = document.getElementById("q-2");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq3(){
    var q = document.getElementById("q-3");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq4(){
    var q = document.getElementById("q-4");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq5(){
    var q = document.getElementById("q-5");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq6(){
    var q = document.getElementById("q-6");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq7(){
    var q = document.getElementById("q-7");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq8(){
    var q = document.getElementById("q-8");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq9(){
    var q = document.getElementById("q-9");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq10(){
    var q = document.getElementById("q-10");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq11(){
    var q = document.getElementById("q-11");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function faq12(){
    var q = document.getElementById("q-12");
    var sel = document.getElementsByClassName("question-selected")[0];
    if(sel != q){
        sel.classList.remove("question-selected");
        q.classList.add("question-selected");
    }
}

function myFunction() {
    var x = document.getElementById("nav-btns")
    ; $( ".nav-btns" ).slideToggle( "slow"); 
    if (x.classList.contains("closed")) {
         x.classList.remove("closed");
    } else {
            x.classList.add("closed");
    }
  }


document.getElementById("mainForm").addEventListener("submit", function(e){
    e.preventDefault();
    n = document.getElementById("Name").value;
    p = document.getElementById("Phone").value;
    email = document.getElementById("E-mail").value;
    subject = document.getElementById("Message").value;
  var formData = new FormData();
  formData.append('Name', n);
  formData.append('Phone', p);
  formData.append('E-Mail', email);
  formData.append('Message', subject);
  console.log(formData);
  fetch('https://formcarry.com/s/Alp3NV0uq', {
    method: 'POST',
    body: formData
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  });
