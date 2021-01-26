---
layout: page
permalink: /achievements/
title: achievements & awards
description: A running list of various Judo accomplishments and accolades 
years: [1981,1980,1979,1978,1977,1975,1974,1973,1972]
nav: true	
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f achievements -q @*[year={{y}}]* %}
{% endfor %}

</div>

