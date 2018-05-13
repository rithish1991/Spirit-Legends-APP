document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed


	// Side Menu height equals Custom Blog Div height if originally smaller

	if (document.getElementById('custom_blog_div')) {

		var divHeight;
		var obj = document.getElementById('custom_blog_div');

		if(obj.offsetHeight) {
		    divHeight = obj.offsetHeight;

		} else if(obj.style.pixelHeight) {
		    divHeight = obj.style.pixelHeight;
		}

		document.getElementById("side_menu").style.minHeight = (divHeight + "px");
	}


	// Database Main Div equals Side Menu height always

	if (document.getElementById('database_main_div')) {

		if (document.getElementById('database_main_div').clientHeight < document.getElementById("side_menu").clientHeight) {

			var divHeight;
			var obj = document.getElementById('side_menu');

			if(obj.offsetHeight) {
			    divHeight = obj.offsetHeight;

			} else if(obj.style.pixelHeight) {
			    divHeight = obj.style.pixelHeight;
			}

			document.getElementById("database_main_div").style.minHeight = (divHeight + "px");

		} else if(document.getElementById('database_main_div').clientHeight > document.getElementById("side_menu").clientHeight) {

			var divHeight;
			var obj = document.getElementById('database_main_div');

			if(obj.offsetHeight) {
			    divHeight = obj.offsetHeight;

			} else if(obj.style.pixelHeight) {
			    divHeight = obj.style.pixelHeight;
			}

			document.getElementById("side_menu").style.minHeight = (divHeight + "px");

		}

	}


	// Make empty links a different color

	if (document.querySelectorAll('a[href="#"]')) {

		var emptyLinksArray = document.querySelectorAll('a[href="#"]');

		for (i = 0; i < emptyLinksArray.length; i++) {
    		emptyLinksArray[i].style.color = "red";
		} 

	}


	// Database Articles - Contents div

	if (document.getElementsByClassName("database_article_contents")) {


		var article = document.getElementById("content").querySelectorAll(".database_article_title, .database_article_subtitle");
		var contents = document.getElementsByClassName("database_article_contents");

		for (i = 0; i < article.length; i++) {
			if ( article[i].classList.contains("database_article_title")) {
				var a = document.createElement("a");
				var text = document.createTextNode(article[i].innerHTML.replace("&amp;", "&"));

				var img = document.createElement("img");
				img.src = "images/List Bullet Image and Space.png";
				a.appendChild(img);
				a.appendChild(text);
				a.appendChild(document.createElement("br"));
				a.classList.add("database_article_contents_title");
				a.setAttribute("href", "#" + article[i].getAttribute("id") );
				contents[0].appendChild(a);

			} else if ( article[i].classList.contains("database_article_subtitle")) {
				var a = document.createElement("a");
				var text = document.createTextNode(article[i].innerHTML.replace("&amp;", "&"));

				var img = document.createElement("img");
				img.src = "images/Sub List Bullet Image and Space.png";
				a.appendChild(img);
				a.appendChild(text);
				a.appendChild(document.createElement("br"));
				a.classList.add("database_article_contents_subtitle");
				a.setAttribute("href", "#" + article[i].getAttribute("id") );
				contents[0].appendChild(a);
			}

		}

	}

