
$(document).ready(function(){
	currentItem = 0;
	prefix="";
	page = 550;
	var show = 0;
	modal.style.display = "none";
	clickCount = 0;
function comFunct(i){
	page = i;
    $("#bismil").remove();
   if(page < 10) prefix = "00";	else if(page < 100)	prefix = "0" ; else prefix = "";
    oldClass = "p"+prefix+page;
	$("#div").removeClass(oldClass);
	if(page != 1 )	page--;	 
  for(var i=0;i<json.pageInfo.length;i++){
	  var pi = json.pageInfo[i];
		
		if(i == page-1){
		console.log('page '+page + ' i ' +i + '  ' +pi.page + '  ' + pi.charCount);
			console.log(pi.charCount);
			if(pi.bismil!=null){
				offset = 0;
				var bismils = pi.bismil;
					for(b=0;b<bismils.length;b++){
						var spanid="#"+(parseInt(bismils[b])+1);
						$('<p id="bismil" style="text-align: center; width=100%"><span class="bismil" style="text-align: right;">﷽</span></p>').insertBefore(spanid);
					break;
					}
				}
			show = pi.charCount;
			break;
		}
	}	
	
	for(var i=0;i<194;i++){
				var id = "#"+i; if(i <= show){$(id).show();} else {$(id).hide();}
	}	
	newClass = "p"+prefix+page;
	$("#div").addClass(newClass);
	$("#pageCount").val(page);

}

  $("#pageCount").change(function(){
	page = $("#pageCount").val();
	alert("it changed " + page);
	comFunct(page);
  });
  $("span").click(function(){
		if(this.id != "pageSpan"){
			if(currentItem == this.id){
				clickCount++;
				modal.style.display = "block";
				clickCount = 0;
			} else {
				clickCount = 1;
				currentItem = this.id;
				modal.style.display = "none";
			} 
		}
  });
  $("#prev").click(function(){
  $( "#bismil" ).remove();
  if(page < 10) prefix = "00";	else if(page < 100)	prefix = "0" ; else prefix = "";
  oldClass = "p"+prefix+page;
	$("#div").removeClass(oldClass);
  if(page != 1 )	page--;	 
  
	for(var i=1;i<json.pageInfo.length+1;i++){
	  var pi = json.pageInfo[i];
		
		if(i == page-1){
		console.log('page '+page + ' i ' +i + '  ' +pi.page + '  ' + pi.charCount);
			console.log(pi.charCount);
			if(pi.bismil!=null){
				offset = 0;
				var bismils = pi.bismil;
				console.log(bismils+ '  '+ bismils.length);
					for(b=0;b<bismils.length;b++){
						var spanid="#"+(parseInt(bismils[b])+1);
						//offset++;
						console.log(pi.bismil + '   ' + spanid);
						$('<p id="bismil" style="text-align: center; width=100%"><span class="bismil" style="text-align: right;">﷽</span></p>').insertBefore(spanid);
					}
				}
			show = pi.charCount;
		}
	}	
	
	for(var i=0;i<194;i++){
				var id = "#"+i; if(i <= show){$(id).show();} else {$(id).hide();}
	}
	if(page < 10) prefix = "00";	else if(page < 100)	prefix = "0";
	newClass = "p"+prefix+page;
	$("#div").addClass(newClass);
	$("#page").text('Page :'+page );
	$("#pageCount").val(page);
  });
  $("#next").click(function(){
	$( "#bismil" ).remove();
	for(var i=1;i<json.pageInfo.length+1;i++){
	  var pi = json.pageInfo[i];
		if(i==page){
			if(pi.bismil!=null){
				offset = 0;
				var bismils = pi.bismil;
				console.log(bismils+ '  '+ bismils.length);
					for(b=0;b<bismils.length;b++){
						var spanid="#"+(parseInt(bismils[b])+1);
						//offset++;
						console.log(pi.bismil + '   ' + spanid);
						$('<p id="bismil" style="text-align: center;width=100%"><span class="bismil" >﷽</span></p>').insertBefore(spanid);
					}
				}
			show = pi.charCount;
		}
	}		
	for(var i=0;i<194;i++){
				var id = "#"+i;if(i <= show){$(id).show();}else {$(id).hide();}
	}	
   	oldClass = "p"+prefix+page;
	$("#div").removeClass(oldClass);
	if(page < 604)	page++;
    if(page < 10) prefix = "00";	else if(page < 100)	prefix = "0"; else prefix = "";

	newClass = "p"+prefix+page;
	$("#div").addClass(newClass);
	$("#page").text('Page :'+page );
	$("#pageCount").val(page);
	
  });
  $( "#bismil" ).remove();
  if(page < 10) prefix = "00";	else if(page < 100)	prefix = "0" ; else prefix = "";
  oldClass = "p"+prefix+page;
	$("#div").removeClass(oldClass);
  if(page != 1 )	page--;	 
  for(var i=0;i<json.pageInfo.length;i++){
	  var pi = json.pageInfo[i];
		
		if(i == page-1){
		console.log('page '+page + ' i ' +i + '  ' +pi.page + '  ' + pi.charCount);
			console.log(pi.charCount);
			if(pi.bismil!=null){
				offset = 0;
				var bismils = pi.bismil;
					for(b=0;b<bismils.length;b++){
						var spanid="#"+(parseInt(bismils[b])+1);
						$('<p id="bismil" style="text-align: center; width=100%"><span class="bismil" style="text-align: right;">﷽</span></p>').insertBefore(spanid);
					break;
					}
				}
			show = pi.charCount;
			break;
		}
	}	
	
	for(var i=0;i<194;i++){
				var id = "#"+i; if(i <= show){$(id).show();} else {$(id).hide();}
	}
	if(page < 10) prefix = "00";	else if(page < 100)	prefix = "0";
	newClass = "p"+prefix+page;
	$("#div").addClass(newClass);
	$("#pageCount").val(page);
	
});