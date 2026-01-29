---
layout: base
title: Projects
---

# Projects
Show me all the projects!

{% for post in site.posts %}
<article>
<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
<p>{{ post.excerpt }}</p>
<p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
</article>
{% endfor %}
