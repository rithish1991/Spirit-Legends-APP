document.addEventListener("DOMContentLoaded", function() { 
	// this function runs when the DOM is ready, i.e. when the document has been parsed
	
	// "Return to Top" Button
	document.getElementById("return_to_top_image").addEventListener("click", function(){
		document.body.scrollTop = 0; // For Safari
	    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	});

	fetch("https://7963ea72.ngrok.io/blog-content")
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

		fetch("https://7963ea72.ngrok.io/search-blog-posts?q=" + inputFormValue)
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

});