jQuery plugin for changing images on hover
==========================================

Why bother writing CSS or inline mouseover events for changing images on hovering over them? Now you can do exectly the same thing by implementing just a few rows of Javascript (see SCRIPT below)!

Instructions for use
--------------------
1.	Download and unzip the package from GitHub: [ChangeImgOnHover](http://github.com/vanjaanderson/ChangeImgOnHover).
2.	Put the rows of code in the bottom of your html-document or make sure DOM has been fully created before executing the jQuery-code. You can also force the browser to wait until the DOM is ready, by embedding the code: <code>$(document).ready(function() { jQuery-plugin here });</code>.
3. Create a hover variant for every image that you want to have hover effcet on. Extend the image name with <code>_hover</code>. All images should lay in the same directory.
4. In the HTML-code, the images must be assigned with the class name of ”hover”.
5. Good luck and enjoy!

HTML
----
<pre>
&lt;img src='img/cat1.jpg' class='hover' alt='cat 1' />
&lt;img src='img/cat2.jpg' class='hover' alt='cat 2' />
&lt;img src='img/cat3.jpg' class='hover' alt='cat 3' />
</pre>

Script
------
<pre>
01 (function($) {
02   $.fn.changeImgOnHover = function() {
03     $('.hover').each(function() {
04       var imgName = $(this).attr('src').slice(0,-4);
05       var extName = $(this).attr('src').split('.').pop();
06       var hoverImg = imgName + '_hover.' + extName;
07       var origImg = imgName + '.' + extName;
08       $(this).mouseover(function() {
09         $(this).attr('src', hoverImg);
10       });
11       $(this).mouseout(function() {
12         $(this).attr('src', origImg);
13       });
14     });
15   };
16 }) (jQuery);
</pre>
The plugin is triggered by a single row of code outside the function: <code>$('.hover').changeImgOnHover();</code>

Working Demo
------------
Visit webpage [ChangeImgOnHover](http://vanjaswebb.se/change-img-on-hover) for a working demo and more instructions.

Changelog
---------
2014-06-20 - First relase, version 1.0
