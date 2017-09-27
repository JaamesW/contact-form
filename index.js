function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();		
		reader.onload = function (e) {
			$('#profileImage').attr('src', e.target.result);
		}            
		reader.readAsDataURL(input.files[0]);
	}
}   
$("#imgInp").change(function(){
        readURL(this);
    });

$(document).ready(function() {
    var wrapper         = $(".phone"); 
    var add_button      = $(".add-phone"); 
	var newInput = ('<div class="button-action-wrap-added"><select class="f-select"><option value="work">Work</option> <option value="mobile">Mobile</option> <option value="home">Home</option></select><input type="text" class="f-input large" name="mytext[]"/><div id="primary" class="primary-phone">primary</div><button href="#" class="remove_field"><svg fill="#F96060" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none"/> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg></button></div>')
	
    $(add_button).click(function(e){
        e.preventDefault();
		$(this).parent().parent(wrapper).append(newInput); 
    });
    
    $(wrapper).on("click",".remove_field", function(e){ 
        e.preventDefault(); $(this).parent('div').remove();
    })
});

$(document).ready(function() {
    var wrapper         = $(".email"); 
    var add_button      = $(".add-email"); 
	
    $(add_button).click(function(e){
        e.preventDefault();
		$(this).parent().parent(wrapper).append('<div class="button-action-wrap-added"><input type="text" class="f-input large" name="mytext[]"/><div id="primary" class="primary-email">primary</div><button href="#" class="remove_field"><svg fill="#F96060" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0h24v24H0z" fill="none"/> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></svg></button></div>'); 
    });
    
    $(wrapper).on("click",".remove_field", function(e){ 
        e.preventDefault(); $(this).parent('div').remove();
    })
});

$('#emailWrapper').on("click",".primary-email", function(e){ 
	$('.email-active').removeClass('email-active');
	$(this).addClass('email-active');
})

$('#phoneWrapper').on("click",".primary-phone", function(e){ 
	$('.phone-active').removeClass('phone-active');
	$(this).addClass('phone-active');
})


//function addElement () { 
//  // create a new div element 
//  // and give it some content 
//  var newDiv = document.createElement("div"); 
//  var newContent = document.createTextNode("Hi there and greetings!"); 
//  newDiv.appendChild(newContent); //add the text node to the newly created div. 
//
//  // add the newly created element and its content into the DOM 
//  var currentDiv = document.getElementById("div1"); 
//  document.body.insertBefore(newDiv, currentDiv); 
//}