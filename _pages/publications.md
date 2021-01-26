---
layout: page
permalink: /coaching-experience/
title: coaching experience
description: Low Chee Kiang's coaching experience
years: [2018-2021,2013-2018,2012-2013,2001-2012,2000-2001,1982-1998,1981,1977-1980,1974-1975,1972-1973]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f coaching -q @*[year={{y}}]* %}
{% endfor %}

</div>
