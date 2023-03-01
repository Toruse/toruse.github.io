require('../css/app.scss');

require('jquery')
require('bootstrap')

$(function() {
    function badgeFilterOnClick() {
        let filterText = $(this).attr('data-title');
        let filterGroup = $(this).attr('data-group');
        $('.js-on-click-filter-' + filterGroup + '[title="' + filterText + '"]').removeClass('border-marked');
        $(this).remove();
        if (listSetFilters[filterGroup].indexOf(filterText) !== -1) {
            listSetFilters[filterGroup].splice(listSetFilters[filterGroup].indexOf(filterText), 1);
        }

        renderCardSetFilter();
    }

    function renderAddFilter(el) {
        let filterText = $(el).attr('title');
        let filterGroup = $(el).closest('div[data-filter-group]').attr('data-filter-group');
        if ($(el).hasClass('border-marked')) {
            $(el).removeClass('border-marked');
            if (listSetFilters[filterGroup].indexOf(filterText) !== -1) {
                listSetFilters[filterGroup].splice(listSetFilters[filterGroup].indexOf(filterText), 1);
            }
            listFilters.find('.badge-filter[data-group="' + filterGroup + '"][data-title="' + filterText + '"]').remove();
        } else {
            $(el).addClass('border-marked');
            if (!listFilters.find('.badge-filter[data-group="' + filterGroup + '"][data-title="' + filterText + '"]').length) {
                listFilters.append(templateFilter.split('{text}').join(filterText).replace(/\{group\}/i, filterGroup));
                listSetFilters[filterGroup].push(filterText);
                $(document).on('click', '.badge-filter[data-group="' + filterGroup + '"][data-title="' + filterText + '"]', badgeFilterOnClick);
            }
        }

        renderCardSetFilter();
    }

    function renderCardSetFilter() {
        let listCard = $(".js-card-filter");
        let badgeFilter = listFilters.find(".badge-filter")
        if (badgeFilter.length) {
            listCard.hide();
            let stringFilters = {};
            for (let key in listSetFilters) {
                let str = listSetFilters[key].join("'), p." + key + " span:contains('");
                if (str) {
                    stringFilters[key] = '';
                    stringFilters[key] = "p." + key + " span:contains('" + str +"')";
                }
            }
            listCard.each(function () {
                let foundFilterCount = 0;
                for (var key in stringFilters) {
                    if ($(this).find(stringFilters[key]).length) foundFilterCount++;
                }
                if (foundFilterCount === Object.keys(stringFilters).length) {
                    $(this).show();
                }
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
        var listSetFilters = {};
        $('div[data-filter-group]').each(function () {
            listSetFilters[$(this).attr('data-filter-group')] = [];
        });

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
