=============================
<!-- SVGs as Images -->
=============================

    <h1>SVG Example</h1>
    
    <div class="wrapper">
      <div class="graphic">
      <img src="img/star.svg" alt="Star Logo">
      </div>
      
      <div class="graphic-with-text">
        <p>This text will go on top of the graphic.</p>
      </div>
      
    </div>

-----

.graphic,
.graphic-with-text {
  margin: 1em auto;
  width: 20%;
}

.graphic-with-text {
  color: #FFF;
  background: transparent url('../img/star.svg') center center no-repeat;
  height: 200px;
}

=============================
<!-- Embedded code -->
=============================


    <h1>SVG Example</h1>
    
    <div class="wrapper">
      
      <svg class="graphic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" enable-background="new 0 0 360 360">
        <path fill="#8361B4" d="M0 0h360v360h-360z"/>
        <circle class="outer-circle" fill="#FDE135" stroke="#fff" stroke-width="8" stroke-miterlimit="10" cx="180" cy="180" r="157"/>
        <circle class="inner-circle" fill="#CAA61F" stroke="#fff" stroke-width="8" stroke-miterlimit="10" cx="180" cy="180" r="108.3"/>
        <path class="outer-circle" d="M89.4 276.7c-26-24.2-42.2-58.8-42.2-97.1 0-22.6 5.6-43.8 15.5-62.4m234.7.1c9.9 18.6 15.4 39.7 15.4 62.2 0 38.3-16.2 72.8-42.1 97" stroke="#CAA61F" stroke-width="8" stroke-linecap="round" stroke-miterlimit="10" fill="none"/>
        <path class="star" fill="#FDE135" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M180 107.8l16.9 52.1h54.8l-44.3 32.2 16.9 52.1-44.3-32.2-44.3 32.2 16.9-52.1-44.3-32.2h54.8z"/>
        <circle class="star-point" fill="#CAA61F" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="180" cy="107.8" r="4.4"/>
        <circle class="star-point" fill="#CAA61F" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="223.7" cy="244.2" r="4.4"/>
        <circle class="star-point" fill="#CAA61F" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="135.5" cy="244.2" r="4.4"/>
        <circle class="star-point" fill="#CAA61F" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="108.3" cy="160.4" r="4.4"/>
        <circle class="star-point" fill="#CAA61F" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="251.7" cy="160.4" r="4.4"/>
        <circle class="star-point" fill="#CAA61F" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="197.4" cy="159.4" r="4.4"/>
        <circle class="star-point" fill="#CAA61F" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="163" cy="159.4" r="4.4"/>
        <circle class="star-point" fill="#CAA61F" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="152" cy="192.5" r="4.4"/>
        <circle class="star-point" fill="#CAA61F" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="208" cy="192.5" r="4.4"/>
        <circle class="star-point" fill="#CAA61F" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="180" cy="213.2" r="4.4"/>
      </svg>
      
    </div>

-----------

.graphic {
  margin: 1em auto;
  width: 30%;
  display: block;
}

.star-point,
.outer-circle {
  opacity: 0;
}

inner-circle {
  stroke-opacity: 0;
}

.star {
  stroke-width: 8;
}

@media only screen and (min-width: 30em) {
  .inner-circle,
  .outer-circle {
    stroke-opacity: 1;
  }
}

@media only screen and (min-width: 40em) {
  .outer-circle {
        opacity: 1;
  }


.star {
  stroke-width: 4;
}

}

@media only screen and (min-width: 64em) {
  .star-point {
    opacity: 1;
  }
}


===========================================
<!-- transitioning SVG properties -->
===========================================

.gear-bg,
.hammer-bg,
.heart-bg {
  transition: .3s ease-out;
}

/* --------------------------
  GEAR
--------------------------- */

.gear-bg:hover {
  fill: #3881cc;
}

/* --------------------------
  HAMMER
--------------------------- */

.hammer-bg {
  stroke: #fee16e;
}

.hammer-bg:hover {
  fill: #feae6e;
  stroke-width: 8;
}


/* --------------------------
  HEART
--------------------------- */

.heart-bg:hover {
  fill: #ff5e5e;
}

