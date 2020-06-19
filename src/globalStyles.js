import { createGlobalStyle } from "styled-components";
import Background from "./assets/backgroundGradient.svg";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

/* hack */
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked),
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

[type="checkbox"]:checked + label,
[type="checkbox"]:not(:checked) + label,
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 38px;
    cursor: pointer;
    line-height: 21px;
    display: inline-block;
    /* color: #666; */
}

[type="checkbox"]:checked + label:before,
[type="checkbox"]:not(:checked) + label:before,
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    width: 20px;
    height: 20px;
    border: 1px solid #000000;
    border-radius: 100%;
}

[type="checkbox"]:checked + label:before,
[type="radio"]:checked + label:before {
    background-color: #666666;
}

h1,h2,h3,h4 {
  margin: 0;
  color: #000000;
}

html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  background-size: contain;
  background: url(${Background}) no-repeat bottom center;
  height: 100vh;
  background-size: contain;
  font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: -0.025em;

  @media all and (max-width: 767px) {
    background: none;
  }
}

main {
  display: block;
}

h1 {
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 15px;

  @media all and (max-width: 767px) {
    font-size: 14px;
    line-height: 16px;
     margin-bottom: 3px;
  }
}

hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}

pre {
  font-family: monospace, monospace; 
  font-size: 1em; 
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}


small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}

button,
input { 
  overflow: visible;
}

button,
select { 
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}


button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; /* 3 */
  white-space: normal; 
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}


[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`;
