document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    onPageLoad();
    // Search Bar button

	/*document.getElementById("search_news_button").onclick = function(eve) {
		searchText(eve);
	}*/
});


	


// this function runs when the DOM is ready, i.e. when the document has been parsed

    // Blog

function onPageLoad(){

//    createBlogs126to150();
//    createBlogs101to125();
//    createBlogs76to100();
//    createBlogs51to75();
//    createBlogs26to50();
    createBlogs1to25();



    // Latest News

	if (document.getElementById("latest_news")) {


		var article = document.getElementById("custom_blog_div").querySelectorAll(".post_div");
		var contents = document.getElementById("latest_news");
		var last_notes_message = document.getElementById("last_notes_message").style.display = "none";

		var all_blogs = document.getElementById("custom_blog_div").querySelectorAll(".post_div");

        var latest_news_fixed = 25; ///////////////////////////////////////////////////////////////////////////////////// how many latest news you will see on the sidebar

        if(latest_news_fixed>all_blogs.length){
        	var latest_news_fixed= all_blogs.length;
        }
		for (i = 0; i < latest_news_fixed; i++) {
			
				var span = document.createElement("a");
				var text = document.createTextNode(article[i].children[0].innerHTML.replace("&amp;", "&"));
//				var img = document.createElement("img");
//				img.src = "images/List Bullet Image and Space.png";
//				span.appendChild(img);
				var li = document.createElement("li");
				var br = document.createElement("br");
				var br2 = document.createElement("br");

				span.appendChild(text);
//				span.appendChild(document.createElement("br"));
				span.classList.add("latest_news_contents_title");
				span.setAttribute("href", "");
				li.appendChild(span);
				li.appendChild(br);
				li.appendChild(br2);
				contents.appendChild(li);
				span.onclick = function(e){
					console.log('event', e);
					e.preventDefault();
    				var href = this.childNodes[0].data;
//    				console.log('href', href)
//   				console.log(href);
					newsSearch(href);
//					console.log(text);
					$('#returnLink').on('click', (eve) => {
//						console.log('event happened',eve);
						document.getElementById('last_notes_message').style.display="none";
						const x = document.getElementById('custom_blog_div')
						//x.style.display = "none";
						x.style['margin-top'] = "0px";
						document.getElementById('latest_news').style.display="block";
						searchText();
						createPagination();
						$('#post_navigation').show();
						/*$('.post_div').each( (ind, el) => {
							console.log('ind, el',ind,el);
							const id = $(el).attr('id');
							console.log('id',id);
							const ind1 = Number(id.split('_')[1]);
							if (ind1 < latest_news_fixed) {
								console.log('showing ', el);
								//const id = $(el).attr('id');
								$('#' + id).show();
							}
						});*/
						//$('.post_div').show();
					});
					//document.getElementById('custom_blog_div').style['margin-top'] = "90px";
						return false;
				};
		}




	createPagination();

}
}

function showStories() {
	$('.post_div').each( (ind, el) => {
		
	});
}


/*
function searchButton(e) {
//	console.log('inside searchButton', e);
	if(e.keyCode === 13){
    	this.searchText(true);
	}
};
*/

var input = document.getElementById("search_news_button_text");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("search_news_button").click();
  }
});


function searchText(isButtonPush = false){
	document.getElementById("post_navigation").style.display = "inline";
	document.getElementById("last_notes_message").style.display = "none";

	//console.log('inside search text', event);
	//var last_notes_message = document.getElementById("last_notes_message").style.display = "none";
    //Clear previous search

	//$('#last_notes_message').hide();
	//var last_notes_message = event.target.value;

	this.highlightText("Blog_Text_Span_In_P", "background-color: #BEDAEC");

	this.highlightText("Blog_Image_Text", "background-color: #FFFFFF");

	this.highlightText("blog_post_header", 'color: #BEDAEC; font-style: oblique !important;');

	this.highlightText("blog_post_date", "background-color: #BEDAEC");;

	this.createPagination();

	document.getElementById("search_news_button_text").value = "";
}

function removeAllHighLights(){

	this.removeHighlightText("Blog_Text_Span_In_P", "background-color: #BEDAEC", all_blogs);

	this.removeHighlightText("Blog_Image_Text", "background-color: #FFFFFF", all_blogs);

	this.removeHighlightText("blog_post_header", 'color: #BEDAEC; font-style: oblique !important;', all_blogs);

	this.removeHighlightText("blog_post_date", "background-color: #BEDAEC", all_blogs);
}

