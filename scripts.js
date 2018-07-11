var final_output = []


function convertion(raw_data){
	var raw_data = raw_data.value;
	raw_data = raw_data.split('\n\n');
	var data = [];
	for(var i = 0; i < raw_data.length; i++){
		data.push(raw_data[i].split('\n'))
	}
	
	for(var i = 0; i < data.length; i++){
		var name_of_resturant = data[i][0];
		
		if(data[i][1].charAt(data[i][1].length) != '.' || data[i][1].charAt(data[i][1].length) != ','){
			var loc = Array(data[i][1], data[i][2]).join(', ');
		}
		else{var loc = data[i][1] + ' ' + data[i][2]}
		var path = data[i][3];
		var rsn = data[i][4];
		var rsn = rsn.slice(4, -1);
		final_output.push(get_regional_code(path, name_of_resturant, loc));
		final_output.push(get_alph_code(path, name_of_resturant, loc));
		final_output.push('________________________________________________________________________________________________________________________\n');
	}
	console.log(final_output);
	for(var i = 0; i < final_output.length; i++){
		document.getElementById('html_output').value += final_output[i];
	}
}
function get_regional_code(path, name_of_resturant, loc){
	var temp = new Array();
	temp.push('<tr>\n');
	temp.push('\t<td><a target="_blank" href="pdf/' + path + '">' + name_of_resturant + '</a></td>\n');
	temp.push('\t<td>' + loc + '</td>\n');
	temp.push('</tr>\n\n');
	return(temp.join(''));
}


function get_alph_code(path, name_of_resturant, loc){
	var temp = new Array();
	var region = '';
	if(path[7] == 'C'){region = 'Central'}
	else if(path[7] == 'E'){region = 'Eastern'}
	else if(path[7] == 'A'){region = 'Avalon'}
	else if(path[7] == 'W'){region = 'Western'}
	else if(path[7] == 'L'){region = 'Labrador'}
	temp.push('<tr><td><a target="_blank" href="pdf/' + path + '">' + name_of_resturant + '</a></td>\n');
	temp.push('<td>' + loc + '</td>\n');
	temp.push('<td>' + region + '</td>\n');
	return(temp.join(''));
}
