function get_word(word_content){
	var word = word_content
	var html = document.getElementById('html_output');
	word = strip_extra_html(word);
	
	html.value = word;
	console.log(word.split('\n'))
}

function strip_extra_html(word){
	// /\ str /g calls all instances of str in object
	
	word = word.replace(/\background: white;/g, '');
	word = word.replace(/\class="MsoNormal"/g, '');
	return(word);
} 

function holder(){
	word = word.replace(/\margin: 0in;/g, '');
	word = word.replace(/\margin-bottom: .0001pt;/g, '');
	word = word.replace(/\style="font-family: 'Arial',sans-serif; /g, '');
	word = word.replace(/\mso-ansi-language: EN;/g, '');
	word = word.replace(/\style=" /g, '');
	word = word.replace(/\style="  /g, '');
	word = word.replace(/\style="   /g, '');
	word = word.replace(/\style="    /g, '');
	word = word.replace(/\line-height: normal;/g, '');
}