/*
	if (document.getElementsByClassName("database_article_contents")) {


		var article = document.getElementById("content").querySelectorAll(".database_article_title, .database_article_subtitle, .database_article_second_title");
		var contents = document.getElementsByClassName("database_article_contents");

		for (i = 0; i < article.length; i++) {
			if ( article[i].classList.contains("database_article_title")) {
				var a = document.createElement("a");
				var text = document.createTextNode(article[i].innerHTML.replace("&amp;", "&"));

				var img = document.createElement("img");
				img.src = "images/List Bullet Image and Space.png";
				a.appendChild(img);
				a.appendChild(text);
				a.appendChild(document.createElement("br"));
				a.classList.add("database_article_contents_title");
				a.setAttribute("href", "#" + article[i].getAttribute("id") );
				contents[0].appendChild(a);

			} else if ( article[i].classList.contains("database_article_second_title")) {
				var a = document.createElement("a");
				var text = document.createTextNode(article[i].innerHTML.replace("&amp;", "&"));

				var img = document.createElement("img");
				img.src = "images/Sub List Bullet Image and Space.png";
				a.appendChild(img);
				a.appendChild(text);
				a.classList.add("database_article_contents_second_title");
				a.setAttribute("href", "#" + article[i].getAttribute("id") );
				contents[0].appendChild(a);

					// Show and Hide Subtitle Contents

					var span = document.createElement("span");
					var show_text = document.createTextNode("[show]")
					span.appendChild(show_text);
					span.classList.add("show_button")
					a.appendChild(span);
					a.appendChild(document.createElement("br"));

			} else if ( article[i].classList.contains("database_article_subtitle")) {
				var a = document.createElement("a");
				var text = document.createTextNode(article[i].innerHTML.replace("&amp;", "&"));

				var img = document.createElement("img");
				img.src = "images/Sub List Bullet Image and Space.png";
				a.appendChild(img);
				a.appendChild(text);
				a.appendChild(document.createElement("br"));
				a.classList.add("database_article_contents_subtitle");
				a.setAttribute("href", "#" + article[i].getAttribute("id") );
				contents[0].appendChild(a);
			}

		}

	}
*/

	// Automatically implement Fresco Lightbox to images

	if (document.getElementsByClassName("database_article_image_left")) {

		//Lightbox code for database_article_image_left

		var article = document.getElementById("content").querySelectorAll(".database_article_image_left");

		for (i = 0; i < article.length; i++) {
			var a = document.createElement("a");
			a.setAttribute("href", article[i].firstElementChild.src);
			a.setAttribute("class", "fresco");
			a.setAttribute('data-fresco-caption', article[i].getElementsByClassName("database_article_image_text")[0].innerHTML );
			article[i].appendChild(a);

			a.appendChild(article[i].getElementsByTagName("img")[0] );
			article[i].insertBefore(a, article[i].getElementsByClassName("database_article_image_text")[0] );
		}
	}

	if (document.getElementsByClassName("database_article_image_near_infobox")) {

		//Lightbox code for database_article_image_near_infobox

		var article = document.getElementById("content").querySelectorAll(".database_article_image_near_infobox");

		for (i = 0; i < article.length; i++) {
			var a = document.createElement("a");
			a.setAttribute("href", article[i].firstElementChild.src);
			a.setAttribute("class", "fresco");
			a.setAttribute('data-fresco-caption', article[i].getElementsByClassName("database_article_image_text")[0].innerHTML );
			article[i].appendChild(a);

			a.appendChild(article[i].getElementsByTagName("img")[0] );
			article[i].insertBefore(a, article[i].getElementsByClassName("database_article_image_text")[0] );
		}
	}

	if (document.getElementsByClassName("database_article_image_right")) {

		//Lightbox code for database_article_image_right

		var article = document.getElementById("content").querySelectorAll(".database_article_image_right");

		for (i = 0; i < article.length; i++) {
			var a = document.createElement("a");
			a.setAttribute("href", article[i].firstElementChild.src);
			a.setAttribute("class", "fresco");
			a.setAttribute('data-fresco-caption', article[i].getElementsByClassName("database_article_image_text")[0].innerHTML );
			article[i].appendChild(a);

			a.appendChild(article[i].getElementsByTagName("img")[0] );
			article[i].insertBefore(a, article[i].getElementsByClassName("database_article_image_text")[0] );
		}
	}

	if (document.getElementsByClassName("database_article_profile")) {

		//Lightbox code for database_article_profile

		var article = document.getElementById("database_article_side_menu");

		if (article === null) {
			article === 0; // "return" seems to stop the rest of the Javascript code after this function, but "article === 0" does not 
		} else {

			var a = document.createElement("a");
//			console.log(article.getElementsByTagName("img")[0].src);
			a.setAttribute("href", article.getElementsByTagName("img")[0].src);
			a.setAttribute("class", "fresco");
			a.setAttribute('data-fresco-caption', article.getElementsByTagName("img")[0].alt );
			article.appendChild(a);

			a.appendChild(article.getElementsByTagName("img")[0] );
			article.insertBefore(a, article.firstChild );
		}
	}


	// Header
	
		//Place header image into "header_and_navigation" div

		var top = document.getElementById("header_and_navigation");
		var headerImg = document.createElement("img");

		var newestRelease = document.createElement("a");
		var newestReleaseImg = document.createElement("img");

		headerImg.src = "images/Spirit Legends Main Banner v4.png";
		headerImg.setAttribute("width", "960px");
		headerImg.setAttribute("id", "header_image");
		top.appendChild(headerImg);

		newestReleaseImg.src = "images/Newest Release 1 v4.png"
		newestRelease.setAttribute("id", "newest_release_button");
		newestRelease.setAttribute("href", "#");
		newestRelease.appendChild(newestReleaseImg);
		top.appendChild(newestRelease);





		// Create Navigation Bar

		var navUnorderedList = document.createElement("ul");
		navUnorderedList.setAttribute("id", "navigation");
		top.appendChild(navUnorderedList);

		// Home

		var navHomeButton = document.createElement("li");
		var navHomeButtonImg = document.createElement("img");
		var navHomeButtonLink = document.createElement("a");
		navHomeButton.setAttribute("id", "home_button");
		navHomeButtonImg.src = "images/Button - Home v2.png";
		navHomeButtonImg.setAttribute("width", "99px");
		navHomeButtonImg.setAttribute("alt", "Home");
		navHomeButtonImg.setAttribute("onmouseover", "src='images/Button - Home v2 - Hover.png'");
		navHomeButtonImg.setAttribute("onmouseout", "src='images/Button - Home v2.png'");
		navHomeButtonLink.setAttribute("href", "index.html");
		navHomeButton.appendChild(navHomeButtonImg);
		navHomeButtonLink.appendChild(navHomeButton);
		navUnorderedList.appendChild(navHomeButtonLink);

		// Series

		var navSeriesButton = document.createElement("li");
		var navSeriesButtonImg = document.createElement("img");
		var navSeriesButtonLink = document.createElement("a");
		navSeriesButton.setAttribute("id", "series_button");
		navSeriesButtonImg.src = "images/Button - Series v2.png";
		navSeriesButtonImg.setAttribute("width", "99px");
		navSeriesButtonImg.setAttribute("alt", "Series");
		navSeriesButtonImg.setAttribute("onmouseover", "src='images/Button - Series v2 - Hover.png'");
		navSeriesButtonImg.setAttribute("onmouseout", "src='images/Button - Series v2.png'");
		navSeriesButtonLink.setAttribute("href", "series.html");
		navSeriesButton.appendChild(navSeriesButtonImg);
		navSeriesButtonLink.appendChild(navSeriesButton);
		navUnorderedList.appendChild(navSeriesButtonLink);

		// Database

		var navDatabaseButton = document.createElement("li");
		var navDatabaseButtonImg = document.createElement("img");
		var navDatabaseButtonLink = document.createElement("a");
		navDatabaseButton.setAttribute("id", "series_button");
		navDatabaseButtonImg.src = "images/Button - Database v2.png";
		navDatabaseButtonImg.setAttribute("width", "99px");
		navDatabaseButtonImg.setAttribute("alt", "Database");
		navDatabaseButtonImg.setAttribute("onmouseover", "src='images/Button - Database v2 - Hover.png'");
		navDatabaseButtonImg.setAttribute("onmouseout", "src='images/Button - Database v2.png'");
		navDatabaseButtonLink.setAttribute("href", "database.html");
		navDatabaseButton.appendChild(navDatabaseButtonImg);
		navDatabaseButtonLink.appendChild(navDatabaseButton);
		navUnorderedList.appendChild(navDatabaseButtonLink);


