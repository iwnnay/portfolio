---
layout: default
title: Interview Questions
---

# Interview Questions & Answers

## Technical Questions

{% for question in site.data.interview_questions %}
<article class="interview-question">
<h3>{{ question.question }}</h3>
<div class="answer">
{{ question.answer | markdownify }}
</div>
</article>
{% endfor %}
