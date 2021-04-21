document.addEventListener("DOMContentLoaded", function() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed

	// Comic List

	if (document.getElementById("loadedComicList")) {

		// Top spacing from bottom of article

		var spacing = document.createElement("br");
		loadedComicList.appendChild(spacing);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);
		var spacing_clone = spacing.cloneNode(true);
		loadedComicList.appendChild(spacing_clone);

		// Series List

		var series_list = document.createElement("div");
		var series_list_title = document.createElement("img");
		var series_list_table = document.createElement("table");
		var tbody = document.createElement("tbody");

		series_list.setAttribute("class", "series_list");
		series_list_title.setAttribute("class", "series_list_title");
		series_list_title.setAttribute("src", "images/Bottom Menu - Spirit Legends Series v3.png");
		series_list_table.setAttribute("class", "series_list_table");

		document.getElementById("loadedComicList").appendChild(series_list);
		series_list.appendChild(series_list_title);
		series_list.appendChild(series_list_table);
		series_list_table.appendChild(tbody);

		// Comics

		var comicsTr = document.createElement("tr");
		var comicsTd = document.createElement("td");
		var comicsS1 = document.createElement("s1");
		var comicsFont = document.createElement("font");
		var comicsB = document.createElement("b");
		var comicsText = document.createTextNode("Comics");

		comicsTd.setAttribute("colspan", "2");
		comicsTd.setAttribute("class", "series_list_table_header");
		comicsS1.setAttribute("class", "series_list_text");
		comicsFont.setAttribute("color", "white");


		tbody.appendChild(comicsTr);
		comicsTr.appendChild(comicsTd);
		comicsTd.appendChild(comicsS1);
		comicsS1.appendChild(comicsFont);
		comicsFont.appendChild(comicsB);
		comicsB.appendChild(comicsText);

		// Spirit Legends - Left Column

		var spiritLegendsTr = document.createElement("tr");
		var spiritLegendsTd = document.createElement("td");
		var spiritLegendsS1 = document.createElement("s1");
		var spiritLegendsB = document.createElement("b");
		var spiritLegendsFont = document.createElement("font");
		var spiritLegendsText = document.createTextNode("Spirit Legends");

		spiritLegendsTd.setAttribute("class", "series_list_left_row");
		spiritLegendsS1.setAttribute("class", "series_list_text");
		spiritLegendsFont.setAttribute("color", "white");

		tbody.appendChild(spiritLegendsTr);
		spiritLegendsTr.appendChild(spiritLegendsTd);
		spiritLegendsTd.appendChild(spiritLegendsS1);
		spiritLegendsS1.appendChild(spiritLegendsB);
		spiritLegendsB.appendChild(spiritLegendsFont);
		spiritLegendsFont.appendChild(spiritLegendsText);

			// Spirit Legends - Right Column

			var spiritLegendsInfoTd = document.createElement("td");
			var spiritLegendsInfoS1 = document.createElement("s1");

			spiritLegendsInfoTd.setAttribute("class", "series_list_right_row");
			spiritLegendsInfoS1.setAttribute("class", "series_list_text");

			spiritLegendsTr.appendChild(spiritLegendsInfoTd);
			spiritLegendsInfoTd.appendChild(spiritLegendsInfoS1);

				// Spirit Legends Issues

				var spiritLegends_issue1 = document.createElement("a");
				var spiritLegends_issue1Text = document.createTextNode("1");
				var spiritLegends_issue2 = document.createElement("a");
				var spiritLegends_issue2Text = document.createTextNode("2");
				var spiritLegends_issue3 = document.createElement("a");
				var spiritLegends_issue3Text = document.createTextNode("3");
				var spiritLegends_issue4 = document.createElement("a");
				var spiritLegends_issue4Text = document.createTextNode("4");
				var spiritLegends_issue5 = document.createElement("a");
				var spiritLegends_issue5Text = document.createTextNode("5");

				spiritLegends_issue1.setAttribute("class", "series_list_right_row_text");
				spiritLegends_issue1.setAttribute("href", "database-spirit-legends-issue-1.html");
				spiritLegends_issue2.setAttribute("class", "series_list_right_row_text");
				spiritLegends_issue2.setAttribute("href", "database-spirit-legends-issue-2.html");
				spiritLegends_issue3.setAttribute("class", "series_list_right_row_text");
				spiritLegends_issue3.setAttribute("href", "database-spirit-legends-issue-3.html");
				spiritLegends_issue4.setAttribute("class", "series_list_right_row_text");
				spiritLegends_issue4.setAttribute("href", "database-spirit-legends-issue-4.html");
				spiritLegends_issue5.setAttribute("class", "series_list_right_row_text");
				spiritLegends_issue5.setAttribute("href", "#");

				spiritLegendsInfoS1.appendChild(spiritLegends_issue1);
				spiritLegends_issue1.appendChild(spiritLegends_issue1Text);
					spiritLegendsInfoS1.appendChild(document.createTextNode(" | "))
				spiritLegendsInfoS1.appendChild(spiritLegends_issue2);
				spiritLegends_issue2.appendChild(spiritLegends_issue2Text);
					spiritLegendsInfoS1.appendChild(document.createTextNode(" | "))
				spiritLegendsInfoS1.appendChild(spiritLegends_issue3);
				spiritLegends_issue3.appendChild(spiritLegends_issue3Text);
					spiritLegendsInfoS1.appendChild(document.createTextNode(" | "))
				spiritLegendsInfoS1.appendChild(spiritLegends_issue4);
				spiritLegends_issue4.appendChild(spiritLegends_issue4Text);
					spiritLegendsInfoS1.appendChild(document.createTextNode(" | "))
				spiritLegendsInfoS1.appendChild(spiritLegends_issue5);
				spiritLegends_issue5.appendChild(spiritLegends_issue5Text);


		// Spirit Shorts - Left Column

		var spiritShortsTr = document.createElement("tr");
		var spiritShortsTd = document.createElement("td");
		var spiritShortsS1 = document.createElement("s1");
		var spiritShortsB = document.createElement("b");
		var spiritShortsFont = document.createElement("font");
		var spiritShortsText = document.createTextNode("Spirit Shorts");

		spiritShortsTd.setAttribute("class", "series_list_left_row");
		spiritShortsS1.setAttribute("class", "series_list_text");
		spiritShortsFont.setAttribute("color", "white");

		tbody.appendChild(spiritShortsTr);
		spiritShortsTr.appendChild(spiritShortsTd);
		spiritShortsTd.appendChild(spiritShortsS1);
		spiritShortsS1.appendChild(spiritShortsB);
		spiritShortsB.appendChild(spiritShortsFont);
		spiritShortsFont.appendChild(spiritShortsText);

			// Spirit Shorts - Right Column

			var spiritShortsInfoTd = document.createElement("td");
			var spiritShortsInfoS1 = document.createElement("s1");

			spiritShortsInfoTd.setAttribute("class", "series_list_right_row");
			spiritShortsInfoS1.setAttribute("class", "series_list_text");

			spiritShortsTr.appendChild(spiritShortsInfoTd);
			spiritShortsInfoTd.appendChild(spiritShortsInfoS1);

				// Spirit Shorts Strips

				var spiritShorts_strip1 = document.createElement("a");
				var spiritShorts_strip1Text = document.createTextNode("1");
				var spiritShorts_strip2 = document.createElement("a");
				var spiritShorts_strip2Text = document.createTextNode("2");
				var spiritShorts_strip3 = document.createElement("a");
				var spiritShorts_strip3Text = document.createTextNode("3");
				var spiritShorts_strip4 = document.createElement("a");
				var spiritShorts_strip4Text = document.createTextNode("4");
				var spiritShorts_strip5 = document.createElement("a");
				var spiritShorts_strip5Text = document.createTextNode("5");

				spiritShorts_strip1.setAttribute("class", "series_list_right_row_text");
				spiritShorts_strip1.setAttribute("href", "database-spirit-shorts-1.html");
				spiritShorts_strip2.setAttribute("class", "series_list_right_row_text");
				spiritShorts_strip2.setAttribute("href", "database-spirit-shorts-2.html");
				spiritShorts_strip3.setAttribute("class", "series_list_right_row_text");
				spiritShorts_strip3.setAttribute("href", "database-spirit-shorts-3.html");
				spiritShorts_strip4.setAttribute("class", "series_list_right_row_text");
				spiritShorts_strip4.setAttribute("href", "database-spirit-shorts-4.html");
				spiritShorts_strip5.setAttribute("class", "series_list_right_row_text");
				spiritShorts_strip5.setAttribute("href", "#");

				spiritShortsInfoS1.appendChild(spiritShorts_strip1);
				spiritShorts_strip1.appendChild(spiritShorts_strip1Text);
					spiritShortsInfoS1.appendChild(document.createTextNode(" | "))
				spiritShortsInfoS1.appendChild(spiritShorts_strip2);
				spiritShorts_strip2.appendChild(spiritShorts_strip2Text);
					spiritShortsInfoS1.appendChild(document.createTextNode(" | "))
				spiritShortsInfoS1.appendChild(spiritShorts_strip3);
				spiritShorts_strip3.appendChild(spiritShorts_strip3Text);
					spiritShortsInfoS1.appendChild(document.createTextNode(" | "))
				spiritShortsInfoS1.appendChild(spiritShorts_strip4);
				spiritShorts_strip4.appendChild(spiritShorts_strip4Text);
					spiritShortsInfoS1.appendChild(document.createTextNode(" | "))
				spiritShortsInfoS1.appendChild(spiritShorts_strip5);
				spiritShorts_strip5.appendChild(spiritShorts_strip5Text);

		// Andrew's Abridged Adventures - Left Column

		var andrewAbridgedTr = document.createElement("tr");
		var andrewAbridgedTd = document.createElement("td");
		var andrewAbridgedS1 = document.createElement("s1");
		var andrewAbridgedB = document.createElement("b");
		var andrewAbridgedFont = document.createElement("font");
		var andrewAbridgedText = document.createTextNode("Andrew's Abridged Adventures");

		andrewAbridgedTd.setAttribute("class", "series_list_left_row");
		andrewAbridgedS1.setAttribute("class", "series_list_text");
		andrewAbridgedFont.setAttribute("color", "white");

		tbody.appendChild(andrewAbridgedTr);
		andrewAbridgedTr.appendChild(andrewAbridgedTd);
		andrewAbridgedTd.appendChild(andrewAbridgedS1);
		andrewAbridgedS1.appendChild(andrewAbridgedB);
		andrewAbridgedB.appendChild(andrewAbridgedFont);
		andrewAbridgedFont.appendChild(andrewAbridgedText);

			// Andrew's Abridged Adventures - Right Column

			var andrewAbridgedInfoTd = document.createElement("td");
			var andrewAbridgedInfoS1 = document.createElement("s1");

			andrewAbridgedInfoTd.setAttribute("class", "series_list_right_row");
			andrewAbridgedInfoS1.setAttribute("class", "series_list_text");

			andrewAbridgedTr.appendChild(andrewAbridgedInfoTd);
			andrewAbridgedInfoTd.appendChild(andrewAbridgedInfoS1);

				// Andrew's Abridged Adventures Strips

				var andrewAbridged_strip1 = document.createElement("a");
				var andrewAbridged_strip1Text = document.createTextNode("1");
				var andrewAbridged_strip2 = document.createElement("a");
				var andrewAbridged_strip2Text = document.createTextNode("2");
				var andrewAbridged_strip3 = document.createElement("a");
				var andrewAbridged_strip3Text = document.createTextNode("3");
				var andrewAbridged_strip4 = document.createElement("a");
				var andrewAbridged_strip4Text = document.createTextNode("4");

				andrewAbridged_strip1.setAttribute("class", "series_list_right_row_text");
				andrewAbridged_strip1.setAttribute("href", "database-andrews-abridged-adventures-1.html");
				andrewAbridged_strip2.setAttribute("class", "series_list_right_row_text");
				andrewAbridged_strip2.setAttribute("href", "database-andrews-abridged-adventures-2.html");
				andrewAbridged_strip3.setAttribute("class", "series_list_right_row_text");
				andrewAbridged_strip3.setAttribute("href", "database-andrews-abridged-adventures-3.html");
				andrewAbridged_strip4.setAttribute("class", "series_list_right_row_text");
				andrewAbridged_strip4.setAttribute("href", "database-andrews-abridged-adventures-4.html");

				andrewAbridgedInfoS1.appendChild(andrewAbridged_strip1);
				andrewAbridged_strip1.appendChild(andrewAbridged_strip1Text);
					andrewAbridgedInfoS1.appendChild(document.createTextNode(" | "))
				andrewAbridgedInfoS1.appendChild(andrewAbridged_strip2);
				andrewAbridged_strip2.appendChild(andrewAbridged_strip2Text);
					andrewAbridgedInfoS1.appendChild(document.createTextNode(" | "))
				andrewAbridgedInfoS1.appendChild(andrewAbridged_strip3);
				andrewAbridged_strip3.appendChild(andrewAbridged_strip3Text);
					andrewAbridgedInfoS1.appendChild(document.createTextNode(" | "))
				andrewAbridgedInfoS1.appendChild(andrewAbridged_strip4);
				andrewAbridged_strip4.appendChild(andrewAbridged_strip4Text);

		// Media

		var mediaTr = document.createElement("tr");
		var mediaTd = document.createElement("td");
		var mediaS1 = document.createElement("s1");
		var mediaFont = document.createElement("font");
		var mediaB = document.createElement("b");
		var mediaText = document.createTextNode("Media");

		mediaTd.setAttribute("colspan", "2");
		mediaTd.setAttribute("class", "series_list_table_header");
		mediaS1.setAttribute("class", "series_list_text");
		mediaFont.setAttribute("color", "white");


		tbody.appendChild(mediaTr);
		mediaTr.appendChild(mediaTd);
		mediaTd.appendChild(mediaS1);
		mediaS1.appendChild(mediaFont);
		mediaFont.appendChild(mediaB);
		mediaB.appendChild(mediaText);

		// Spirit Legends Motion Comic - Left Column

		var spiritLegendsMotionComicTr = document.createElement("tr");
		var spiritLegendsMotionComicTd = document.createElement("td");
		var spiritLegendsMotionComicS1 = document.createElement("s1");
		var spiritLegendsMotionComicB = document.createElement("b");
		var spiritLegendsMotionComicFont = document.createElement("font");
		var spiritLegendsMotionComicText = document.createTextNode("Spirit Legends Motion Comic");

		spiritLegendsMotionComicTd.setAttribute("class", "series_list_left_row");
		spiritLegendsMotionComicS1.setAttribute("class", "series_list_text");
		spiritLegendsMotionComicFont.setAttribute("color", "white");

		tbody.appendChild(spiritLegendsMotionComicTr);
		spiritLegendsMotionComicTr.appendChild(spiritLegendsMotionComicTd);
		spiritLegendsMotionComicTd.appendChild(spiritLegendsMotionComicS1);
		spiritLegendsMotionComicS1.appendChild(spiritLegendsMotionComicB);
		spiritLegendsMotionComicB.appendChild(spiritLegendsMotionComicFont);
		spiritLegendsMotionComicFont.appendChild(spiritLegendsMotionComicText);

			// Spirit Legends Motion Comic - Right Column

			var spiritLegendsMotionComicInfoTd = document.createElement("td");
			var spiritLegendsMotionComicInfoS1 = document.createElement("s1");

			spiritLegendsMotionComicInfoTd.setAttribute("class", "series_list_right_row");
			spiritLegendsMotionComicInfoS1.setAttribute("class", "series_list_text");

			spiritLegendsMotionComicTr.appendChild(spiritLegendsMotionComicInfoTd);
			spiritLegendsMotionComicInfoTd.appendChild(spiritLegendsMotionComicInfoS1);

				// Spirit Legends Motion Comic Episodes

				var spiritLegendsMotionComic_episode1 = document.createElement("a");
				var spiritLegendsMotionComic_episode1Text = document.createTextNode("1");
				var spiritLegendsMotionComic_episode2 = document.createElement("a");
				var spiritLegendsMotionComic_episode2Text = document.createTextNode("2");

				spiritLegendsMotionComic_episode1.setAttribute("class", "series_list_right_row_text");
				spiritLegendsMotionComic_episode1.setAttribute("href", "#");
				spiritLegendsMotionComic_episode2.setAttribute("class", "series_list_right_row_text");
				spiritLegendsMotionComic_episode2.setAttribute("href", "#");

				spiritLegendsMotionComicInfoS1.appendChild(spiritLegendsMotionComic_episode1);
				spiritLegendsMotionComic_episode1.appendChild(spiritLegendsMotionComic_episode1Text);
					spiritLegendsMotionComicInfoS1.appendChild(document.createTextNode(" | "))
				spiritLegendsMotionComicInfoS1.appendChild(spiritLegendsMotionComic_episode2);
				spiritLegendsMotionComic_episode2.appendChild(spiritLegendsMotionComic_episode2Text);

		// Spirit Legends Podcast - Left Column

		var spiritLegendsPodcastTr = document.createElement("tr");
		var spiritLegendsPodcastTd = document.createElement("td");
		var spiritLegendsPodcastS1 = document.createElement("s1");
		var spiritLegendsPodcastB = document.createElement("b");
		var spiritLegendsPodcastFont = document.createElement("font");
		var spiritLegendsPodcastText = document.createTextNode("Spirit Legends Podcast");

		spiritLegendsPodcastTd.setAttribute("class", "series_list_left_row");
		spiritLegendsPodcastS1.setAttribute("class", "series_list_text");
		spiritLegendsPodcastFont.setAttribute("color", "white");

		tbody.appendChild(spiritLegendsPodcastTr);
		spiritLegendsPodcastTr.appendChild(spiritLegendsPodcastTd);
		spiritLegendsPodcastTd.appendChild(spiritLegendsPodcastS1);
		spiritLegendsPodcastS1.appendChild(spiritLegendsPodcastB);
		spiritLegendsPodcastB.appendChild(spiritLegendsPodcastFont);
		spiritLegendsPodcastFont.appendChild(spiritLegendsPodcastText);

			// Spirit Legends Podcast - Right Column

			var spiritLegendsPodcastInfoTd = document.createElement("td");
			var spiritLegendsPodcastInfoS1 = document.createElement("s1");

			spiritLegendsPodcastInfoTd.setAttribute("class", "series_list_right_row");
			spiritLegendsPodcastInfoS1.setAttribute("class", "series_list_text");

			spiritLegendsPodcastTr.appendChild(spiritLegendsPodcastInfoTd);
			spiritLegendsPodcastInfoTd.appendChild(spiritLegendsPodcastInfoS1);

				// Spirit Legends Podcast Episodes

				var spiritLegendsPodcast_episode1 = document.createElement("a");
				var spiritLegendsPodcast_episode1Text = document.createTextNode("1");
				var spiritLegendsPodcast_episode2 = document.createElement("a");
				var spiritLegendsPodcast_episode2Text = document.createTextNode("2");
				var spiritLegendsPodcast_episode3 = document.createElement("a");
				var spiritLegendsPodcast_episode3Text = document.createTextNode("3");
				var spiritLegendsPodcast_episode4 = document.createElement("a");
				var spiritLegendsPodcast_episode4Text = document.createTextNode("4");
				var spiritLegendsPodcast_episode5 = document.createElement("a");
				var spiritLegendsPodcast_episode5Text = document.createTextNode("5");

				spiritLegendsPodcast_episode1.setAttribute("class", "series_list_right_row_text");
				spiritLegendsPodcast_episode1.setAttribute("href", "#");
				spiritLegendsPodcast_episode2.setAttribute("class", "series_list_right_row_text");
				spiritLegendsPodcast_episode2.setAttribute("href", "#");
				spiritLegendsPodcast_episode3.setAttribute("class", "series_list_right_row_text");
				spiritLegendsPodcast_episode3.setAttribute("href", "#");
				spiritLegendsPodcast_episode4.setAttribute("class", "series_list_right_row_text");
				spiritLegendsPodcast_episode4.setAttribute("href", "#");
				spiritLegendsPodcast_episode5.setAttribute("class", "series_list_right_row_text");
				spiritLegendsPodcast_episode5.setAttribute("href", "#");

				spiritLegendsPodcastInfoS1.appendChild(spiritLegendsPodcast_episode1);
				spiritLegendsPodcast_episode1.appendChild(spiritLegendsPodcast_episode1Text);
					spiritLegendsPodcastInfoS1.appendChild(document.createTextNode(" | "))
				spiritLegendsPodcastInfoS1.appendChild(spiritLegendsPodcast_episode2);
				spiritLegendsPodcast_episode2.appendChild(spiritLegendsPodcast_episode2Text);
					spiritLegendsPodcastInfoS1.appendChild(document.createTextNode(" | "))
				spiritLegendsPodcastInfoS1.appendChild(spiritLegendsPodcast_episode3);
				spiritLegendsPodcast_episode3.appendChild(spiritLegendsPodcast_episode3Text);
					spiritLegendsPodcastInfoS1.appendChild(document.createTextNode(" | "))
				spiritLegendsPodcastInfoS1.appendChild(spiritLegendsPodcast_episode4);
				spiritLegendsPodcast_episode4.appendChild(spiritLegendsPodcast_episode4Text);
					spiritLegendsPodcastInfoS1.appendChild(document.createTextNode(" | "))
				spiritLegendsPodcastInfoS1.appendChild(spiritLegendsPodcast_episode5);
				spiritLegendsPodcast_episode5.appendChild(spiritLegendsPodcast_episode5Text);

		var bottom_spacing = document.createElement("div")

		bottom_spacing.setAttribute("style", "height: 29px;")

		series_list.appendChild( bottom_spacing );

//		series_list.appendChild( document.createElement("br") );

	}

    });