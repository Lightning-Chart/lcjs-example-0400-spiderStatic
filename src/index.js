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
        theme: (() => {
    const t = Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    const smallView = window.devicePixelRatio >= 2
    if (!window.__lcjsDebugOverlay) {
        window.__lcjsDebugOverlay = document.createElement('div')
        window.__lcjsDebugOverlay.style.cssText = 'position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);color:#fff;padding:4px 8px;z-index:99999;font:12px monospace;pointer-events:none'
        if (document.body) document.body.appendChild(window.__lcjsDebugOverlay)
        setInterval(() => {
            if (!window.__lcjsDebugOverlay.parentNode && document.body) document.body.appendChild(window.__lcjsDebugOverlay)
            window.__lcjsDebugOverlay.textContent = window.innerWidth + 'x' + window.innerHeight + ' dpr=' + window.devicePixelRatio + ' small=' + (window.devicePixelRatio >= 2)
        }, 500)
    }
    return t && smallView ? lcjs.scaleTheme(t, 0.5) : t
})(),
textRenderer: window.devicePixelRatio >= 2 ? lcjs.htmlTextRenderer : undefined,
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
