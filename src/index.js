/*
 * LightningChartJS example that showcases a simple SpiderChart.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, Themes } = lcjs

// Create spider chart and Three series.
const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .Spider({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Company branch efficiency')
    .setTitleMargin({ top: 60, bottom: 40 })
    .setAxisInterval(100)
    .setScaleLabelStrategy(undefined)
    // .setPadding({ top: 100 })

const series = [chart.addSeries().setName('Sydney'), chart.addSeries().setName('Kuopio'), chart.addSeries().setName('New York')]
series.forEach((value, i) => {
    value.setPointSize(10)
})

// Add constant points to series.
const categories = ['Pre-planning', 'Customer contacts', 'Meetings', 'Development time', 'Releases']
//This is for Sydney Series.
series[0].addPoints(
    { axis: categories[0], value: 6 },
    { axis: categories[1], value: 22 },
    { axis: categories[2], value: 61 },
    { axis: categories[3], value: 76 },
    { axis: categories[4], value: 100 },
)
//This is for Kuopio Series.
series[1].addPoints(
    { axis: categories[0], value: 44 },
    { axis: categories[1], value: 8 },
    { axis: categories[2], value: 97 },
    { axis: categories[3], value: 68 },
    { axis: categories[4], value: 69 },
)
//This is for New York Series.
series[2].addPoints(
    { axis: categories[0], value: 94 },
    { axis: categories[1], value: 63 },
    { axis: categories[2], value: 4 },
    { axis: categories[3], value: 67 },
    { axis: categories[4], value: 71 },
)
