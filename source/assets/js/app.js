require('../css/app.scss');

document.addEventListener("DOMContentLoaded", function() {
    function badgeFilterOnClick() {
        let filterText = this.getAttribute('data-title');
        let filterGroup = this.getAttribute('data-group');
        document.querySelector('.js-on-click-filter-' + filterGroup + '[title="' + filterText + '"]').classList.remove('border-marked');
        this.remove();
        if (listSetFilters[filterGroup].indexOf(filterText) !== -1) {
            listSetFilters[filterGroup].splice(listSetFilters[filterGroup].indexOf(filterText), 1);
        }

        renderCardSetFilter();
    }

    function renderAddFilter(el) {
        let filterText = el.getAttribute('title');
        let filterGroup = el.closest('div[data-filter-group]').getAttribute('data-filter-group');

        if (el.classList.contains('border-marked')) {
            el.classList.remove('border-marked');
            if (listSetFilters[filterGroup].indexOf(filterText) !== -1) {
                listSetFilters[filterGroup].splice(listSetFilters[filterGroup].indexOf(filterText), 1);
            }
            listFilters.querySelector('.badge-filter[data-group="' + filterGroup + '"][data-title="' + filterText + '"]').remove();
        } else {
            el.classList.add('border-marked');
            if (!listFilters.querySelector('.badge-filter[data-group="' + filterGroup + '"][data-title="' + filterText + '"]')) {
                var tmp = document.createElement('template');
                tmp.innerHTML = templateFilter.split('{text}').join(filterText).replace(/\{group\}/i, filterGroup);
                listFilters.append(tmp.content);
                listSetFilters[filterGroup].push(filterText);
                document.querySelector('.badge-filter[data-group="' + filterGroup + '"][data-title="' + filterText + '"]').addEventListener('click', badgeFilterOnClick);
            }
        }
        renderCardSetFilter();
    }

    function renderCardSetFilter() {
        let listCard = document.querySelectorAll('.js-card-filter');
        let badgeFilter = listFilters.querySelectorAll('.badge-filter');
        if (badgeFilter.length) {
            listCard.forEach(function (item) {
                item.style.display = 'none';
            });
            let stringFilters = {};
            for (let key in listSetFilters) {
                if (listSetFilters[key].length) {
                    stringFilters[key] = listSetFilters[key];
                }
            }
            listCard.forEach(function (item) {
                let foundFilterCount = 0;
                for (var key in stringFilters) {
                    if (typeof Array.from(item.querySelectorAll("p." + key + " span")).find(function (el) {
                        return stringFilters[key].indexOf(el.textContent) !== -1;
                    }) !== 'undefined') foundFilterCount++;
                }
                if (foundFilterCount === Object.keys(stringFilters).length) {
                    item.style.display = '';
                }
            });
        } else {
            listCard.forEach(function (item) {
                item.style.display = '';
            });
        }
        document.querySelector('html, body').scrollTop = 0;
    }

    var listFilters = document.querySelector('.js-list-applied-filters');
    if (listFilters) {
        listFilters.querySelector('.badge-filter').classList.remove('display-none');
        var templateFilter = listFilters.innerHTML;
        listFilters.querySelector('.badge-filter').remove();
        var listSetFilters = {};
        document.querySelectorAll('div[data-filter-group]').forEach(function (item) {
            listSetFilters[item.getAttribute('data-filter-group')] = [];
        });

        document.querySelectorAll('.js-on-click-filter-categories').forEach(function (item) {
            item.addEventListener('click',function(e) {
                e.preventDefault();
                renderAddFilter(this);
            });
        });

        document.querySelectorAll('.js-on-click-filter-tags').forEach(function (item) {
            item.addEventListener('click',function(e) {
                e.preventDefault();
                renderAddFilter(this);
            });
        });
    }
});
