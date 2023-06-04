let timeline = gsap.timeline({defaults : {duration: 0.6}})

timeline
.from('.grras_logo', {x: '-30', opacity: '0', delay: 0.2})
.from('#navbarSupportedContent', {y: '-30', opacity: '0', delay: -0.3})
.from('.img-hero-sec', {opacity: '0', duration: 0.3})
.from('.hero_model', {x: '20', opacity: 0})
.from('.ani_btn', {x: '20', opacity: 0, delay: -0.3})
.from('.hero-tag', {x: '-20', opacity: 0, delay: -0.5})
.from('.img_lg', {y: '30', opacity: '0', stagger: 0.2, delay: -0.3})
.from('.about-us', {opacity:0})
.from('.heading_benefits', {y:'-20', opacity:0})
.from('.course-highlight', {y:'10', opacity: 0})