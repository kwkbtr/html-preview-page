(function() {
    function init() {
        var html = ko.observable().extend({ rateLimit: 500 });
        var css = ko.observable().extend({ rateLimit: 500 });

        var viewModel = {
            updateHtml: ko.computed({
                read: function() {},
                write: function(t) { html(t); }
            }),
            updateCss: ko.computed({
                read: function() {},
                write: function(t) { css(t); }
            })
        };

        ko.computed(function() {
            var iframe = document.getElementsByTagName("iframe")[0];
            var h = html();
            if (h) {
                iframe.contentDocument.body.innerHTML = h;
            }

            var c = css();
            if (c) {
                var style = iframe.contentDocument.getElementsByTagName("style")[0];
                style.innerText = c;
            }
        });

        ko.applyBindings(viewModel);
    }

    document.addEventListener("DOMContentLoaded", init);
})();
