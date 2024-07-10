---
layout: '../layouts/Layout.astro'
title: 'NHEA - register'
---

<h1 class="font-[400] primary">2024 NHEA Convention Registration</h1>

To register, please complete the form below. We highly recommend using an email address only once for each registered person to prevent possible registration issues. The registration fee for this convention is $300 per person.

Notice for @hawaii.edu emails: The auto-confirmation email containing a record of your responses may be delayed (est. 1 day). Mahalo for your support and understanding.

<form onsubmit="((e) => { e.preventDefault(); const btn = document.querySelector('#action-submit'); btn.setAttribute('disabled', true); const status = document.querySelector('#status'); status.className = ''; const data = new FormData(this); const action = e.target.action; fetch(action, { method: 'POST', body: data }).then(res => res.json()).then(res => res.error ? (status.innerHTML = '<p>There was an error processing your form. Feel free to try again and/or contact us.</p>', status.classList.add('error')) : res ? (status.innerHTML = '<p>Success! Your form submission was processed.</p>', status.classList.add('success')) : (status.innerHTML = '<p>Sorry, something went wrong. Feel free to contact us about this matter.</p>', status.classList.add('Error'))); btn.removeAttribute('disabled') })(event)" action="https://script.google.com/macros/s/AKfycbw-y6YYG9c_3qcujy_-Qqaem0She2U9lBE76UV8m1sBNgryBxxRqAjCT9AUUQKxAsnq/exec?sheetName=2024 Mock Registrants">
  <h3>Registrant Information</h3>
  <p>asterisk (*) means required</p>
  <hr />
  <label>
    First Name*
    <input name="First Name" type="text" required />
  </label>
  <label>
    Last Name*
    <input name="Last Name" type="text" required />
  </label>
  <label>
    Email*
    <input name="Email" type="email" required />
  </label>
  <label>
    Organization or Affiliation*
    <input name="Organization" type="text" required />
  </label>
  <label>
    Position Title*
    <input name="Position" type="text" required />
  </label>
  <label>
    City*
    <input name="City" type="text" required />
  </label>
  <label>
    State*
    <input name="State" type="text" required />
  </label>
  <label>
    Zip Code*
    <input name="Zip" type="text" required />
  </label>
  <label>
    Phone Number*
    <input name="Phone" type="tel" required />
    <p class="hint">numbers only</p>
  </label>
  <h3 class="mb-2">Payment Method*</h3>
  <p class="hint">**Only One Purchase Per Person/Email/Submission**<br />NHEA Convention Registration is $300<br />If paying with Cash, Check, or Purchase Order, direct your payment to:<br />NHEA<br />P.O. Box 1190<br />Wailuku, HI 96793</p>
  <hr />
  <label>
    <input type="radio" name="Payment Method" value="PayPal" />
    <span>PayPal</span>
    <p class="hint">Submit this form and yellow PayPal button will appear below</p>
  </label>
  <label>
    <input type="radio" name="Payment Method" value="Cash" />
    <span>Cash</span>
    <p class="hint">See above for address or have it ready on day of event</p>
  </label>
  <label>
    <input type="radio" name="Payment Method" value="Check" />
    <span>Check</span>
    <p class="hint">See above for address or have it ready on day of event</p>
  </label>
  <label>
    <input type="radio" name="Payment Method" value="Cash" />
    <span>Cash</span>
    <p class="hint">If known, please enter PO No. below; see above for address</p>
  </label>
  <label>
    Purchase Order No.
    <input name="Purchase Order No." type="text" />
  </label>
  <button id="action-submit" type="submit" class="mt-4 py-2 px-5 cursor-pointer">Submit</button>
  <blockquote id="status" class="hidden"><p>Processing...</p></blockquote>
  <p class="text-center"><strong>If you have any inquiries or requests please email <a href="#">nhea.hawaii@gmail.com</a>.</strong> This form is not yet protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
</form>
