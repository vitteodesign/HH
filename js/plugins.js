try {
mdLibraries.ItemAdd({
    id: 'gsap.js',
    js: ['https://static.divhunt.com/assets/library/Gsap.js', 'https://static.divhunt.com/assets/library/GsapScrollTrigger.js'],
});

transform.OnReady(function() {
    transform.ItemAdd({
        id: 'gsap',
        name: 'GSAP Animation',
        options: {
        
            targetType: {
                'label': 'Target',
                'type': 'SELECT',
                'values': [
                    { value: 'self', title: 'Self' },
                    { value: 'tag', title: 'Tag' },
                    { value: 'class', title: 'Class' },
                ],
                'value': 'self',
            },


            target: { 'label': 'Select tag', 'type': 'TAG', 'value': '', 
                condition: (option, values) => {
                    return values.targetType === "tag"
                }
            },

            cls: { 'label': 'Class', 'type': 'INPUT', 'value': '', 
                condition: (option, values) => {
                    return values.targetType === "class"
                }
            },

            event: {
                'label': 'Event',
                'type': 'SELECT',
                'values': [
                    { value: 'pageLoad', title: 'On Page Load'},
                    { value: 'scroll', title: 'Scroll into View' },
                ],
                'value': 'pageLoad'
            },

 
            pin: {'label': 'Pin', 'type': 'TOGGLE', 'value': false, 
                condition: (option, values) => {
                    return values.scrub 
                }
            },

            markers: {'label': 'View Markers', 'type': 'TOGGLE', 'value': false, 
                condition: (option, values) => {
                    return values.event === "scroll"
                }
            },

            scrub: {'label': 'Follow Scroll', 'type': 'TOGGLE', 'value': false},

            duration: { 'label': 'Duration (ms)', 'type': 'INPUT', 'value': '1000', 
                condition: (option, values) => {
                    return !values.scrub
                }
            },

            delay: { 'label': 'delay (ms)', 'type': 'INPUT', 'value': '0', 
                condition: (option, values) => {
                    return !values.scrub
                }
            },

            reverse: {'label': 'Reverse', 'type': 'TOGGLE', 'value': false, 
                condition: (option, values) => {
                    return !values.scrub && values.event === "scroll"
                }
            },

            easing: {
                'label': 'Easing',
                'type': 'SELECT',
                'values': [
                    { value: 'linear', title: 'Linear' },
                    { value: 'power1.easeInOut', title: 'Power1.easeInOut' },
                    { value: 'power2.easeInOut', title: 'Power2.easeInOut' },
                    { value: 'power3.easeInOut', title: 'Power3.easeInOut' },
                    { value: 'power4.easeInOut', title: 'Power4.easeInOut' },
                    { value: 'power5.easeInOut', title: 'Power5.easeInOut' },
                    { value: 'quad.easeInOut', title: 'Quad.easeInOut' },
                    { value: 'cubic.easeInOut', title: 'Cubic.easeInOut' },
                    { value: 'quart.easeInOut', title: 'Quart.easeInOut' },
                    { value: 'quint.easeInOut', title: 'Quint.easeInOut' },
                    { value: 'sine.easeInOut', title: 'Sine.easeInOut' },
                    { value: 'expo.easeInOut', title: 'Expo.easeInOut' },
                    { value: 'circ.easeInOut', title: 'Circ.easeInOut' },
                    { value: 'back.easeInOut', title: 'Back.easeInOut' },
                    { value: 'elastic.easeInOut', title: 'Elastic.easeInOut' },
                    { value: 'bounce.easeInOut', title: 'Bounce.easeInOut' },
                ], 
                condition: (option, values) => {
                    return !values.scrub
                },
                'value': 'linear',
            },

            resp1: {
                label: 'Desktop',
                type: 'TOGGLE', 
                value: true,
                group: 'Devices'
            },

            resp2: {
                label: 'Tablet',
                type: 'TOGGLE', 
                value: true,
                group: 'Devices'
            },

            resp3: {
                label: 'Landscape Mobile',
                type: 'TOGGLE', 
                value: true,
                group: 'Devices'
            },

            resp4: {
                label: 'Mobile',
                type: 'TOGGLE', 
                value: true,
                group: 'Devices'
            },

            startEl: {
                'label': 'Element position',
                'type': 'SELECT',
                'values': [
                    { value: 'top', title: 'Top'},
                    { value: 'center', title: 'Center' },
                    { value: 'bottom', title: 'Bottom' },
                    { value: 'custom', title: 'Custom' },
                ],
                'value': 'top',
                'group': 'Start when',
                condition: (option, values) => values.event === 'scroll'
            },

            startElCustom: { 'label': 'Element Position', 'type': 'INPUT', 'units':['%', 'px', 'vh'], 'value': '', 
                condition: (option, values) => {
                    return values.startEl === "custom" && values.event === 'scroll'
                },
                'group': 'Start when'
            },

            startViewPort: {
                'label': 'Viewport position',
                'type': 'SELECT',
                'values': [
                    { value: 'top', title: 'Top'},
                    { value: 'center', title: 'Center' },
                    { value: 'bottom', title: 'Bottom' },
                    { value: 'custom', title: 'Custom' },
                ],
                'value': 'bottom',
                'group': 'Start when',
                condition: (option, values) => values.event === 'scroll'
            },

            startViewPortCustom: { 'label': 'Viewport Position', 'type': 'INPUT', 'units':['%', 'px', 'vh'], 'value': '', 
                condition: (option, values) => {
                    return values.startViewPort === "custom" && values.event === 'scroll' 
                },
                'group': 'Start when'
            },


            endEl: {
                'label': 'Element position',
                'type': 'SELECT',
                'values': [
                    { value: 'top', title: 'Top'},
                    { value: 'center', title: 'Center' },
                    { value: 'bottom', title: 'Bottom' },
                    { value: 'custom', title: 'Custom' },
                ],
                'value': 'top',
                'group': 'End when',
                condition: (option, values) => values.event === 'scroll' && (values.reverse || values.scrub)
            },

            endElCustom: { 'label': 'Element Position', 'type': 'INPUT', 'units':['%', 'px', 'vh'], 'value': '', 
                condition: (option, values) => {
                    return values.endEl === "custom" && (values.reverse || values.scrub)
                },
                'group': 'End when'
            },

            endViewPort: {
                'label': 'Viewport position',
                'type': 'SELECT',
                'values': [
                    { value: 'top', title: 'Top'},
                    { value: 'center', title: 'Center' },
                    { value: 'bottom', title: 'Bottom' },
                    { value: 'custom', title: 'Custom' },
                ],
                'value': 'top',
                'group': 'End when',
                condition: (option, values) => values.event === 'scroll' && (values.reverse || values.scrub)
            },

            endViewPortCustom: { 'label': 'Viewport Position', 'type': 'INPUT', 'units':['%', 'px', 'vh'], 'value': '', 
                condition: (option, values) => {
                    return values.endViewPort === "custom" && values.event === 'scroll' && (values.reverse || values.scrub)
                },
                'group': 'End when'
            },


            fromTo: {
                label: 'Animate',
                type: 'OPTIONS', 
                options: [
                    {title: 'From', value: 'from'},
                    {title: 'To', value: 'to'},
                ],
                value: 'from',
                group: 'Animation'
            },  

            from_opacity: { label: 'Opacity', type: 'INPUT', units: ['%'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_opacity: { label: 'Opacity', type: 'INPUT', units: ['%'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_x: { label: 'X Position', type: 'INPUT', units: ['px', '%'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_x: { label: 'X Position', type: 'INPUT', units: ['px', '%'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_y: { label: 'Y Position', type: 'INPUT', units: ['px', '%'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_y: { label: 'Y Position', type: 'INPUT', units: ['px', '%'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_top: { label: 'Top', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw', '%'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_top: { label: 'Top', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw', '%'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_left: { label: 'Left', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw', '%'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_left: { label: 'Left', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw', '%'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_right: { label: 'Right', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw', '%'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_right: { label: 'Right', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw', '%'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_bottom: { label: 'Bottom', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw', '%'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_bottom: { label: 'Bottom', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw', '%'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_color: { label: 'Text Color', placeholder: 'Select color', type: 'COLOR', value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_color: { label: 'Text Color', type: 'COLOR', placeholder: 'Select color', value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_bg_color: { label: 'Background Color', type: 'COLOR', value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_bg_color: { label: 'Background Color', type: 'COLOR', value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_scale: { label: 'Scale', type: 'INPUT', value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_scale: { label: 'Scale', type: 'INPUT', value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_rotation: { label: 'Rotation', type: 'INPUT', units: ['deg'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_rotation: { label: 'Rotation', type: 'INPUT', units: ['deg'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_rotationX: { label: 'Rotation X', type: 'INPUT', units: ['deg'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_rotationX: { label: 'Rotation X', type: 'INPUT', units: ['deg'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_rotationY: { label: 'Rotation Y', type: 'INPUT', units: ['deg'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_rotationY: { label: 'Rotation Y', type: 'INPUT', units: ['deg'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_skew_x: { label: 'Skew X', type: 'INPUT', units: ['deg'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_skew_x: { label: 'Skew X', type: 'INPUT', units: ['deg'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_skew_y: { label: 'Skew Y', type: 'INPUT', units: ['deg'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_skew_y: { label: 'Skew Y', type: 'INPUT', units: ['deg'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_width: { label: 'Width', type: 'INPUT', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_width: { label: 'Width', type: 'INPUT', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_height: { label: 'Height', type: 'INPUT', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_height: { label: 'Height', type: 'INPUT', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_border_width: { label: 'Border Width', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_border_width: { label: 'Border Width', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_border_radius: { label: 'Border Radius', type: 'INPUT', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_border_radius: { label: 'Border Radius', type: 'INPUT', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_blur: { label: 'Blur', type: 'INPUT', units: ['px'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_blur: { label: 'Blur', type: 'INPUT', units: ['px'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_brightness: { label: 'Brightness', type: 'INPUT', units: ['%'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_brightness: { label: 'Brightness', type: 'INPUT', units: ['%'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_contrast: { label: 'Contrast', type: 'INPUT', units: ['%'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_contrast: { label: 'Contrast', type: 'INPUT', units: ['%'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_grayscale: { label: 'Grayscale', type: 'INPUT', units: ['%'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_grayscale: { label: 'Grayscale', type: 'INPUT', units: ['%'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_font_size: { label: 'Font Size', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_font_size: { label: 'Font Size', type: 'INPUT', units: ['px', 'em', 'rem', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_line_height: { label: 'Line Height', type: 'INPUT', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_line_height: { label: 'Line Height', type: 'INPUT', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },

            from_letter_spacing: { label: 'Letter Spacing', type: 'INPUT', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'from', group: 'Animation' },
            to_letter_spacing: { label: 'Letter Spacing', type: 'INPUT', units: ['px', 'em', 'rem', '%', 'vh', 'vw'], value: '', condition: (option, values) => values.fromTo === 'to', group: 'Animation' },
        },

        code: function(transform, tag, target, options, data, index) {
            

            const filterProperties = ['from_brightness', 'to_brightness', 'from_contrast', 'to_contrast', 'from_grayscale', 'to_grayscale', 'from_blur', 'to_blur'];

            this.init = () => {

                if (data.mode === "builder") {return;}

                if (!options.resp1 && window.innerWidth > 991) { return; }
                if (!options.resp2 && window.innerWidth <= 991 && window.innerWidth > 767 ) { return; }
                if (!options.resp3 && window.innerWidth <= 767 && window.innerWidth > 480 ) { return; }
                if (!options.resp4 && window.innerWidth <= 480 ) { return; }

                mdLibraries.Fn('load', ['gsap.js'], () => {
                                    
                    let animEl = target;
                    if ( options.targetType === "tag" ) {
                        console.log("target", options.target);
                        console.log("target", options.target.Get('id'));
                        animEl = $(`.t${options.target.Get('id')}`);
                    } else if ( options.targetType === "class" ) {
                        animEl = $(`.${options.cls}`);
                    }
          
                    if (animEl.length === 0) {
                        console.warn("Animation element not found.");
                        return;
                    }

                    gsap.registerPlugin(ScrollTrigger);

                    const toValues = this.to(); 

                    if (options.event === 'pageLoad') {
                        gsap.fromTo(
                            animEl,
                            this.from(), {
                                duration: options.duration / 1000,
                                delay: options.delay / 1000,
                                ease: options.easing, 
                                ...toValues,
                            }
                        );
                    } else {
                        gsap.fromTo(
                            animEl,
                            this.from(), {
                                scrollTrigger: {
                                    markers: options.markers,
                                    trigger: target,
                                    start: this.start(),
                                    end: this.end(),
                                    scrub: options.scrub,
                                    pin: options.pin,
                                    toggleActions: options.reverse ? "play reverse play reverse" : "play none none none"
                                },
                                duration: options.duration / 1000,
                                delay: options.delay / 1000,
                                ease: options.easing, 
                                ...toValues,
                            }
                        );
                    }

                    document.addEventListener('DOMContentLoaded', (event) => {
                        ScrollTrigger.refresh();
                    });

                });
            }

            this.start = () => {
                const startEl = options.startEl === 'custom' ? options.startElCustom : options.startEl;
                const startView = options.startViewPort === 'custom' ? options.startViewPortCustom : options.startViewPort;
                return startEl + " " + startView;
            }

            this.end = () => {
                const endEl = options.endEl === 'custom' ? options.endElCustom : options.endEl;
                const endtView = options.endViewPort === 'custom' ? options.endViewPortCustom : options.endViewPort;
                return endEl + " " + endtView;
            }


            this.from = () => {
                const propertyMap = {
                    from_opacity: 'opacity',
                    from_x: 'x',
                    from_y: 'y',
                    from_top: 'top',
                    from_bottom: 'bottom',
                    from_right: 'right',
                    from_left: 'left',
                    from_scale: 'scale',
                    from_rotation: 'rotation',
                    from_rotationX: 'rotationX',
                    from_rotationY: 'rotationY',
                    from_skew_x: 'skewX',
                    from_skew_y: 'skewY',
                    from_width: 'width',
                    from_height: 'height',
                    from_border_width: 'borderWidth',
                    from_border_radius: 'borderRadius',
                    from_brightness: 'brightness',
                    from_contrast: 'contrast',
                    from_font_size: 'fontSize',
                    from_line_height: 'lineHeight',
                    from_letter_spacing: 'letterSpacing',
                    from_color: 'color',
                    from_bg_color: 'backgroundColor',
                    from_grayscale: 'filter',
                    from_blur: 'blur',
                };

                const values = {};

                for (const option in propertyMap) {
                    if (options[option]) {
                        if ( filterProperties.includes(option) ) {

                            values.filter = '';

                            if (options.from_brightness) {
                                values.filter += ` brightness(${options.from_brightness})`;
                            }
                            if (options.from_contrast) {
                                values.filter += ` contrast(${options.from_contrast})`;
                            }
                            if (options.from_grayscale) {
                                values.filter += ` grayscale(${options.from_grayscale})`;
                            }
                            if (options.from_blur) {
                                values.filter += ` blur(${options.from_blur})`;
                            }
                            values.filter = values.filter.trim();

                        } else {
                            values[propertyMap[option]] = options[option];
                        }
                    }
                }

                return values;
            };


            this.to = () => {
                const propertyMap = {
                    to_opacity: 'opacity',
                    to_x: 'x',
                    to_y: 'y',
                    to_top: 'top',
                    to_bottom: 'bottom',
                    to_right: 'right',
                    to_left: 'left',
                    to_scale: 'scale',
                    to_rotation: 'rotation',
                    to_rotationX: 'rotationX',
                    to_rotationY: 'rotationY',
                    to_skew_x: 'skewX',
                    to_skew_y: 'skewY',
                    to_width: 'width',
                    to_height: 'height',
                    to_border_width: 'borderWidth',
                    to_border_radius: 'borderRadius',
                    to_brightness: 'brightness',
                    to_contrast: 'contrast',
                    to_font_size: 'fontSize',
                    to_line_height: 'lineHeight',
                    to_letter_spacing: 'letterSpacing',
                    to_color: 'color',
                    to_bg_color: 'backgroundColor',
                    to_grayscale: 'filter',
                    to_blur: 'blur',
                };

                const values = {};

                for (const option in propertyMap) {
                    if (options[option]) {
                   
                        if (filterProperties.includes(option)) {

                            values.filter = '';

                            if (options.to_brightness) {
                                values.filter += ` brightness(${options.to_brightness})`;
                            }
                            if (options.to_contrast) {
                                values.filter += ` contrast(${options.to_contrast})`;
                            }
                            if (options.to_grayscale) {
                                values.filter += ` grayscale(${options.to_grayscale})`;
                            }
                            if (options.to_blur) {
                                values.filter += ` blur(${options.to_blur})`;
                            }
                            values.filter = values.filter.trim();

                        } else {
                            values[propertyMap[option]] = options[option];
                        }
                    }
                }

                return values;
            };

            return this.init();
        },
    });
});

} catch (error) { console.log(error); }

try {
transform.OnReady(function()
{
    let callbacks = [];

    $(window).on('scroll', function(event) 
    {
        callbacks.forEach((callback) =>
        {
            callback(event);
        });
    });

    $(document).on('dh/pages/unload', (event, page) =>
    {
        callbacks = [];
    });

    transform.ItemAdd({
        id: 'show-on-scroll',
        name: 'Show on Scroll',
        options: {
            a: {'label': 'Value', 'type': 'INPUT', 'units': 'px,%' ,'value': '0px'},
        },
        code: function(transform, tag, target, options, data, index) 
        {
            if(data.mode !== 'website')
            {
                return;
            }

            target.addClass('dh-hidden');

            callbacks.push((event) =>
            {
                if(options.a.includes("px"))
                {
                    let top = options.a.replace("px","");
                    if(window.scrollY >= top && target.hasClass('dh-hidden'))
                    {
                        target.removeClass('dh-hidden');
                        target.removeAttr('hidden');
                    }

                    if(window.scrollY < top && !target.hasClass('dh-hidden'))
                    {
                        target.addClass('dh-hidden');
                        target.attr('hidden', 'hidden');
                    }

                } else if (options.a.includes("%")) {

                    let top = options.a.replace("%","");
                    let scrollPerc = $(window).scrollTop() / (($(document).height() - $(window).height())) * 100;

                    if(scrollPerc >= top && target.hasClass('dh-hidden'))
                    {
                        target.removeClass('dh-hidden');
                        target.removeAttr('hidden');
                    }

                    if(scrollPerc < top && !target.hasClass('dh-hidden'))
                    {
                        target.addClass('dh-hidden');
                        target.attr('hidden', 'hidden');
                    }

                }
                
            });
        }
    });
});
} catch (error) { console.log(error); }

try {
var plugin_gallery_box_swiper;

mdLibraries.ItemAdd({
    id: 'swiper',
    js: ['https://static.divhunt.com/assets/library/Swiper.js'],
    css: ['https://static.divhunt.com/assets/library/Swiper.css'],
});

transform.OnReady(function()
{
    let lightboxes = {};

    transform.ItemAdd({
        id: 'gallery-box',
        name: 'Gallery Box',
        options: {
            a: {'label': 'Cover', 'type': 'FILE', 'value': ''},
            b: {'label': 'Youtube Video', 'type': 'INPUT', 'value': ''},
            bb: {'label': 'Vimeo Video', 'type': 'INPUT', 'value': ''},
            c: {'label': 'Group', 'type': 'INPUT', 'value': ''},
            d: {'label': 'Caption', 'type': 'INPUT', 'value': ''},
        },
        code: function(transform, tag, target, options, data, index)
        {
        

            let font = $(target).css('font-family');

            if ( !$("#gallery-box_font-family").length ) {
                const fontCSS = document.createElement('style');
                fontCSS.setAttribute('id', 'gallery-box_font-family');
                fontCSS.textContent = `
                    #plugins_gallery-box_popup .gallery-box_caption-wrap { font-family: ${font}; }
                `;
                document.body.appendChild(fontCSS);
            }

            this.init = () => {
                mdLibraries.Fn('load', ['swiper'], () =>
                {
                    this.pushToObject();
                    if(data.mode === 'website') this.click(); 
                });
            }

            this.pushToObject = () => {

                if(!options.c){
                    options.c = 'alone';
                }

                if(!lightboxes[options.c]){
                    lightboxes[options.c] = [];
                }
            
                let ind = Object.keys(lightboxes[options.c]).length;
                $(target).attr("gallery-box-id", ind);


                lightboxes[options.c].push({
                    'image': options.a,
                    'video': options.b,
                    'vimeo': options.bb,
                    'caption': options.d,
                    ind,
                });
            }

            this.click = () => {

                if(!options.c){
                    options.c = 'alone';
                }

                let transform = this;

                $(target).on("click", function(){
                    let items = lightboxes[options.c];
                    let itemIndex =  parseInt ( $(this).attr("gallery-box-id") );
                    transform.openPopup(items, itemIndex);
                });
            }

            this.generateHtml = (group, itemIndex) => {     

                let item = group[itemIndex];
                let slidesHtml = '';
                let transform = this;

                let sliderMedia = '';

                if(options.c === 'alone'){
                    
                    if(!item.video && !item.image && !item.vimeo) return;

                    let media = `<img src = "${item['image']}">`;

                    if(item.image){
                        let videoExtensions = ["mp4", "avi", "mov", "mkv"];
                        let videoRegex = new RegExp(videoExtensions.join("|"), "i");
                        if((item['image']).match(videoRegex)) {
                            media = `<video src = "${item['image']}"></video>`;
                        }
                    }

                    if(item.video){
                        let videoId = transform.getVideoID(item['video']);
                        let embed_url = `https://www.youtube.com/embed/${videoId}`
                        media = `<iframe src = "${embed_url}">`;
                    }

                    if(item.vimeo){
                        let videoId = transform.vimeoEmbed(item['vimeo']);
                        media = '<iframe src="https://player.vimeo.com/video/' + videoId + '"></iframe>';
                    }

                    let caption = ``;

                    if(item.caption){
                        caption = `
                            <div class = "gallery-box_caption-wrap">
                                <p>${item['caption']}</p>
                            </div>
                        `;
                    }

                    slidesHtml +=`
                        <div class="swiper-slide">
                            <div class="plugins_gallery-box_media">
                                ${media}
                                ${caption}
                            </div>
                        </div>`;

                } else{
                    
                    $.each(group, function(i, item){

                        if(!item.video && !item.image && !item.vimeo) return;

                        let media = `<img src="${item['image']}">`;
                      
                        if(item.image){
                            let videoExtensions = ["mp4", "avi", "mov", "mkv"];
                            let videoRegex = new RegExp(videoExtensions.join("|"), "i");
                            if((item['image']).match(videoRegex)) {
                                media = `<iframe src = "${item['image']}"></iframe>`;

                                sliderMedia += `<div class="gallery-box_video-placeholder">
                                    <img src="https://global.divhunt.com/567e875b1b65f257fce9adffa4153661_927.svg">
                                </div>`;
                            }else{
                                sliderMedia += media;
                            } 
                        }

                        if(item.video){
                            let videoId = transform.getVideoID(item['video']);
                            let embed_url = `https://www.youtube.com/embed/${videoId}`
                            media = `<iframe src="${embed_url}"></iframe>`;

                            sliderMedia += `<div class="gallery-box_video-placeholder">
                                <img src="https://global.divhunt.com/567e875b1b65f257fce9adffa4153661_927.svg">
                            </div>`;
                        }

                        if(item.vimeo){
                            let videoId = transform.vimeoEmbed(item['vimeo']);
                            media = '<iframe src="https://player.vimeo.com/video/' + videoId + '"></iframe>';

                            sliderMedia += `<div class="gallery-box_video-placeholder">
                                <img src="https://global.divhunt.com/567e875b1b65f257fce9adffa4153661_927.svg">
                            </div>`;
                        }

                        let caption = ``;

                        if(item.caption){
                            caption = `
                                <div class="gallery-box_caption-wrap">
                                    <p>${item['caption']}</p>
                                </div>
                            `;
                        }

                        if(lightboxes[options.c].length <= 1) sliderMedia = '';

                        slidesHtml +=
                        `<div class="swiper-slide">
                            <div class="plugins_gallery-box_media">
                                ${media}
                                ${caption}
                            </div>
                        </div>`;
                    });
                }

                if(!slidesHtml.length) return '';

                let html = `
                    <div id="plugins_gallery-box_popup">
                        <div class="swiper plugins_gallery-box_swiper">
                            <div class="swiper-wrapper">
                                ${slidesHtml}
                            </div>

                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>

                        <div class="gallery-box_media-slider">
                            ${sliderMedia}
                        </div>
                        
                    </div>
                `;

                return html;
            }


            this.openPopup = (items, itemIndex) => {

                let html = this.generateHtml(items, itemIndex);
                if(!html.length) return;

                mdModal.ItemAdd({
                    id: 'plugin_gallery-box_popup',
                    overlay: {opacity: 0.6, closeable: true},
                    align: {x: 'center', y: 'center'},
                    element: $('#dh-modal'),
                    html: function()
                    {
                        return `<div style="width:100vw; max-width:1200px"> ${html} </div>`;
                    }
                });

                this.loadSwiper(itemIndex);
            }

            this.loadSwiper = (itemIndex) => {

                setTimeout(() => {
                    $('#plugins_gallery-box_popup .gallery-box_media-slider > *').eq(itemIndex).addClass('dh-active');
                }, 10);

                plugin_gallery_box_swiper = new Swiper(".plugins_gallery-box_swiper", {
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    on: {
                        slideChange: function () {
                            const index_currentSlide = plugin_gallery_box_swiper?.activeIndex;
                            $('#plugins_gallery-box_popup .gallery-box_media-slider > *').removeClass('dh-active');
                            $('#plugins_gallery-box_popup .gallery-box_media-slider > *').eq(index_currentSlide).addClass('dh-active');
                        },
                    },
                    initialSlide: itemIndex,
                });

            }

            this.getVideoID = (src) => {
                if (!src) {return "";}
                var videoID = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|user\/[^\/]+\/[^\/]+\/))([^\?&\/\s]{11})/)[1];
                return videoID;
            }

            this.vimeoEmbed = (src) => {
                let regExp = /^.*vimeo.com\/(?:video\/|)(\d+)(?:$|\/)/;
                let match = src.match(regExp);
                if (match) {
                    return match[1];
                }
            }


            return this;
        },
    });
});

$(document).on('click','#plugins_gallery-box_popup .gallery-box_media-slider > *',function(){
    let index = $(this).index();
    plugin_gallery_box_swiper.slideTo(index);
});
} catch (error) { console.log(error); }

try {
mdLibraries.ItemAdd({
    id: 'marquee',
    js: ['https://static.divhunt.com/assets/library/Marquee.js' ],
});

transform.OnReady(function()
{
    transform.ItemAdd({
        id: 'marquee',
        name: 'Marquee Effect',
        options: {
            a: {'label': 'Duration', 'type': 'INPUT', 'value': '10s', 'units': 's,ms'},
            b: {'label': 'Gap', 'type': 'INPUT', 'value': '20px', 'units': 'px,em'},
            b2: {'label': 'Gap (Mobile)', 'type': 'INPUT', 'value': '', 'units': 'px,em'},
            c: {'label': 'Reverse Direction', 'type': 'TOGGLE', 'value': false},
            d: {'label': 'Pause', 'type': 'TOGGLE', 'value': false},
            e: {'label': 'Pause on hover', 'type': 'TOGGLE', 'value': false},
        },
        code: function(transform, tag, target, options, data, index)
        {  

            this.init = () => {


                let tagId = tag.Get('id');
                let cls = `.t${tagId}`;
                let marquee_id = `marquee-${tagId}`;
                let duration = options.a;
                $("#"+marquee_id).remove();

                if (options.d) {
                    $(target).css("height", "100%");
                    return;
                }

                let contents = $(target).children();
                $(target).empty().append($('<div>').append(contents));


                if (!duration) {
                    duration = '10';
                }

                let direction = "normal";
                if (options.c) {
                    direction = "reverse";
                }

                if(!duration?.includes("s") && !duration?.includes("ms")) {
                    duration = duration+"s";
                }

                const timesToDuplicate = 5; 

                let increasedDuration = duration.endsWith('ms') ?
                    `${parseInt(duration) * timesToDuplicate}ms` :
                    `${parseInt(duration) * timesToDuplicate}s`;

                let gap = options.b;
               
                if(!gap?.includes("px") && !gap?.includes("em")) {
                    gap = gap+"px";
                }   

                let gapMobile = options.b2 ? options.b2 : gap;
                if(!gapMobile?.includes("px") && !gapMobile?.includes("em")) {
                    gapMobile = gapMobile+"px";
                }


                let style = `
                    <style id="${marquee_id}">
                        ${cls} {
                            overflow: hidden;
                            position: relative;
                            width: 100%;
                        }

                        ${cls} > div {
                            display: flex;
                            position: absolute;
                            gap:${gap};
                            width: max-content;
                        }

                        @media (max-width: 480px) { 
                            ${cls} > div {
                                gap:${gapMobile};
                            }
                        }

                        ${cls} > div {
                            animation: plugin_marquee ${increasedDuration} linear infinite;
                            animation-direction: ${direction};
                            animation-play-state: running;
                        }

                        ${cls}:hover > div {
                            animation-play-state: ${options.e ? 'paused' : 'running'};
                        }

                    </style>
                `;


                /* DUPLICATE ITEMS & PLAY ANIMATION */
                $(target).find(">div").append(function() { return $(this).find(">*").clone(); });
                $(target).find(">div").append(function() { return $(this).find(">*").clone(); });

                $("style#"+marquee_id).remove();
                $("body").append(style);
            }


            return this.init();
            
        },
    });
});
} catch (error) { console.log(error); }

try {
mdLibraries.ItemAdd({
    id: 'swiper',
    js: ['https://static.divhunt.com/assets/library/Swiper.js'],
    css: ['https://static.divhunt.com/assets/library/Swiper.css'],
});


transform.OnReady(function()
{
    this.effects =  [
        {value: 'default', title: 'Slide'},
        {value: 'fade', title: 'Fade'},
        {value: 'cube', title: 'Cube'},
        {value: 'flip', title: 'Flip'},
        {value: 'coverflow', title: 'Coverflow'},
        {value: 'creative', title: 'Creative'},
    ];

    this.pag =  [
        {value: 'bullets', title: 'Bullets'},
        {value: 'fraction', title: 'Numbers'},
        {value: 'progressbar', title: 'Progress Bar'}
    ];

    this.bullet_shapes =  [
        {value: 'circle', title: 'Circle'},
        {value: 'line', title: 'Line'},
        {value: 'square', title: 'Square'}
    ];

    this.bullet_positions =  [
        {value: 'center', title: 'Center'},
        {value: 'left', title: 'Left'},
        {value: 'right', title: 'Right'}
    ];

    this.direcitons =  [
        {value: 'horizontal', title: 'Horizontal'},
        {value: 'vertical', title: 'Vertical'}
    ];


    transform.ItemAdd({
        id: 'swiper',
        name: 'Swiper',
        bind: [
            'component.render',
        ],
        options: {
            
            a: {'label': 'Slides per View', 'type': 'INPUT', 'value': '1', 'placeholder': '1', condition: function(value, values){ return values.c === "default"; }},
            b: {'label': 'Space Between (px)', 'type': 'INPUT', 'value': 0, 'placeholder': '0', condition: function(value, values){ return values.c === "default"; }},
            c: {'label': 'Effect', 'type': 'SELECT', 'values': this.effects, 'value': 'default'},
            speed: {'label': 'Speed (ms)', 'type': 'INPUT', 'value': 300},
            d: {'label': 'Freemode', 'type': 'TOGGLE', 'value': false},
            e: {'label': 'Loop', 'type': 'TOGGLE', 'value': false},
            f: {'label': 'Centered', 'type': 'TOGGLE', 'value': false},
            g: {'label': 'Grab Cursor', 'type': 'TOGGLE', 'value': false},
            h: {'label': 'Initial Slide', 'type': 'INPUT', 'value': 1},
            i: {'label': 'Disable Drag', 'type': 'TOGGLE', 'value': false},
            j: {'label': 'Prevent Pointerdown', 'type': 'TOGGLE', 'value': true},
            k: {'label': 'Direction', 'type': 'SELECT', 'values': this.direcitons, 'value': 'horizontal'},

            ca: {'label': 'Keyboard Control', 'type': 'TOGGLE', 'value': false, 'group': "Controls"},
            cb: {'label': 'Mousewheel Control', 'type': 'TOGGLE', 'value': false, 'group': "Controls"},

            na: {'label': 'Next Class', 'type': 'INPUT', 'value': '', 'group': "Navigation (Arrows)"},
            nb: {'label': 'Previous Class', 'type': 'INPUT', 'value': '', 'group': "Navigation (Arrows)"},
            
            pa: {'label': 'Enable', 'type': 'TOGGLE', 'value': false, 'group': "Pagination"},
            pd: {'label': 'Type', 'type': 'SELECT', 'value': 'bullets', 'values': this.pag, 'group': "Pagination" , condition: function(value, values){ return values.pa; } },
            pb: {'label': 'Dynamic Bullets', 'type': 'TOGGLE', 'value': false, 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},
            pc: {'label': 'Clickable', 'type': 'TOGGLE', 'value': false, 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},

            cna: {'label': 'Enable', 'type': 'TOGGLE', 'value': false, 'group': "Custom Navigation"},
            cnb: {
                label: 'Navigation',
                type: 'TAG', 
                value: '',
                group: "Custom Navigation",
                condition: function(value, values){ return values.cna; }
            },

            bullet_shape: {'label': 'Shape', 'type': 'SELECT', 'value': 'circle', 'values': this.bullet_shapes, 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},
            bullet_color: {'label': 'Color', 'type': 'COLOR', 'value': 'rgba(0,0,0,0.2)', 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},
            bullet_acolor: {'label': 'Active Color', 'type': 'COLOR', 'value': '#007aff', 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},
            bullet_bgcolor: {'label': 'Background', 'type': 'COLOR', 'value': 'transparent', 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets" }},
            bullet_position: {'label': 'Position', 'type': 'SELECT', 'value': 'center', 'values': this.bullet_positions, 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},
            

            a1: {'label': 'Enable', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay"},
            aa: {'label': 'Speed (ms)', 'type': 'INPUT', 'value': '5000', 'group': "Autoplay" , condition: function(value, values){ return values.a1; }},
            ab: {'label': 'Disable on Interaction', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay", condition: function(value, values){ return values.a1; }},
            ac: {'label': 'Stop on Last Slide', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay", condition: function(value, values){ return values.a1; }},
            ad: {'label': 'Pause on Mouse Enter', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay", condition: function(value, values){ return values.a1; }},
            ae: {'label': 'Reverse Direction', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay", condition: function(value, values){ return values.a1; }},


            ra: {'label': 'Slides per View', 'type': 'INPUT', 'value': '', 'group': "Landscape Tablet", 'placeholder': ''},
            rb: {'label': 'Space Between (px)', 'type': 'INPUT', 'value': '', 'group': "Landscape Tablet", 'placeholder': ''},
            
            rc: {'label': 'Slides per View', 'type': 'INPUT', 'value': '', 'group': "Tablet", 'placeholder': ''},
            rd: {'label': 'Space Between (px)', 'type': 'INPUT', 'value': '', 'group': "Tablet", 'placeholder': ''},

            re: {'label': 'Slides per View', 'type': 'INPUT', 'value': '', 'group': "Landscape Mobile", 'placeholder': ''},
            rf: {'label': 'Space Between (px)', 'type': 'INPUT', 'value': '', 'group': "Landscape Mobile", 'placeholder': ''},

            rg: {'label': 'Slides per View', 'type': 'INPUT', 'value': '', 'group': "Mobile", 'placeholder': ''}, 
            rh: {'label': 'Space Between (px)', 'type': 'INPUT', 'value': '', 'group': "Mobile", 'placeholder': ''}, 

        },
        
        code: function(transform, tag, target, options, data, index)
        {

            let swiperInstance;

            this.init = () =>
            {
                mdLibraries.Fn('load', ['swiper'], () =>
                {
                 
                    target.addClass("swiper");
                    
                    /* Wrapper */
                    let wrapper = target.children().first();
                    $(wrapper).addClass("swiper-wrapper");

                    /* Slides */
                    $(wrapper).find(">*").addClass("swiper-slide");

                    /* Pagination (dots) */
                    let pagClass = "";
                    if ( options.pa) {
                        $(target).append("<div class='swiper-pagination'></div>");
                        pagClass = ".swiper-pagination";
                    }


                    /* In builder swiper doesnt know which resolution is used on canvas, because it is watcing window width, so we need change swiper defaults based on breakpoint */
                    const breakpoints = this.breakpoints(options);
                    let slidesPerView = options.a;
                    let spaceBetween = options.b;

        
                    if (data.mode === "builder") {
                        const currentRes = responsive.GetSave("active.pixels", 1920);
                        const result = this.correct_slides_per_view_builder(breakpoints, slidesPerView, spaceBetween, currentRes);
                        slidesPerView = result.slidesPerView;
                        spaceBetween = result.spaceBetween;
                        breakpoints[1201].slidesPerView = slidesPerView;
                        breakpoints[1201].spaceBetween = spaceBetween;
                    }
                    
                    if (!data.mode) {
                        data.mode = "website";
                    }


                    let autoplayDelay = options.aa ? parseInt(options.aa) : 9999999999999;
                    if (!options.a1) {autoplayDelay = 9999999999999;}

                    /* Load Swiper */
                    swiperInstance = new Swiper(target[0], {
                        /* Defaults */
                        touchStartPreventDefault:options.j,
                        slidesPerView,
                        spaceBetween,
                        direction: options.k,
                        speed: options.speed ? options.speed : 300,
                        effect: options.c,
                        allowTouchMove: data.mode === 'website' && !options.i,
                        freeMode: options.d,
                        loop: options.e,
                        centeredSlides: options.f,
                        grabCursor: options.g,
                        initialSlide: parseInt(options.h) - 1,

                        /* Controls */
                        keyboard: { enabled: options.ca },
                        mousewheel: options.cb,

                        /* Navigation */
                        navigation: {
                            nextEl: options.na ? `.${options.na}`: '',
                            prevEl: options.nb ? `.${options.nb}`: '',
                        },

                        /* Pagination */
                        pagination: {
                            el: pagClass,
                            dynamicBullets: options.pb,
                            clickable: options.pc,
                            type: options.pd,
                        },             

                        /* Autoplay, if delay is not set, we are setting value to infinite */
                        /* If we dont send anything inside of autoplay, default is 1s */
                        autoplay : {
                            delay: autoplayDelay,
                            disableOnInteraction: options.ab ,
                            stopOnLastSlide: options.ac,
                            pauseOnMouseEnter: options.ad,
                            reverseDirection: options.ae,
                        },

                        /* Responsive */
                        breakpoints,
                        
                    });

                    this.customNav();

                    this.bulletStyles();

                });
            }


            this.breakpoints = (options) => 
            {
                const createBreakpoint = (slidesPerView, spaceBetween) => ({
                    slidesPerView: slidesPerView === 'auto' ? 'auto' : parseFloat(slidesPerView) || null,
                    spaceBetween: parseFloat(spaceBetween) || null,
                });
  
                const cleanBreakpoint = (bp, fallback) => {
                    const cleaned = { ...fallback };
                    if (bp.slidesPerView) cleaned.slidesPerView = bp.slidesPerView;
                    if (bp.spaceBetween) cleaned.spaceBetween = bp.spaceBetween;
                    return cleaned;
                };

                const default_res = {
                    slidesPerView: options.a,
                    spaceBetween: options.b,
                };

                const res_0 = createBreakpoint(options.rg, options.rh);
                const res_481 = createBreakpoint(options.re, options.rf);
                const res_768 = createBreakpoint(options.rc, options.rd);
                const res_992 = createBreakpoint(options.ra, options.rb);

                const breakpoints = {
                    1201: default_res,
                    992: cleanBreakpoint(res_992, default_res),
                    768: cleanBreakpoint(res_768, cleanBreakpoint(res_992, default_res)),
                    481: cleanBreakpoint(res_481, cleanBreakpoint(res_768, cleanBreakpoint(res_992, default_res))),
                    0: cleanBreakpoint(res_0, cleanBreakpoint(res_481, cleanBreakpoint(res_768, cleanBreakpoint(res_992, default_res)))),
                };

                return breakpoints;
            };


            this.correct_slides_per_view_builder = (breakpoints, defaultSlidesPerView, defaultSpaceBetween, currentRes) => {
                let slidesPerView = defaultSlidesPerView;
                let spaceBetween = defaultSpaceBetween;

                const breakpointKeys = Object.keys(breakpoints)
                    .map(Number)
                    .sort((a, b) => b - a);

                for (const key of breakpointKeys) {
                    if (currentRes > key) {
                        slidesPerView = breakpoints[key].slidesPerView;
                        spaceBetween = breakpoints[key].spaceBetween;
                        break;
                    }
                }

                return { slidesPerView: slidesPerView === 'auto' ? 'auto' : parseFloat(slidesPerView) || null, spaceBetween };
            }


            this.bulletStyles = () => {

                let id = tag.Get('id');
                let styleID = "dh-swiper-"+id;

                if (options.pd !== "bullets") {return;}

                let cssContent = `
                    .t${id} .swiper-pagination-bullet {
                        background:${options.bullet_color};
                        opacity:1;
                    }

                    .t${id} .swiper-pagination-bullet-active {
                        background:${options.bullet_acolor}
                    }

                    .t${id} .swiper-pagination {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: ${options.bullet_bgcolor};
                        padding: 8px;
                        width: fit-content;
                        border-radius: 100px;
                    }
                `;

                /* SHAPE */
                if (options.bullet_shape === "line") {
                    cssContent += `
                        .t${id} .swiper-pagination-bullet {
                            width:20px;
                            height:2px;
                            border-radius:0;
                           
                        }
                        .t${id} .swiper-pagination {
                            border-radius:0;
                        }
                    `;
                }

                else if (options.bullet_shape === "square") {
                    cssContent += `
                        .t${id} .swiper-pagination-bullet {
                            width:8px;
                            height:8px;
                            border-radius:0;
                            border-radius:2px;
                        }

                        .t${id} .swiper-pagination {
                            border-radius:3px;
                        }
                    `;
                }

                /* POSITION */

                if (options.bullet_position === "center") {
                    cssContent += `
                        .t${id} .swiper-pagination {
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    `;
                }

                else if (options.bullet_position === "right") {
                    cssContent += `
                        .t${id} .swiper-pagination {
                            left: 100%;
                            transform: translateX(-100%);
                        }
                    `;
                }

               
                let styleElement = $('#' + styleID);
                if (styleElement.length) {
                    styleElement.html(cssContent);
                } else {
                    $('body').append('<style id="' + styleID + '">' + cssContent + '</style>');
                }

            }

            this.customNav = () => {
                if (!options.cna) {return;}
                $(`.t${options.cnb.Get('id')} > *`).eq(parseInt(options.h) - 1).addClass("dh-active");

                $(`.t${options.cnb.Get('id')} > *`).on("click", function(){
                    $(this).parent().find(">*").removeClass("dh-active");
                    $(this).addClass("dh-active");
                    swiperInstance.slideTo($(this).index());
                });

                swiperInstance.on('slideChange', function (e) {
                    $(`.t${options.cnb.Get('id')} > *`).removeClass("dh-active");
                    $(`.t${options.cnb.Get('id')} > *`).eq(swiperInstance.activeIndex).addClass("dh-active");
                });
            }

            return this;
        },
        
    });
});
} catch (error) { console.log(error); }

try {
transform.OnReady(function() {

    this.effects = [
        {value:'none', title: 'None'},
        {value:'fade', title: 'Fade'},
        {value:'slide', title: 'Slide'},
        {value:'slideLeft', title: 'Slide Left'},
        {value:'slideRight', title: 'Slide Right'}
    ];

    transform.ItemAdd({
        id: 'hamburger',
        name: 'Hamburger Menu',
        options: {
            a: {'label': 'Menu ID', 'type': 'INPUT', 'value': ''},
            b: {'label': 'Animation', 'type': 'SELECT', 'values': this.effects, 'value': 'fade'},
            dur: {
                label: 'Duration',
                placeholder: '400',
                type: 'INPUT', 
                units: ['ms'],
                condition: (option, values) =>
                {
                    return values.b === 'slideLeft' || values.b === 'slideRight' 
                }
            },
         
            c: {'label': 'Show', 'type': 'TOGGLE', 'value': false},
            d: {'label': 'Flex on show', 'type': 'TOGGLE', 'value': false},
        },

        code: function(transform, tag, target, options, data, index) {

            this.init = (bind, num) => {
                this.requirements();
                this.render();

                if(data.mode === 'website') {
                    this.click();
                    this.anchorClick();
                }
            };

            this.requirements = () => {
                if(!options.a ) {
                    console.log(`Menu ID is not set.`);
                    return;
                }

                if( !$(`#${options.a}`).length ) {
                    console.log(`Menu with an id: ${options.a} doesn't exist.`);
                    return;
                }
            };

            this.anchorClick = () => { 

                let transform = this;
                $(`#${options.a} a`).on('click', function (e) {
                    var href = $(this).attr('href');
                    if (href && href.startsWith('#')) {
                        if ($(target).is(":visible")) {
                            transform.menuToggle();
                        } 
                    }
                });

            };

            this.render = () => {
                if (options.c ) {
                    target.addClass('dh-active');
                    $(`#${options.a}`).addClass("dh-active");
                    if (options.d) {
                        $(`#${options.a}`).css('display', 'flex');
                        return;
                    }
                    $(`#${options.a}`).show();
                }
            };

            this.click = () => {
                let transform = this;
                $(target).on("click", function(){
                    transform.menuToggle($(this));
                });
            };

            this.menuToggle = (button) => {
                const menuElement = $(`#${options.a}`);
                const displayType = options.d ? 'flex' : null;
                target.toggleClass('dh-active');
                if (options.b === "none") {
                    if (menuElement.is(":visible")) {
                        menuElement.hide().css("display","");
                    } else {
                        menuElement.css('display', displayType || 'block');
                    }
                } else if (options.b === "fade") {
                    if (menuElement.is(":visible")) {
                        menuElement.fadeOut("fast", function(){
                             $(menuElement).css("display","");
                        });
                    } else {
                        menuElement.css('display', displayType || 'block').hide().fadeIn("fast");
                    }
                } else if (options.b === "slide") {
                    if (menuElement.is(":visible")) {
                        menuElement.slideUp("fast",function(){
                            $(menuElement).css("display","");
                        });
                    } else {
                        menuElement.css('display', displayType || 'block').hide().slideDown("fast");
                    }
                } else if (options.b === "slideLeft") {
                    this.slideLeftToggle(menuElement, options.dur, displayType);
                } else if (options.b === "slideRight") {
                    this.slideRightToggle(menuElement, options.dur, displayType);
                }
            }



            this.slideLeftToggle = function(element, duration, displayType) {
                duration = (duration.match(/\d+/) ? parseInt(duration.match(/\d+/)[0], 10) : 400);
            
                element.css('transition', `transform ${duration}ms linear`);

                if (element.is(":visible")) {
                    element.css('transform', 'translateX(-100%)');
                    setTimeout(function() {
                        element.hide().css("display","");
                        element.css('transform', ''); 
                    }, duration); 
                } else {
                    element.css({
                        'transform': 'translateX(-100%)',
                        'display': displayType || 'block'
                    });
                    setTimeout(function() {
                        element.css('transform', 'translateX(0)');
                    }, 1); 
                }
            };

            this.slideRightToggle = function(element, duration, displayType) {

                duration = (duration.match(/\d+/) ? parseInt(duration.match(/\d+/)[0], 10) : 400);
                element.css('transition', `transform ${duration}ms linear`);

    
                if (element.is(":visible")) {
                    element.css('transform', 'translateX(100%)');
                    setTimeout(function() {
                        element.hide().css("display","");
                        element.css('transform', ''); 
                    }, duration); 
                } else {
                    element.css({
                        'transform': 'translateX(100%)',
                        'display': displayType || 'block'
                    });
                    setTimeout(function() {
                        element.css('transform', 'translateX(0)');
                    }, 1); 
                }
            };





            return this;
        }
    });
});

} catch (error) { console.log(error); }

try {
transform.OnReady(function()
{
    this.anims =  [
        {value: 'none', title: 'None'},
        {value: 'fade', title: 'Fade'},
    ];

    this.bars = [
        {value: 'none', title: 'None'},
        {value: 'horizontal', title: 'Horizontal'},
        {value: 'vertical', title: 'Vertical'},
    ];

    let tabs = {};
    let callbacks = [];
    let intervals = {};

    $(window).on('scroll', () => 
    {
        callbacks.forEach((callback) =>
        {
            callback();
        });
    });

    $(document).on('dh/pages/unload', (event, page) =>
    {
        callbacks = [];
        intervals = {}
    });


    transform.ItemAdd({
        id: 'tabs',
        name: 'Tabs',
        options: {
            a: {'label': 'Opened Tab', 'type': 'INPUT', 'value': '1'},
            b: {'label': 'Animation', 'type': 'SELECT', 'values': this.anims, 'value': 'fade'},
            c: {'label': 'Duration (ms)', 'type': 'INPUT', 'value': 250},

            f: {'label': 'Prev Class', 'type': 'INPUT', 'value': '', 'group': "Navigation (Arrows)"},
            e: {'label': 'Next Class', 'type': 'INPUT', 'value': '', 'group': "Navigation (Arrows)"},

            aa: {'label': 'Enable', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay"},
            ab: {'label': 'Delay (s)', 'type': 'INPUT', 'value': 5, 'group': "Autoplay"},
            ac: {'label': 'Disable on Interaction', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay"},
            ad: {'label': 'Progress Bar', 'type': 'SELECT', 'values': this.bars, 'value': 'none', 'group': "Autoplay"},
            ae: {'label': 'Progress Bar Color', 'type': 'INPUT', 'value': "#000", 'group': "Autoplay"},
        },

        code: function(transform, tag, target, options, data, index)
        {

            if(data.mode === 'builder') {
                options.aa = false;
                options.b = "none";
            } 


            this.init = (bind, num) =>
            {

                this.setTabsDefaults(target, options);
                this.render();

                if (options.aa) {
                    this.autoplayStart(target);
                  
                    callbacks.push(() => {
                        this.autoplayStart(target);
                    }); 
                }

                if(data.mode === 'website')
                {
                    this.navigation(target);
                    this.click(target);
                }
            };

            this.render = () =>
            {
               
                let initTab = options.a;
                if (!initTab) {initTab = 1;}
                if (initTab === "*" && data.mode === "builder") {
                    return;
                }

                initTab = isNaN(parseInt(initTab)) ? 1 : parseInt(initTab);
                target.children().eq(1).children().hide();

                this.openTab(target, initTab - 1, false); 
            };

            /* DEFAULTS */
            this.setTabsDefaults = (target, options) => {
                let microtime = new Date().getTime(); 
                let randomNum = Math.floor(Math.random() * 10000); 
                let uniqueId = microtime + '_' + randomNum; 
                let className = "dh-tabs_"+uniqueId;
                $(target).addClass(className);
                $(target).attr("data-transform","tabs");
                $(target).attr("data-tabs-class", className);
                tabs[className] = {target, options};
            }


            /* ACTIONS */
            this.click = (target) =>
            {
               let transform = this;
                target.children().first().children().click(function()
                {
                    if ($(this).hasClass('dh-active')) {
                        return;
                    }

                    transform.openTab(target, $(this).index());
                });
            };

            this.openTab = (target, index, userClick = true) =>
            {   
                let tabs_id = $(target).attr("data-tabs-class");
                let options = tabs[tabs_id].options;

                /* reset autoplay if user clicks on tab, disable */
                if (options.aa && userClick) {
                    this.resetAutoplay(userClick && options.ac, target);
                }
             
                /* Set active to navigation */  
                target.children().first().children().removeClass('dh-active');        
                setTimeout(function(){
                    target.children().first().children().eq(index).addClass('dh-active');
                }, 1)

                /* Open tab content with index */
                switch (options.b)
                {
                    case 'fade':
                        this.animationFade(target, index);
                        break;
                    default:
                        this.animationNone(target, index);
                        break;
                }
            }

            /* ANIMATIONS */
            this.animationNone = (target, index) =>
            {
                let active = target.children().eq(1).find('> .dh-active');
                let content = target.children().eq(1).children().eq(index);
                active.hide();
                content.show();
                
                target.children().eq(1).find('> .dh-active').removeClass('dh-active');
                target.children().eq(1).children().eq(index).addClass('dh-active');
            };

            this.animationFade = (target, index) =>
            {
                let active = target.children().eq(1).find('> .dh-active');
                let content = target.children().eq(1).children().eq(index);

                $(active).hide();
                $(content).fadeIn();

                target.children().eq(1).find('> .dh-active').removeClass('dh-active');
                target.children().eq(1).children().eq(index).addClass('dh-active');
            };




            /* AUTOPLAY */
            this.autoplay = (target) => {

                let tabs_id = $(target).attr("data-tabs-class");
                let options = tabs[tabs_id].options;
                let transform = this;
                let totalTabs = target.children().first().children().length;
            
                intervals[tabs_id] = setInterval(() => {
                    let currentIndex = target.children().first().find('> .dh-active').index();
                    let nextIndex = (currentIndex + 1) % totalTabs;
                    transform.openTab(target, nextIndex, false);
                }, options.ab * 1000);
            };


            this.autoplayStart = (target) => {
                let isLoaded = $(target).attr("data-tabs-loaded");
                if (!isLoaded && this.inViewport(target)) {
                    $(target).attr("data-tabs-loaded", "true");
                    
                    let activeNav = $(target).children().first().find(".dh-active");
                    $(activeNav).removeClass('dh-active');  
                    setTimeout(()=> {
                       $(activeNav).addClass('dh-active');    
                    }, 1)  
                    this.autoplay(target);
                    this.progressBar(target);
                } 
            }

            this.resetAutoplay = (disableOnInteraction, target) => {

                let tab_name = $(target).attr("data-tabs-class");
                clearInterval(intervals[tab_name]);
                intervals[tab_name] = null;

                if (!disableOnInteraction) {
                    this.autoplay(target);
                } else {
                    this.stopProgressBar(target);
                }  
            };

            this.inViewport = (target) => {
                let rect = target[0].getBoundingClientRect();
                return rect.bottom > 0 &&
                    rect.right > 0 &&
                    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
                    rect.top < (window.innerHeight || document.documentElement.clientHeight);
            }


            /* AUTOPLAY PROGRESS BAR */

            this.progressBar = (target) => {

                let tab_id = $(target).attr("data-tabs-class");
                let options = tabs[tab_id].options;


                if (options.ad === "none") { return; }
                if (!target.children().first().find('> *').find(".progress-bar").length) { 
                    let message =  `Div with the class "progress-bar" inside tabs doesnt exist.`;
                    mdBugs.ItemAdd({message}); 
                    return; 
                }

                let css = "width:0%;height:100%;";
                let cssSide = "width";
                if ( options.ad === "vertical") {
                    css = "height:0%;width:100%;";
                    cssSide = "height";
                }

                let line_color = options.ae;
                let progress_line = `<div style="background:${line_color}; position:absolute;left:0;top:0;${css}"></div>`
                target.children().first().find('> *').find(".progress-bar").append(progress_line);

                if ( !options.aa  ) { options.ab = "0";}
                let style = `
                    <style id="style-dh-tabs-progressBar">
                        .${tab_id} .dh-active .progress-bar > div {
                            ${cssSide}: 100%!important;
                            transition:${options.ab}s all cubic-bezier(.25, .46, .45, .94);
                        }
                    </style>
                `;
                $(target).append(style);
            }


            this.stopProgressBar = (target) => {

                let tab_id = $(target).attr("data-tabs-class");
                let options = tabs[tab_id].options;

                let cssSide = "width";
                if ( options.ad === "vertical") {
                    cssSide = "height";
                }

                $(target).find("#style-dh-tabs-progressBar").remove();
                let style = `
                    <style id="style-dh-tabs-progressBar">
                        .${tab_id} .dh-active .progress-bar > div {
                            ${cssSide}: 100%!important;
                            transition:0s all cubic-bezier(.25, .46, .45, .94);
                        }
                    </style>
                `;
                $(target).append(style);
            }


            /* NAVIGATION */
            this.navigation = (target) =>
            {
                /* Prev */
                if(options.f.length)
                {
                    
                    let hold_target = target;
                    let transform = this;
                    $(target).find('.' + options.f).on("click", function(){
                        let total = $(this).closest("[data-transform='tabs']").find(">*").first().find(">*").length - 1;
                        let current = $(this).closest("[data-transform='tabs']").find(">*").first().find('> .dh-active').index();
                        let prev = current - 1;
                        if (prev < 0) {
                            prev = total;
                        }

                        transform.openTab(hold_target, prev, true);
                    });
                }

                /* Next */
                if(options.e.length)
                {
                    let hold_target = target;
                    let transform = this;
                    $(target).find('.' + options.e).on("click", function(){
                        
                        let total = $(this).closest("[data-transform='tabs']").find(">*").first().find(">*").length - 1;
                        let current = $(this).closest("[data-transform='tabs']").find(">*").first().find('> .dh-active').index();

                        let next = current + 1;
                        if (next > total) {
                            next = 0;
                        }

                        transform.openTab(hold_target, next, true);
                    });
                }
            };

            return this;
        }
    });
});
} catch (error) { console.log(error); }

try {
transform.OnReady(function()
{
    transform.ItemAdd({
        id: 'accordions',
        name: 'Accordions',
        options: {
            a: {'label': 'Opened', 'type': 'INPUT', 'value': '1'},
            b: {'label': 'Duration (ms)', 'type': 'INPUT', 'value': 200},
            c: {'label': 'Single mode', 'type': 'TOGGLE', 'value': true},
        },
        code: function(transform, tag, target, options, data, index)
        {
            this.init = (bind, num) =>
            {
                this.requirements();
                this.render();

                if(data.mode === 'website')
                {
                    this.click();
                }
            };

            this.requirements = () =>
            {
                target.children().each(function (){
                    if($(this).children().length !== 2)
                    {
                        console.log(`"${tag.Get('label')}" - Each accordion must have only 2 children.`);
                    }
                });
            };

            this.render = () =>
            {
                let opened = options.a.split(",");
                if ( options.a === "*" || options.a.toLowerCase() === "all" ) {
                    target.children().addClass('dh-active');
                    target.children().children().addClass('dh-active');
                    return;
                }

                target.children().find(">*:last-child").hide();
                $.each(opened, function(ind, key){
                    target.children().eq(parseInt(key) - 1).addClass('dh-active');
                    target.children().eq(parseInt(key) - 1).children().addClass('dh-active');
                    target.children().eq(parseInt(key) - 1).children().last().show();
                });
            };

            this.click = () =>
            {
                let transform = this;
                
                $(target).find(">*").find(">*:first-child").on("click", function(){
                    transform.toggle($(this).parent());
                });
            };

            this.toggle = (target) => {
                let was_opened = $(target).hasClass("dh-active");

                /* Hide others if single mode */
                if (options.c) {
                    target.parent().children().removeClass("dh-active");
                    target.parent().children().children().removeClass("dh-active");
                    target.parent().children().find(">*:last-child").slideUp(options.b);
                }

                /* Open target */
                if (was_opened) {
                    target.removeClass('dh-active');
                    target.children().removeClass('dh-active');
                    target.children().last().slideUp(options.b);
                } else {
                    target.addClass('dh-active');
                    target.children().addClass('dh-active');
                    target.children().last().slideDown(options.b);
                }
            }
            
            return this;
        }
    });
});
} catch (error) { console.log(error); }

try {
transform.OnReady(function()
{


    this.animations =  [
        {value: 'fadeIn', title: 'Fade In'},
        {value: 'fadeInDown', title: 'Fade In Down'},
        {value: 'fadeInUp', title: 'Fade In Up'},
        {value: 'fadeInLeft', title: 'Fade In Left'},
        {value: 'fadeInRight', title: 'Fade In Right'},
    ];

    let callbacks = [];
    $(window).on('scroll', () => 
    {
        callbacks.forEach((callback) =>
        {
            callback();
        });
    });

    $(document).on('dh/pages/unload', (event, page) =>
    {
        callbacks = [];
    });


    transform.ItemAdd({
        id: 'simple-animations',
        name: 'Simple Animation',
        options: {
            a: {'label': 'Type', 'type': 'SELECT', 'value': 'fadeIn', 'values': this.animations},
            b: {'label': 'Delay (ms)', 'type': 'INPUT', 'value': '200'},
            c: {'label': 'Offset (px)', 'type': 'INPUT', 'value': '100'},
            d: {'label': 'Duration (ms)', 'type': 'INPUT', 'value': '600'},
        },
        code: function(transform, tag, target, options, data, index)
        {
            
            this.init = () => {

                if (data.mode === "website") {
                    $(target).css("opacity", "0");
                    this.startAnimation(target);
                    callbacks.push(() => {
                        if(!$(target).hasClass('plugin_simpleScroll-is-animated')) {
                            this.startAnimation(target);
                        }
                    });
                }

            }

            this.startAnimation = (target) => {
          
                let offset = options.c;
                if (!offset) {offset = 0}
                const elPos = parseInt ( $(target).offset().top ) + parseInt ( offset );
                const topOfWindow = $(window).scrollTop();
                if (elPos < topOfWindow + $(window).height()) {
                    $(target).addClass('plugin_simpleScroll-is-animated');
                    console.log("add animation", target, options);
                    $(target).css("animation", `${options.a} ${options.d}ms ease ${options.b}ms forwards`);
                }
            }

         


            return this;
        },
    });
});
} catch (error) { console.log(error); }

try {
transform.OnReady(function()
{
    let callbacks = [];

    $(window).on('scroll', () => 
    {
        callbacks.forEach((callback) =>
        {
            callback();
        });
    });

    $(document).on('dh/pages/unload', (event, page) =>
    {
        callbacks = [];
    });

    transform.ItemAdd({
        id: 'scrollToTop',
        name: 'Scroll to Top',
        options: {
            dynspeed: {'label': 'Dynamic Speed', 'type': 'TOGGLE', 'value': true},
            speed: {'label': 'Speed (ms)', 'type': 'INPUT' , 'value': 1000, 
                condition: (option, values) => {
                    return !values.dynspeed
                }
            },
            va: {'label': 'Show After (px)', 'type': 'INPUT', 'value': 500, 'group': 'Visibility'},
            vb: {'label': 'Only on Scroll Up', 'type': 'TOGGLE', 'value': false, 'group': 'Visibility'},

        },
        code: function(transform, tag, target, options, data, index) {

            let lastScrollTop = 0; 
            let isScrollingToTop = false;

            this.init = () => {
                if (data.mode === 'website') {
                    $(target).hide();
                    callbacks.push(() =>
                    {
                        this.showOnScroll();
                    });
                    this.click(target);
                }   
            }

            this.click = (target) => {


                $(target).on('click' ,function(){

                    let duration = options.speed;
                    if (options.dynspeed) { 
                        duration = $(document).scrollTop(); 
                        if (duration > 1000) {duration = 1000}
                        else if (duration < 200) {duration = 200}
                    }
              
                    window.lenisInstance?.stop();
                    isScrollingToTop = true;
                    $(target).hide();

                    $('html, body').animate({
                        scrollTop: 0
                    }, duration, 'linear', function() {
                        isScrollingToTop = false;
                        window.lenisInstance?.start();
                    });

                });

            }


            this.showOnScroll = () => {
                if ( isScrollingToTop ) {return;}
                const currentScrollTop = $(document).scrollTop();
                if (options.vb) {
                    if (currentScrollTop < lastScrollTop && currentScrollTop > options.va) {
                        $(target).fadeIn();
                    } else {
                        $(target).fadeOut();
                    }
                } else {
                    currentScrollTop >= options.va ? $(target).fadeIn() : $(target).fadeOut();
                }
                lastScrollTop = currentScrollTop;
            };

            return this;
        },
    });
});
} catch (error) { console.log(error); }

try {
predefines.OnReady(() => {
    predefines.ItemAdd({
        name: 'Scroll to top button',
        icon: 'https://global.divhunt.com/b776913d1596199bdadc40d1ad3925e9_5365.png',
        type: 'element',
        group: 'Installed',
        json: function()
        {
            return {"tags":[{"tags":[{"tags":[],"symbol":null,"order":100,"loop":1,"name":"img","label":"Image","css":{"1920":{"self":{"position":"relative","transition":"all 150ms 0ms linear","top":"0px"}}},"text":{},"attributes":{"1":{"src":"https://global.divhunt.com/414d5f9e1eabba31c7a28350174b87de_510.svg"}},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":100,"loop":1,"name":"div","label":"Div","css":{"1920":{"self":{"width":"100%","height":"100%","display":"flex","align-items":"center","flex-direction":"column","justify-content":"center"}}},"text":{},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":400,"loop":1,"name":"div","label":"Scroll to Top","css":{"1920":{"self":{"top":"auto","left":"auto","right":"20px","width":"60px","bottom":"50px","cursor":"pointer","height":"60px","z-index":"999999999","position":"fixed","background":"#A375FF","padding-top":"0px","padding-left":"0px","border-radius":"100%","padding-right":"0px","padding-bottom":"0px","transition":"","transform":""},":hover img":{"position":"relative","top":"-2px"}}},"text":{},"attributes":{"1":{"dh-transform":"scrollToTop","dh-transform-options":"dynspeed:true|easing:linear|vb:true"}},"classes":{},"conditions":{},"properties":{},"Target":null};
        } 
    });
});
} catch (error) { console.log(error); }

try {
transform.OnReady(function()
{
    let callbacks = [];

    $(window).on('scroll', function(event) 
    {
        callbacks.forEach((callback, index) =>
        {
            callback(event, index);
        });
    });

    $(document).on('dh/pages/unload', (event, page) =>
    {
        callbacks = [];
    });

    /* Close Popup on Page Change */
    mdEvents.Fn('catch', 'pages.ready', () =>
    {
        $.each(mdModal.ItemsGet(), (id, item) =>
        {
            if(id.startsWith('p79-'))
            {
                item.Remove({animation: 'fade'});
            }
        });
    });

    transform.ItemAdd({
        id: 'popup',
        name: 'Popup',
        options: {

            d1: {
                label: 'Event',
                type: 'SELECT', 
                values: [
                    {title: 'Click', value: 'click'},
                    {title: 'Hover', value: 'hover'},
                    {title: 'Scroll', value: 'scroll'},
                    {title: 'Right Click', value: 'context'},
                ],
                value: 'hover'
            },

            s: {
                label: 'Scroll',
                type: 'INPUT', 
                units: ['px', '%'],
                value: '30%',
                condition: (option, values) =>
                {
                    return values.d1 === 'scroll'
                }
            },

            d2: {
                label: 'Type',
                type: 'OPTIONS', 
                options: [
                    {title: 'Text', value: 'text'},
                    {title: 'Comp.', value: 'component'},
                    {title: 'Tag', value: 'tag'},
                ],
                value: 'text'
            },

            t: {
                label: 'Text',
                type: 'TEXTAREA',
                condition: (option, values) =>
                {
                    return values.d2 === 'text'
                }
            },
            c: {
                label: 'Component',
                type: 'COMPONENT',
                condition: (option, values) =>
                {
                    return values.d2 === 'component'
                }
            },
            d: {
                label: 'Tag',
                type: 'TAG',
                condition: (option, values) =>
                {
                    return values.d2 === 'tag'
                }
            },
            a1: {
                label: 'Horizontal Align',
                type: 'SELECT', 
                values: [
                    {title: 'Center', value: 'center'},
                    {title: 'Center Left', value: 'center-left'},
                    {title: 'Center Right', value: 'center-right'},
                    {title: 'Left Inside', value: 'left-in'},
                    {title: 'Left Outside', value: 'left-out'},
                    {title: 'Right Inside', value: 'right-in'},
                    {title: 'Right Outside', value: 'right-out'},
                ],
                value: 'center'
            },
            a2: {
                label: 'Vertical Align',
                type: 'SELECT', 
                values: [
                    {title: 'Center', value: 'center'},
                    {title: 'Center Top', value: 'center-top'},
                    {title: 'Center Bottom', value: 'center-bottom'},
                    {title: 'Top Inside', value: 'top-in'},
                    {title: 'Top Outside', value: 'top-out'},
                    {title: 'Bottom Inside', value: 'bottom-in'},
                    {title: 'Bottom Outside', value: 'bottom-out'},
                ],
                value: 'center'
            },
            b1: {
                label: 'Horizontal Offset',
                placeholder: '0',
                type: 'INPUT', 
                units: ['px']
            },
            b2: {
                label: 'Vertical Offset',
                placeholder: '0',
                type: 'INPUT', 
                units: ['px']
            },
            l: {
                label: 'Sticky',
                type: 'OPTIONS', 
                options: [
                    {title: 'Yes', value: true},
                    {title: 'No', value: false},
                ],
                value: true
            },
            o1: {
                label: 'Overlay',
                type: 'OPTIONS', 
                options: [
                    {title: 'Yes', value: true},
                    {title: 'No', value: false},
                ],
                value: false
            },
            o2: {
                label: 'Overl. Opacity',
                type: 'INPUT', 
                units: ['%'],
                value: '70',
                condition: (option, values) =>
                {
                    return values.o1;
                }
            },
            o3: {
                label: 'Overl. Clickable',
                type: 'OPTIONS', 
                options: [
                    {title: 'Yes', value: true},
                    {title: 'No', value: false},
                ],
                value: false,
                condition: (option, values) =>
                {
                    return values.o1;
                }
            },
            gc: {
                label: 'Target',
                type: 'OPTIONS', 
                options: [
                    {title: 'Tag', value: 'tag'},
                    {title: 'Window', value: 'window'},
                ],
                value: 'tag',
            },
            g: {
                label: 'Target',
                type: 'PARENT',
                condition: (option, values) =>
                {
                    return values.gc === 'tag';
                }
            },
            gw: {
                label: 'Inherit Width',
                type: 'OPTIONS', 
                options: [
                    {title: 'Yes', value: true},
                    {title: 'No', value: false},
                ],
                value: false,
                condition: (option, values) =>
                {
                    return values.g;
                }
            },
            x: {
                label: 'Closeable',
                type: 'SELECT', 
                values: [
                    {title: 'None', value: 'none', description: 'Popup can only be manually closed.'},
                    {title: 'Soft', value: 'soft', description: 'Any outside click excluding other popup clicks.'},
                    {title: 'Hard', value: 'hard', description: 'Any outside click including other popup clicks.'},
                ],
                value: 'soft'
            },
            cother: {
                label: 'Close other popups on open',
                type: 'OPTIONS', 
                options: [
                    {title: 'Yes', value: true},
                    {title: 'No', value: false},
                ],
                value: false,
                condition: (option, values) =>
                {
                    return values.d1 ;
                }
            },
        },
        code: function(thisTransform, tag, target, options, data, i)
        {
            let tagHtml = '';
            
            if(options.d2 === 'tag' && options.d)
            {
                tagHtml = $('.t' + options.d.Get('id')).get(0).outerHTML;
                $('.t' + options.d.Get('id')).hide();
            }

            if(data.mode !== 'website')
            {
                return;
            }

            this.init = () =>
            {
                if(options.d1 === 'hover')
                {
                    target.hover(
                        () =>
                        {
                            target.addClass('dh-popup-hover');
                            this.modalOpen();
                        },
                        (event) => 
                        {
                            mdModal.ItemGet('p79-' + tag.Get('id') + '-' + i, (item) =>
                            {
                                item.TargetItem().find('main').hover(null, () => 
                                {
                                    target.removeClass('dh-popup-hover');
                                    this.modalClose();
                                });
                            });

                            clearTimeout(tag.data.timeout);

                            tag.data.timeout = setTimeout(() =>
                            {
                                let mouseTarget = $(dh.getPoint(window.x, window.y));

                                if(
                                    !mouseTarget.hasClass('dh-popup-hover') &&
                                    !mouseTarget.parents('.dh-popup-hover').length &&
                                    !mouseTarget.parents(`item[for="md.modal"][data-id="${'p79-' + tag.Get('id') + '-' + i}"]`).length
                                )
                                {
                                    target.removeClass('dh-popup-hover');
                                    this.modalClose();
                                }
                            }, 250);
                        }
                    );
                }
                else if(options.d1 === 'click')
                {
                    target.on('click', () =>
                    {
                        this.modalOpen();
                    });
                }
                else if(options.d1 === 'context')
                {
                    let This = this;
                    target.on('contextmenu', function(event) {
                        event.preventDefault(); 
                        This.modalOpen();
                    });

                }
                else if(options.d1 === 'scroll')
                {
                    callbacks.push((event, index) =>
                    {
                        /* Pixels */
                        if(options.s.includes('px'))
                        {
                            let top = options.s.replace('px', '');

                            if(window.scrollY >= top)
                            {
                                this.modalOpen();
                                delete callbacks[index];
                            }
                        } 

                        /* Percent */
                        else if (options.s.includes('%'))
                        {
                            let top = options.s.replace('%', '');
                            let scrollPerc = $(window).scrollTop() / (($(document).height() - $(window).height())) * 100;

                            if(scrollPerc >= top)
                            {
                                this.modalOpen();
                                delete callbacks[index];
                            }
                        }
                    });
                }
            };

            this.modalOpen = () =>
            {
                $(".dh-popup-opened").removeClass("dh-popup-opened");
                $(target).trigger("open-popup");
                target.addClass("dh-popup-opened");
                if (options.cother) {
                    $.each(mdModal.ItemsGet(), function(i,key){
                        console.log(key.Remove())
                    });
                }


                let overlay = false;
                let closeable = false;
                let element = target;

                if(options.o1)
                {
                    overlay = {
                        opacity: parseInt(options.o2.replace('%', '')) / 100,
                        clickable: options.o3,
                        closeable: options.x !== 'none',
                    };
                }

                if(['soft', 'hard'].includes(options.x))
                {
                    closeable = options.x;
                }

                if(options.gc === 'window')
                {
                    element = $('#dh-modal');
                }
                else if(options.g)
                {
                    if(options.g.Get('name') === 'body')
                    {
                        element = $('#dh-modal');
                    }
                    else
                    {
                        element = target.closest('.t' + options.g.Get('id'));
                    }
                }

                mdModal.ItemAdd({
                    id: 'p79-' + tag.Get('id') + '-' + i,
                    align: {
                        x: options.a1, 
                        y: options.a2
                    },
                    offset: {
                        x: options.b1 ? parseInt(options.b1.replace('px', '')) : 0, 
                        y: options.b2 ? parseInt(options.b2.replace('px', '')) : 0
                    },
                    clean: true,
                    width: options.gw ? 'inherit' : null,
                    corners: options.l,
                    closeable,
                    overlay,
                    element,
                    html: () =>
                    {
                        return this.modalHtml();
                    },
                    onOpen: () =>
                    {
                        element.addClass('dh-popup-click');
                    },
                    onClose: () =>
                    {
                        element.removeClass('dh-popup-click');

                    }
                });

             
                transform.Fn('run', {mode: 'website'});

            };

            this.modalClose = () =>
            {
                mdModal.ItemGet('p79-' + tag.Get('id') + '-' + i, (item) =>
                {
                    item.Remove({animation: 'fade'});
                });
            };

            this.modalHtml = () =>
            {
                if(options.d2 === 'text')
                {
                    return `
                        <main style="pointer-events: ${options.d1 === 'hover' ? 'none' : 'auto'}!important; background: transparent!important; padding: 0!important; min-height: auto!important; height: auto!important;">
                            <span class="dh-tooltip">${options.t}</span>
                        </main>
                    `;
                }
                else if(options.d2 === 'component' && options.c)
                {
                    let html = options.c.Fn('render.html', {}, null, false);

                    return `
                        <main style="background: transparent!important; padding: 0!important; min-height: auto!important; height: auto!important;">${html}</main>
                    `;
                }
                else if(options.d2 === 'tag' && options.d)
                {
                    return `
                        <main style="background: transparent!important; padding: 0!important; min-height: auto!important; height: auto!important;">${tagHtml}</main>
                    `;
                }
            };

            return this.init();
        },
    });
});
} catch (error) { console.log(error); }

try {
predefines.OnReady(() => 
{
    
    predefines.ItemAdd({
        name: 'Social Share',
        icon: 'https://global.divhunt.com/e2ca1a4a1d8021d95be6e8a9a20cfd50_2921.svg',
        type: 'element',
        group: 'Installed',
        json: function()
        {
            return {"tags":[{"tags":[{"tags":[{"tags":[],"symbol":null,"order":100,"loop":1,"name":"img","label":"Image","css":{"1920":{"self":{"height":"18px"}}},"text":{},"attributes":{"1":{"src":"https://global.divhunt.com/7973cf2334478271ec7b0eb8a5df65c6_1615.svg"},"200":{"src":"https://global.divhunt.com/7b414bcbf824dd94700a039bbe679f34_484.svg"},"300":{"src":"https://global.divhunt.com/11a42beb091b7aa06008aa958768adec_1470.svg"},"400":{"src":"https://global.divhunt.com/eb94bc1d2d60e9edf493a36b15ba7215_776.svg"},"500":{"src":"https://global.divhunt.com/e64a11170209b946fe01e254acc0b7a8_1271.svg"},"600":{"src":"https://global.divhunt.com/008514b801c76fd63a4265181cf42b45_1986.svg"},"700":{"src":"https://global.divhunt.com/53bd70575db77794eed638e6a059ae8e_2764.svg"}},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":600,"loop":1,"name":"div","label":"Whatsapp","css":{"1920":{"self":{"width":"32px","border":"1px solid rgba(0,0,0,1)","cursor":"pointer","height":"32px","display":"flex","transition":"all 200ms 0ms linear","align-items":"center","padding-top":"0px","padding-left":"0px","border-radius":"3px","padding-right":"0px","padding-bottom":"0px","justify-content":"center"},":hover":{"background":"rgba(243,243,243,1.00)"}}},"text":{},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null},{"tags":[{"tags":[],"symbol":null,"order":100,"loop":1,"name":"img","label":"Image","css":{"1920":{"self":{"height":"18px"}}},"text":{},"attributes":{"1":{"src":"https://global.divhunt.com/b6b464af7dcda94f623f088ea973be7a_532.svg"},"200":{"src":"https://global.divhunt.com/7b414bcbf824dd94700a039bbe679f34_484.svg"},"300":{"src":"https://global.divhunt.com/11a42beb091b7aa06008aa958768adec_1470.svg"},"400":{"src":"https://global.divhunt.com/eb94bc1d2d60e9edf493a36b15ba7215_776.svg"},"500":{"src":"https://global.divhunt.com/e64a11170209b946fe01e254acc0b7a8_1271.svg"},"600":{"src":"https://global.divhunt.com/008514b801c76fd63a4265181cf42b45_1986.svg"},"700":{"src":"https://global.divhunt.com/53bd70575db77794eed638e6a059ae8e_2764.svg"}},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":100,"loop":1,"name":"div","label":"Facebook","css":{"1920":{"self":{"width":"32px","border":"1px solid rgba(0,0,0,1)","cursor":"pointer","height":"32px","display":"flex","transition":"all 200ms 0ms linear","align-items":"center","padding-top":"0px","padding-left":"0px","border-radius":"3px","padding-right":"0px","padding-bottom":"0px","justify-content":"center"},":hover":{"background":"rgba(243,243,243,1.00)"}}},"text":{},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null},{"tags":[{"tags":[],"symbol":null,"order":100,"loop":1,"name":"img","label":"Image","css":{"1920":{"self":{"height":"18px"}}},"text":{},"attributes":{"1":{"src":"https://global.divhunt.com/53bd70575db77794eed638e6a059ae8e_2764.svg"},"200":{"src":"https://global.divhunt.com/7b414bcbf824dd94700a039bbe679f34_484.svg"},"300":{"src":"https://global.divhunt.com/11a42beb091b7aa06008aa958768adec_1470.svg"},"400":{"src":"https://global.divhunt.com/eb94bc1d2d60e9edf493a36b15ba7215_776.svg"},"500":{"src":"https://global.divhunt.com/e64a11170209b946fe01e254acc0b7a8_1271.svg"},"600":{"src":"https://global.divhunt.com/008514b801c76fd63a4265181cf42b45_1986.svg"},"700":{"src":"https://global.divhunt.com/53bd70575db77794eed638e6a059ae8e_2764.svg"}},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":700,"loop":1,"name":"div","label":"Viber","css":{"1920":{"self":{"width":"32px","border":"1px solid rgba(0,0,0,1)","cursor":"pointer","height":"32px","display":"flex","transition":"all 200ms 0ms linear","align-items":"center","padding-top":"0px","padding-left":"0px","border-radius":"3px","padding-right":"0px","padding-bottom":"0px","justify-content":"center"},":hover":{"background":"rgba(243,243,243,1.00)"}}},"text":{},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null},{"tags":[{"tags":[],"symbol":null,"order":100,"loop":1,"name":"img","label":"Image","css":{"1920":{"self":{"height":"18px"}}},"text":{},"attributes":{"1":{"src":"https://global.divhunt.com/5ab87620c69d0e4d805959abc1b3022f_2481.svg"},"200":{"src":"https://global.divhunt.com/7b414bcbf824dd94700a039bbe679f34_484.svg"},"300":{"src":"https://global.divhunt.com/11a42beb091b7aa06008aa958768adec_1470.svg"},"400":{"src":"https://global.divhunt.com/eb94bc1d2d60e9edf493a36b15ba7215_776.svg"},"500":{"src":"https://global.divhunt.com/e64a11170209b946fe01e254acc0b7a8_1271.svg"},"600":{"src":"https://global.divhunt.com/008514b801c76fd63a4265181cf42b45_1986.svg"},"700":{"src":"https://global.divhunt.com/53bd70575db77794eed638e6a059ae8e_2764.svg"}},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":400,"loop":1,"name":"div","label":"VK","css":{"1920":{"self":{"width":"32px","border":"1px solid rgba(0,0,0,1)","cursor":"pointer","height":"32px","display":"flex","transition":"all 200ms 0ms linear","align-items":"center","padding-top":"0px","padding-left":"0px","border-radius":"3px","padding-right":"0px","padding-bottom":"0px","justify-content":"center"},":hover":{"background":"rgba(243,243,243,1.00)"}}},"text":{},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null},{"tags":[{"tags":[],"symbol":null,"order":100,"loop":1,"name":"img","label":"Image","css":{"1920":{"self":{"height":"18px"}}},"text":{},"attributes":{"1":{"src":"https://global.divhunt.com/973e7bcf1bc2ce7367e53cf4875cf6ae_559.svg"},"200":{"src":"https://global.divhunt.com/7b414bcbf824dd94700a039bbe679f34_484.svg"},"300":{"src":"https://global.divhunt.com/11a42beb091b7aa06008aa958768adec_1470.svg"},"400":{"src":"https://global.divhunt.com/eb94bc1d2d60e9edf493a36b15ba7215_776.svg"},"500":{"src":"https://global.divhunt.com/e64a11170209b946fe01e254acc0b7a8_1271.svg"},"600":{"src":"https://global.divhunt.com/008514b801c76fd63a4265181cf42b45_1986.svg"},"700":{"src":"https://global.divhunt.com/53bd70575db77794eed638e6a059ae8e_2764.svg"}},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":800,"loop":1,"name":"div","label":"Email","css":{"1920":{"self":{"width":"32px","border":"1px solid rgba(0,0,0,1)","cursor":"pointer","height":"32px","display":"flex","transition":"all 200ms 0ms linear","align-items":"center","padding-top":"0px","padding-left":"0px","border-radius":"3px","padding-right":"0px","padding-bottom":"0px","justify-content":"center"},":hover":{"background":"rgba(243,243,243,1.00)"}}},"text":{},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null},{"tags":[{"tags":[],"symbol":null,"order":100,"loop":1,"name":"img","label":"Image","css":{"1920":{"self":{"height":"18px"}}},"text":{},"attributes":{"1":{"src":"https://global.divhunt.com/8ac6e64f81d6b877b94ebc4c5652ff20_348.svg"},"200":{"src":"https://global.divhunt.com/7b414bcbf824dd94700a039bbe679f34_484.svg"},"300":{"src":"https://global.divhunt.com/11a42beb091b7aa06008aa958768adec_1470.svg"},"400":{"src":"https://global.divhunt.com/eb94bc1d2d60e9edf493a36b15ba7215_776.svg"},"500":{"src":"https://global.divhunt.com/e64a11170209b946fe01e254acc0b7a8_1271.svg"},"600":{"src":"https://global.divhunt.com/008514b801c76fd63a4265181cf42b45_1986.svg"},"700":{"src":"https://global.divhunt.com/53bd70575db77794eed638e6a059ae8e_2764.svg"}},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":200,"loop":1,"name":"div","label":"Twitter / X","css":{"1920":{"self":{"width":"32px","border":"1px solid rgba(0,0,0,1)","cursor":"pointer","height":"32px","display":"flex","transition":"all 200ms 0ms linear","align-items":"center","padding-top":"0px","padding-left":"0px","border-radius":"3px","padding-right":"0px","padding-bottom":"0px","justify-content":"center"},":hover":{"background":"rgba(243,243,243,1.00)"}}},"text":{},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null},{"tags":[{"tags":[],"symbol":null,"order":100,"loop":1,"name":"img","label":"Image","css":{"1920":{"self":{"height":"18px"}}},"text":{},"attributes":{"1":{"src":"https://global.divhunt.com/6b92005e699bda4815fdbc1ac2a18f19_2042.svg"},"200":{"src":"https://global.divhunt.com/7b414bcbf824dd94700a039bbe679f34_484.svg"},"300":{"src":"https://global.divhunt.com/11a42beb091b7aa06008aa958768adec_1470.svg"},"400":{"src":"https://global.divhunt.com/eb94bc1d2d60e9edf493a36b15ba7215_776.svg"},"500":{"src":"https://global.divhunt.com/e64a11170209b946fe01e254acc0b7a8_1271.svg"},"600":{"src":"https://global.divhunt.com/008514b801c76fd63a4265181cf42b45_1986.svg"},"700":{"src":"https://global.divhunt.com/53bd70575db77794eed638e6a059ae8e_2764.svg"}},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":500,"loop":1,"name":"div","label":"Telegram","css":{"1920":{"self":{"width":"32px","border":"1px solid rgba(0,0,0,1)","cursor":"pointer","height":"32px","display":"flex","transition":"all 200ms 0ms linear","align-items":"center","padding-top":"0px","padding-left":"0px","border-radius":"3px","padding-right":"0px","padding-bottom":"0px","justify-content":"center"},":hover":{"background":"rgba(243,243,243,1.00)"}}},"text":{},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null},{"tags":[{"tags":[],"symbol":null,"order":100,"loop":1,"name":"img","label":"Image","css":{"1920":{"self":{"height":"18px"}}},"text":{},"attributes":{"1":{"src":"https://global.divhunt.com/38ad815f05c566f992cfff93265d261c_681.svg"},"200":{"src":"https://global.divhunt.com/7b414bcbf824dd94700a039bbe679f34_484.svg"},"300":{"src":"https://global.divhunt.com/11a42beb091b7aa06008aa958768adec_1470.svg"},"400":{"src":"https://global.divhunt.com/eb94bc1d2d60e9edf493a36b15ba7215_776.svg"},"500":{"src":"https://global.divhunt.com/e64a11170209b946fe01e254acc0b7a8_1271.svg"},"600":{"src":"https://global.divhunt.com/008514b801c76fd63a4265181cf42b45_1986.svg"},"700":{"src":"https://global.divhunt.com/53bd70575db77794eed638e6a059ae8e_2764.svg"}},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":300,"loop":1,"name":"div","label":"Linkedin","css":{"1920":{"self":{"width":"32px","border":"1px solid rgba(0,0,0,1)","cursor":"pointer","height":"32px","display":"flex","transition":"all 200ms 0ms linear","align-items":"center","padding-top":"0px","padding-left":"0px","border-radius":"3px","padding-right":"0px","padding-bottom":"0px","justify-content":"center"},":hover":{"background":"rgba(243,243,243,1.00)"}}},"text":{},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null},{"tags":[{"tags":[],"symbol":null,"order":200,"loop":1,"name":"span","label":"Span","css":{"1920":{"self":{"top":"0%","left":"50%","right":"auto","bottom":"auto","display":"block","opacity":"0%","position":"absolute","font-size":"13px","transform":"translate(-50%,-90%)","background":"rgba(255,255,255,1.00)","box-shadow":" 0px 0px 6px -3px rgba(0,0,0,0.06)","transition":"all 200ms 0ms linear","font-weight":"400","margin-left":"auto","padding-top":"4px","margin-right":"auto","padding-left":"12px","border-radius":"6px","padding-right":"12px","padding-bottom":"4px","pointer-events":"none","border":"1px solid rgba(244,244,244,1.00)"}}},"text":{"1":"Copied"},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null},{"tags":[],"symbol":null,"order":100,"loop":1,"name":"img","label":"Image","css":{"1920":{"self":{"height":"18px"}}},"text":{},"attributes":{"1":{"src":"https://global.divhunt.com/4e782926ddd6ec9f83cb3ae45be219e4_784.svg"},"200":{"src":"https://global.divhunt.com/7b414bcbf824dd94700a039bbe679f34_484.svg"},"300":{"src":"https://global.divhunt.com/11a42beb091b7aa06008aa958768adec_1470.svg"},"400":{"src":"https://global.divhunt.com/eb94bc1d2d60e9edf493a36b15ba7215_776.svg"},"500":{"src":"https://global.divhunt.com/e64a11170209b946fe01e254acc0b7a8_1271.svg"},"600":{"src":"https://global.divhunt.com/008514b801c76fd63a4265181cf42b45_1986.svg"},"700":{"src":"https://global.divhunt.com/53bd70575db77794eed638e6a059ae8e_2764.svg"}},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":900,"loop":1,"name":"div","label":"Copy to Clipboard","attributes":{},"classes":{},"conditions":{},"properties":{},"text":{},"css":{"1920":{"self":{"width":"32px","border":"1px solid rgba(0,0,0,1)","cursor":"pointer","height":"32px","display":"flex","position":"relative","transition":"all 200ms 0ms linear","align-items":"center","padding-top":"0px","padding-left":"0px","border-radius":"3px","padding-right":"0px","padding-bottom":"0px","justify-content":"center"},":hover":{"background":"rgba(243,243,243,1.00)"},".dh-active span":{"top":"-25%","opacity":"100%"}}},"Target":null}],"symbol":null,"order":200,"loop":1,"name":"div","label":"Share Buttons","attributes":{"1":{"dh-transform":"socialshare","dh-transform-options":"fb:dh-tag-1703680877384005|tw:dh-tag-1703681945705001|ln:dh-tag-1703681948614011|wa:dh-tag-1703681947821005|te:dh-tag-1703681948010007|vk:dh-tag-1703681948204009|em:dh-tag-1703682036355013|vb:dh-tag-1703681947573003|copy:dh-tag-1703681710603007"}},"classes":{},"conditions":{},"properties":{},"text":{},"css":{"1920":{"self":{"display":"flex","row-gap":"5px","flex-wrap":"wrap","column-gap":"5px","margin-top":"10px","align-items":"center"}}},"Target":null},{"tags":[],"symbol":null,"order":100,"loop":1,"name":"p","label":"Paragraph","css":{},"text":{"1":"Share"},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null}],"symbol":null,"order":200,"loop":1,"name":"div","label":"Share on socials","css":{"1920":{"self":{"margin-top":"83px"}}},"text":{},"attributes":{},"classes":{},"conditions":{},"properties":{},"Target":null};
        } 
    });

});






} catch (error) { console.log(error); }

try {
transform.OnReady(function(){
    transform.ItemAdd({
        id: 'socialshare',
        name: 'Social Share',
        options: {
            fb: { 'label': 'Facebook', 'type': 'CHILD', 'value': '' },
            tw: { 'label': 'Twitter / X', 'type': 'CHILD', 'value': '' },
            ln: { 'label': 'LinkedIn', 'type': 'CHILD', 'value': '' },
            wa: { 'label': 'WhatsApp', 'type': 'CHILD', 'value': '' },
            te: { 'label': 'Telegram', 'type': 'CHILD', 'value': '' },
            vk: { 'label': 'VK', 'type': 'CHILD', 'value': '' },
            em: { 'label': 'Email', 'type': 'CHILD', 'value': '' },
            vb: { 'label': 'Viber', 'type': 'CHILD', 'value': '' },
            copy: { 'label': 'Copy URL', 'type': 'CHILD', 'value': '' },
        },
        code: function(transform, tag, target, options, data, index) {

            const url = window.location.href;
          
            this.init = () => {
                if (data.mode === "builder") {return;}
                if ( options.fb ) { this.facebook(); }
                if ( options.tw ) { this.twitter(); }
                if ( options.ln ) { this.linkedin(); }
                if ( options.wa ) { this.whatsapp(); }
                if ( options.te ) { this.telegram(); }
                if ( options.vk ) { this.vk(); }
                if ( options.vb ) { this.viber(); }
                if ( options.em ) { this.email(); }
                if ( options.copy ) { this.copyUrlToClipboard(); }
            };

            this.facebook = () => {
                $(`.t${options.fb.Get('id')}`).on('click', function() {
                    const facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
                    window.open(facebookUrl, 'facebook-share-dialog', 'width=800,height=600'); 
                }); 
            }

            this.twitter = () => {
                $(`.t${options.tw.Get('id')}`).on('click', function() { 
                    const twitterUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url);
                    window.open(twitterUrl, 'twitter-share-dialog', 'width=800,height=600'); 
                });
            }


            this.linkedin = () => {
                $(`.t${options.ln.Get('id')}`).on('click', function() {
                    const linkedinUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(url);
                    window.open(linkedinUrl, 'linkedin-share-dialog', 'width=800,height=600');
                });
            };


            this.whatsapp = () => {
                $(`.t${options.wa.Get('id')}`).on('click', function() {
                    const whatsappUrl = "https://wa.me/?text=" + encodeURIComponent(url);
                    window.open(whatsappUrl, 'whatsapp-share-dialog', 'width=800,height=600');
                });
            };

            this.telegram = () => {
                $(`.t${options.te.Get('id')}`).on('click', function() {
                    const telegramUrl = "https://t.me/share/url?url=" + encodeURIComponent(url);
                    window.open(telegramUrl, 'telegram-share-dialog', 'width=800,height=600');
                });
            };

            this.vk = () => {
                $(`.t${options.vk.Get('id')}`).on('click', function() {
                    const vkUrl = "https://vk.com/share.php?url=" + encodeURIComponent(url);
                    window.open(vkUrl, 'vk-share-dialog', 'width=800,height=600');
                });
            };

            this.viber = () => {
                $(`.t${options.vb.Get('id')}`).on('click', function() {
                    const viberUrl = "viber://forward?text=" + encodeURIComponent(url);
                    window.location.href = viberUrl;
                });
            };


            this.email = () => {
                $(`.t${options.em.Get('id')}`).on('click', function() {
                    var subject = "Check this out!";
                    var emailBody = "I found this page interesting: " + url;
                    const mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(emailBody);
                    window.location.href = mailtoLink;
                });
            };

            this.copyUrlToClipboard = () => {

                $(`.t${options.copy.Get('id')}`).on('click', function() {
                    
                    $(this).addClass("dh-active");
                    navigator.clipboard.writeText(url);

                    setTimeout(function(){
                        $(`.t${options.copy.Get('id')}`).removeClass("dh-active");
                    }, 2000)

                });
            };

 
            return this;
        }
    });
});
} catch (error) { console.log(error); }

