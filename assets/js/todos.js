// Check off specific Todos by clicking
$('ul').on('click', 'li', function(){
// Toggle the completed class
	$(this).toggleClass('completed');
});

// Click on X to delete todo
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$('input[type="text"]').keypress(function(event){
// Check if user has hit enter
	if(event.which === 13){
// Grab new todo text from input
	let toDoText = $(this).val();
// Clean input after grabbing value
	$(this).val('');
// create a new li and add to ul
	$('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${toDoText}</li>`);
	}
});


$('.fa-plus').click(function(){
	$('input[type="text"]').fadeToggle();
});



