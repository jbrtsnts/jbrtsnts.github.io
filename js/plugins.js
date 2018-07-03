// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert',
        'clear',
        'count',
        'debug',
        'dir',
        'dirxml',
        'error',
        'exception',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'markTimeline',
        'profile',
        'profileEnd',
        'table',
        'time',
        'timeEnd',
        'timeline',
        'timelineEnd',
        'timeStamp',
        'trace',
        'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

// Place any jQuery/helper plugins in here.
(function() {
    // Smooth Scrolling
    $('body').easeScroll();

    // BigText
    $('[big-text]').bigtext({ maxfontsize: 215 });

    // Feedback Slider
    $('.feedback-slider').slick({
        appendArrows: $('.feedback-slider-action'),
        nextArrow:
            '<span class="btn-next"><i class="fas fa-caret-right fa-2x"></i></span>',
        prevArrow:
            '<span class="btn-next"><i class="fas fa-caret-left fa-2x"></i></span>'
    });

    function contentTemplate({ title, position, location }) {
        return `
            <dl class="timeline-item">
                <dt>${title}</dt>
                <dd>${position}, ${location}</dd>
            </dl>
        `;
    }

    // create visualization
    const container = document.getElementById('experienceBlock');

    // create a data set with groups
    const dataset = new vis.DataSet([
        {
            content: contentTemplate({
                title: 'Maverick Heroes Inc.',
                position: 'Web Developer',
                location: 'Mandaluyong, Philippines'
            }),
            start: '2015-03-16',
            title: '2015-03-16 to 2015-08-21'
        },
        {
            content: contentTemplate({
                title: 'Hyper6 S.A.',
                position: 'UI Developer',
                location: 'Remote'
            }),
            start: '2016-10-10',
            title: '2016-10-10 to 2018-01-26'
        },
        {
            content: contentTemplate({
                title: 'Transcosmos Asia Philippines Inc.',
                position: 'Front-end Developer',
                location: 'Pasig, Philippines'
            }),
            start: '2015-09-01',
            title: '2015-09-01 to 2018-01-12'
        },
        {
            content: contentTemplate({
                title: 'Vaimo Sweden',
                position: 'Front-end Developer (Magento Training)',
                location: 'Stockholm, Sweden'
            }),
            start: '2016-02-06',
            title: '2016-02-06 to 2016-04-10'
        },
        {
            content: contentTemplate({
                title: 'Flipmind Ltd.',
                position: 'Front-end Developer',
                location: 'Auckland, New Zealand'
            }),
            start: '2018-02-07',
            title: '2018-02-07 to Present'
        }
    ]);

    const options = {
        moveable: false,
        zoomable: false,
        align: 'left',
        showMinorLabels: false,
        margin: {
            axis: 50,
            item: {
                horizontal: 40,
                vertical: 50
            }
        },
        start: '2015-03-16',
        end: '2018-12-07',
        min: '2015-03-16',
        max: '2018-12-07'
    };

    const timeline = new vis.Timeline(container, dataset, options);

    var scene = $('.title-parralax');
    for (var i = scene.length - 1; i >= 0; i--) {
        var parallaxInstance = new Parallax(scene[i]);
    }
})();
