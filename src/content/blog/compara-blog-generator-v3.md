---
pubDatetime: 2023-10-27T13:22:00Z
title: Compara.cat blog generator v3
featured: true
draft: false
tags:
  - BuildingInPublic
  - Compara.cat
  - Python
description:
  This blog will explain the v3 of the compara.cat blog generator using python, openAI and a little web scrapping to improve performance and content.
---

This is the first post about the [Compara.cat](https://compara.cat) algorithm but it's actually the third iteration. 
After using Apps scripts + spreadsheet and then a simple Android app, I rewrote everything in python. Let me explain why and how :)

## Why?

The first iteration used Apps scripts + spreadsheet. I simply had to input a list of product IDs and it would get the info for each of them. After that it will create a new row with the comparison content. Finally it will push it to GitHub. All automatically.

Sounds good, right? Well it had some shortcomings:

1. Javascript and limited Apps scripts
2. Free but with a max 5min execution and slow
3. Dificult to edit or modify and quite errorprone.

Then, I thought. I am actually an Android Dev. I could create an app instead and it would allow me to generate blog on the go at any time and I 
would overcome some of the shortcomings:

![](assets/images/compara-app-1.png)
![](assets/images/compara-app-2.png)

It was not bad, but it got overcomplicated and I needed more control over the generation. **So... I rewrote everything in a simple 400 lines python script**. 

## The result

<video width="auto" height="auto" controls>
  <source src="compara-cat-demo.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

## How?

It's actually quite straightforward:

1. For each link I am using [scraperapi.com](https://scraperapi.com) to get product info and reviews
2. Then I use OpenAI to create a shorter title, product info and summarize the reviews into a simple pros/cons list
3. After that, I pass all the summarized info + the pros/cons list to OpenAI to generate the comparison blog
4. Finally save all in yaml format directly into the [compara.cat](https://compara.cat) folder.

I am using Hugo to generate the website with a custom theme and shortcodes that will take the yaml data and display it nicely. 
Here is how the article file looks like:

```yaml
---
date: 2023-11-11
description: Descobreix quin és el millor xumet per al teu nadó amb la nostra comparativa.
  Analitzem diferents opcions per oferir-te la millor recomanació. Troba comoditat,
  qualitat i funcionalitat en un sol producte.
image: https://m.media-amazon.com/images/I/219emjlTCIL.jpg
images:
- https://m.media-amazon.com/images/I/219emjlTCIL.jpg
post_data:
  conclusion: Després d'analitzar detingudament tots els productes, la nostra recomanació
    clara és el xumet Philips Avent Ultra Air SCF085/01. Aquest xumet combina qualitat
    i preu d'una manera excepcional, oferint comoditat, funcionalitat i un disseny
    atractiu. Les seves característiques de transpirabilitat i lleugeresa el converteixen
    en la millor opció per als nadons. Per tots aquests motius, el recomanem com el
    millor xumet del grup.
  intro: 'Els **xumet**s són un element crucial per als **nadons**, ja que no només
    alleugen i calmen als més petits, sinó que també poden ajudar a prevenir problemes
    de dentadura.


    Però com triar el millor per al teu nadó? En aquesta entrada del blog, compararem
    els millors **xumet**s del mercat i recomanarem un guanyador clar.'
  products:
  - B08V52W7BX
  - B08V52W7BX
  - B0BX778GPQ
  - B09F673H12
  - B08F61WMKV
  - B0BDMPHRSL
  - B09QY9T9HZ
  - B08F5ZDZBT
  - B0937LGQ37
  - B08ZKP1KD6
  - B07SWF5R3G
tags:
- xumet
- nadons
- comparativa
- millor xumet
title: 'Comparació dels millors xumets per a nadons: Troba el més adequat per al teu
  petit'
---

{{< post_content />}}
```

And this is how it looks after Hugo builds it:

![](assets/images/compara-blog-demo.png)

**What do you think of my setup :P**

