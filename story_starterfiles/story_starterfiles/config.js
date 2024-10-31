var config = {
    style: 'mapbox://styles/ltornari/cm1tjiq5n006501qn50bw7xxw',
    accessToken: 'pk.eyJ1IjoibHRvcm5hcmkiLCJhIjoiY20xdGkxZ3J2MDJrcjJyb2JrbDZmNDFuMiJ9.kLvs70_baAbqWlz268EnIA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Risk',
    subtitle: 'Public Housing and Flood Risks in NYC',
    byline: 'By Louisa Tornari',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Sandy And Its Effects On Housing In NYC',
            //image: 'images/source.png',
            description: '<p>In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents <a href = "https://www1.nyc.gov/site/nycha/about/press/pr-2012/nycha-has-restored-power-to-buildings-affected-by-hurricane-sandy.page">without power for days or even weeks]</a>. New York City Housing Authority public housing developments were affected. <a href="https://furmancenter.org/files/publications/SandysEffectsOnHousingInNYC.pdf">24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected</a>.</p> <p>With rising sea levels from climate change and the <a href="https://www.nytimes.com/2017/04/18/magazine/when-rising-seas-transform-risk-into-certainty.html">promise</a> of more flooding, which areas and <i>who</i> will likely be most affected? How is affordable housing construction responding to this? </p>',
            location: {
                center: [-73.99128, 40.74036],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'https://img.atlasobscura.com/dRh_-P2HEbzrlwb8JU2hEMUz9iBfdEZrQBxDWErJ4SA/rt:fit/w:1200/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9jNGI1/ZGJiMmFkMjAwY2E2/Njlfbm1zZndVWjFF/eUE1Skg3bW9lUlRm/SC1FVE12Mkp0ZkMz/QUlNajNId2Flcy5q/cGVn.jpg',
            description: 'Red Hook Houses suffered from Hurricane Sandy in 2012, which destroyed roofs, the senior center, electrical systems. Power was not restored for weeks.',
            location: {
                center: [-74.00482, 40.67495],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
