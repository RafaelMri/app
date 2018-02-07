# Trustlane.me - simple trust builder App

Token issuers need their customers / investors to sign trust from their tokens. This is a simple trust builder app, a few steps further from a Proof of Concept.

The idea is that a token issuer fills out his trust form, receives a unique URL which they can then share with the intended token recepients.

## Caveat:
The token recepients unfortunately need to paste a private key. The code can be peer reviewed to demonstrate fair use of the account secret, however since we are dealing with JavaScript and HTTP / HTTPS, it is always safer to assume things are not 100% safe. If you have a suggestion about this, please submit an Issue.

## Brunch + React + Babel/ES6

Built with a modern JS skeleton with React for [Brunch](http://brunch.io).

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm/yarn start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build / yarn build` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

## TODO:
- [x] Auto-mark ALPHA 4 / 12 based on string length
- [x] Routing for static pages - fixed (404.html)
- [x] Nice hero unit and explainer
- [x] Check if minimum balance is met before signing
