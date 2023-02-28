require('../css/app.scss');

require('jquery')
require('bootstrap')

$(function() {
    function badgeFilterOnClick() {
        let filterText = $(this).attr('data-title');
        $('.js-on-click-filter-categories[title="' + filterText + '"]').removeClass('border-marked');
        $('.js-on-click-filter-tags[title="' + filterText + '"]').removeClass('border-marked');
        $(this).remove();

        renderCardSetFilter();
    }

    function renderAddFilter(el) {
        let filterText = $(el).attr('title');
        if ($(el).hasClass('border-marked')) {
            $(el).removeClass('border-marked');
            listFilters.find('.badge-filter[data-title="' + filterText + '"]').remove();
        } else {
            $(el).addClass('border-marked');
            if (!listFilters.find('.badge-filter[data-title="' + filterText + '"]').length) {
                listFilters.append(templateFilter.split('{text}').join(filterText));
                $(document).on('click', '.badge-filter[data-title="' + filterText + '"]', badgeFilterOnClick);
            }
        }

        renderCardSetFilter();
    }

    function renderCardSetFilter() {
        let listCard = $(".js-card-filter");
        if (listFilters.find(".badge-filter").length) {
            listCard.hide();
            listFilters.find(".badge-filter").each(function () {
                listCard.find("p.categories span:contains('" + $(this).attr('data-title') + "')").closest('.js-card-filter').show();
                listCard.find("p.tags span:contains('" + $(this).attr('data-title') + "')").closest('.js-card-filter').show();
            });
        } else {
            listCard.show();
        }

        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    var listFilters = $(".js-list-applied-filters");
    if (listFilters.length) {
        listFilters.find(".badge-filter").removeClass('display-none');
        var templateFilter = listFilters.html();
        listFilters.find(".badge-filter").remove();

        $(".js-on-click-filter-categories").click(function(e) {
            e.preventDefault();
            renderAddFilter(this);
        });

        $(".js-on-click-filter-tags").click(function(e) {
            e.preventDefault();
            renderAddFilter(this);
        });
    }
});