function highlightText(classText, specialStyle = ""){

		var all_blogs = document.getElementById("custom_blog_div").querySelectorAll(".post_div");
		var text_field = document.getElementById("search_news_button_text").value.toLowerCase();
		var texts_search = text_field.split(" ");
		var texts_search = texts_search.sort(function(a, b){return b.length - a.length});
		var custom_blog = document.getElementById("custom_blog_div");

			// Restore all Blog Posts before searching
			removeHighlightText(classText, specialStyle, all_blogs);

			// Loop through all Blog posts

				for (i = 0; i < all_blogs.length; i++) {

					// Display all Blog posts containing the text from the Search Bar
					for(j =0; j < texts_search.length; j++){
						if ( all_blogs[i].innerText.toLowerCase().includes(texts_search[j]) === true ) {

							all_blogs[i].style.display = "inline";
						
							// Highlight found Blog Post Text

							var children = all_blogs[i].getElementsByClassName(classText);
							all_blogs[i].setAttribute("class", "post_div highl" );

							for (x = 0; x < children.length; x++) {


								var letters = children[x].innerHTML;

								var words = letters.split(" ");

								var finalText = "";


								if (children[x].innerText.toLowerCase().includes(texts_search[j]) === true) {
							

									for (n = 0; n< words.length;n++) {
										if (words[n].toLowerCase().includes(texts_search[j]) === true 
											& texts_search[j] != "") {
												var newWord = "";
												var charArray = words[n];
												var pointer = 0;
												for(m=0; m< charArray.length;m++){
													if(charArray[m].toLowerCase() == texts_search[j].toLowerCase().substring(pointer,pointer+1)){
														newWord = newWord + '<span style="'+specialStyle+'">'+charArray[m]+ '</span>';
														pointer++;
													} else {
														newWord = newWord + charArray[m];

													}
												}

												words[n] = newWord;

										}

										finalText = finalText + words[n]+" ";
									}
									
									children[x].innerHTML = finalText;

								}
							}

						} else {

							all_blogs[i].style.display = "none";
							all_blogs[i].setAttribute("class",  "post_div" );

						}
					}
			}
};

/*function highlightText(classText, specialStyle = ""){

		var all_blogs = document.getElementById("custom_blog_div").querySelectorAll(".post_div");
		var text_field = document.getElementById("search_news_button_text").value.toLowerCase();
		var custom_blog = document.getElementById("custom_blog_div");

			
		// Restore all Blog Posts before searching
			removeHighlightText(classText, specialStyle, all_blogs);

			// Loop through all Blog posts

				for (i = 0; i < all_blogs.length; i++) {

					// Display all Blog posts containing the text from the Search Bar

						if ( all_blogs[i].innerText.toLowerCase().includes(text_field) === true ) {

							all_blogs[i].style.display = "inline";
						
							// Highlight found Blog Post Text

							var children = all_blogs[i].getElementsByClassName(classText);
							all_blogs[i].setAttribute("class", "post_div highl" );

							for (x = 0; x < children.length; x++) {


								var letters = children[x].innerHTML;

								var words = letters.split(" ");
								var wordsCopy = words.slice();

								//var finalText = "";

												var newWord = "";
												var oldWord = "";
												var wordOrderIsSet = false;
												var newWordIsFirst = false;

								if (children[x].innerText.toLowerCase().includes(text_field) === true) {
							
									var offset = 0;
									for (n = 0; n< words.length + offset;n++) {
										if (words[n].toLowerCase().includes(text_field) === true 
											& text_field != "") {
												var charArray = words[n];
												var pointer = 0;
												oldWord = "";
												newWord = "";
												for(m=0; m< charArray.length;m++){
													if(charArray[m].toLowerCase() == text_field.toLowerCase().substring(pointer,pointer+1)){
														newWord = newWord + charArray[m]; // '<span style="'+specialStyle+'">'
														pointer++;
													} else {
														oldWord += charArray[m];

													}
													if (!wordOrderIsSet) {
														wordOrderIsSet = true;
														if (pointer > 0) {
															newWordIsFirst = true;
														}
													}
												}
												if (newWordIsFirst) {
													wordsCopy[n] = '<span style="'+specialStyle+'">' + newWord + '</span>';
													wordsCopy.splice(n + 1, 0, oldWord);
												} else {
													wordsCopy[n] = '<span style="'+specialStyle+'">' + newWord + '</span>';
													wordsCopy.splice(n, 0, oldWord);
												}
												//offset ++;
										}

									}
									var finalText = "";
									wordsCopy.forEach( word => {
										if (word.includes("<span ")) {
											finalText = finalText.substring(0, finalText.length - 1);
											finalText += word;
										} else {
											finalText += word;
											finalText +=" ";
										}

									});
									children[x].innerHTML = finalText;

								}


												
							}
							all_blogs[i].setAttribute("class", "post_div highl");

						} else {

							all_blogs[i].style.display = "none";
							all_blogs[i].setAttribute("class",  "post_div" );

						}
			}
};*/

