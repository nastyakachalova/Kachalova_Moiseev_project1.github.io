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
    var x = document.getElementById("nav-btns");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Заявка была успешно отправлена!");
                }else{
                    alert("Произошла ошибка... " + response.message);
                }
            }
        });
    });
});
