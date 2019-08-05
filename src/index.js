/**
 * LightningChartJS example that showcases a simple SpiderChart.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    LegendBoxBuilders,
    ColorPalettes,
    SolidFill,
    emptyLine,
    UIOrigins
} = lcjs

// Create spider chart and Three series.
const chart = lightningChart().Spider()
    .setTitle('Company branch efficiency')
    .setAxisInterval(100)
    .setScaleLabelStrategy(undefined)
    .setPadding({ top: 100 })

const series = [
    chart.addSeries()
        .setName('Sydney'),
    chart.addSeries()
        .setName('Kuopio'),
    chart.addSeries()
        .setName('New York')
]
const palette = ColorPalettes.fullSpectrum(series.length)
series.forEach((value, i) => {
    const color = palette(i)
    const solid = new SolidFill({ color })
    const opaque = solid.setA(140)
    value
        .setStrokeStyle(emptyLine)
        .setPointFillStyle(solid)
        .setPointSize(10)
        .setFillStyle(opaque)
        .setResultTableFormatter((builder, series, value, axis) =>
            builder.addRow(`${series.getName()} ${axis}`)
        )
})

// Add constant points to series.
const categories = ['Pre-planning', 'Customer contacts', 'Meetings', 'Development time', 'Releases',]
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

// Create LegendBox as part of SpiderChart.
const legend = chart.addLegendBox(LegendBoxBuilders.HorizontalLegendBox)
    .setPosition({ x: 0, y: 0 })
    .setOrigin(UIOrigins.LeftBottom)
    .setMargin({ top: 5, right: 5, bottom: 5, left: 5 })
// Add SpiderChart to LegendBox
legend.add(chart)

// Enable AutoCursor auto-fill.
chart.setAutoCursor(cursor => (cursor)
    .setResultTableAutoTextStyle(true)
)
