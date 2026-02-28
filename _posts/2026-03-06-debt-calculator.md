---
layout: post
title: "Debt Calculator: Day 1"
---

Here's my goal. I want to see how many hours it'll take to build a debt calculator using AI. With Svelte. I'm going to be
using JetBrains AI. I'm hoping it only takes a couple of hours, but I've actually been trying a lot lately to get this done
with a few smart prompts and it has not gone well.

Let's begin.

## Step 1: Create a repo
Ah, it looks like I attempted to do this a while ago, but didn't get it complete. So I'm just going to start over.
Here's a link if [you're looking for the repo](https://github.com/iwnnay/debt_suggestion).

## Step 2: Create a base svelte app
```bash
npx sv create debt_suggestion
```

I'm just going to replace the app that's already there at this point.

```bash
cd debt_suggestion
yarn install
git checkout -b main
git remote add origin https://github.com/iwnnay/debt_suggestion
git push -u -f origin main
```

## Step 3: Prompt the AI with the initial idea

    I just created a base application with Svelte where I want to see a Debt Calculator application.
    It should all be a single page application with TypeScript.

    Features:
    - One can add a credit card with a minimum payment, an APR, and a date when a Zero percent APR promotion ends
    - One can enter a loan with an APR
    - One can enter as many debt items as they want
    - The app will then calculate the order for which they should be paid off
    - A person can select to snowball payments, that's where the minimum payment is applied to the next available debt.
    - There will be an additional payment section so that an additional pay ment amount can be added every month
    - There will be an ammoritization schedule to show when the debts will be paid off, how much interest will be paid
    - The ammoritization schedule will be live based on values entered 

If you want to see the result they are in commit  [3bbf6a80a53767a8bfbd09e436c09f440f585d07](https://github.com/iwnnay/debt_suggestion/commit/3bbf6a80a53767a8bfbd09e436c09f440f585d07)

It's not bad, but it's filled with dummy data, which is more annoying than helpful.
