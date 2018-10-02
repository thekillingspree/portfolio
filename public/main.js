$(document).ready(function(){
    $('.tooltipped').tooltip();
});

$(".main").onepage_scroll({
    beforeMove: (index) => {
        console.log("before", index);
        if (index === 2) {
            $(".page-2 h1").addClass("slide-in-elliptic-top-fwd");
            $(".page-2 h3").addClass("subtitle-animate");
        } else if (index === 3) {
            $(".page-3 h1").addClass("slide-in-elliptic-top-fwd");
            $(".page-3 h3").addClass("subtitle-animate");
            $(".page-3 .btn-floating").addClass("scale-in-center");
        } else if (index === 4) {
            $(".page-4 h1").addClass("slide-in-elliptic-top-fwd");
            $(".page-4 p").addClass("subtitle-animate");
            $(".page-4 .mock").addClass("scale-in-center");
            $(".page-4 .dest-btn").addClass("scale-in-center");
        } else if (index === 5) {
            $(".page-5 h1").addClass("slide-in-elliptic-top-fwd");
            $(".page-5 p").addClass("subtitle-animate");
            $(".page-5 .mock-phone").addClass("scale-in-center");
            $(".page-5 .dest-btn").addClass("scale-in-center");
        } else if (index === 6) {
            $(".page-6 h1").addClass("slide-in-elliptic-top-fwd");
            $(".page-6 p").addClass("subtitle-animate");
            $(".page-6 .mock-phone").addClass("scale-in-center");
            $(".page-6 .dest-btn").addClass("scale-in-center");
        } else if(index === 7) {
            $(".page-7 h1").addClass("slide-in-elliptic-top-fwd");
            $(".page-7 h3").addClass("subtitle-animate");
            $(".page-7 .social-btn").addClass("scale-in-center");
            $(".page-7 .l-circle-large").addClass("slide-in-bottom-large");
            $(".page-7 .l-circle-medium").addClass("slide-in-bottom-medium");
            $(".page-7 .l-circle-small").addClass("slide-in-bottom-small");
        }
    }
});