function createBlogs1to25() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed

	// Blog

if (document.getElementById("custom_blog_div")) {


		// Future Function for only loading the [ the most current X amount of posts ]. Upon pressing "Older Posts" button, hide said [ most current X amount of posts ] and append the [ older X amount of posts ]. Upon pressing "Newer Posts" button, hide the newly appended [ older X amount of posts ] and reveal the previously hidden [ most current X amount of posts ].

			// When Search function is initiated, "Older Posts" and "Newer Posts" button will work with search bar to hide everything not found via search and show newer and older posts found via search function only and not all posts.

				// Maybe upon searching through posts append div with text on top of blog saying "You are currently filtering through blog posts"

/*
		// Blog Post 25

			var post_25_div = document.createElement("div");

			post_25_div.setAttribute("id", "post_25_div");
			post_25_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_25_div);

				// Header

					var post_25_Header = document.createElement("h2");
					var post_25_Header_Text = document.createTextNode("Convention exclusive variant cover for Mega Man #24 shows up on Comic-Con’s website. ");

					post_25_Header.setAttribute("class", "blog_post_header");

					post_25_Header.appendChild(post_25_Header_Text);
					post_25_div.appendChild(post_25_Header);

				// Date

					var post_25_Date = document.createElement("p");
					var post_25_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_25_Date.setAttribute("class", "blog_post_date");

					post_25_Date.appendChild(post_25_Date_Text);
					post_25_div.appendChild(post_25_Date);

				// Blog

					var post_25_Blog = document.createElement("p");
					var post_25_Blog_Span_In_P = document.createElement("span");
					var post_25_Blog_Text = document.createTextNode("Hi, this is the twenty-fifth blog post! Please look forward to the complete site in the future!");

					post_25_Blog.setAttribute("class", "blog_post_text");
					post_25_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_25_Blog_Span_In_P.appendChild(post_25_Blog_Text);
					post_25_Blog.appendChild(post_25_Blog_Span_In_P);
					post_25_div.appendChild(post_25_Blog);

		// Blog Post 24

			var post_24_div = document.createElement("div");

			post_24_div.setAttribute("id", "post_24_div");
			post_24_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_24_div);

				// Header

					var post_24_Header = document.createElement("h2");
					var post_24_Header_Text = document.createTextNode("This is Blog Post 24!");

					post_24_Header.setAttribute("class", "blog_post_header");

					post_24_Header.appendChild(post_24_Header_Text);
					post_24_div.appendChild(post_24_Header);

				// Date

					var post_24_Date = document.createElement("p");
					var post_24_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_24_Date.setAttribute("class", "blog_post_date");

					post_24_Date.appendChild(post_24_Date_Text);
					post_24_div.appendChild(post_24_Date);

				// Blog

					var post_24_Blog = document.createElement("p");
					var post_24_Blog_Span_In_P = document.createElement("span");
					var post_24_Blog_Text = document.createTextNode("Hi, this is the twenty-fourth blog post! Please look forward to the complete site in the future!");

					post_24_Blog.setAttribute("class", "blog_post_text");
					post_24_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_24_Blog_Span_In_P.appendChild(post_24_Blog_Text);
					post_24_Blog.appendChild(post_24_Blog_Span_In_P);
					post_24_div.appendChild(post_24_Blog);

		// Blog Post 23

			var post_23_div = document.createElement("div");

			post_23_div.setAttribute("id", "post_23_div");
			post_23_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_23_div);

				// Header

					var post_23_Header = document.createElement("h2");
					var post_23_Header_Text = document.createTextNode("This is Blog Post 23!");

					post_23_Header.setAttribute("class", "blog_post_header");

					post_23_Header.appendChild(post_23_Header_Text);
					post_23_div.appendChild(post_23_Header);

				// Date

					var post_23_Date = document.createElement("p");
					var post_23_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_23_Date.setAttribute("class", "blog_post_date");

					post_23_Date.appendChild(post_23_Date_Text);
					post_23_div.appendChild(post_23_Date);

				// Blog

					var post_23_Blog = document.createElement("p");
					var post_23_Blog_Span_In_P = document.createElement("span");
					var post_23_Blog_Text = document.createTextNode("Hi, this is the twenty-third blog post! Please look forward to the complete site in the future!");

					post_23_Blog.setAttribute("class", "blog_post_text");
					post_23_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_23_Blog_Span_In_P.appendChild(post_23_Blog_Text);
					post_23_Blog.appendChild(post_23_Blog_Span_In_P);
					post_23_div.appendChild(post_23_Blog);

		// Blog Post 22

			var post_22_div = document.createElement("div");

			post_22_div.setAttribute("id", "post_22_div");
			post_22_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_22_div);

				// Header

					var post_22_Header = document.createElement("h2");
					var post_22_Header_Text = document.createTextNode("This is Blog Post 22!");

					post_22_Header.setAttribute("class", "blog_post_header");

					post_22_Header.appendChild(post_22_Header_Text);
					post_22_div.appendChild(post_22_Header);

				// Date

					var post_22_Date = document.createElement("p");
					var post_22_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_22_Date.setAttribute("class", "blog_post_date");

					post_22_Date.appendChild(post_22_Date_Text);
					post_22_div.appendChild(post_22_Date);

				// Blog

					var post_22_Blog = document.createElement("p");
					var post_22_Blog_Span_In_P = document.createElement("span");
					var post_22_Blog_Text = document.createTextNode("Hi, this is the twenty-second blog post! Please look forward to the complete site in the future!");

					post_22_Blog.setAttribute("class", "blog_post_text");
					post_22_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_22_Blog_Span_In_P.appendChild(post_22_Blog_Text);
					post_22_Blog.appendChild(post_22_Blog_Span_In_P);
					post_22_div.appendChild(post_22_Blog); 

		// Blog Post 21

			var post_21_div = document.createElement("div");

			post_21_div.setAttribute("id", "post_21_div");
			post_21_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_21_div);

				// Header

					var post_21_Header = document.createElement("h2");
					var post_21_Header_Text = document.createTextNode("This is Blog Post 21!");

					post_21_Header.setAttribute("class", "blog_post_header");

					post_21_Header.appendChild(post_21_Header_Text);
					post_21_div.appendChild(post_21_Header);

				// Date

					var post_21_Date = document.createElement("p");
					var post_21_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_21_Date.setAttribute("class", "blog_post_date");

					post_21_Date.appendChild(post_21_Date_Text);
					post_21_div.appendChild(post_21_Date);

				// Blog

					var post_21_Blog = document.createElement("p");
					var post_21_Blog_Span_In_P = document.createElement("span");
					var post_21_Blog_Text = document.createTextNode("Hi, this is the twenty-first blog post! Please look forward to the complete site in the future!");

					post_21_Blog.setAttribute("class", "blog_post_text");
					post_21_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_21_Blog_Span_In_P.appendChild(post_21_Blog_Text);
					post_21_Blog.appendChild(post_21_Blog_Span_In_P);
					post_21_div.appendChild(post_21_Blog);  

		// Blog Post 20

			var post_20_div = document.createElement("div");

			post_20_div.setAttribute("id", "post_20_div");
			post_20_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_20_div);

				// Header

					var post_20_Header = document.createElement("h2");
					var post_20_Header_Text = document.createTextNode("This is Blog Post 20!");

					post_20_Header.setAttribute("class", "blog_post_header");

					post_20_Header.appendChild(post_20_Header_Text);
					post_20_div.appendChild(post_20_Header);

				// Date

					var post_20_Date = document.createElement("p");
					var post_20_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_20_Date.setAttribute("class", "blog_post_date");

					post_20_Date.appendChild(post_20_Date_Text);
					post_20_div.appendChild(post_20_Date);

				// Blog

					var post_20_Blog = document.createElement("p");
					var post_20_Blog_Span_In_P = document.createElement("span");
					var post_20_Blog_Text = document.createTextNode("Hi, this is the twentieth blog post! Please look forward to the complete site in the future!");

					post_20_Blog.setAttribute("class", "blog_post_text");
					post_20_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_20_Blog_Span_In_P.appendChild(post_20_Blog_Text);
					post_20_Blog.appendChild(post_20_Blog_Span_In_P);
					post_20_div.appendChild(post_20_Blog); 

		// Blog Post 19

			var post_19_div = document.createElement("div");

			post_19_div.setAttribute("id", "post_19_div");
			post_19_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_19_div);

				// Header

					var post_19_Header = document.createElement("h2");
					var post_19_Header_Text = document.createTextNode("This is Blog Post 19!");

					post_19_Header.setAttribute("class", "blog_post_header");

					post_19_Header.appendChild(post_19_Header_Text);
					post_19_div.appendChild(post_19_Header);

				// Date

					var post_19_Date = document.createElement("p");
					var post_19_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_19_Date.setAttribute("class", "blog_post_date");

					post_19_Date.appendChild(post_19_Date_Text);
					post_19_div.appendChild(post_19_Date);

				// Blog

					var post_19_Blog = document.createElement("p");
					var post_19_Blog_Span_In_P = document.createElement("span");
					var post_19_Blog_Text = document.createTextNode("Hi, this is the ninteenth blog post! Please look forward to the complete site in the future!");

					post_19_Blog.setAttribute("class", "blog_post_text");
					post_19_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_19_Blog_Span_In_P.appendChild(post_19_Blog_Text);
					post_19_Blog.appendChild(post_19_Blog_Span_In_P);
					post_19_div.appendChild(post_19_Blog);

		// Blog Post 18

			var post_18_div = document.createElement("div");

			post_18_div.setAttribute("id", "post_18_div");
			post_18_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_18_div);

				// Header

					var post_18_Header = document.createElement("h2");
					var post_18_Header_Text = document.createTextNode("This is Blog Post 18!");

					post_18_Header.setAttribute("class", "blog_post_header");

					post_18_Header.appendChild(post_18_Header_Text);
					post_18_div.appendChild(post_18_Header);

				// Date

					var post_18_Date = document.createElement("p");
					var post_18_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_18_Date.setAttribute("class", "blog_post_date");

					post_18_Date.appendChild(post_18_Date_Text);
					post_18_div.appendChild(post_18_Date);

				// Blog

					var post_18_Blog = document.createElement("p");
					var post_18_Blog_Span_In_P = document.createElement("span");
					var post_18_Blog_Text = document.createTextNode("Hi, this is the eighteenth blog post! Please look forward to the complete site in the future!");

					post_18_Blog.setAttribute("class", "blog_post_text");
					post_18_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_18_Blog_Span_In_P.appendChild(post_18_Blog_Text);
					post_18_Blog.appendChild(post_18_Blog_Span_In_P);
					post_18_div.appendChild(post_18_Blog);

		// Blog Post 17

			var post_17_div = document.createElement("div");

			post_17_div.setAttribute("id", "post_17_div");
			post_17_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_17_div);

				// Header

					var post_17_Header = document.createElement("h2");
					var post_17_Header_Text = document.createTextNode("This is Blog Post 17!");

					post_17_Header.setAttribute("class", "blog_post_header");

					post_17_Header.appendChild(post_17_Header_Text);
					post_17_div.appendChild(post_17_Header);

				// Date

					var post_17_Date = document.createElement("p");
					var post_17_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_17_Date.setAttribute("class", "blog_post_date");

					post_17_Date.appendChild(post_17_Date_Text);
					post_17_div.appendChild(post_17_Date);

				// Blog

					var post_17_Blog = document.createElement("p");
					var post_17_Blog_Span_In_P = document.createElement("span");
					var post_17_Blog_Text = document.createTextNode("Hi, this is the seventeeth blog post! Please look forward to the complete site in the future!");

					post_17_Blog.setAttribute("class", "blog_post_text");
					post_17_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_17_Blog_Span_In_P.appendChild(post_17_Blog_Text);
					post_17_Blog.appendChild(post_17_Blog_Span_In_P);
					post_17_div.appendChild(post_17_Blog);

		// Blog Post 16

			var post_16_div = document.createElement("div");

			post_16_div.setAttribute("id", "post_16_div");
			post_16_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_16_div);

				// Header

					var post_16_Header = document.createElement("h2");
					var post_16_Header_Text = document.createTextNode("This is Blog Post 16!");

					post_16_Header.setAttribute("class", "blog_post_header");

					post_16_Header.appendChild(post_16_Header_Text);
					post_16_div.appendChild(post_16_Header);

				// Date

					var post_16_Date = document.createElement("p");
					var post_16_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_16_Date.setAttribute("class", "blog_post_date");

					post_16_Date.appendChild(post_16_Date_Text);
					post_16_div.appendChild(post_16_Date);

				// Blog

					var post_16_Blog = document.createElement("p");
					var post_16_Blog_Span_In_P = document.createElement("span");
					var post_16_Blog_Text = document.createTextNode("Hi, this is the sixteenth blog post! Please look forward to the complete site in the future!");

					post_16_Blog.setAttribute("class", "blog_post_text");
					post_16_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_16_Blog_Span_In_P.appendChild(post_16_Blog_Text);
					post_16_Blog.appendChild(post_16_Blog_Span_In_P);
					post_16_div.appendChild(post_16_Blog);

		// Blog Post 15

			var post_15_div = document.createElement("div");

			post_15_div.setAttribute("id", "post_15_div");
			post_15_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_15_div);

				// Header

					var post_15_Header = document.createElement("h2");
					var post_15_Header_Text = document.createTextNode("This is Blog Post 15!");

					post_15_Header.setAttribute("class", "blog_post_header");

					post_15_Header.appendChild(post_15_Header_Text);
					post_15_div.appendChild(post_15_Header);

				// Date

					var post_15_Date = document.createElement("p");
					var post_15_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_15_Date.setAttribute("class", "blog_post_date");

					post_15_Date.appendChild(post_15_Date_Text);
					post_15_div.appendChild(post_15_Date);

				// Blog

					var post_15_Blog = document.createElement("p");
					var post_15_Blog_Span_In_P = document.createElement("span");
					var post_15_Blog_Text = document.createTextNode("Hi, this is the fifteenth blog post! Please look forward to the complete site in the future! CcCcC");

					post_15_Blog.setAttribute("class", "blog_post_text");
					post_15_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_15_Blog_Span_In_P.appendChild(post_15_Blog_Text);
					post_15_Blog.appendChild(post_15_Blog_Span_In_P);
					post_15_div.appendChild(post_15_Blog);

		// Blog Post 14

			var post_14_div = document.createElement("div");

			post_14_div.setAttribute("id", "post_14_div");
			post_14_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_14_div);

				// Header

					var post_14_Header = document.createElement("h2");
					var post_14_Header_Text = document.createTextNode("This is Blog Post 14!");

					post_14_Header.setAttribute("class", "blog_post_header");

					post_14_Header.appendChild(post_14_Header_Text);
					post_14_div.appendChild(post_14_Header);

				// Date

					var post_14_Date = document.createElement("p");
					var post_14_Date_Text = document.createTextNode("January 2, 2018 12:00 am BbBbBbB");

					post_14_Date.setAttribute("class", "blog_post_date");

					post_14_Date.appendChild(post_14_Date_Text);
					post_14_div.appendChild(post_14_Date);

				// Blog

					var post_14_Blog = document.createElement("p");
					var post_14_Blog_Span_In_P = document.createElement("span");
					var post_14_Blog_Text = document.createTextNode("Hi, this is the fourteenth blog post! Please look forward to the complete site in the future!");

					post_14_Blog.setAttribute("class", "blog_post_text");
					post_14_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_14_Blog_Span_In_P.appendChild(post_14_Blog_Text);
					post_14_Blog.appendChild(post_14_Blog_Span_In_P);
					post_14_div.appendChild(post_14_Blog);

		// Blog Post 13

			var post_13_div = document.createElement("div");

			post_13_div.setAttribute("id", "post_13_div");
			post_13_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_13_div);

				// Header

					var post_13_Header = document.createElement("h2");
					var post_13_Header_Text = document.createTextNode("This is Blog Post 13! AaAaAaA");

					post_13_Header.setAttribute("class", "blog_post_header");

					post_13_Header.appendChild(post_13_Header_Text);
					post_13_div.appendChild(post_13_Header);

				// Date

					var post_13_Date = document.createElement("p");
					var post_13_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_13_Date.setAttribute("class", "blog_post_date");

					post_13_Date.appendChild(post_13_Date_Text);
					post_13_div.appendChild(post_13_Date);

				// Blog

					var post_13_Blog = document.createElement("p");
					var post_13_Blog_Span_In_P = document.createElement("span");
					var post_13_Blog_Text = document.createTextNode("Hi, this is the thirteenth blog post! Please look forward to the complete site in the future!");

					post_13_Blog.setAttribute("class", "blog_post_text");
					post_13_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_13_Blog_Span_In_P.appendChild(post_13_Blog_Text);
					post_13_Blog.appendChild(post_13_Blog_Span_In_P);
					post_13_div.appendChild(post_13_Blog);

		// Blog Post 12

			var post_12_div = document.createElement("div");

			post_12_div.setAttribute("id", "post_12_div");
			post_12_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_12_div);

				// Header

					var post_12_Header = document.createElement("h2");
					var post_12_Header_Text = document.createTextNode("This is Blog Post 12! ZzZzZzZ");

					post_12_Header.setAttribute("class", "blog_post_header");

					post_12_Header.appendChild(post_12_Header_Text);
					post_12_div.appendChild(post_12_Header);

				// Date

					var post_12_Date = document.createElement("p");
					var post_12_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_12_Date.setAttribute("class", "blog_post_date");

					post_12_Date.appendChild(post_12_Date_Text);
					post_12_div.appendChild(post_12_Date);

				// Blog

					var post_12_Blog = document.createElement("p");
					var post_12_Blog_Span_In_P = document.createElement("span");
					var post_12_Blog_Text = document.createTextNode("Hi, this is the twelfth blog post! Please look forward to the complete site in the future!");

					post_12_Blog.setAttribute("class", "blog_post_text");
					post_12_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_12_Blog_Span_In_P.appendChild(post_12_Blog_Text);
					post_12_Blog.appendChild(post_12_Blog_Span_In_P);
					post_12_div.appendChild(post_12_Blog); 

		// Blog Post 11

			var post_11_div = document.createElement("div");

			post_11_div.setAttribute("id", "post_11_div");
			post_11_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_11_div);

				// Header

					var post_11_Header = document.createElement("h2");
					var post_11_Header_Text = document.createTextNode("This is Blog Post 11!");

					post_11_Header.setAttribute("class", "blog_post_header");

					post_11_Header.appendChild(post_11_Header_Text);
					post_11_div.appendChild(post_11_Header);

				// Date

					var post_11_Date = document.createElement("p");
					var post_11_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_11_Date.setAttribute("class", "blog_post_date");

					post_11_Date.appendChild(post_11_Date_Text);
					post_11_div.appendChild(post_11_Date);

				// Blog

					var post_11_Blog = document.createElement("p");
					var post_11_Blog_Span_In_P = document.createElement("span");
					var post_11_Blog_Text = document.createTextNode("Hi, this is the eleventh blog post! Please look forward to the complete site in the future! ZzZzZzZ");

					post_11_Blog.setAttribute("class", "blog_post_text");
					post_11_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_11_Blog_Span_In_P.appendChild(post_11_Blog_Text);
					post_11_Blog.appendChild(post_11_Blog_Span_In_P);
					post_11_div.appendChild(post_11_Blog); 

		// Blog Post 10

			var post_10_div = document.createElement("div");

			post_10_div.setAttribute("id", "post_10_div");
			post_10_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_10_div);

				// Header

					var post_10_Header = document.createElement("h2");
					var post_10_Header_Text = document.createTextNode("This is Blog Post 10!");

					post_10_Header.setAttribute("class", "blog_post_header");

					post_10_Header.appendChild(post_10_Header_Text);
					post_10_div.appendChild(post_10_Header);

				// Date

					var post_10_Date = document.createElement("p");
					var post_10_Date_Text = document.createTextNode("January 2, 2018 12:00 am ZzZzZzZ");

					post_10_Date.setAttribute("class", "blog_post_date");

					post_10_Date.appendChild(post_10_Date_Text);
					post_10_div.appendChild(post_10_Date);

				// Blog

					var post_10_Blog = document.createElement("p");
					var post_10_Blog_Span_In_P = document.createElement("span");
					var post_10_Blog_Text = document.createTextNode("Hi, this is the tenth blog post! Please look forward to the complete site in the future!");

					post_10_Blog.setAttribute("class", "blog_post_text");
					post_10_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_10_Blog_Span_In_P.appendChild(post_10_Blog_Text);
					post_10_Blog.appendChild(post_10_Blog_Span_In_P);
					post_10_div.appendChild(post_10_Blog);

		// Blog Post 9

			var post_9_div = document.createElement("div");

			post_9_div.setAttribute("id", "post_9_div");
			post_9_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_9_div);

				// Header

					var post_9_Header = document.createElement("h2");
					var post_9_Header_Text = document.createTextNode("This is Blog Post 9!");

					post_9_Header.setAttribute("class", "blog_post_header");

					post_9_Header.appendChild(post_9_Header_Text);
					post_9_div.appendChild(post_9_Header);

				// Date

					var post_9_Date = document.createElement("p");
					var post_9_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_9_Date.setAttribute("class", "blog_post_date");

					post_9_Date.appendChild(post_9_Date_Text);
					post_9_div.appendChild(post_9_Date);

				// Blog

					var post_9_Blog = document.createElement("p");
					var post_9_Blog_Span_In_P = document.createElement("span");
					var post_9_Blog_Text = document.createTextNode("Hi, this is the ninth blog post! Please look forward to the complete site in the future!");

					post_9_Blog.setAttribute("class", "blog_post_text");
					post_9_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_9_Blog_Span_In_P.appendChild(post_9_Blog_Text);
					post_9_Blog.appendChild(post_9_Blog_Span_In_P);
					post_9_div.appendChild(post_9_Blog);

		// Blog Post 8

			var post_8_div = document.createElement("div");

			post_8_div.setAttribute("id", "post_8_div");
			post_8_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_8_div);

				// Header

					var post_8_Header = document.createElement("h2");
					var post_8_Header_Text = document.createTextNode("This is Blog Post 8!");

					post_8_Header.setAttribute("class", "blog_post_header");

					post_8_Header.appendChild(post_8_Header_Text);
					post_8_div.appendChild(post_8_Header);

				// Date

					var post_8_Date = document.createElement("p");
					var post_8_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_8_Date.setAttribute("class", "blog_post_date");

					post_8_Date.appendChild(post_8_Date_Text);
					post_8_div.appendChild(post_8_Date);

				// Blog

					var post_8_Blog = document.createElement("p");
					var post_8_Blog_Span_In_P = document.createElement("span");
					var post_8_Blog_Text = document.createTextNode("Hi, this is the eigth blog post! Please look forward to the complete site in the future!");

					post_8_Blog.setAttribute("class", "blog_post_text");
					post_8_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_8_Blog_Span_In_P.appendChild(post_8_Blog_Text);
					post_8_Blog.appendChild(post_8_Blog_Span_In_P);
					post_8_div.appendChild(post_8_Blog);

		// Blog Post 7

			var post_7_div = document.createElement("div");

			post_7_div.setAttribute("id", "post_7_div");
			post_7_div.setAttribute("class", "post_div");

			custom_blog_div.appendChild(post_7_div);

				// Header

					var post_7_Header = document.createElement("h2");
					var post_7_Header_Text = document.createTextNode("This is Blog Post 7!");

					post_7_Header.setAttribute("class", "blog_post_header");

					post_7_Header.appendChild(post_7_Header_Text);
					post_7_div.appendChild(post_7_Header);

				// Date

					var post_7_Date = document.createElement("p");
					var post_7_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

					post_7_Date.setAttribute("class", "blog_post_date");

					post_7_Date.appendChild(post_7_Date_Text);
					post_7_div.appendChild(post_7_Date);

				// Blog

					var post_7_Blog = document.createElement("p");
					var post_7_Blog_Span_In_P = document.createElement("span");
					var post_7_Blog_Text = document.createTextNode("Hi, this is the seventh blog post! Please look forward to the complete site in the future!");

					post_7_Blog.setAttribute("class", "blog_post_text");
					post_7_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

					post_7_Blog_Span_In_P.appendChild(post_7_Blog_Text);
					post_7_Blog.appendChild(post_7_Blog_Span_In_P);
					post_7_div.appendChild(post_7_Blog);

		

		

		

	
*/
		createBlogPostTwo();
		 createBlogPostOne();
		// createBlogPostThree();
		// createBlogPostFour();
		// createBlogPostFive();
		// createBlogPostSix();

		// Line Breaks Before Post Navigation

			var post_break = document.createElement("div");

			post_break.setAttribute("style", "height: 40px;");

			custom_blog_div.appendChild(post_break);





	}


	

};
function createBlogPostSix()
{

// Blog Post 6

var post_6_div = document.createElement("div");

post_6_div.setAttribute("id", "post_6_div");
post_6_div.setAttribute("class", "post_div");

custom_blog_div.appendChild(post_6_div);

	// Header

		var post_6_Header = document.createElement("h2");
		var post_6_Header_Text = document.createTextNode("This is Blog Post 6!");

		post_6_Header.setAttribute("class", "blog_post_header");

		post_6_Header.appendChild(post_6_Header_Text);
		post_6_div.appendChild(post_6_Header);

	// Date

		var post_6_Date = document.createElement("p");
		var post_6_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

		post_6_Date.setAttribute("class", "blog_post_date");

		post_6_Date.appendChild(post_6_Date_Text);
		post_6_div.appendChild(post_6_Date);

	// Blog

		var post_6_Blog = document.createElement("p");
		var post_6_Blog_Span_In_P = document.createElement("span");
		var post_6_Blog_Text = document.createTextNode("Hi, this is the sixth blog post! Please look forward to the complete site in the future!");

		post_6_Blog.setAttribute("class", "blog_post_text");
		post_6_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

		post_6_Blog_Span_In_P.appendChild(post_6_Blog_Text);
		post_6_Blog.appendChild(post_6_Blog_Span_In_P);
		post_6_div.appendChild(post_6_Blog);

}
function createBlogPostFour()
{

// Blog Post 4

var post_4_div = document.createElement("div");

post_4_div.setAttribute("id", "post_4_div");
post_4_div.setAttribute("class", "post_div");

custom_blog_div.appendChild(post_4_div);

	// Header

		var post_4_Header = document.createElement("h2");
		var post_4_Header_Text = document.createTextNode("This is Blog Post 4!");

		post_4_Header.setAttribute("class", "blog_post_header");

		post_4_Header.appendChild(post_4_Header_Text);
		post_4_div.appendChild(post_4_Header);

	// Date

		var post_4_Date = document.createElement("p");
		var post_4_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

		post_4_Date.setAttribute("class", "blog_post_date");

		post_4_Date.appendChild(post_4_Date_Text);
		post_4_div.appendChild(post_4_Date);

	// Blog

		var post_4_Blog = document.createElement("p");
		var post_4_Blog_Span_In_P = document.createElement("span");
		var post_4_Blog_Text = document.createTextNode("Hi, this is the fourth blog post! Please look forward to the complete site in the future!");

		post_4_Blog.setAttribute("class", "blog_post_text");
		post_4_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

		post_4_Blog_Span_In_P.appendChild(post_4_Blog_Text);
		post_4_Blog.appendChild(post_4_Blog_Span_In_P);
		post_4_div.appendChild(post_4_Blog);

}

