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
