# Introduction

This page explains my approach to structuring the styles on my personal portfolio. It should also explain the basic premise, so you can further explore the concepts for use in your own work.  

## Inverted Triangle CSS (ITCSS)

> 'A sane, scalable, managed CSS architecture from [@csswizardry](https://twitter.com/csswizardry).'

ITCSS (pronounced "Its"), is an un-oppioniated methodology to writing CSS that complements it's natural cascading behaviour.  

> "The ITCSS philosophy is a simple one at its core. Basically that we should order CSS by metrics defined by the language (and its features) than by the usual standard of human-oriented patterns." - Harry Roberts<sup>1</sup>

Conceptually it can be visualised as an upside-down triangle, this helps to illustrate a few principles central to creating scalable and maintainable CSS. A project should progress in a unidirectional way through the triangle, from top to bottom.  

![ITCSS Triangle Gif](https://raw.githubusercontent.com/dwoodiwiss/woodiwiss-theme-2015/master/resources/docs/itcss-diagram.gif)  
*The triangle helps to visually show the narrowing of reach, specifity & explicitly.<sup>2</sup>*

### Reach
Reach loosely refers to how broadly something can affect your project. At the beginning of the project, you should apply your resets, settings, mixins and wide reaching variables. Genreally things that, if changed later on, would have a big impact.

### Specifity
Specifity can be quite a complex issue, this relates to how you target elements with your styles. MDN<sup>3</sup> has a useful list of how specifity is weighted in CSS.  Hopefully you can see parallels between the list below and the ITCSS triangle.  Specifity increases the further down the triangle you go.  

> The following list of selector types is by increasing specificity:  
>> * Universal selectors (e.g., *)  
>> * Type selectors (e.g., h1)  
>> * Class selectors (e.g., .example)  
>> * Attributes selectors (e.g., [type="radio"])  
>> * Pseudo-classes (e.g., :hover)  
>> * <del>ID selectors (e.g., #example)</del>  
>> * <del>Inline style (e.g., style="font-weight:bold")</del>  

ITCSS suggests ID selectors are not used for applying styles. And inline styles are genreally just bad practice.  

### Explicity
Explicity should naturally happen if you follow the triangle from top to bottom. As you progress downwards `Base > Objects > Components > Trumps` you will be adding a new layer of explicitness to certain elements as you start to create specific components. Ultimately in the last layer type `Trumps` you may find the use of `!important` actually quite acceptable and maintainable because you know where to look for it.  



1. [Manage large-scale web projects with new CSS architecture ITCSS](http://www.creativebloq.com/web-design/manage-large-scale-web-projects-new-css-architecture-itcss-41514731) - Harry Roberts [@csswizardry](https://twitter.com/csswizardry)
2. [Managing CSS Projects with ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) - Harry Roberts [@csswizardry](https://twitter.com/csswizardry)
3. [CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) - Mozilla Developer Network (MDN)

