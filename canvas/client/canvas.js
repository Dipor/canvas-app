Template.leanCanvas.created = function () {
  // Get reference to template instance
  const instance = this;

  // Add edit mode reactive variable
  instance.editMode = new ReactiveVar(false);
}

Template.leanCanvas.helpers({
  "editMode": function () {
    // Keep track of whether canvas is in edit mode

    // Get reference to template instance
    const instance = Template.instance();

    // Get value of edit mode reactive variable
    return instance.editMode.get();
  }
});

Template.leanCanvas.events({
  "click #edit-canvas": function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Set canvas to edit mode
    instance.editMode.set(true);

    // Enable Hallo editor on all canvas text
    jQuery("p").hallo({
      plugins: {
        "halloformat": {}
      }
    });
  }
});
