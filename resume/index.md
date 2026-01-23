---
layout: base
title: Resume
---
# Joe Imhoff
Contact me through my socials [LinkedIn](https://www.linkedin.com/in/joe-imhoff/) | [GitHub](https://github.com/iwnnay)

{% for job in site.data.resume.jobs %}
## {{ job.company }}
**{{ job.location }}**
    {% for position in job.positions %}
### {{ position.title }}
{{ position.start }} - {{ position.end }}

    {% for responsibility in position.responsibilities %}
- {{ responsibility }}
    {% endfor %}
{% endfor %}
{% endfor %}