=============================================
<!-- Grouping and Transforming SVG-->
=============================================

.gear-icon {
  transition: transform .4s ease-out;
  transform-origin: 50% 25%;
}

.gear:hover .gear-icon {
  transform: rotate(45deg) scale(1.3);
}

=============================================
<!-- Rotating and Scaling SVG-->
=============================================

<!-- also grabbing with <g></g> svg's to kind of wrap them is shown here -->

.gear-icon,
.hammer-icon,
.heart-icon {
  transform-origin: 200px 50px;
}

/* --------------------------
  GEAR
--------------------------- */

.gear-icon {
  transition: transform .4s ease-out;
}

.gear:hover .gear-icon {
  transform: rotate(45deg) scale(1.3);
}

/* --------------------------
  HAMMER
--------------------------- */

.hammer:hover .hammer-icon {
  transform: rotate(45deg);
}

.hammer-icon {
  transition: transform .3s ease-out;
}

/* --------------------------
  HEART
--------------------------- */

.heart:hover .heart-icon {
  transform: scale(1.3);
}

.heart-icon {
  transition: transform .2s ease-out;
}


=============================================
<!-- Creating a SVG animation sequence-->
=============================================

    <svg class="badge" xmlns="http://www.w3.org/2000/svg" height="440" width="440" viewBox="-40 -40 440 440">
      <circle class="outer" fill="#F9D535" stroke="#fff" stroke-width="8" stroke-linecap="round" cx="180" cy="180" r="157"/>
      <circle class="inner" fill="#DFB828" stroke="#fff" stroke-width="8" cx="180" cy="180" r="108.3"/>
      <path class="inline" d="M89.4 276.7c-26-24.2-42.2-58.8-42.2-97.1 0-22.6 5.6-43.8 15.5-62.4m234.7.1c9.9 18.6 15.4 39.7 15.4 62.2 0 38.3-16.2 72.8-42.1 97" stroke="#CAA61F" stroke-width="7" stroke-linecap="round" fill="none"/>
      <g class="star">
        <path fill="#F9D535" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M180 107.8l16.9 52.1h54.8l-44.3 32.2 16.9 52.1-44.3-32.2-44.3 32.2 16.9-52.1-44.3-32.2h54.8z"/>
        <circle fill="#DFB828" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="180" cy="107.8" r="4.4"/>
        <circle fill="#DFB828" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="223.7" cy="244.2" r="4.4"/>
        <circle fill="#DFB828" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="135.5" cy="244.2" r="4.4"/>
        <circle fill="#DFB828" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="108.3" cy="160.4" r="4.4"/>
        <circle fill="#DFB828" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="251.7" cy="160.4" r="4.4"/>
      </g>
    </svg>



------

/* --------------------------
  Base
--------------------------- */

body {
  background: #8069a1;
  padding-top: 60px;
}

svg {
	margin: auto;
  display: block;
}

/* --------------------------
  Keyframes
--------------------------- */

@keyframes grow {
  0% {
    transform: scale(0);
  }
  30% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(0.9);
  }
}

