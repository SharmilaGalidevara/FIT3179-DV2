const bubbleSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Bubble plot showing relationship between median income and GDP by Malaysian state",
    "width": 800,
    "height": 500,
    "padding": 40,
    "background": "#ffffff",
    "data": {
      "values": [
        // 2018 Data
        {"state":"Kuala Lumpur","year":2018,"median_income":9200,"gdp":110000,"population":1750000,"parks":5},
        {"state":"Selangor","year":2018,"median_income":9200,"gdp":82000,"population":6300000,"parks":8},
        {"state":"Johor","year":2018,"median_income":6700,"gdp":78000,"population":3700000,"parks":6},
        {"state":"Sabah","year":2018,"median_income":4200,"gdp":32000,"population":3800000,"parks":12},
        {"state":"Sarawak","year":2018,"median_income":4700,"gdp":37000,"population":2700000,"parks":15},
        {"state":"Pulau Pinang","year":2018,"median_income":6500,"gdp":42000,"population":1750000,"parks":4},
        {"state":"Perak","year":2018,"median_income":4000,"gdp":28000,"population":2450000,"parks":7},
        {"state":"Pahang","year":2018,"median_income":4300,"gdp":26000,"population":1650000,"parks":10},
        {"state":"Negeri Sembilan","year":2018,"median_income":4900,"gdp":20000,"population":1150000,"parks":3},
        {"state":"Kedah","year":2018,"median_income":4200,"gdp":19000,"population":2150000,"parks":4},
        {"state":"Kelantan","year":2018,"median_income":3600,"gdp":14000,"population":1850000,"parks":5},
        {"state":"Terengganu","year":2018,"median_income":5800,"gdp":17000,"population":1250000,"parks":6},
        {"state":"Perlis","year":2018,"median_income":4300,"gdp":4500,"population":250000,"parks":2},
        {"state":"Melaka","year":2018,"median_income":6100,"gdp":19000,"population":900000,"parks":3},
        {"state":"W.P. Putrajaya","year":2018,"median_income":9500,"gdp":22000,"population":110000,"parks":1},
        {"state":"W.P. Labuan","year":2018,"median_income":6600,"gdp":4000,"population":95000,"parks":1},
        
        // 2019 Data
        {"state":"Kuala Lumpur","year":2019,"median_income":9500,"gdp":115000,"population":1770000,"parks":5},
        {"state":"Selangor","year":2019,"median_income":9500,"gdp":86000,"population":6400000,"parks":8},
        {"state":"Johor","year":2019,"median_income":6900,"gdp":82000,"population":3750000,"parks":6},
        {"state":"Sabah","year":2019,"median_income":4350,"gdp":33500,"population":3850000,"parks":12},
        {"state":"Sarawak","year":2019,"median_income":4850,"gdp":38500,"population":2850000,"parks":15},
        {"state":"Pulau Pinang","year":2019,"median_income":6700,"gdp":43500,"population":1770000,"parks":4},
        {"state":"Perak","year":2019,"median_income":4150,"gdp":29000,"population":2470000,"parks":7},
        {"state":"Pahang","year":2019,"median_income":4450,"gdp":27000,"population":1670000,"parks":10},
        {"state":"Negeri Sembilan","year":2019,"median_income":5050,"gdp":21000,"population":1170000,"parks":3},
        {"state":"Kedah","year":2019,"median_income":4350,"gdp":19500,"population":2170000,"parks":4},
        {"state":"Kelantan","year":2019,"median_income":3700,"gdp":14500,"population":1870000,"parks":5},
        {"state":"Terengganu","year":2019,"median_income":6000,"gdp":17500,"population":1270000,"parks":6},
        {"state":"Perlis","year":2019,"median_income":4450,"gdp":4750,"population":255000,"parks":2},
        {"state":"Melaka","year":2019,"median_income":6300,"gdp":19500,"population":915000,"parks":3},
        {"state":"W.P. Putrajaya","year":2019,"median_income":9800,"gdp":23500,"population":115000,"parks":1},
        {"state":"W.P. Labuan","year":2019,"median_income":6800,"gdp":4200,"population":98000,"parks":1},
        
        // 2020-2022 Data (from previous, with consistent growth)
        {"state":"Kuala Lumpur","year":2020,"median_income":9800,"gdp":120000,"population":1800000,"parks":5},
        {"state":"Selangor","year":2020,"median_income":9800,"gdp":90000,"population":6500000,"parks":8},
        {"state":"Johor","year":2020,"median_income":7100,"gdp":85000,"population":3800000,"parks":6},
        {"state":"Sabah","year":2020,"median_income":4500,"gdp":35000,"population":3900000,"parks":12},
        {"state":"Sarawak","year":2020,"median_income":5000,"gdp":40000,"population":2800000,"parks":15},
        {"state":"Pulau Pinang","year":2020,"median_income":6900,"gdp":45000,"population":1800000,"parks":4},
        {"state":"Perak","year":2020,"median_income":4300,"gdp":30000,"population":2500000,"parks":7},
        {"state":"Pahang","year":2020,"median_income":4600,"gdp":28000,"population":1700000,"parks":10},
        {"state":"Negeri Sembilan","year":2020,"median_income":5200,"gdp":22000,"population":1200000,"parks":3},
        {"state":"Kedah","year":2020,"median_income":4500,"gdp":20000,"population":2200000,"parks":4},
        {"state":"Kelantan","year":2020,"median_income":3800,"gdp":15000,"population":1900000,"parks":5},
        {"state":"Terengganu","year":2020,"median_income":6200,"gdp":18000,"population":1300000,"parks":6},
        {"state":"Perlis","year":2020,"median_income":4600,"gdp":5000,"population":260000,"parks":2},
        {"state":"Melaka","year":2020,"median_income":6500,"gdp":20000,"population":930000,"parks":3},
        {"state":"W.P. Putrajaya","year":2020,"median_income":10000,"gdp":25000,"population":120000,"parks":1},
        {"state":"W.P. Labuan","year":2020,"median_income":7000,"gdp":4500,"population":100000,"parks":1}
      ]
    },
    "params": [
      {
        "name": "yearFilter",
        "value": 2020,
        "bind": {
          "input": "select",
          "name": "Select Year: ",
          "options": [2018, 2019, 2020],
          "labels": ["2018", "2019", "2020"]
        }
      }
    ],
    "transform": [
      {"filter": {"field": "year", "equal": {"expr": "yearFilter"}}},
      {"calculate": "datum.gdp * 1000", "as": "gdp_value"},
      {"calculate": "datum.median_income * 12", "as": "annual_income"}
    ],
    "layer": [
      {
        "mark": {
          "type": "circle",
          "opacity": 0.8,
          "stroke": "#2c3e50",
          "strokeWidth": 1,
          "cursor": "pointer"
        },
        "encoding": {
          "x": {
            "field": "median_income",
            "type": "quantitative",
            "title": "Median Monthly Income (MYR)",
            "scale": {"zero": false, "nice": true},
            "axis": {"grid": true, "tickCount": 5}
          },
          "y": {
            "field": "gdp",
            "type": "quantitative",
            "title": "GDP (MYR Million)",
            "scale": {"zero": false, "nice": true},
            "axis": {"grid": true, "tickCount": 5}
          },
          "size": {
            "field": "population",
            "type": "quantitative",
            "title": "Population",
            "scale": {"range": [400, 4000]},
            "legend": {
              "title": "Population",
              "orient": "right",
              "format": ",.0s"
            }
          },
          "color": {
            "value": "#3498db"
          },
          "tooltip": [
            {"field": "state", "type": "nominal", "title": "State"},
            {"field": "year", "type": "nominal", "title": "Year"},
            {"field": "median_income", "type": "quantitative", "title": "Median Income (MYR)", "format": ",.0f"},
            {"field": "annual_income", "type": "quantitative", "title": "Annual Income (MYR)", "format": ",.0f"},
            {"field": "gdp_value", "type": "quantitative", "title": "GDP (MYR)", "format": ",.0f"},
            {"field": "population", "type": "quantitative", "title": "Population", "format": ","},
            {"field": "parks", "type": "quantitative", "title": "Number of Parks"}
          ]
        }
      }
    ],
    "config": {
      "view": {"stroke": "transparent"},
      "axis": {
        "labelFontSize": 11,
        "titleFontSize": 13,
        "titleFontWeight": "normal",
        "titlePadding": 10
      },
      "legend": {
        "labelFontSize": 11,
        "titleFontSize": 12,
        "titleFontWeight": "normal"
      },
      "title": {"fontSize": 16, "offset": 20}
    }
  };

  // Map Specification with Annotations
  const mapSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 1000,
    "height": 700,
    "projection": { "type": "mercator", "center": [109, 4], "scale": 2500 },
    "layer": [
      // Annotation for Taman Negara
      {
        "data": {
          "values": [
            {
              "name": "Taman Negara",
              "lon": 102.4,
              "lat": 4.7,
              "label": "Taman Negara\nMalaysia's Oldest National Park\nEst. 1938",
              "dx": 5,
              "dy": -10,
              "color": "#1a5e1a",
              "fontSize": 12,
              "fontWeight": "bold"
            }
          ]
        },
        "projection": {"type": "mercator", "center": [109, 4], "scale": 2500},
        "mark": {
          "type": "rule",
          "x2": {"expr": "datum.lon"},
          "y2": {"expr": "datum.lat"},
          "stroke": "#1a5e1a",
          "strokeWidth": 1.5,
          "strokeDash": [4, 2]
        },
        "encoding": {
          "longitude": {"field": "lon", "type": "quantitative"},
          "latitude": {"field": "lat", "type": "quantitative"}
        }
      },
      {
        "data": {
          "values": [
            {
              "lon": 102.4,
              "lat": 4.7,
              "label": "Taman Negara\nMalaysia's Oldest National Park\nEst. 1938",
              "dx": 5,
              "dy": -10,
              "color": "#1a5e1a",
              "fontSize": 12,
              "fontWeight": "bold"
            }
          ]
        },
        "projection": {"type": "mercator", "center": [109, 4], "scale": 2500},
        "mark": {
          "type": "text",
          "align": "left",
          "dx": 5,
          "dy": -10,
          "fontSize": 12,
          "fontWeight": "bold",
          "color": "#1a5e1a",
          "lineHeight": 1.4
        },
        "encoding": {
          "longitude": {"field": "lon", "type": "quantitative"},
          "latitude": {"field": "lat", "type": "quantitative"},
          "text": {"field": "label", "type": "nominal"}
        }
      },
      // ocean background (sphere)
      {
        "data": { "sphere": true },
        "mark": { "type": "geoshape", "fill": "#e6f3ff", "stroke": "#cfe8ff", "strokeWidth": 0.6 }
      },
      // MALAYSIA label in ocean
      {
        "data": {
          "values": [{"label": "MALAYSIA", "lon": 106, "lat": 2.5}]
        },
        "mark": {
          "type": "text",
          "fontSize": 24,
          "fontWeight": "bold",
          "fill": "#a0c8e0",
          "opacity": 0.6
        },
        "encoding": {
          "longitude": {"field": "lon", "type": "quantitative"},
          "latitude": {"field": "lat", "type": "quantitative"},
          "text": {"field": "label", "type": "nominal"}
        }
      },
      // malaysia outline 
      {
        "data": {
          "url": "https://raw.githubusercontent.com/SharmilaGalidevara/FIT3179-DV2/main/data/malaysia_geo.json",
          "format": { "type": "json" }
        },
        "mark": {
          "type": "geoshape",
          "fill": "#ffffff",
          "stroke": "#000000",
          "strokeWidth": 1.8,
          "strokeOpacity": 1
        }
      },
      // national parks as proportional circles
      {
        "data": {
          "url": "https://raw.githubusercontent.com/SharmilaGalidevara/FIT3179-DV2/main/data/malaysia_parks_week9.csv",
          "format": { "type": "csv" }
        },
        "transform": [
          { "calculate": "datum.Area_k2", "as": "Area_k2_color" }
        ],
        "mark": { 
          "type": "circle", 
          "opacity": 0.8, 
          "stroke": "#2f4f2f", 
          "strokeWidth": 1,
          "cursor": "pointer"
        },
        "encoding": {
          "longitude": { "field": "Centroid_Lon", "type": "quantitative" },
          "latitude":  { "field": "Centroid_Lat", "type": "quantitative" },
          "size": {
            "field": "Area_k2",
            "type": "quantitative",
            "scale": { "range": [40, 1600] },
            "legend": {
              "title": "Area (km²)",
              "orient": "right",
              "format": ",d",
              "titleFontSize": 12,
              "labelFontSize": 11
            }
          },
          "color": {
            "field": "Area_k2",
            "type": "quantitative",
            "title": "Area (km²)",
            "scale": {
              "type": "threshold",
              "domain": [100, 1000],
              "range": ["#a1d99b", "#31a354", "#006d2c"]
            },
            "legend": {
              "title": "Area (km²)",
              "orient": "right",
              "values": [0, 100, 1000],
              "labelOverlap": true,
              "titleFontSize": 12,
              "labelFontSize": 11,
              "format": ",d"
            }
          },
          "tooltip": [
            {"field": "Park_Name", "type": "nominal", "title": "Protected Area"},
            {"field": "State", "type": "nominal", "title": "State(s)"},
            {"field": "Area_k2", "type": "quantitative", "title": "Area (km²)", "format": ",d"},
            {"field": "Species_Count", "type": "quantitative", "title": "Species count", "format": ",d"},
            {"field": "Species_Density", "type": "quantitative", "title": "Species/km²", "format": ".2f"}
          ]
        }
      }
    ],
    "config": {
      "view": {"stroke": "transparent"},
      "title": {"fontSize": 18, "offset": 20}
    }
  };

  // Primary Forest Loss Specification
  const primaryForestLossSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Primary Forest Loss in Malaysia (2002-2024)",
    "width": 700,
    "height": 400,
        "data": {
      "url": "https://raw.githubusercontent.com/SharmilaGalidevara/FIT3179-DV2/main/data/country_treecover_loss.csv",
      "format": {"type": "csv", "parse": {
        "threshold": "number", 
        "extent_2000_ha": "number",
        "tc_loss_ha_2001": "number", "tc_loss_ha_2002": "number", "tc_loss_ha_2003": "number",
        "tc_loss_ha_2004": "number", "tc_loss_ha_2005": "number", "tc_loss_ha_2006": "number",
        "tc_loss_ha_2007": "number", "tc_loss_ha_2008": "number", "tc_loss_ha_2009": "number",
        "tc_loss_ha_2010": "number", "tc_loss_ha_2011": "number", "tc_loss_ha_2012": "number",
        "tc_loss_ha_2013": "number", "tc_loss_ha_2014": "number", "tc_loss_ha_2015": "number",
        "tc_loss_ha_2016": "number", "tc_loss_ha_2017": "number", "tc_loss_ha_2018": "number",
        "tc_loss_ha_2019": "number", "tc_loss_ha_2020": "number", "tc_loss_ha_2021": "number",
        "tc_loss_ha_2022": "number", "tc_loss_ha_2023": "number", "tc_loss_ha_2024": "number"
      }}
    },
    "transform": [
      {"filter": "datum.country == 'Malaysia' && datum.threshold == 30"},
      {"filter": "!isNaN(datum.extent_2000_ha)"}, // Added safeguard for extent_2000_ha
      {
        "fold": [
          "tc_loss_ha_2001", "tc_loss_ha_2002", "tc_loss_ha_2003", "tc_loss_ha_2004", "tc_loss_ha_2005",
          "tc_loss_ha_2006", "tc_loss_ha_2007", "tc_loss_ha_2008", "tc_loss_ha_2009", "tc_loss_ha_2010",
          "tc_loss_ha_2011", "tc_loss_ha_2012", "tc_loss_ha_2013", "tc_loss_ha_2014", "tc_loss_ha_2015",
          "tc_loss_ha_2016", "tc_loss_ha_2017", "tc_loss_ha_2018", "tc_loss_ha_2019", "tc_loss_ha_2020",
          "tc_loss_ha_2021", "tc_loss_ha_2022", "tc_loss_ha_2023", "tc_loss_ha_2024"
        ],
        "as": ["ColumnHeader", "LossValueString"]
      },
      {"filter": "datum.LossValueString !== null"},
      {"calculate": "datum.LossValueString", "as": "Tree_Loss_Ha"},
      {"filter": "!isNaN(datum.Tree_Loss_Ha)"},
      {"calculate": "parseFloat(replace(datum.ColumnHeader, /[^0-9]/g, ''))", "as": "YearNum"},
      {"filter": "!isNaN(datum.YearNum)"},
      {
        "window": [{"op": "sum", "field": "Tree_Loss_Ha", "as": "cumulative_loss"}],
        "frame": [null, 0],
        "sort": [{"field": "YearNum"}]
      },
      {"calculate": "datum.extent_2000_ha - datum.cumulative_loss", "as": "remaining_area"},
      {"calculate": "(datum.extent_2000_ha > 0 && datum.remaining_area !== null) ? (datum.remaining_area / datum.extent_2000_ha) * 100 : 0", "as": "percent_remaining"}
    ],
    "layer": [
      {
        "mark": "bar",
        "encoding": {
          "x": {"field": "YearNum", "type": "quantitative", "title": "Year", "axis": {"labelAngle": 0, "format": "d"}},
          "y": {"field": "Tree_Loss_Ha", "type": "quantitative", "title": "Area of Tree Cover Loss (kha)", "axis": {"format": ",.0f", "tickCount": 5}},
          "color": {"value": "#A5D6A7"},
          "tooltip": [
            {"field": "YearNum", "type": "quantitative", "title": "Year"},
            {"field": "Tree_Loss_Ha", "type": "quantitative", "title": "Tree Loss (kha)", "format": ",.0f"}
          ]
        }
      },
      {
        "mark": {"type": "line", "color": "lightpink", "strokeDash": [2, 2], "point": false},
        "encoding": {
          "x": {"field": "YearNum", "type": "quantitative"},
          "y": {
            "field": "percent_remaining",
            "type": "quantitative",
            "title": "Percent of 2001 Primary Forest Area Remaining",
            "axis": {"format": ".0f", "orient": "right", "tickCount": 5, "titleColor": "lightpink"}
          },
          "tooltip": [
            {"field": "YearNum", "type": "quantitative", "title": "Year"},
            {"field": "percent_remaining", "type": "quantitative", "title": "Percent Remaining", "format": ".2f"}
          ]
        }
      }
    ],
    "resolve": {"scale": {"y": "independent"}},
    "config": {
      "view": {"stroke": "transparent"},
      "axis": {
        "labelFontSize": 11,
        "titleFontSize": 13,
        "titleFontWeight": "normal",
        "titlePadding": 10
      }
    }
  };

  // New Tree Cover Loss in Malaysia Specification (Re-implemented from scratch)
  const treeCoverLossSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Tree Cover Loss in Malaysia (2001-2024)",
    "width": 700,
    "height": 400,
    "data": {
      "url": "https://raw.githubusercontent.com/SharmilaGalidevara/FIT3179-DV2/main/data/country_treecover_loss.csv",
      "format": {"type": "csv", "parse": {
        "threshold": "number", 
        "extent_2000_ha": "number",
        "tc_loss_ha_2001": "number", "tc_loss_ha_2002": "number", "tc_loss_ha_2003": "number",
        "tc_loss_ha_2004": "number", "tc_loss_ha_2005": "number", "tc_loss_ha_2006": "number",
        "tc_loss_ha_2007": "number", "tc_loss_ha_2008": "number", "tc_loss_ha_2009": "number",
        "tc_loss_ha_2010": "number", "tc_loss_ha_2011": "number", "tc_loss_ha_2012": "number",
        "tc_loss_ha_2013": "number", "tc_loss_ha_2014": "number", "tc_loss_ha_2015": "number",
        "tc_loss_ha_2016": "number", "tc_loss_ha_2017": "number", "tc_loss_ha_2018": "number",
        "tc_loss_ha_2019": "number", "tc_loss_ha_2020": "number", "tc_loss_ha_2021": "number",
        "tc_loss_ha_2022": "number", "tc_loss_ha_2023": "number", "tc_loss_ha_2024": "number"
      }}
    },
    "transform": [
      {"filter": "datum.country == 'Malaysia' && datum.threshold == 30"},
      {
        "fold": [
          "tc_loss_ha_2001", "tc_loss_ha_2002", "tc_loss_ha_2003", "tc_loss_ha_2004", "tc_loss_ha_2005",
          "tc_loss_ha_2006", "tc_loss_ha_2007", "tc_loss_ha_2008", "tc_loss_ha_2009", "tc_loss_ha_2010",
          "tc_loss_ha_2011", "tc_loss_ha_2012", "tc_loss_ha_2013", "tc_loss_ha_2014", "tc_loss_ha_2015",
          "tc_loss_ha_2016", "tc_loss_ha_2017", "tc_loss_ha_2018", "tc_loss_ha_2019", "tc_loss_ha_2020",
          "tc_loss_ha_2021", "tc_loss_ha_2022", "tc_loss_ha_2023", "tc_loss_ha_2024"
        ],
        "as": ["ColumnHeader", "LossValueString"]
      },
      {"filter": "datum.LossValueString !== null"},
      {"calculate": "datum.LossValueString", "as": "Tree_Loss_Ha"},
      {"filter": "!isNaN(datum.Tree_Loss_Ha)"},
      {"calculate": "parseFloat(replace(datum.ColumnHeader, /[^0-9]/g, ''))", "as": "YearNum"},
      {"filter": "!isNaN(datum.YearNum)"}
    ],
    "mark": {"type": "bar", "color": "steelblue"},
    "encoding": {
      "x": {"field": "YearNum", "type": "quantitative", "title": "Year", "axis": {"labelAngle": 0, "format": "d"}},
      "y": {"field": "Tree_Loss_Ha", "type": "quantitative", "title": "Area of Tree Cover Loss (kha)", "axis": {"format": ",.0f", "tickCount": 5}},
      "tooltip": [
        {"field": "YearNum", "type": "quantitative", "title": "Year"},
        {"field": "Tree_Loss_Ha", "type": "quantitative", "title": "Tree Loss (kha)", "format": ",.0f"}
      ]
    },
    "config": {
      "view": {"stroke": "transparent"},
      "axis": {
        "labelFontSize": 11,
        "titleFontSize": 13,
        "titleFontWeight": "normal",
        "titlePadding": 10
      }
    }
  };

  // New Dominant Driver Tree Loss Specification (Placeholder for now)
  const dominantDriverTreeLossSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Tree Cover Loss by Dominant Driver in Malaysia",
    "width": 500,
    "height": 400,
    "data": {
      "values": [
        {"driver": "Hard commodities", "loss_kha": 170},
        {"driver": "Permanent agriculture", "loss_kha": 7040}, // 7.04 Mha = 7040 kha
        {"driver": "Settlements & infrastructure", "loss_kha": 158},
        {"driver": "Logging", "loss_kha": 1860}, // 1.86 Mha = 1860 kha
        {"driver": "Other natural disturbances", "loss_kha": 29.4},
        {"driver": "Wildfire", "loss_kha": 74.5},
        {"driver": "Shifting cultivation", "loss_kha": 180}
      ]
    },
    "mark": "bar",
    "encoding": {
      "x": {"field": "loss_kha", "type": "quantitative", "title": "Loss (kha)"},
      "y": {"field": "driver", "type": "nominal", "sort": "-x", "title": "Driver of Loss"},
      "color": {
        "field": "driver",
        "type": "nominal",
        "title": "Driver of Loss",
        "legend": null,
        "scale": {
          "domain": [
            "Hard commodities",
            "Settlements & infrastructure",
            "Logging",
            "Wildfire",
            "Permanent agriculture",
            "Other natural disturbances",
            "Shifting cultivation"
          ],
          "range": [
            "grey",   // Hard commodities
            "grey",   // Settlements & infrastructure
            "grey",   // Logging
            "grey",   // Wildfire
            "purple", // Permanent agriculture
            "grey",   // Other natural disturbances
            "grey"    // Shifting cultivation
          ]
        }
      },
      "tooltip": [
        {"field": "driver", "type": "nominal", "title": "Driver"},
        {"field": "loss_kha", "type": "quantitative", "title": "Loss (kha)", "format": ",.1f"}
      ]
    },
    "title": "Tree Cover Loss by Dominant Driver in Malaysia (2001-2024)"
  };


  // Bar Chart 1: Forest Loss by State (2020-2024)
  const forestLossByStateSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Forest loss by state in Malaysia (2020-2024)",
    "width": 700,
    "height": 500,
    "data": {
      "values": [
        {"state": "Sarawak", "year": 2020, "forest_loss": 132000},
        {"state": "Sarawak", "year": 2021, "forest_loss": 145000},
        {"state": "Sarawak", "year": 2022, "forest_loss": 138000},
        {"state": "Sarawak", "year": 2023, "forest_loss": 125000},
        {"state": "Sarawak", "year": 2024, "forest_loss": 118000},
        {"state": "Sabah", "year": 2020, "forest_loss": 98000},
        {"state": "Sabah", "year": 2021, "forest_loss": 105000},
        {"state": "Sabah", "year": 2022, "forest_loss": 92000},
        {"state": "Sabah", "year": 2023, "forest_loss": 88000},
        {"state": "Sabah", "year": 2024, "forest_loss": 82000},
        {"state": "Pahang", "year": 2020, "forest_loss": 45000},
        {"state": "Pahang", "year": 2021, "forest_loss": 48000},
        {"state": "Pahang", "year": 2022, "forest_loss": 42000},
        {"state": "Pahang", "year": 2023, "forest_loss": 39000},
        {"state": "Pahang", "year": 2024, "forest_loss": 36000},
        {"state": "Kelantan", "year": 2020, "forest_loss": 38000},
        {"state": "Kelantan", "year": 2021, "forest_loss": 42000},
        {"state": "Kelantan", "year": 2022, "forest_loss": 39000},
        {"state": "Kelantan", "year": 2023, "forest_loss": 35000},
        {"state": "Kelantan", "year": 2024, "forest_loss": 32000},
        {"state": "Terengganu", "year": 2020, "forest_loss": 28000},
        {"state": "Terengganu", "year": 2021, "forest_loss": 31000},
        {"state": "Terengganu", "year": 2022, "forest_loss": 29000},
        {"state": "Terengganu", "year": 2023, "forest_loss": 26000},
        {"state": "Terengganu", "year": 2024, "forest_loss": 24000}
      ]
    },
    "transform": [
      {
        "aggregate": [{"op": "sum", "field": "forest_loss", "as": "total_forest_loss"}],
        "groupby": ["state"]
      },
      {"sort": [{"field": "total_forest_loss", "order": "descending"}]}
    ],
    "mark": {"type": "bar", "color": "pink"},
    "encoding": {
      "x": {
        "field": "state",
        "type": "nominal",
        "title": "State",
        "axis": {"labelAngle": -45, "labelFontSize": 11}
      },
      "y": {
        "field": "total_forest_loss",
        "type": "quantitative",
        "title": "Total Forest Loss (hectares, 2020-2024)",
        "axis": {"grid": true}
      },
      "tooltip": [
        {"field": "state", "type": "nominal", "title": "State"},
        {"field": "total_forest_loss", "type": "quantitative", "title": "Total Forest Loss (ha)", "format": ",.0f"}
      ]
    },
    "config": {
      "view": {"stroke": "transparent"},
      "axis": {
        "labelFontSize": 11,
        "titleFontSize": 13,
        "titleFontWeight": "normal"
      }
    }
  };

  // Bar Chart 2: Forest Loss by Year (2010-2024)
  const forestLossByYearSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Annual forest loss in Malaysia (2010-2024)",
    "width": 700,
    "height": 400,
    "data": {
      "values": [
        {"year": 2010, "forest_loss": 185000},
        {"year": 2011, "forest_loss": 198000},
        {"year": 2012, "forest_loss": 215000},
        {"year": 2013, "forest_loss": 245000},
        {"year": 2014, "forest_loss": 275000},
        {"year": 2015, "forest_loss": 295000},
        {"year": 2016, "forest_loss": 285000},
        {"year": 2017, "forest_loss": 265000},
        {"year": 2018, "forest_loss": 245000},
        {"year": 2019, "forest_loss": 225000},
        {"year": 2020, "forest_loss": 198000},
        {"year": 2021, "forest_loss": 215000},
        {"year": 2022, "forest_loss": 205000},
        {"year": 2023, "forest_loss": 192000},
        {"year": 2024, "forest_loss": 178000}
      ]
    },
    "mark": {
      "type": "bar",
      "fill": "orange",
      "cornerRadiusEnd": 4,
      "cursor": "pointer"
    },
    "encoding": {
      "x": {
        "field": "year",
        "type": "ordinal",
        "title": "Year",
        "axis": {"labelAngle": -45}
      },
      "y": {
        "field": "forest_loss",
        "type": "quantitative",
        "title": "Forest Loss (hectares)",
        "axis": {"grid": true}
      },
      "tooltip": [
        {"field": "year", "type": "ordinal", "title": "Year"},
        {"field": "forest_loss", "type": "quantitative", "title": "Forest Loss (ha)", "format": ",.0f"}
      ]
    },
    "config": {
      "view": {"stroke": "transparent"},
      "axis": {
        "labelFontSize": 11,
        "titleFontSize": 13,
        "titleFontWeight": "normal"
      }
    }
  };
