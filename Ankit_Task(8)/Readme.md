# Task 08 - Laundry Services Hamburger Menu

## Objective
Add a CSS-only hamburger navigation menu to the mobile view of the Laundry Services website.

## Features
- Preserves the responsive Laundry Services layout from Task 07.
- Desktop navigation links remain visible on desktop and tablet layouts.
- Hamburger icon is displayed only on mobile screens (600px and below).
- Mobile menu is hidden by default and positioned on the right side of the navbar.
- Focusing the hamburger button displays the menu using the CSS `:focus` pseudo-class.
- No JavaScript or Bootstrap is used.

## Files
- `index.html` - page structure and navigation menu.
- `index.css` - page styling, responsive layout, and focus-based menu behavior.

## CSS Concept Used
The mobile menu is placed immediately after the hamburger button in the HTML. This allows the adjacent-sibling selector to display the menu when the button receives focus:

```css
.hamburger:focus + .menu-list {
    display: flex;
}
```

The menu is hidden by default with `display: none` and positioned using `position: absolute` inside the relatively positioned navbar.

## How to Run
1. Extract the ZIP file.
2. Open `index.html` in a web browser.
3. Resize the browser to a mobile width (600px or less).
4. Click or keyboard-focus the hamburger icon to open the menu.

## Technologies
- HTML5
- CSS3
- Flexbox
- CSS Media Queries
- CSS `:focus` pseudo-class

## Author
Ankit Mishra
