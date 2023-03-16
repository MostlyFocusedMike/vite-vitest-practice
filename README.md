# Vitest and Vite

## Can we run the project WITHOUT vite?
Yes! We totally can just open up the browser and see the file, chrome can handle modules (since like 2018 actually)

Just for my own sake, I'm leaving the start and dev commands and whatnot, but we can totally, sneakily run the students tests without them really having to learn anything about vite at the start of the HTML unit.

We DO need the config file in order to get the frontend env setup properly, but we can leave a little comment in there for the curious explaining what it is.

This is also great because we don't need to worry about JSDOM configurations or adding it. We will need to do the documentElement hack to grab the raw HTML that the students write, but that's not too bad.

## Main func
We DO need to wrap everything and export a main function though. That's the big trade off, but we can just tell the students to do that anyway, and even have that be the starting template. It's best practice anyway. Plus, they're already going to know about modules from Node in the new setup.


