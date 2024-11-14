var config = {
    style: 'mapbox://styles/ltornari/cm1tjiq5n006501qn50bw7xxw',
    accessToken: 'pk.eyJ1IjoibHRvcm5hcmkiLCJhIjoiY20xdGkxZ3J2MDJrcjJyb2JrbDZmNDFuMiJ9.kLvs70_baAbqWlz268EnIA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Risk',
    subtitle: 'Public Housing and Flood Risks in NYC',
    byline: 'By Louisa Tornari',
    para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mauris eget erat ornare luctus. Quisque id dapibus turpis, sed dignissim diam. Suspendisse malesuada venenatis enim, in interdum erat vulputate non. Maecenas eget urna vitae ligula eleifend tempor. Aenean nec quam vitae elit dictum placerat. Mauris placerat sapien vitae mauris rhoncus pulvinar. Sed pretium et purus sed condimentum. Donec efficitur enim quis ex vulputate, vitae consequat purus facilisis. Mauris pulvinar nisi erat, quis pellentesque tortor lobortis sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras aliquet nisl non mi efficitur ullamcorper. Aliquam dignissim justo vitae laoreet commodo. Quisque lobortis lorem ut volutpat blandit. Aenean laoreet pretium magna eu laoreet. Aenean tempus sodales dui, eget vehicula lorem dignissim et.",
    para2:"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a eros quis dui dignissim scelerisque. Duis eu orci nec quam tincidunt fermentum et quis mi. Fusce sit amet sodales mauris, vitae consectetur justo. Donec scelerisque sem sapien, vitae egestas quam pretium et. Suspendisse pharetra luctus fringilla. Nunc dignissim lacus eros, at varius mauris sagittis quis. Sed nec sapien a nulla finibus rhoncus et nec massa. Nulla venenatis condimentum tortor, ac sollicitudin augue fermentum quis.",
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
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 14.84,
                pitch: 48,
                bearing: 142.44,}
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
        },

    ]
};