function createBlogPostThree()
{
		// Blog Post 3

		var post_3_div = document.createElement("div");

		post_3_div.setAttribute("id", "post_3_div");
		post_3_div.setAttribute("class", "post_div");

		custom_blog_div.appendChild(post_3_div);

			// Header

				var post_3_Header = document.createElement("h2");
				var post_3_Header_Text = document.createTextNode("This is the Third Blog Post!");

				post_3_Header.setAttribute("class", "blog_post_header");

				post_3_Header.appendChild(post_3_Header_Text);
				post_3_div.appendChild(post_3_Header);

			// Date

				var post_3_Date = document.createElement("p");
				var post_3_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

				post_3_Date.setAttribute("class", "blog_post_date");

				post_3_Date.appendChild(post_3_Date_Text);
				post_3_div.appendChild(post_3_Date);

			// Blog

				var post_3_Blog = document.createElement("p");
				var post_3_Blog_Span_In_P = document.createElement("span");
				var post_3_Blog_Text = document.createTextNode("In this blog post, I am testing to see if I can make images with text below them, just like in the database articles! On the left, you will find an example that I am working on trying to get to work.");
				// var post_3_Blog_Text_Break = document.createElement("br");
				// var post_3_Blog_Text_Break_2 = document.createElement("br");
				var post_3_Blog_Text_2 = document.createTextNode("In this second paragraph, I am also testing to see if I can make images with text below them, just like in the database articles and the previous paragraph! On the right, you will find an example that I am working on trying to get to work.");

				//Left Image

				var post_3_Blog_Image_With_Text_Div_1 = document.createElement("div"); //Image container div
				var post_3_Blog_Image_With_Text_1 = document.createElement("img"); //Image
				var post_3_Blog_Image_Text_Container_1 = document.createElement("p"); //Paragraph tag to attach text node to
				var post_3_Blog_Image_Text_1 = document.createTextNode("This is a left image."); //Image Text

				post_3_Blog_Image_With_Text_Div_1.setAttribute("class", "Left_Image_With_Text");
				post_3_Blog_Image_With_Text_1.setAttribute("width", "100px");
				post_3_Blog_Image_Text_Container_1.setAttribute("class", "Blog_Image_Text");
				post_3_Blog_Image_Text_Container_1.setAttribute("style", "width:90px");
				post_3_Blog_Image_With_Text_1.setAttribute("src", "./series images/main series/spirit legends issue 5/Spirit Legends 5 - Cover.jpg");

				//Right Image

				var post_3_Blog_Image_With_Text_Div_2 = document.createElement("div"); //Image container div
				var post_3_Blog_Image_With_Text_2 = document.createElement("img"); //Image
				var post_3_Blog_Image_Text_Container_2 = document.createElement("p"); //Paragraph tag to attach text node to
				var post_3_Blog_Image_Text_2 = document.createTextNode("This is a right image."); //Image Text

				post_3_Blog_Image_With_Text_Div_2.setAttribute("class", "Right_Image_With_Text");
				post_3_Blog_Image_With_Text_2.setAttribute("width", "100px");
				post_3_Blog_Image_Text_Container_2.setAttribute("class", "Blog_Image_Text");
				post_3_Blog_Image_Text_Container_2.setAttribute("style", "width:90px");
				post_3_Blog_Image_With_Text_2.setAttribute("src", "./series images/main series/spirit legends issue 5/Spirit Legends 5 - Cover.jpg");


				//Appending Left Image

				post_3_Blog_Image_With_Text_Div_1.appendChild(post_3_Blog_Image_With_Text_1) //Append image to image container div
				post_3_Blog_Image_Text_Container_1.appendChild(post_3_Blog_Image_Text_1) //Append text node to paragraph tag
				post_3_Blog_Image_With_Text_Div_1.appendChild(post_3_Blog_Image_Text_Container_1) //Append paragraph tag to image container div
				post_3_Blog.appendChild(post_3_Blog_Image_With_Text_Div_1) //Append image container div to blog post container

				//Appending Right Image

				post_3_Blog_Image_With_Text_Div_2.appendChild(post_3_Blog_Image_With_Text_2) //Append image to image container div
				post_3_Blog_Image_Text_Container_2.appendChild(post_3_Blog_Image_Text_2) //Append text node to paragraph tag
				post_3_Blog_Image_With_Text_Div_2.appendChild(post_3_Blog_Image_Text_Container_2) //Append paragraph tag to image container div
				post_3_Blog.appendChild(post_3_Blog_Image_With_Text_Div_2) //Append image container div to blog post container

				//Appending Text

				post_3_Blog.setAttribute("class", "blog_post_text");
				post_3_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

				post_3_Blog_Span_In_P.appendChild(post_3_Blog_Text_2);
				// post_3_Blog_Span_In_P.appendChild(post_3_Blog_Text_Break);
				// post_3_Blog_Span_In_P.appendChild(post_3_Blog_Text_Break_2);
				post_3_Blog_Span_In_P.appendChild(post_3_Blog_Text);
				post_3_Blog.appendChild(post_3_Blog_Span_In_P);
				post_3_div.appendChild(post_3_Blog);


}
function createBlogPostOne()
{

// Blog Post 1

var post_1_div = document.createElement("div");

post_1_div.setAttribute("id", "post_1_div");
post_1_div.setAttribute("class", "post_div");

custom_blog_div.appendChild(post_1_div);

	// Header

		var post_1_Header = document.createElement("h2");
		var post_1_Header_Text = document.createTextNode("Welcome, and Pardon the Construction!");

		post_1_Header.setAttribute("class", "blog_post_header");

		post_1_Header.appendChild(post_1_Header_Text);
		post_1_div.appendChild(post_1_Header);

	// Date

		var post_1_Date = document.createElement("p");
		var post_1_Date_Text = document.createTextNode("September 15, 2020 12:00 am");

		post_1_Date.setAttribute("class", "blog_post_date");

		post_1_Date.appendChild(post_1_Date_Text);
		post_1_div.appendChild(post_1_Date);

	// Blog

		var post_1_Blog = document.createElement("p");
		var post_1_Blog_Span_In_P = document.createElement("span");
		var post_1_Blog_Text = document.createTextNode("Hi, and welcome to the official Spirit Legends website! The site is live in order to test out certain things, but as you can see, it is very much incomplete. Please look forward to the complete site in the future!");

		post_1_Blog.setAttribute("class", "blog_post_text");;
		post_1_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P");

		post_1_Blog_Span_In_P.appendChild(post_1_Blog_Text);
		post_1_Blog.appendChild(post_1_Blog_Span_In_P);
		post_1_div.appendChild(post_1_Blog);			

}

