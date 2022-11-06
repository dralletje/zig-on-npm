# Zig on npm

So I've been developing some webassembly packages with Zig.
Now I wanted to have Zig just work with building on vercel..

So this is a basic attempt at having the zig binaries on npm,
so you can just `npm install @zig-on-npm/zig` and have `npx zig` working!

I don't have a windows computer, nor an intel mac...
So if you want this working on windows or intel mac, post an issue and we can make that work too.

## Useful links

- [esbuild, what I based the whole optionalDependencies-per-platform thing on (package.json)](https://cdn.jsdelivr.net/npm/esbuild@0.15.13/package.json)
- [One of those optionalDependencies packages (package.json)](https://cdn.jsdelivr.net/npm/esbuild-darwin-arm64@0.15.13/package.json)
