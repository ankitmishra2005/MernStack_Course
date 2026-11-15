# FreshFold — Laundry Services Web App (Task 20)

A responsive laundry-service booking website built with HTML, CSS and vanilla JavaScript. It includes a service catalogue, interactive basket, live total calculation, booking form, and EmailJS integration points.

## Project files

- `index.html` — page structure and content
- `style.css` — responsive layout and styling
- `script.js` — service rendering, cart operations, form validation and EmailJS call

## Run locally

1. Extract the ZIP file.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

An internet connection is required for the Google Fonts and EmailJS CDN scripts.

## Features

- Responsive navigation with Home, Services, About Us and Contact Us.
- Hero section with a button that scrolls to the services.
- Achievement strip: 15+ services, 240+ customers and 2+ years of experience.
- Service cards with name, description, price, Skip Item and Add Item buttons.
- Dynamic basket with remove controls, item count and automatically calculated total.
- Booking form with full name, email, phone number and pickup date.
- Confirmation message after a valid demo booking.
- Newsletter subscription interaction.
- Footer with important links and contact details.

## Configure EmailJS (to send real confirmation emails)

The project uses EmailJS in the browser. To enable actual email delivery:

1. Create an account at https://www.emailjs.com/.
2. Add and connect an email service in your EmailJS dashboard.
3. Create an email template. Add template variables matching these names:
   - `customer_name`
   - `customer_email`
   - `customer_phone`
   - `pickup_date`
   - `order_items`
   - `total_amount`
4. In `script.js`, replace:
   - `YOUR_PUBLIC_KEY` with your EmailJS public key.
   - `YOUR_SERVICE_ID` with your EmailJS service ID.
   - `YOUR_TEMPLATE_ID` with your EmailJS template ID.
5. Save the file and test a booking using your own email address.

Suggested email template:

**Subject:** FreshFold booking confirmation

**Body:**
Hello {{customer_name}},

Thank you for booking with FreshFold!

Phone: {{customer_phone}}
Pickup date: {{pickup_date}}

Services:
{{order_items}}

Total: {{total_amount}}

We will get back to you soon.

Regards,  
FreshFold Laundry Team

> Important: The site displays a demo success message and logs the booking details in the browser console until valid EmailJS credentials are added. Never put private email passwords or secret API credentials in frontend code. EmailJS public keys are designed for browser use; configure allowed origins and email sending limits in your EmailJS account.

## Before submission

- Test the page in a browser.
- Test adding multiple services and removing services from the basket.
- Check that the total changes correctly.
- Configure and test EmailJS if real email confirmation is required.
- Deploy the folder using GitHub Pages, Netlify or Vercel, then submit the deployed URL with the ZIP file.
