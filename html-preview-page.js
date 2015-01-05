(function() {
    function init() {
        var o = ko.observable().extend({ rateLimit: 500 });
        var viewModel = {
            update: ko.computed({
                read: function() {},
                write: function(t) { o(t); }
            })
        };

        ko.computed(function() {
            var text = o();
            if (text) {
                var iframe = document.getElementsByTagName("iframe")[0];
                iframe.contentDocument.body.innerHTML = text;
            }
        });

        ko.applyBindings(viewModel);
    }

    document.addEventListener("DOMContentLoaded", init);
})();
