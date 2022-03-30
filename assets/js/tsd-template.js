

var tsdApi = 'http://thiepsodo.com/DEV/order/8'



$(document).ready(function () {
    getData(renderData);

})





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

    $('.gla_countdown').each(function(){
        var year = moment(data.dataInfo.weddingPartyDate).get('year');
        var month = moment(data.dataInfo.weddingPartyDate).get('month');
        var day = moment(data.dataInfo.weddingPartyDate).get('date');
        $(this).countdown({until: new Date(year,month,day)});
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

}