function removeHighlightText(classText, specialStyle, all_blogs){

		var text_field = document.getElementById("search_news_button_text").value.toLowerCase();
		var custom_blog = document.getElementById("custom_blog_div");

			// Restore all Blog Posts before searching

			for (i = 0; i < all_blogs.length; i++) {
				if ( all_blogs[i].style.display === "none" ) {
					all_blogs[i].style.display = "inline";
					all_blogs[i].setAttribute("class",  "post_div" );
				}
			}

			// Loop through all Blog posts clean HighLight

				for (i = 0; i < all_blogs.length; i++) {
					
					// Highlight found Blog Post Text
						var children = all_blogs[i].getElementsByClassName(classText);

						for (x = 0; x < children.length; x++) {


							var letters = children[x].innerHTML;
							var letters = letters.split('<span style="').join('');
							var letters = letters.split(specialStyle).join('');
							var letters = letters.split('">').join('');
							var letters = letters.split('</span>').join('');
							
							children[x].innerHTML = letters;
						}
			}
};

/**
document.write('<span id="returnLink" return="' + document.referrer + '"><img src="images/Blog Return Link Image v6.png" alt="Click to return" onmouseover="this.src=&quot;images/Blog Return Link Image - Hover v6.png&quot;;" onmouseout="this.src=&quot;images/Blog Return Link Image v6.png&quot;;"/></span>');
*/

function createPagination(isButtonPush = false){
		//$('#custom_blog_div');
		//var all_blogs = (!isButtonPush) ? document.getElementById("custom_blog_div").querySelectorAll(".post_div") : document.getElementById("custom_blog_div").querySelectorAll(".highl") ;
		var all_blogs = (!isButtonPush)? $('#custom_blog_div .post_div') : $('#custom_blog_div .highl');
//		console.log('all_blogs count is ' + all_blogs.length, all_blogs);
		//all_blogs = all_blogs.filter(blog => $(blog.target).css("display") === 'none');
		//console.log('all_blogs count after filter is ' + all_blogs.length);
		var text_field = document.getElementById("search_news_button_text").value.toLowerCase();
		var custom_blog = document.getElementById("custom_blog_div");

		var showingBlogs=10;
		var pageNumber = Math.ceil(parseInt(all_blogs.length/showingBlogs));
		var rem = parseInt(all_blogs.length % showingBlogs);
		var totalPage = pageNumber;
		var startNumber= (totalPage-Number(pageNumber))*showingBlogs;
		var endNumber = ((totalPage-Number(pageNumber))*showingBlogs)+showingBlogs;

	    if(rem != 0){
	    	var pageNumber = pageNumber+1;
	    	var totalPage = pageNumber+1;
	    	var endNumber = parseInt(all_blogs.length % showingBlogs);
	    }

		var count = 0;

		// Restore all Blog Posts before searching
		for (i = 0; i < all_blogs.length; i++) {
			if(text_field != null && text_field != ""){
				if(all_blogs[i].className.includes("highl") ){
					if(count>=startNumber  && count<endNumber){
						all_blogs[i].style.display = "inline";
					} else {
						all_blogs[i].style.display = "none";
					}

					count++;
				}						
			}else{
				all_blogs[i].style.display = "none";
				if ( i>=startNumber  && i<endNumber) {
					all_blogs[i].style.display = "inline";
					var count = all_blogs.length;
				}
			}
		}
//		console.log('page number, showingBlogs, count is', pageNumber, showingBlogs, count);
		fixedPageNumber(pageNumber, showingBlogs, count, isButtonPush);
};

