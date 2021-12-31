---
sidebar_position: 3
---

# ARIA

Since the early days of HTML, many de-facto standard user interface patterns have made their way into the collective awareness of the internet, often generally referred to as widgets or rich internet applications (RIAs). Many of those lack native HTML equivalents - typical examples being tablists, dropdown menus, and autocompletes.

The Web Accessibility Initiative (WAI) - which belongs to the World Wide Web Consortium (W3) - has introduced the technical specification ARIA. It provides specific HTML attributes (role and aria-*) that allow adding specific semantical meaning to existing HTML elements:

Role adds (or overrides) a semantical role of an element, for example ```<span role="button">```.
aria-* attributes provide statuses to the current semantical role, for example ```<span role="button" aria-pressed="true">```.
Those statuses can have specific values, depending on the role of the element. For example, aria-pressed can have the values true, false, and mixed.

## ARIA Labels

The aria-label attribute is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use aria-labelledby instead.

This attribute can be used with any typical HTML element; it is not limited to elements that have an ARIA role assigned.

**Example:**
```<button aria-label="Close" onclick="myDialog.close()">...</button>```

## ARIA Roles

An ARIA role attribute can be added to an element to instruct assistive technologies to treat the element as something other than its native HTML element type. For example, an ```<a>``` element with role="button" will be treated as a button, not as a link.


```html
<div role="radiogroup" aria-labelledby="size" id="rg1">
  <h3 id="size">T-shirt size:</h3>
  <div role="radio" aria-checked="false" tabindex="0">Small</div>
  <div role="radio" aria-checked="false" tabindex="-1">Medium</div>
  <div role="radio" aria-checked="false" tabindex="-1">Large</div>
</div>
```

## ARIA States

ARIA 1.1 defines multiple "states" that can be applied to elements. States are likely to change as the user interacts with the page.

States are inserted into elements as follows: ```<element aria-state="value"></element>```. Example:

```html
<span aria-busy="true">
  This element is currently being updated.
</span>
```