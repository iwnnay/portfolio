---
layout: default
title: Projects
---

# My Projects

## Featured Projects

{% for project in site.data.projects %}
<article class="project">
<h3>{{ project.title }}</h3>
<p>{{ project.description }}</p>
<p><strong>Technologies:</strong> {{ project.technologies | join: ', ' }}</p>
<p><a href="{{ project.github_url }}">View on GitHub</a></p>
</article>
{% endfor %}