function goToPage(pageNumber=''){
        if(pageNumber==''){
        	var pageNumber=document.getElementById('search_pages_button_text').value;
        }
		var all_blogs = document.getElementById("custom_blog_div").querySelectorAll(".post_div");
		var text_field = document.getElementById("search_news_button_text").value.toLowerCase();
		var custom_blog = document.getElementById("custom_blog_div");

		var showingBlogs=10;
		var rem = parseInt(all_blogs.length % showingBlogs);
		var pageNumber = Number(pageNumber);
		var totalPage = parseInt(all_blogs.length/showingBlogs);	

		if(pageNumber<1 || pageNumber>totalPage){
			var pageNumber = totalPage; 
			document.getElementById('search_pages_button_text').value =  pageNumber;
		}

		if(rem != 0){
	    	var totalPage = totalPage+1;
	    }

		var startNumber= (totalPage-Number(pageNumber))*showingBlogs;
		var endNumber = ((totalPage-Number(pageNumber))*showingBlogs)+showingBlogs;

		if(rem != 0){
	    	var startNumber=startNumber-(showingBlogs-rem);
	    	var endNumber=endNumber-(showingBlogs-rem);
	    }


		var count = 0;

		// Restore all Blog Posts before searching
		for (i = 0; i < all_blogs.length; i++) {
			if(text_field != null && text_field != ""){
				if(all_blogs[i].className.includes("highl") ){
					if(count>=startNumber  && count<endNumber){
						all_blogs[i].style.display = "inline";
					} else {
						all_blogs[i].style.display = "none";
					}

					count++;
				}						
			}else{
				all_blogs[i].style.display = "none";
				if ( i>=startNumber  && i<endNumber) {
					all_blogs[i].style.display = "inline";
					var count = all_blogs.length;
				}
			}
		}

		fixedPageNumber(pageNumber, showingBlogs, count);

		document.getElementById("search_pages_button_text").value = "";
		document.getElementById("search_pages").style.display="none";
};

function paginationRight(){

		var all_blogs = document.getElementById("custom_blog_div").querySelectorAll(".post_div");
		var text_field = document.getElementById("search_news_button_text").value.toLowerCase();
		var custom_blog = document.getElementById("custom_blog_div");

		var showingBlogs=10;
		var pageNumber = document.getElementById("pageNumber").innerHTML;
		var rem = parseInt(all_blogs.length % showingBlogs);
		var pageNumber = Number(pageNumber)+1;
		var totalPage = parseInt(all_blogs.length/showingBlogs);	

		if(rem != 0){
	    	var totalPage = totalPage+1;
	    }

		var startNumber= (totalPage-Number(pageNumber))*showingBlogs;
		var endNumber = ((totalPage-Number(pageNumber))*showingBlogs)+showingBlogs;

		if(rem != 0){
	    	var startNumber=startNumber-(showingBlogs-rem);
	    	var endNumber=endNumber-(showingBlogs-rem);
	    }


		var count = 0;

		// Restore all Blog Posts before searching
		for (i = 0; i < all_blogs.length; i++) {
			if(text_field != null && text_field != ""){
				if(all_blogs[i].className.includes("highl") ){
					if(count>=startNumber  && count<endNumber){
						all_blogs[i].style.display = "inline";
					} else {
						all_blogs[i].style.display = "none";
					}

					count++;
				}						
			}else{
				all_blogs[i].style.display = "none";
				if ( i>=startNumber  && i<endNumber) {
					all_blogs[i].style.display = "inline";
					var count = all_blogs.length;
				}
			}
		}

		fixedPageNumber(pageNumber, showingBlogs, count);
};


function paginationLeft(){

		var all_blogs = document.getElementById("custom_blog_div").querySelectorAll(".post_div");
		var text_field = document.getElementById("search_news_button_text").value.toLowerCase();
		var custom_blog = document.getElementById("custom_blog_div");

		var showingBlogs=10;
		var pageNumber = document.getElementById("pageNumber").innerHTML;
		var rem = parseInt(all_blogs.length % showingBlogs);
		var pageNumber = Number(pageNumber)-1;
		var totalPage = parseInt(all_blogs.length/showingBlogs);

		if(rem != 0){
	    	var totalPage = totalPage+1;
	    }

		var startNumber= (totalPage-Number(pageNumber))*showingBlogs;
		var endNumber = ((totalPage-Number(pageNumber))*showingBlogs)+showingBlogs;
		
		if(rem != 0){
	    	var startNumber=startNumber-(showingBlogs-rem);   
	    	var endNumber=endNumber-(showingBlogs-rem);
	    	var totalPage = totalPage+1;
	    }

		var count = 0;

		// Restore all Blog Posts before searching
		for (i = 0; i < all_blogs.length; i++) {
			if(text_field != null && text_field != ""){
				if(all_blogs[i].className.includes("highl") ){
					if(count>=startNumber  && count<endNumber){
						all_blogs[i].style.display = "inline";
					} else {
						all_blogs[i].style.display = "none";
					}

					count++;
				}						
			}else{
				all_blogs[i].style.display = "none";
				if ( i>=startNumber  && i<endNumber) {
					all_blogs[i].style.display = "inline";
					var count = all_blogs.length;
				}
			}
		}

		fixedPageNumber(pageNumber, showingBlogs, count);

};

