let submitted = false;
let footer = `
    <meta charset="UTF-8">
    <div class="page-end">
        <h4 class="footer-text">Made with ♥ by Erick White ©<span class="year"></span></h4>
        <a class="social-link" href="https://github.com/ErickWhiteDev" target="_blank">
            <svg>
                <use href="assets/svg/github-logo.svg#github-logo"/>
            </svg>
        </a>
        <a class="social-link" href="mailto:erickwhitebusiness@gmail.com" target="_blank">
            <svg>
                <use href="assets/svg/email-logo.svg#email-logo"/>
            </svg>
        </a>
    </div>
    <div class="survey">
        <form action="https://docs.google.com/forms/d/e/1FAIpQLScXgfCx44FbTs9W1XjOAyrSTc1i2XPvYFwpeVHOAbqGAs3aeg/formResponse?" target="hidden_iframe" onsubmit="submitted=true;"> <!-- https://github.com/toperkin/staticFormEmails/blob/master/README.md -->
            <fieldset id="contact-form">
                <label>First Name: <input type="text" name="entry.365920305" required></label>
                <label>Last Name: <input type="text" name="entry.715211019" required></label>
                <label>E-Mail: <input type="email" name="entry.852091589" required></label>
                <label>Questions and Comments:
                    <textarea name="entry.1339925219" rows="3" cols="30" placeholder="Let me know what you think!"></textarea>
                </label>
                <input type="submit" value="Submit" id="submit">
            </fieldset>
        </form>
        <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>
        <h3 id="confirmation">Thank you! Your response has been submitted!</h3>
    </div>
`;

document.getElementById("footer").innerHTML = footer;
