![screely-1692138397538](https://github.com/jacobbinnie/tailwind-animations/assets/83803154/862fcf82-911b-4a32-85df-8c83032f8e2f)


## Tailwind Animations - a library of copy + paste animations

✨ Introducing Tailwind Animations: a gorgeous library of copy + paste animated buttons, animated gradients, animated backdrop spaces and classics for your apps.

<a href="tailwindanimations.co">View production app</a>

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
