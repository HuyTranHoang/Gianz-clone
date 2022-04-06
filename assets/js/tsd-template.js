




$(document).ready(function () {
    getData(renderData);
    
})


var tsdApi = 'http://thiepsodo.com/DEV/order/8'

function getData(callback) {
    fetch(tsdApi)
        .then (function(response) {
            return response.json();
        })
        .then(callback);
}

function renderData(data) {
    // console.log(data.dataInfo.weddingPartyDate);
    $("#brideGroomNameText").text(function() {
        return data.dataInfo.groomName + ' & ' + data.dataInfo.brideName;
      });

    $("#dateText").text(function() {
        return moment(data.dataInfo.weddingPartyDate).format("Do MMM, YYYY");
    })
    
    $("#titleTextS2").text(function() {
        return moment(data.dataInfo.weddingPartyDate).format("Do MMM, YYYY");
    })
    
    $("#subtitleTextS2").text(function() {
        return 'Bến Lức, Long An';
      });

    //   Js countdown
    $('.gla_countdown').each(function(){
        var year = moment(data.dataInfo.weddingPartyDate).get('year');
        var month = moment(data.dataInfo.weddingPartyDate).get('month');
        var day = moment(data.dataInfo.weddingPartyDate).get('date');
        $(this).countdown({
            until: new Date(year,month,day),
        });
	});

    $("#BoxTitleTextS1").text(function() {
        return 'Địa điểm'
    })

    $("#BoxContentS1").text (function() {
        return data.dataInfo.weddingPartyDescription;
    })

    $("#BoxTitleTextS2").text(function() {
        return 'Thời gian'
    })

    $("#BoxContentS2").text(function() {
        return data.dataInfo.displayTimeEvent;
    })

    $("#BoxTitleTextS3").text(function() {
        return 'Vào lúc'
    })

    $("#BoxContentS3").text(function() {
        return data.dataInfo.weddingPartyTime;
    })


    // Ảnh của The Day They Got Engaged
    var imagesList = [];
    var imgElement,divFilter,divShopItem,anchorElement;

    data.dataInfo.category4User[0].docDTO.forEach(function (course, n) {
        imagesList.push(course.pathDocument);
    });

    for (var i = 0; i < imagesList.length; i++) {
        divFilter = $('<div>',{class:'col-sm-4 gla_anim_box grid-item CongTH'});
        divShopItem = $('<div>',{class:'gla_shop_item'});
        anchorElement = $('<a>',{class:"lightbox",href:imagesList[i]});
        imgElement = $('<img>',{src:imagesList[i]});
        anchorElement.append(imgElement.get(0).outerHTML);
        divShopItem.append(anchorElement.get(0).outerHTML);
        divFilter.append(divShopItem.get(0).outerHTML);
        $('.gla_portfolio_no_padding').append(divFilter.get(0).outerHTML);
    }

    renderImages();

}

function renderImages() {
    // js filter 
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        stagger: 0,
        transitionDuration: '0',
        isAnimated: true,
        masonry: {
          columnWidth: '.grid-item',
          
        }	  
      });
      $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
      });

    $('.masonry').masonry({
        itemSelector: '.masonry-item',
    });

    $('.filter-button-group').on( 'click', 'a', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    $(window).resize(function(){
      $grid.isotope('layout');
    });

    // js LightBox
    $('.lightbox').magnificPopup({ 
        type: 'image',
        gallery:{
          enabled:true
        }
      });
}


// Đóng mở thiệp
const openBtn = document.querySelector('.js-open-btn')
const closeBtn = document.querySelector('.js-close-btn')
const invitation = document.querySelector('.tsd_invitation_container')

function showInvitation () {
    invitation.classList.add('tsd--active')
}

function hideInvitation () {
    invitation.classList.remove('tsd--active')
}

function hideOpenBtn () {
    openBtn.classList.remove('tsd--active')
}

openBtn.addEventListener('click',showInvitation)
closeBtn.addEventListener('click',hideInvitation)

// Lấy param url
var idGuest = getParamFromUrl('idGuest')

function getParamFromUrl(paramName){
    let searchParams = new URLSearchParams(document.location.search)
    return searchParams.get(paramName)
}

// Kiểm tra có paramGuest không

(idGuest != null) ? showInvitation() : hideOpenBtn() ;

