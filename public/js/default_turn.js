/**
 * Created by nguyendai on 12/7/2021.
 */
$("#flipbook").turn({
    width: 900,
    height: 693,
    autoCenter: true
});
//hide & show captions script
var page = 0;
$("#flipbook").bind("turning", function (event, page, view) {
    if (page > 0) {
//                alert("Turning the page to: "+page);
        console.log(+page);
    }

    if ((page == 2) || (page == 3)) {
//                $(".caption").hide()
//                $("#caption1").show()
//                $("#caption3").show()
        console.log('inner cover - page 1');
    }
    if ((page == 4) || (page == 5)) {
//                $(".caption").hide()
//                $("#caption4").show()
//                $("#caption5").show()
        console.log('pages 2-3');
    }
    if ((page == 6) || (page == 7)) {
//                $(".caption").hide()
//                $("#caption6").show()
//                $("#caption7").show()
        console.log('pages 4-5');
    }
    if ((page == 8) || (page == 9)) {
//                $(".caption").hide()
//                $("#caption8").show()
//                $("#caption9").show()
        console.log('pages 6-7');
    }
    if ((page == 10) || (page == 11)) {
//                $(".caption").hide()
//                $("#caption10").show()
//                $("#caption11").show()
        console.log('page 8 - inner cover');
    }
    if (page == 12) {
//                $(".caption").hide()
//                $("#caption12").show()
        console.log('back cover');
    }
});
