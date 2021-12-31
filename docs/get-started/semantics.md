---
sidebar_position: 2
---

# Semantics

Semantic HTML does not only provide meaning to content elements, it also provides the foundation for elements' interactivity. Be it links, buttons or various form inputs - browsers know exactly how to deal with them, and they provide the user with everything needed for proper interaction with the website.

## Standard functionality over Custom functionality

Adding proper standard HTML helps screen readers to announce elements in such a way that their users know how to interact with them. Additionally, HTML is the foundation for a lot of inherent standard functionality that is provided "for free" by the browser. That means that it just works for all kinds of devices.

```html
<span onclick="..." role="link">Link to About page</span> ❌
```

```html
<a href="...">Link to About page</a> ✅
```

## Use headings correctly

Marking up text using an ```<h#>``` tag tells the user agent that this is not just plain text, but - in fact - a heading of a certain level.

Screen reader users can use heading structure to navigate content. By using headings (```<h1```>, ```<h2>```, etc.) correctly and strategically, the content of your website will be well-organized and easily interpreted by screen readers.

Be sure to adhere to the correct order of headings, and separate presentation from structure by using CSS (Cascading Style Sheets). Do not pick a header just because it looks good visually (which can confuse screen reader users); instead, create a new CSS class to style your text.

```html
<h3>#category: javascript</h3> ❌
<h1>This is the title</h1>
<h2>This is the subtitle</h2>
```

```html
<span style="h3">#category: javascript</span> ✅
<h1>This is the title</h1>
<h2>This is the subtitle</h2>
<h3>...</h3>
```

<!-- <div style={{display: "inline"}}>
	<table style={{display: "inline"}}>
		<tbody>
			<tr>
				<td class="tg-0pky"><code>h1</code></td>
			</tr>
			<tr>
				<td class="tg-0pky">h2</td>
			</tr>
			<tr>
				<td class="tg-0pky">h3</td>
			</tr>
		</tbody>
	</table>
	✅
</div>
<div style={{display: "inline"}}>
	<table style={{display: "inline"}}>
		<tbody>
			<tr>
				<td class="tg-0pky">h3</td>
			</tr>
			<tr>
				<td class="tg-0pky">h1</td>
			</tr>
			<tr>
				<td class="tg-0pky">h2</td>
			</tr>
		</tbody>
	</table>
</div> -->

## Use structural elements

Structural elements are used to group elements on a webpage, separating them into different regions (like header, navigation, main, or footer).

![Semantics](/img/semantics.png)