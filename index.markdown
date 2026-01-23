---
layout: base
title: Home
---
<h1>Joe Imhoff Portfolio</h1>

Welcome to portfolio where I can showcase my professional skills along with work samples, projects, and community works.

# Summary
I've been working in software development for the last 15+ years. I have built and maintained applications for web, mobile, desktop, systems administrations, and platform deliverabilty. I'm a full-stack engineer with a speciality in highly available and scalable software solutions. I'm currently expanding my knowledge into AI through machine learning, deep learning, and agentic systems. And I am passionate about management, helping others grow by meeting them where they're at each day and pushing them to do better for tomorrow.

For more information on my experiences and accomplishments visit my [resume page](/resume).

# Recent Project Notes

While it's not always possible to show off the work I'm doing, here is a spot where I can talk about it, share my thoughs, and maybe present smaller pieces out of context.

[View all project notes](/projects)

{% for post in site.projects limit:5 %}
<article>
<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
<p>{{ post.excerpt }}</p>
<p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
</article>
{% endfor %}