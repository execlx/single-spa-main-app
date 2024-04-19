import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication("@single-spa/welcome",
  () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  location => location.pathname === '/',
);

registerApplication({
  name: "@study/lagou",
  app: () => System.import<LifeCycles>("@study/lagou"),
  activeWhen: ["/lagou"]
});

start({
  urlRerouteOnly: true,
});
