#Responsive Page Exercise

The goal of this small project is do create a responsive page that looks cool. Simple enough right? 

I will start out by going through the five-part tutorial on [CreativeBloq.com](http://www.creativebloq.com/build-responsive-site-week-designing-responsively-part-1-4122851). After that is finished, I will add my own enhancements as needed. Also check out the creator's of this tutorial, Paul Lloyd, [repo on this project.](https://github.com/paulrobertlloyd/roadtrip/)

If all of the images still work (and that's a big if) it should resemble something like this:

[<img width="800px" src="http://media.creativebloq.futurecdn.net/sites/creativebloq.com/files/imagecache/v2_article_image/articles/article/2013/09/roadtripresponse2_original.jpg">](http://www.creativebloq.com/build-responsive-site-week-designing-responsively-part-1-4122851)

#Major Takeaways

* A mobile first approach is the preferred way to start the design of the site. (Start small, then expand)
* Scaling images can be a bit of a pain, many prefer to use SVGs with debate on wheter to handle bandwidth usage on client or server side
* How do you make text proportional? **target / context = result**  with the browser default font size being 16px. For example if you want a heading to be 28px (28 / 16 = 1.75em)
* Media queries are pretty awesome. It even includes the ability to detect orientation and aspect ratio. 
* The **<meta name="viewport" content="initial-scale=1.0, width=device-width"/>** is needed to override the page from being rendered at 960px (You can thank the iPhone for this). 
* While there are a lot of emulators out there, nothing is better than a real mobile device to test on. Any testing is better than no testing.
* When measuring the performance of a site the three key things you’ll want to focus on are: caching, the size of the files and the number of HTTP requests being made.  Tools like [Google Page Speed](http://developers.google.com/speed/pagespeed/insights/), [ySlow](http://yslow.org/) and [WebPagetest](http://www.webpagetest.org/) can tell us how well pages are performing and suggest areas for improvement.
* RWD is a form of "progressive enhancement" and only the beginning of providing a better web experience. 
