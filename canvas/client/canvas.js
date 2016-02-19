Template.leanCanvas.created = function () {
  // Get reference to template instance
  const instance = this;

  // Add edit mode reactive variable
  const editMode = new ReactiveVar(false);
}

Template.leanCanvas.events({
  "click #edit-canvas": function () {
    // Enable Hallo editor on all canvas text
    jQuery("p").hallo({
      plugins: {
        "halloformat": {}
      }
    });
  }
});
