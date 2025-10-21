vegaEmbed('#map', mapSpec, {actions: false});
vegaEmbed('#bubble-plot', bubbleSpec, {actions: false}).then(result => {
  // Add the year selection dropdown
  const view = result.view;
  const container = document.getElementById('year-selection');
  const select = container.querySelector('select');
  if (select) {
    select.addEventListener('change', function() {
      view.signal('yearFilter', parseInt(this.value)).run();
    });
  }
});
vegaEmbed('#primary-forest-loss', primaryForestLossSpec, {actions: false});
vegaEmbed('#tree-cover-loss', treeCoverLossSpec, {actions: false});
vegaEmbed('#dominant-driver-tree-loss', dominantDriverTreeLossSpec, {actions: false});
vegaEmbed('#forest-loss-by-state', forestLossByStateSpec, {actions: false});
vegaEmbed('#forest-loss-by-year', forestLossByYearSpec, {actions: false});
