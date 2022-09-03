const loadCategory = async () => {
	const url = ` https://openapi.programming-hero.com/api/news/categories `;
	const res = await fetch(url);
	const data = await res.json();
	// console.log(data)
	displayCategory(data.data.news_category);
};

const displayCategory = (newsId) => {
	// console.log(newsId)
	newsId.forEach((news) => {
		console.log(news);

        const newsCategory = document.getElementById("news-category");
        
        

		const category = document.createElement("button");
		category.classList.add("btn");
		category.innerHTML = `
		<button onclick="loadNewseId('${news.category_id}')" type="button" class="btn btn-warning me-2 ">${news.category_name}</button>
		`;

		newsCategory.appendChild(category);
	});
};

const loadNewseId = async (id) => {
	// console.log(".............", id.toString(), typeof id);
	const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	// console.log(data.data);
	displayNews(data.data);
};

const displayNews = (allNews) => {
	console.log(allNews);
 const showAllNews = document.getElementById("allNews");

 showAllNews.textContent = "";

	allNews.forEach((showNews) => {
		// console.log(showNews)

       
    const showAllNewsDiv = document.createElement("div");
      
      
	showAllNewsDiv.classList.add("row");

	showAllNewsDiv.innerHTML = `
        
       <div class="col-md-4 mb-5">
            <img src='${
			showNews.thumbnail_url
		}' class="img-fluid rounded-start" alt="...">
    
        </div>

        
        
        
        `;

		showAllNews.appendChild(showAllNewsDiv);
	});
};

loadNewseId();

loadCategory();

// author:
// img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
// name: "Jimmy Dane"
// published_date: "2022-08-24 17:27:34"
// [[Prototype]]: Object
// category_id: "01"
// details: "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
// image_url: "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png"
// others_info:
// is_todays_pick: false
// is_trending: true
// [[Prototype]]: Object
// rating:
// badge: "Excellent"
// number: 4.5
// [[Prototype]]: Object
// thumbnail_url: "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png"
// title: "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet"
// total_view: 488
// _id: "0282e0e58a5c404fbd15261f11c2ab6a"
