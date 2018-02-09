document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed


	// "Return to Top" Button
	document.getElementById("return_to_top_image").addEventListener("click", function(){
		document.body.scrollTop = 0; // For Safari
	    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	});


	// Side Menu height equals Custom Blog Div height

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
/*
		var header = document.createElement("a");
		var header_text = document.createTextNode("Contents");
		header.appendChild(header_text);
		contents.appendChild(header);
*/

		for (i = 0; i < article.length; i++) {
			if ( article[i].classList.contains("database_article_title")) {
				var a = document.createElement("a");
				var text = document.createTextNode(article[i].innerHTML.replace("&amp;", "&"));

				var img = document.createElement("img");
				img.src = "../images/List Bullet Image and Space.png";
				a.appendChild(img);
				a.appendChild(text);
				a.appendChild(document.createElement("br"));
				a.classList.add("database_article_contents_title");
				a.setAttribute("href", "#" + article[i].getAttribute("id") )
				contents[0].appendChild(a);

			} else if ( article[i].classList.contains("database_article_subtitle")) {
				var a = document.createElement("a");
				var text = document.createTextNode(article[i].innerHTML.replace("&amp;", "&"));

				var img = document.createElement("img");
				img.src = "../images/Sub List Bullet Image and Space.png";
				a.appendChild(img);
				a.appendChild(text);
				a.appendChild(document.createElement("br"));
				a.classList.add("database_article_contents_subtitle");
				a.setAttribute("href", "#" + article[i].getAttribute("id") )
				contents[0].appendChild(a);
			}

		}

	}


	// Custom Lightbox

	if (document.getElementsByClassName("database_article_image_left")) {

		//Lightbox code for database_article_image_left

			//On image mouse over, append a semi-transparent white div on top of the image.

/*
	Document.querySelector(div.classname img)
*/

			document.getElementsByClassName("database_article_image_left_lightbox").onmouseover = function() { mouseOver() };
				function mouseOver() {

					console.log("hi");
				}




			};
			

			//On image mouse out, remove the appended semi-transparent white div.

			//On image click, append a semi-transparent black div that fills the screen

			//Append a smaller white div to the center of the screen on top of the full screen black div

			//Append an X to the top right of the centered white div that removes the black div and the white div (and all of its contents)

			//Append the clicked image to the centered white div

			//Append the text description of the image to the centered white div

			//Clicking outside the white div removes all of these (black div, white div, X button, image, and text description)

	}

	if (document.getElementsByClassName("database_article_image_near_infobox")) {

		//Lightbox code for database_article_image_near_infobox
	}

	if (document.getElementsByClassName("database_article_image_right")) {

		//Lightbox code for database_article_image_right
	}









});