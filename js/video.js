const loadVideos = async (categoryId,isClicked) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

    const data = await res.json();
    const videos = data.data;
    displayVideos(videos,isClicked);


}

const allClick = ()=>{
    loadVideos(1000,true);
}

const musicClick = ()=>{
    loadVideos(1001,true);
}

const comedyClick = ()=>{
    loadVideos(1003,true);
}

const drawingClick = ()=>{
    loadVideos(1005,true);
}


const displayVideos = (videos,isClicked) => {
    const videoContainer = document.getElementById("video-container");

    if (isClicked) {
        videoContainer.textContent = '';
       
    }

    videos.forEach(video => {
        console.log(video);
        
        const videoCard = document.createElement("div");
        videoCard.classList = `card card-compact w-80 bg-base-100 `;
        videoCard.innerHTML = `
        <figure><img class="rounded-md w-72 h-40"
        src="${video.thumbnail}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <div class="flex">
                <img src="${video.authors[0].profile_picture}" alt="" class="h-10 w-10 rounded-full mr-4">
                <div>
                    <h1 class="text-base font-bold">${video.title}</h1>
                    <div class="flex items-center">
                        <h1 class="text-xs mr-2">${video.authors[0].profile_name}</h1>
                        ${video.authors[0].verified === false ? '' : '<i class="fa-regular fa-circle-check text-green-400"></i>'}

                    </div>
                    <p>${video.others.views} Views</p>

                </div>
            </div>
        </div>
        `;
        videoContainer.appendChild(videoCard);
    })
}




loadVideos(1000,false);