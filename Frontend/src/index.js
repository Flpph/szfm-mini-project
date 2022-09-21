var t = $.template('\
<div class="col-sm-12 col-md-6 col-lg-3 oszlop">\
                    <div class="card kartya">\
                       <img src="${url}" class="card-img-top">\
                        <div class="row">\
                            <div class="col">\
                                <p class="card-credit">@{urername}</p>\
                            </div>\
                            <div class="col">\
                                <a href="#" class="btn btn-light"><img class="download-btn" src="images/btn_download.png"></a>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
');

for (let i = 0; i < pictures.length; i++) {
    $(selector).append( t , {
        url: jsonObj.url,
        username: jsonObj.username
   });
  }








  $(selector).append( t , {
     url: jsonObj.url,
     name: jsonObj.name
});