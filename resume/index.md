---
layout: base
title: Resume
---

# Joe Imhoff

Download my resume or contact me through my
socials [LinkedIn](https://www.linkedin.com/in/joe-imhoff/) | [GitHub](https://github.com/iwnnay)

<div class="download-block">Download
<span onclick="downloadResume()">Resume</span>,
<span>CV</span>,
<span>Everything</span>,
<span>General Cover Letter</span>
</div>


<details>
    <summary>Work Experience</summary>
    {% include resume/jobs.html %}
</details>
<details>
    <summary>Education</summary>
    {% include resume/education.html %}
</details>
<details>
    <summary>Certificates</summary>
    {% include resume/certificates.html %}
</details>
<details>
    <summary>Classes</summary>
    {% include resume/classes.html %}
</details>

{% include resume/skills.html %}