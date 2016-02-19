FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("canvasAppMainLayout", {content: "leanCanvas"});
  }
});
