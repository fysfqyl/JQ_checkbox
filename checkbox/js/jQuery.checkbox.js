(function($){
    function CheckBox(element) {
        this.element = element;
    };
    CheckBox.prototype = {
        checkAll: function() {
            this.element.prop('checked',true);
        },

        uncheckAll: function() {
            this.element.prop('checked',false);
        },
        reverseCheck: function() {
            this.element.each(function() {
                this.checked = !this.checked;
            });
        }
    };
    $.checkBox = function(selector) {
        return new CheckBox($(selector))
    }
})(jQuery);