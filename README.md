# Smartclass Jobsite

## Architecture
It pulls requests from workable site based on the configured workable account ID
and displays on the browser.

The technologies used include:
- Tailwindcss
- PugJS
- ExpressJS
- Axios
- Navigation Share API
- MS Clarity

The code is divided into:
- [routes](routes): Contains routes that call services to execute business logic over the internet and also render results to users
- [services](services): Contains business logic
- [views](views): Contains presentation logic, implemented using Pug template engine
- [public](public): Contains public content including compile stylesheets, javascript code
- [lib/workable](lib/workable): contains workable API
- [assets](assets): Contains tailwindcss styles and configs

## Future development
- Implement a cache for results

## How to run
```sh
CLARITY_ID=<clarity_id> WORKABLE_ID=<workable_account_id> npm start
```