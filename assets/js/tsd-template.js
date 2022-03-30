

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
    console.log(data.dataInfogroomName);
    $("#brideGroomNameText").text(function(){
        return data.dataInfo.groomName;
      });
}

