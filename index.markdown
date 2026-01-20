---
layout: home
title: Home
---
<h1>Joe Imhoff Portfolio</h1>

<p>If you're looking for professional information about me, you've come to the right place.</p>

# Summary
Full-Stack Engineer and AI Specialist with 15+ years building enterprise-scale systems. Proven expertise in designing multi-agent AI solutions (LangGraph, CrewAI), cloud infrastructure (AWS, Vertex), and data pipelines (Airflow, Kafka). Delivered 12+ agentic AI projects for healthcare, insurance, and manufacturing clients, reducing operational costs by 30%+ through automation. Adept at scaling systems while maintaining SLO-driven reliability and enterprise compliance.

# Recent Project Notes
{% for post in site.projects limit:5 %}
<article>
<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
<p>{{ post.excerpt }}</p>
<p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
</article>
{% endfor %}
<p><a href="/projects/">View all project notes</a></p>