document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed


// Database Main Div equals Side Menu height always

	if (document.getElementById('custom_blog_div')) {

		if(document.getElementById('custom_blog_div').clientHeight > document.getElementById("side_menu").clientHeight) {

			var divHeight;
			var obj = document.getElementById('custom_blog_div');

			if(obj.offsetHeight) {
			    divHeight = obj.offsetHeight;

			} else if(obj.style.pixelHeight) {
			    divHeight = obj.style.pixelHeight;
			}

			document.getElementById("side_menu").style.minHeight = (divHeight + "px");

		}

	}



});