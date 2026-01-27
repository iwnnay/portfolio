---
layout: base
title: Resume
---

# Joe Imhoff
Contact me through my socials [LinkedIn](https://www.linkedin.com/in/joe-imhoff/) | [GitHub](https://github.com/iwnnay)

{% for job in site.data.resume.jobs %}
<div class="company-name">{{ job.company }}</div>
<div class="company-info">
<div class="company-location">{{ job.location }}</div>
{% if job.start and job.end %}
    <div class="job-duration">
    <span class="start">{{ job.start }}</span> - <span class="end">{{ job.end }}</span> <span class="duration"></span>
    </div>
{%  endif %}
</div>
    {% for position in job.positions %}
<div class="job-title">{{ position.title }}</div>
<div class="job-duration">
<span class="start">{{ position.start }}</span> - <span class="end">{{ position.end }}</span> <span class="duration"></span>
</div>

<ul>
    {% for responsibility in position.responsibilities %}
    <li>{{ responsibility }}</li>
    {% endfor %}
</ul>
<div class="skills">
{% for skill in position.skills %}
    <span class="skill">{{ skill }}</span>
{% endfor %}
</div>
{% endfor %}
{% endfor %}

{% for skill in site.data.resume.skills %}
<dialog id="skill-{{ skill.name | slugify }}">
    <h3>{{ skill.name }}</h3>
    <div class="button close-skill">X</div>
    <div class="skill-level"><span class="skill-label">Level:</span> <span class="skill-level-value">{{ skill.level }}</span></div>
    <div class="skill-years"><span class="skill-label">Years:</span> <span class="skill-years-value">{{ skill.years }}</span></div>
    <div class="skill.details">{{ skill.details }}</div>
</dialog>
{% endfor %}