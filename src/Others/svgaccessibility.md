=============================================
<!-- Writing accessible SVG-->
=============================================

- When making images that the purpose is entirely cosmetic I should set it to 'aria-hidden = true' so it can be disabled for people with a dissability and the site would render faster to them.

- on SVG images we do not use alt to add worded explanations of an image but <title>

- we also use aria-labelledby and aria-describedby to get more in depth information for assistive purposes. No need to provide link confirmations as the assisted user will know that and you'll be repeating information.
=============================================
<!-- Writing Accessible SVG --> 
=============================================

using id on title and then aria-labelledby on svg to make sure screen reading devices will pick up on the title

    <div class = 'sidebar'>
        <a href='#notificaitons'><svg aria-labelledby='bell' blabla='blabla'>
        <title id='bell'>notifications</title>
        <path id='yabadaba' d='m4jasdadsadoo'>
        </svg></a>

        <a href='#notificaitons'><svg blabla='blabla'>
        <title>notifications</title>
        <path id='yabadaba' d='m4jasdadsadoo'>
        </svg></a>
--

using again id on title and desc now to then on svg image be able to maatch it up using the ids chart and chartDesc so again screen readers will detect or code. using aswell aria-hidden='true' so it wont read given its cosmetic image

    <body>
        <svg aria-hidden='true' xmls='hhtp://www.3.org/2000/svg' aria-labelledby='chart' aria-describedby='chartDesc'>
        <title id='chart'>Pizza survey pie chart</title>
        <desc id='chartDesc'>Developers have a responsibility to ensure images on the web are accessible to all users</desc>
        <div class = 'sidebar'>
            <a href='#notificaitons'><svg aria-labelledby='bell' blabla='blabla'>
            <title id='bell'>notifications</title>
            <path id='yabadaba' d='m4jasdadsadoo'>
            </svg></a>

=============================================
<!--  Viewbox  -->
=============================================
                      
We can control the view user has using the special attribute called viewbox. It allows to define how an image is displayed by zooming in and out and panning along the x and y axis.

viewBox = "min-x min-y width height"

=============================================
<!--  <!--  Grouping GraphicsViewbox  -->
=============================================

<g> is a container used to group other SVG elements.

<defs> element is used to store graphical objects that will be used at a later time

<use> element takes nodes from within the SVG document, and duplicates them somewhere else.

when using <use> to grab an image from <defs> we use href = #id put on the defs element.

=============================================
<!--  Reusing Graphics  -->
=============================================

<symbol> element is used to define graphical template objects which can be instantiated by a <use> element.

The use of <symbol> elements for graphics that are used multiple times in the same document adds structure and semantics. Documents that are rich in structure may be rendered graphically, as speech, or as Braille, and thus promote accessibility.

symbol accepts a viewbox attribute, which makes it very good compared to defs

When grabbing from defs or symbol its important to set display: 'none' to svg element that would be blank and occupying space otherwise

He used currentColor to assign different color within same class taking advantage of cascade selectors