function hrefNumbers(pageNumber,number, currentPage = false){

	var text = document.getElementById(pageNumber);
	text.innerHTML = '';

	if(!currentPage){
		var a = document.createElement("a");
		text.appendChild(a);
	//	a.appendChild(document.createElement("br"));
		//a.classList.add("");
		a.setAttribute("href", number);
		a.innerText = number;
		a.onclick = function(e){
			e.preventDefault();
			var href = this.childNodes[0].data;
			goToPage(href);
			console.log(text);
				return false;
		};
	}else{
		text.innerHTML = number;
	}
};

function fixedPageNumber(pageNumber, showingBlogs, count, isButtonPush = false){

	//document.getElementById("pageNumber1").innerText = ;
	//document.getElementById("pageNumber2").innerText = Number(pageNumber)-3;
	//document.getElementById("pageNumber3").innerText = Number(pageNumber)-2;
	//document.getElementById("pageNumber4").innerText = Number(pageNumber)-1;
	//document.getElementById("pageNumber").innerText = Number(pageNumber);
	//document.getElementById("pageNumber5").innerText = Number(pageNumber)+1;
	//document.getElementById("pageNumber6").innerText = Number(pageNumber)+2;
	//document.getElementById("pageNumber7").innerText = Number(pageNumber)+3;
	//document.getElementById("pageNumber8").innerText = Number(pageNumber)+4;
	//document.getElementById("pageNumberFirst").innerText = Number(1);
	//document.getElementById("pageNumberLast").innerText = parseInt(count/showingBlogs)+1;
    hrefNumbers("pageNumber1", Number(pageNumber)-4);
    hrefNumbers("pageNumber2", Number(pageNumber)-3);
    hrefNumbers("pageNumber3", Number(pageNumber)-2);
    hrefNumbers("pageNumber4", Number(pageNumber)-1);
    hrefNumbers("pageNumber", Number(pageNumber), true);
    hrefNumbers("pageNumber5", Number(pageNumber)+1);
    hrefNumbers("pageNumber6", Number(pageNumber)+2);
    hrefNumbers("pageNumber7", Number(pageNumber)+3);
    hrefNumbers("pageNumber8", Number(pageNumber)+4);
    hrefNumbers("pageNumberFirst", 1);

	var all_blogs = (!isButtonPush)? $('#custom_blog_div .post_div') : $('#custom_blog_div .highl');
	var rem = parseInt(all_blogs.length % showingBlogs);
	var totalPage = parseInt(all_blogs.length/showingBlogs);

	if(rem != 0){
    	var totalPage = totalPage+1;
    }
	
	if(rem != 0){
    	hrefNumbers("pageNumberLast", parseInt(count/showingBlogs)+1);
    }else{
		hrefNumbers("pageNumberLast", parseInt(count/showingBlogs));
    }



  	document.getElementById("arrowLeft").style.display="inline";
	document.getElementById("leftdots").style.display="inline";
	document.getElementById("pageNumberFirst").style.display="inline";
	document.getElementById("pageNumber1").style.display="none";
	document.getElementById("pageNumber2").style.display="none";
	document.getElementById("pageNumber3").style.display="inline";
	document.getElementById("pageNumber4").style.display="inline";
	//-------------------------
	document.getElementById("pageNumber5").style.display="inline";
	document.getElementById("pageNumber6").style.display="inline";
	document.getElementById("pageNumber7").style.display="none";
	document.getElementById("pageNumber8").style.display="none";
	document.getElementById("rightdots").style.display="inline";
	document.getElementById("pageNumberLast").style.display="inline";
	document.getElementById("arrowRight").style.display="inline";

	if(Number(pageNumber) == 1 ){
		document.getElementById("arrowLeft").style.display="none";
		document.getElementById("pageNumberFirst").style.display="none";
		document.getElementById("leftdots").style.display="none";
		document.getElementById("pageNumber3").style.display="none";
		document.getElementById("pageNumber4").style.display="none";
		document.getElementById("pageNumber7").style.display="inline";
		document.getElementById("pageNumber8").style.display="inline";
		document.getElementById("rightdots").style.display="inline";
	    document.getElementById("pageNumberLast").style.display="inline";
	}

	if(Number(pageNumber) == 2 ){
		document.getElementById("pageNumberFirst").style.display="none";
		document.getElementById("leftdots").style.display="none";
		document.getElementById("pageNumber1").style.display="none";
		document.getElementById("pageNumber2").style.display="none";
		document.getElementById("pageNumber3").style.display="none";
		document.getElementById("pageNumber7").style.display="inline";
		document.getElementById("pageNumber8").style.display="none";
		document.getElementById("rightdots").style.display="inline";
	    document.getElementById("pageNumberLast").style.display="inline";
	}

	if(Number(pageNumber) == 3 ){
		document.getElementById("pageNumberFirst").style.display="none";
		document.getElementById("leftdots").style.display="none";
	}

	if(Number(pageNumber) == 4 ){
		document.getElementById("leftdots").style.display="none";
	}

    var maxPage = parseInt(count/showingBlogs)
    var rem = parseInt(count % showingBlogs)
    if(rem != 0){
    	var maxPage = maxPage+1;
    }

	if(Number(pageNumber) == maxPage){
		document.getElementById("arrowRight").style.display="none";
		document.getElementById("rightdots").style.display="none";
		document.getElementById("pageNumber1").style.display="inline";
		document.getElementById("pageNumber2").style.display="inline";
		document.getElementById("pageNumber5").style.display="none";
		document.getElementById("pageNumber6").style.display="none";
		document.getElementById("pageNumberLast").style.display="none";
	}

	if(Number(pageNumber) == maxPage-1){
		document.getElementById("rightdots").style.display="none";
		document.getElementById("pageNumber2").style.display="inline";
		document.getElementById("pageNumber6").style.display="none";
		document.getElementById("pageNumberLast").style.display="none";
	}

	if(Number(pageNumber) == maxPage-2){
		document.getElementById("rightdots").style.display="none";
		document.getElementById("pageNumberLast").style.display="none";
	}

	if(Number(pageNumber) == maxPage-3){
		document.getElementById("pageNumber7").style.display="none";
		document.getElementById("rightdots").style.display="none";
	}

	hideUselessPage(pageNumber, isButtonPush);
}

