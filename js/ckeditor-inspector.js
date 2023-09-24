(function (Backdrop, CKEditor5) {
  "use strict";
  Backdrop.behaviors.attachInspector = {
    attach: function (context, settings) {
      // Crude delay trick, not sure about alternatives.
      setTimeout( function () {
        CKEditorInspector.attachToAll();
      }, 1000);
    }
  };
})(Backdrop, CKEditor5);