function createBlogPostTwo()
	{

				// Blog Post 2

				var post_2_div = document.createElement("div");

				post_2_div.setAttribute("id", "post_2_div");
				post_2_div.setAttribute("class", "post_div");
	
				custom_blog_div.appendChild(post_2_div);
	
					// Header
	
						var post_2_Header = document.createElement("h2");
						var post_2_Header_Text = document.createTextNode("Article Updates!");
	
						post_2_Header.setAttribute("class", "blog_post_header");
	
						post_2_Header.appendChild(post_2_Header_Text);
						post_2_div.appendChild(post_2_Header);
	
					// Date
	
						var post_2_Date = document.createElement("p");
						var post_2_Date_Text = document.createTextNode("February 11, 2021 01:53 pm");
	
						post_2_Date.setAttribute("class", "blog_post_date");
	
						post_2_Date.appendChild(post_2_Date_Text);
						post_2_div.appendChild(post_2_Date);
	
					// Blog
	
						var post_2_Blog = document.createElement("p");
						var post_2_Blog_Span_In_P = document.createElement("span");
						var post_2_Blog_Text = document.createTextNode("Articles have been added for Cyborg X, Ghold, Nikhel, and Shinobi!"); //Blog text part 1


						var post_2_Blog_Text_Link_1 = document.createElement("a"); //Link 1
						var post_2_Blog_Text_Link_1_Text = document.createTextNode("Cyborg X"); //Link 1 Text
						var post_2_Blog_2 = document.createElement("p");
						var post_2_Blog_Span_In_P_2 = document.createElement("span");
						var post_2_Blog_Text_2 = document.createTextNode(" , "); //Blog text part 2

						var post_2_Blog_Text_Link_2 = document.createElement("a"); //Link 2
						var post_2_Blog_Text_Link_2_Text = document.createTextNode("Ghold"); //Link 2 Text
						var post_2_Blog_Text_3 = document.createTextNode(", "); //Blog text part 3
						var post_2_Blog_Text_Link_3 = document.createElement("a"); //Link 3
						var post_2_Blog_Text_Link_3_Text = document.createTextNode("Nikhel"); //Link 3 Text

						var post_2_Blog_Text_4 = document.createTextNode(", and "); //Blog text part 4


						var post_2_Blog_Text_Link_4 = document.createElement("a"); //Link 4

						var post_2_Blog_Text_Link_4_Text = document.createTextNode("Shinobi"); //Link 4 Text

	/*					
	
						var post_2_Blog_Text_Break = document.createElement("br");
						var post_2_Blog_Text_Break_2 = document.createElement("br");
						
						
						
						
						
						
						
						
						
						
						
						var post_2_Blog_Text_5 = document.createTextNode("!"); //Blog text part 5
	*/
	
	/*
						//Left Image
	
						var post_2_Blog_Image_Div_1 = document.createElement("div"); //Image container div
						var post_2_Blog_Image_1 = document.createElement("img"); //Image
	
	//					var post_2_Blog_Image_1_Text = document.createTextNode("Cyborg X"); //Image text
	//					var post_2_Blog_Image_1_Text_Container = document.createElement("p"); //Image text container
	//					var post_2_Blog_Image_1_Text_Container_Span = document.createElement("span");
	
	
						post_2_Blog_Image_Div_1.setAttribute("class", "Left_Image");
						post_2_Blog_Image_1.setAttribute("width", "100px");
						post_2_Blog_Image_1.setAttribute("src", "./database images/Cyborg X/Cyborg X Profile.jpg");
	
						//Right Image
	
						var post_2_Blog_Image_Div_2 = document.createElement("div"); //Image container div
						var post_2_Blog_Image_2 = document.createElement("img"); //Image
	
						post_2_Blog_Image_Div_2.setAttribute("class", "Right_Image");
						post_2_Blog_Image_2.setAttribute("width", "100px");
						post_2_Blog_Image_2.setAttribute("src", "./series images/main series/spirit legends issue 5/Spirit Legends 5 - Cover.jpg");
	
	
						//Appending Left Image
	
	//					post_2_Blog_Image_1_Text_Container.appendChild(post_2_Blog_Image_Div_1); //Append image text container to image container div
	//					post_2_Blog_Image_1_Text.appendChild(post_2_Blog_Image_1_Text_Container_Span); //Append image text to span
	//					post_2_Blog_Image_1_Text_Container_Span.appendChild(post_2_Blog_Image_1_Text_Container); //Append image text container to image text container span
	
						post_2_Blog_Image_Div_1.appendChild(post_2_Blog_Image_1); //Append image to image container div
						post_2_Blog.appendChild(post_2_Blog_Image_Div_1); //Append image container div to blog post container
	
						//Appending Right Image
	
						post_2_Blog_Image_Div_2.appendChild(post_2_Blog_Image_2); //Append image to image container div
						post_2_Blog.appendChild(post_2_Blog_Image_Div_2); //Append image container div to blog post container
	*/
						//Appending Text
	
						post_2_Blog.setAttribute("class", "blog_post_text");
						post_2_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P");
						post_2_Blog_Text_Link_1.setAttribute("href", "database-cyborg-x.html"); //Link 1 href
						post_2_Blog_Text_Link_2.setAttribute("href", "database-ghold.html"); //Link 2 href
						post_2_Blog_Text_Link_3.setAttribute("href", "database-nikhel.html"); //Link 3 href

						post_2_Blog_Text_Link_4.setAttribute("href", "database-shinobi.html"); //Link 4 href
	/*
						
						
						
						
	*/
						post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_2);
						post_2_Blog.appendChild(post_2_Blog_Span_In_P_2);
						post_2_div.appendChild(post_2_Blog_2);
	
	//					post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_Break);
	//					post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_Break_2);
	
					//Blog text part 1
						post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text);
						post_2_Blog.appendChild(post_2_Blog_Span_In_P);
						post_2_div.appendChild(post_2_Blog);
						//Link: Cyborg X
						post_2_Blog_Text_Link_1.appendChild(post_2_Blog_Text_Link_1_Text);
						post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_Link_1);
						post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_2);


						post_2_Blog_Text_Link_2.appendChild(post_2_Blog_Text_Link_2_Text);
						post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_Link_2);
						post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_3);


						post_2_Blog_Text_Link_3.appendChild(post_2_Blog_Text_Link_3_Text);
						post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_Link_3);

						post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_4);

						post_2_Blog_Text_Link_4.appendChild(post_2_Blog_Text_Link_4_Text);
	/*				
						
					//Blog text part 2
						
						post_2_Blog.appendChild(post_2_Blog_Span_In_P);
						post_2_div.appendChild(post_2_Blog);
					//Link: Ghold
					
					//Blog text part 3
						
						post_2_Blog.appendChild(post_2_Blog_Span_In_P);
						post_2_div.appendChild(post_2_Blog);
					//Link: Nikhel
						
					//Blog text part 4
					
						post_2_Blog.appendChild(post_2_Blog_Span_In_P);
						post_2_div.appendChild(post_2_Blog);
					//Link: Shinobi
						
						post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_Link_4);
					//Blog text part 5
						post_2_Blog_Span_In_P.appendChild(post_2_Blog_Text_5);
						post_2_Blog.appendChild(post_2_Blog_Span_In_P);
						post_2_div.appendChild(post_2_Blog);
	*/
	

	}
	function createBlogPostFive()
	{

		// Blog Post 5

		var post_5_div = document.createElement("div");

		post_5_div.setAttribute("id", "post_5_div");
		post_5_div.setAttribute("class", "post_div");

		custom_blog_div.appendChild(post_5_div);

			// Header

				var post_5_Header = document.createElement("h2");
				var post_5_Header_Text = document.createTextNode("This is Blog Post 5!");

				post_5_Header.setAttribute("class", "blog_post_header");

				post_5_Header.appendChild(post_5_Header_Text);
				post_5_div.appendChild(post_5_Header);

			// Date

				var post_5_Date = document.createElement("p");
				var post_5_Date_Text = document.createTextNode("January 2, 2018 12:00 am");

				post_5_Date.setAttribute("class", "blog_post_date");

				post_5_Date.appendChild(post_5_Date_Text);
				post_5_div.appendChild(post_5_Date);

			// Blog

				var post_5_Blog = document.createElement("p");
				var post_5_Blog_Span_In_P = document.createElement("span");
				var post_5_Blog_Text = document.createTextNode("Hi, this is the fifth blog post! Please look forward to the complete site in the future!");

				post_5_Blog.setAttribute("class", "blog_post_text");
				post_5_Blog_Span_In_P.setAttribute("class", "Blog_Text_Span_In_P")

				post_5_Blog_Span_In_P.appendChild(post_5_Blog_Text);
				post_5_Blog.appendChild(post_5_Blog_Span_In_P);
				post_5_div.appendChild(post_5_Blog);

	}




