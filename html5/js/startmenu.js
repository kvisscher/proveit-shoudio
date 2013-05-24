var showStatus = 0;

function round5(x)
{
	return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
} 

function hideStartmenu_description() {
    $("#startmenu_description").animate({'margin-top':'-14px'},1000);
	$("#hideStart").css("display", "none");
    $("#showStart").css("display", "block");
}

function showStartmenu_description() {
    $("#startmenu_description").animate({'margin-top':'100px'},1000);
    //$("#showDescription").css("display", "none");
    $("#hideStart").css("display", "block");
    $("#showStart").css("display", "none");

}

function startmenu(item){
	
	//collection info ophalen
	//naam rondje
	var naamrondje= item.name;
	
	//description
	var description = item.description;
	var description_hide =  '</br><a href="javascript:showStartmenu_description()">show</a>';

	
	//userid for image
	var user_id = item.userid;
	//s3.amazonaws.com/noise.shoudio.com/avatars/{SIZING}/user_id.jpg
	var sizing = "100x100";
	var plaatje = '<img src="http://s3.amazonaws.com/noise.shoudio.com/avatars/'+sizing+'/'+ user_id+'.jpg" />';
	
	//determine rating
	var rating_rate_collect = Math.round(item.rating_rate * 10);
	var rating_rate = round5(rating_rate_collect);	
	var rating = '<span class="rating-static rating-'+rating_rate+'"></span>';

	//username
	var username = "Sjaak afhaak"


	// var zenden naar hTmL hak hak
 	$('.startmenu_naamrondje').append(naamrondje);
 	$('.startmenu_plaatje').append(plaatje);
 	$('.startmenu_username').append(username);
 	$('#startmenu_description_indoud').append(description);
 	$('.startmenu_rating').append(rating);
}

function startmenuHide() {
    $("#startmenu").fadeOut();
    $("#startmenubg").fadeOut();
    showrightmenu();
}