function hideUselessPage(pageNumber, isButtonPush = false){
	var blogLength = (!isButtonPush)? $('#custom_blog_div .post_div').length : $('#custom_blog_div .highl').length;
	if(blogLength<=10){
		document.getElementById("arrowLeft").style.display="none";
		document.getElementById("leftdots").style.display="none";
		document.getElementById("pageNumberFirst").style.display="none";
		document.getElementById("pageNumber1").style.display="none";
		document.getElementById("pageNumber2").style.display="none";
		document.getElementById("pageNumber3").style.display="none";
		document.getElementById("pageNumber4").style.display="none";
		document.getElementById("pageNumber5").style.display="none";
		document.getElementById("pageNumber6").style.display="none";
		document.getElementById("pageNumber7").style.display="none";
		document.getElementById("pageNumber8").style.display="none";
		document.getElementById("rightdots").style.display="none";
		document.getElementById("pageNumberLast").style.display="none";
		document.getElementById("arrowRight").style.display="none";
		return;
	}
	if(blogLength<=20){
		document.getElementById("leftdots").style.display="none";
		document.getElementById("pageNumberFirst").style.display="none";
		document.getElementById("pageNumber1").style.display="none";
		document.getElementById("pageNumber2").style.display="none";
		document.getElementById("pageNumber3").style.display="none";
		document.getElementById("pageNumber6").style.display="none";
		document.getElementById("pageNumber7").style.display="none";
		document.getElementById("pageNumber8").style.display="none";
		document.getElementById("rightdots").style.display="none";
		document.getElementById("pageNumberLast").style.display="none";
		return;
	}
	if(blogLength<=30){
		if(Number(pageNumber) == 1 ){
			document.getElementById("arrowLeft").style.display="none";
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber3").style.display="none";
			document.getElementById("pageNumber4").style.display="none";
			document.getElementById("pageNumber7").style.display="none";
			document.getElementById("pageNumber8").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}

		if(Number(pageNumber) == 2 ){
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber1").style.display="none";
			document.getElementById("pageNumber2").style.display="none";
			document.getElementById("pageNumber3").style.display="none";
			document.getElementById("pageNumber7").style.display="none";
			document.getElementById("pageNumber8").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}

		if(Number(pageNumber) == 3 ){
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber1").style.display="none";
			document.getElementById("pageNumber2").style.display="none";
			document.getElementById("pageNumber7").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}
		return;
	}
	if(blogLength>30 &&blogLength<=40){
		if(Number(pageNumber) == 1 ){
			document.getElementById("arrowLeft").style.display="none";
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber3").style.display="none";
			document.getElementById("pageNumber4").style.display="none";
			document.getElementById("pageNumber7").style.display="inline";
			document.getElementById("pageNumber8").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}

		if(Number(pageNumber) == 2 ){
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber1").style.display="none";
			document.getElementById("pageNumber2").style.display="none";
			document.getElementById("pageNumber3").style.display="none";
			document.getElementById("pageNumber7").style.display="none";
			document.getElementById("pageNumber8").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}

		if(Number(pageNumber) == 3 ){
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber1").style.display="none";
			document.getElementById("pageNumber2").style.display="none";
			document.getElementById("pageNumber7").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}
		if(Number(pageNumber) == 4 ){
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber1").style.display="none";
			document.getElementById("pageNumber7").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}
		return;
	}

	if(blogLength>40 &&blogLength<=50){
		if(Number(pageNumber) == 1 ){
			document.getElementById("arrowLeft").style.display="none";
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber3").style.display="none";
			document.getElementById("pageNumber4").style.display="none";
			document.getElementById("pageNumber7").style.display="inline";
			document.getElementById("pageNumber8").style.display="inline";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}

		if(Number(pageNumber) == 2 ){
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber1").style.display="none";
			document.getElementById("pageNumber2").style.display="none";
			document.getElementById("pageNumber3").style.display="none";
			document.getElementById("pageNumber7").style.display="inline";
			document.getElementById("pageNumber8").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}

		if(Number(pageNumber) == 3 ){
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber1").style.display="none";
			document.getElementById("pageNumber2").style.display="none";
			document.getElementById("pageNumber7").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}
		if(Number(pageNumber) == 4 ){
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("pageNumber1").style.display="none";
			document.getElementById("pageNumber7").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}
		if(Number(pageNumber) == 5 ){
			document.getElementById("pageNumberFirst").style.display="none";
			document.getElementById("leftdots").style.display="none";
			document.getElementById("rightdots").style.display="none";
		    document.getElementById("pageNumberLast").style.display="none";
		}
		return;
	}
	if(blogLength<60){
		document.getElementById("leftdots").style.display="none";
		document.getElementById("rightdots").style.display="none";

		return;
	}
}


