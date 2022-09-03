const loadCategory = async () => {
	try {
		const url = ` https://openapi.programming-hero.com/api/news/categories `;
		const res = await fetch(url);
		const data = await res.json();
		// console.log(data)
		displayCategory(data.data.news_category);
	} catch (error) {
		console.log(error);
	}
};

const displayCategory = (newsId) => {
	console.log(newsId);

	

	newsId.forEach((news) => {
		// console.log(news);

		const newsCategory = document.getElementById("news-category");

		const category = document.createElement("button");
		category.classList.add("button");
		category.innerHTML = `
		<button onclick="loadNewseId('${news.category_id}')" type="button" class="btn btn-light me-2 p-3">${news.category_name}</button>
		`;

		newsCategory.appendChild(category);
	});
};;

const loadNewseId = async (id) => {

	toggleSpinner(true);
	try {
		const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		// console.log(data.data);
		displayNews(data.data);
	} catch (error) {
		// toggleSpinner(false);

		console.log(error);
	}
};

const displayNews = (allNews) => {
	// console.log(allNews);
	toggleSpinner(false);
	const inputFiled = document.getElementById("input-filed");
	 inputFiled.value =` ${allNews.length} items found for category  `

	const noNewsItem = document.getElementById("no-item-found");
	if (allNews.length === 0) {
		noNewsItem.classList.remove("d-none");
	} else {
		noNewsItem.classList.add("d-none");
	}

	const showAllNews = document.getElementById("allNews");

	//   toggleSpinner(false)
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
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title fw-bold">${showNews.title}</h5>
                <p class="card-text">${
				showNews.details.slice(0, 400) + "...."
			}</p>
              
      <div class="d-flex">

          <div>   <img src="${
			showNews.author.img
		}" alt="..." class="thumblain img-thumbnail img-fluid"   > </div>

     <div class="d-flex align-items-center mx-2" >  <p >${
		showNews.author.name ? showNews.author.name : "No Name Found"
     }</p> </div>

     <div class="d-flex align-items-center" ><p> view: ${
		showNews.total_view ? showNews.total_view : "No View Found"
     }</p>  </div>

<div class="d-flex align-items-center mx-4  ">
<button onclick="  loadNewsDetail('${
			showNews._id
		}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Detail View
</button>

</div>

</div>
</div>
      
 </div>

 `;
		showAllNews.appendChild(showAllNewsDiv);
	});
};;;

const toggleSpinner = (isLoading) => {
	const loaderSection = document.getElementById("loader");

	if (isLoading) {
		loaderSection.classList.remove("d-none");
	} else {
		loaderSection.classList.add("d-none");
	}
};

const loadNewsDetail = async (news) => {
	try {
		const url = ` https://openapi.programming-hero.com/api/news/${news} `;
		const res = await fetch(url);
		const data = await res.json();
		// console.log(data.data);
		displayNewsDetails(data.data);
	} catch (error) {
		console.log(error);
	}
};

const displayNewsDetails = (newsDetail) => {
	// console.log(newsDetail);

	const modalTitle = document.getElementById("newsDetailModal");

	modalTitle.innerText = ` ${newsDetail[0].title} `;

	const newsDetails = document.getElementById("newsDetail");
    newsDetails.innerHTML = `

       <div>   <img src="${
		newsDetail[0].author.img
	}" alt="..." class=" img-thumbnail img-fluid" style="width: 10rem;"  > </div>
    <p>Name: ${
		newsDetail[0].author.name
			? newsDetail[0].author.name
			: "No Name Found"
    } </p>
    <p>date: ${newsDetail[0].author.published_date}</p>
<p> rating: ${newsDetail[0].rating.number}</p>

<p>View: ${
		newsDetail[0]?.total_view
			? newsDetail[0].total_view
			: "No View Found"
	} </p>
    
    `;
};

loadNewsDetail()

loadNewseId();

loadCategory();
