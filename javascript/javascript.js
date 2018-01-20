document.addEventListener("DOMContentLoaded", function() { 
	// this function runs when the DOM is ready, i.e. when the document has been parsed
	
	// "Return to Top" Button
	document.getElementById("return_to_top_image").addEventListener("click", function(){
		document.body.scrollTop = 0; // For Safari
	    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	});

	fetch("https://445bd017.ngrok.io/blog-content")
	.then(function(res){
		return res.text();
	})
	.then(function(blogText) {

		var blogPost = JSON.parse(blogText);

		var blogPosts = "<div class=\"blog-wrapper\">";

		blogPost.forEach(function(post) {
			blogPosts += post;
		});

		blogPosts += "</div>"

		var blog = document.getElementById('custom_blog_div');
		var parseHTML = new DOMParser();

		//DOMParser returns parsed HTML as a document.  the DOM needs to be traversed
		var blogHTMLParsed = parseHTML.parseFromString(blogPosts, 'text/html');
		var blogContent = blogHTMLParsed.body.firstChild;

		blog.append(blogContent);
	})
	.catch(function(err) {
		console.log(err)
	})

});