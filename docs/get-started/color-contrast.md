---
sidebar_position: 1
---

# Color Contrast

Contrast is calculated using "relative luminance", which is defined as:

The relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white.
(relative luminance W3.org)

The relative luminance can be calculated from any colour code (like HEX or RGB).

![Color Contrast 1](/img/color-contrast-1.png)

## The formula

To calculate the contrast ratio, the relative luminance of the lighter colour (L1) is divided through the relative luminance of the darker colour (L2):
(L1 + 0.05) / (L2 + 0.05).

### Example

![Color Contrast 2](/img/color-contrast-2.png)

## Official Requirements from WCAG

**Level AA** 1.4.3 Contrast (Minimum): The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

- Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.

- Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

- Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