function newsSearch(text){

		var all_blogs = document.getElementById("custom_blog_div").querySelectorAll(".post_div");
		var text_field = text;
		var custom_blog = document.getElementById("custom_blog_div");

			// Loop through all Blog posts

				for (i = 0; i < all_blogs.length; i++) {

					// Display all Blog posts containing the text from the Search Bar
					var children = all_blogs[i].getElementsByClassName("blog_post_header");	
					for (x = 0; x < children.length; x++) {
						if ( children[x].innerText.toLowerCase().includes(text_field.toLowerCase()) === true ) {

							all_blogs[i].style.display = "inline";
							//removeAllHighLights();

						} else {

							all_blogs[i].style.display = "none";
							all_blogs[i].setAttribute("class",  "post_div" );

						}
					}

				}

	    var last_notes_message = document.getElementById("last_notes_message").style.display = "inline";
	    var last_notes_message = document.getElementById("post_navigation").style.display = "none";
	 
		document.body.scrollTop = 0; // For Safari
    	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


// Jump to Page

/*
var pageNumberInput = document.getElementById("search_pages_button_text");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("search_pages_button").click();
  }
});
*/

function jumpToPage() {
  var x = document.getElementById("search_pages");
  if (x.style.display === "inline") {
    x.style.display = "none";
  } else {
    x.style.display = "inline";
  }
}














