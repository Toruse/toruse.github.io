require('../css/app.scss');

require('jquery')
require('bootstrap')

$(function() {
    $(".js-on-click-filter-categories").click(function(e) {
        e.preventDefault();
        var filterText = $(this).attr('title');
        $(".js-on-click-filter-categories").removeClass('border-marked');
        $(this).addClass('border-marked');
        var listCard = $(".js-card-filter");
        listCard.hide();
        listCard.find("p.categories span:contains('"+filterText+"')").closest('.js-card-filter').show();
        $(".js-clear-filter-categories").show();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $(".js-clear-filter-tags").hide();
        $(".js-on-click-filter-tags").removeClass('border-marked');
    });

    $(".js-on-click-filter-tags").click(function(e) {
        e.preventDefault();
        var filterText = $(this).attr('title');
        $(".js-on-click-filter-tags").removeClass('border-marked');
        $(this).addClass('border-marked');
        var listCard = $(".js-card-filter");
        listCard.hide();
        listCard.find("p.tags span:contains('"+filterText+"')").closest('.js-card-filter').show();
        $(".js-clear-filter-tags").show();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $(".js-clear-filter-categories").hide();
        $(".js-on-click-filter-categories").removeClass('border-marked');
    });

    $(".js-clear-filter-categories").click(function(e) {
        e.preventDefault();
        var listCard = $(".js-card-filter");
        listCard.show();
        $(".js-clear-filter-categories").hide();
        $(".js-on-click-filter-categories").removeClass('border-marked');
    });

    $(".js-clear-filter-tags").click(function(e) {
        e.preventDefault();
        var listCard = $(".js-card-filter");
        listCard.show();
        $(".js-clear-filter-tags").hide();
        $(".js-on-click-filter-tags").removeClass('border-marked');
    });

});
