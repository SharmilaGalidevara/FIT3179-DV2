// Initialize all visualizations with default settings
const initViz = async () => {
  // Map visualization
  vegaEmbed('#map', mapSpec, {actions: false});
  
  // Bubble plot with year selection
  const bubbleResult = await vegaEmbed('#bubble-plot', bubbleSpec, {actions: false});
  const yearSelect = document.querySelector('#year-selection select');
  if (yearSelect) {
    yearSelect.addEventListener('change', () => {
      bubbleResult.view.signal('yearFilter', parseInt(yearSelect.value)).run();
    });
  }
  
  // Other visualizations
  vegaEmbed('#primary-forest-loss', primaryForestLossSpec, {actions: false});
  vegaEmbed('#tree-cover-loss', treeCoverLossSpec, {actions: false});
  vegaEmbed('#dominant-driver-tree-loss', dominantDriverTreeLossSpec, {actions: false});
  vegaEmbed('#forest-loss-by-state', forestLossByStateSpec, {actions: false});
  vegaEmbed('#forest-loss-by-year', forestLossByYearSpec, {actions: false});
};

// Start the visualizations
initViz();
