![bb9f425e-a073-4d3e-89f8-cb0b9543ca86](https://github.com/jacobbinnie/tailwind-animations/assets/83803154/a3662fda-1ff5-4b7e-a52d-e3e97f9082c8)

## Tailwind Animations - a library of copy + paste animations

✨ Introducing Tailwind Animations: a gorgeous library of copy + paste animated buttons, animated gradients, animated backdrop spaces and classics for your apps.

## Features

- Copy and paste keyframes & code
- Stripe payments
- User authentication and access control
- Mobile responsiveness

## How it works

Core stack: Typescript + Next.js + Firebase + Tailwind

--

In a nutshell it's essentially a json file of keyframes and animations in string format. The frontend simply displays these in a grid layout with easy access for the user to copy / paste. Once selected, the keyframes / animation definitions are parsed and copied to the user's clipboard. Clear instructions are provided on how to integrate any animation into a tailwind project.

An obvious issue here for maintaining profitability is ensuring the elements can't be browser inspected. I found a super nifty package called `disable-devtool` that solves this use case instantly. What's cool is this app made around $2k USD in it's first month and I've decided I wanna open source it.

Payments are made through stripe webhooks and tap into a firestore database for enabling access to individual users.

UI is designed using Tailwind. 100% custom components and design.

The entire application is typesafe and super clean as eslint / prettier have been active contributors from first init.
