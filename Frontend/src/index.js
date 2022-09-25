window.onload = async (event) => {
    let response = await fetch('http://95.138.193.85:3000/api/image/listMemes', {
        method: 'GET',
    });
    let result = await response.json();
    
    result.reverse();
    var sor = document.getElementById("kepSor");

    result.forEach((meme) => {
        console.log(meme)
        sor.innerHTML += template(meme.path, meme.author);
    });
};

function template(url, username) { 
    return `
    <div class="col-sm-12 col-md-6 col-lg-4 oszlop">
        <div class="card kartya">
            <img src="${url}" class="card-img-top">
            <div class="row">
                <div class="col">
                    <p class="card-credit">${username}</p>
                </div>
                <div class="col">
                    <a href="${url}" target="_blank" download="meme" class="btn btn-light" download><img class="download-btn" src="images/btn_download.png"></a>
                </div>
            </div>
        </div>
    </div>
    `;
}