@keyframes turn {
  0% {
    transform: rotate(0) scale(0);
    opacity: 0;
  }
  60% {
    transform: rotate(375deg) scale(1.1);
  }
  /* Giving above and below 0 scale properties to create that type of 'bounce' effect */ 
  80% {
    transform: rotate(355deg) scale(0.9);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes pulse {
  50% {
    transform: scale(1.4);
  }
}

/* --------------------------
  SVG Styles
--------------------------- */

.badge * {
  transform-origin: center;
  transform-box: fill-box; /* gotta do this (seen on comments) so it behaves as expected on chrome */ 
}

.outer,
.inner,
.inline {
  animation: grow 1s ease-out backwards;
}

/* using backwards filmmode so it grabs the keyframe starting at 0%, then going 30% etc and we dont get any jumps on the animation */ 

/* we're making a rule also so they dont start at the same time here below */ 

.inner {
  animation-delay: .1s;
}

.inline {
  animation-delay: .15s;
}

.star {
  animation: turn 1.1s .2s ease-out backwards;
}

.star circle {
  animation: pulse .7s 1.5s;
}

.star circle:nth-of-type(2) {
  animation-delay: 1.6s;
}

.star circle:nth-of-type(3) {
  animation-delay: 1.7s;
}

.star circle:nth-of-type(4) {
  animation-delay: 1.8s;
}

.star circle:nth-of-type(5) {
  animation-delay: 1.9s;
}

=============================================
<!-- animating stroke-dasharray and stroke-dashoffset -->
=============================================

/* --------------------------
  Keyframes
--------------------------- */

@keyframes offset {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes fill-it {
  100% {
    fill: #6fbc6d;
  }
}

/* --------------------------
  SVG Styles
--------------------------- */

svg {
	display: block;
	margin: 2em auto 0;
	width: 40%;
}

.logo {
  stroke: #6fbc6d;
  stroke-width: 2;
  stroke-dasharray: 810; /* making it have 5px of line and 5px of gaps */
  stroke-dashoffset: 810; /* controls the position or offset of the dashes and gaps on the stroke */
  
  animation: offset 5s linear forwards, fill-it .8s 5s forwards; /* forward constructs the browser to finish the animation on its final keyframe, good for line animations */
}

------

	<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="210.7 336.7 125 135" width="340px">
		<path class="logo" fill="transparent" d="M319.4,362.3c-4.3-2.5-11.3,1.4-15.5,8.8l-7.6,13.2c-2.8,5.5-2.4,12.1,1.2,17.2l0.3,0.3
		c3.5,5.1,8.3,9.7,9.8,11.4c0.9,0.9,1.6,2.2,2,3.5c1.3,4.6-1.4,9.4-6,10.6c-4.6,1.3-9.4-1.4-10.6-6c-0.3-1.2-0.4-2.4-0.3-3.4
		c0.3-2-0.4-5-3.1-8s-8.3,2.8-10.1,8.6l-0.1,0.3c-1.8,5.9-2.9,11-2.6,11.5c0.3,0.3,0.4,0.7,0.5,0.9c2.6,5,0.8,10.9-3.9,13.4
		c-4.7,2.5-10.6,0.8-13.2-4.1c-2.5-4.7-0.8-10.6,4.1-13.2c0.3-0.1,0.4-0.3,0.7-0.3c0.4-0.1,1.4-2.6,2.2-5.6c0.9-2.9,1.6-5.4,1.6-5.4
		c0.1-0.3,0.1-0.7,0.3-0.9l4.8-17.2l-5.1,10.6c-0.7-2-1.6-2.1-3.8-0.5c-1.3,0.9-3.5,2.9-4.6,3.5c-2,1.4-3.7,4.2-4.6,6
		c-0.5,1-1.3,2-2.2,2.8c-3.7,3-9,2.5-12.1-1.3c-3-3.7-2.5-9,1.3-12.1c1-0.9,2.4-1.4,3.5-1.7c2.2-0.5,9.6-5,14-8.1
		c0.8-0.5,1.4-1,2-1.6l11.8-9l-10.3,5.6c0,0-1-0.1-2.4,0c-3.8,0.4-7.7,0.9-8.4,1.8c-0.4,0.5-0.9,1-1.6,1.4c-3.4,2.5-8.3,1.7-10.7-1.7
		c-2.5-3.4-1.7-8.3,1.7-10.7c1.4-1,3-1.4,4.7-1.4c2.8,0.1,10.1,1.6,16.1,0.5l1.6-0.3c6-1,13.4-6.4,16.2-11.8c0,0,2.9-5,6.3-11.1
		c3.5-6.2,3.3-12.8-0.5-15.1l-6.9-3.9c-3.5-2-9.2-2-12.7,0l-47.7,26.9c-3.4,2-6.3,6.9-6.3,10.9v52.5c0,4.1,2.9,8.9,6.3,10.9
		l47.7,26.9c3.5,2,9.2,2,12.7,0l47.6-26.9c3.5-2,6.3-6.8,6.3-10.9v-52.5c0-4.1-2.9-8.9-6.3-10.9C327.2,366.8,323.7,364.8,319.4,362.3
		z" />
	</svg>

  ------

how to get total length using js

var path = document.querySelector('.logo');
var length = path.getTotalLength();