/*	Not Working

		window.onpageshow = 
			function(event){
				if (event.persisted){
				//for every div and image you want changed back you can add a loop here to change all at once or just one div by name//
					document.getElementById('home_button').innerHTML = '<img src="images/Button - Home v2.png" onmouseover="src=\'images/Button - Home v2 - Hover.png\';" onmouseout="src=\'images/Button - Home v2.png\'"; width="99px"; alt="Home";>';
					document.getElementById('series_button').innerHTML = '<img src="images/Button - Series v2.png" onmouseover="src=\'images/Button - Series v2 - Hover.png\';" onmouseout="src=\'images/Button - Series v2.png\'"; width="99px"; alt="Series";>';
			}
		}
*/

	// Footer

		//Place footer image into "footer" div

		var bottom = document.getElementById("footer_div");
		var newLine = document.createElement("br");
		bottom.appendChild(newLine);
		var footerImg = document.createElement("img");
		footerImg.src = "images/Banner - Return to Top v2.jpg";
		footerImg.setAttribute("id", "return_to_top_image");
		footerImg.setAttribute("onmouseover", "src='images/Banner - Return to Top v2 - Hover.jpg'");
		footerImg.setAttribute("onmouseout", "src='images/Banner - Return to Top v2.jpg'");
		bottom.appendChild(footerImg);


		//Bottom copyrights
		
		var bottomText = document.createElement("span");
		var bottomTextImg = document.createElement("img");
		var bottomLinkAndrew = document.createElement("a");
		var bottomLinkSteven = document.createElement("a");

		bottomText.setAttribute("class", "footer_text");
		bottomText.innerHTML = 'Spirit Legends is copyright&copy; of <a href="http://andrewartwork.com" class= "footer_link">Andrew DeCrescenzo</a>. Website design is based on the now defunct website, Mega Man Monthly, which was designed by <a href="https://twitter.com/stevenchase87" class= "footer_link">Steven Chase</a>. All rights reserved.'

		bottomTextImg.src = "images/Footer Image.jpg";
		bottomTextImg.setAttribute("class", "footer_image");

		bottom.appendChild(bottomText);
		bottom.appendChild(bottomTextImg);


		// "Return to Top" Button
		
		document.getElementById("return_to_top_image").addEventListener("click", function(){
			document.body.scrollTop = 0; // For Safari
	    	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		});









/*
		fetch("https://153c0633.ngrok.io/blog-content")
		.then(function(res){
			return res.text();
		})
		.then(function(blogText) {

			var blogPost = JSON.parse(blogText);
			var blogPosts = "";

			blogPost.forEach(function(post) {
				blogPosts += post;
			});

			var blogWrapper = document.createElement('div');
			var blog = document.getElementById('custom_blog_div');

			blogWrapper.innerHTML = blogPosts;

			blog.append(blogWrapper);
		})
		.catch(function(err) {
			console.log(err)
		})

		document.querySelector('.search-button').addEventListener('click', function() {
			var inputFormValue = document.getElementById('search-input').value;

			fetch("https://153c0633.ngrok.io/search-blog-posts?q=" + inputFormValue)
			.then(function(res) {
				return res.text()
			})
			.then((searchQuery) => {
				document.querySelector("#custom_blog_div").innerHTML = ""

				var searchQueryHtml = JSON.parse(searchQuery);
				var postsThatMatched = ""


				searchQueryHtml.forEach(function(post) {
					postsThatMatched += post;
				});

				document.querySelector("#custom_blog_div").innerHTML = postsThatMatched;
			})
		})
*/

});