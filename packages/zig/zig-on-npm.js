#!/usr/bin/env node

let { execFileSync } = require("child_process");

let one_that_works = null;

try {
  one_that_works = require.resolve("@zig-on-npm/linux-64/bin/zig");
} catch (error) {
  try {
    one_that_works = require.resolve("@zig-on-npm/darwin-arm64/bin/zig");
  } catch (error) {
    try {
      one_that_works = require.resolve("@zig-on-npm/linux-32/bin/zig");
    } catch (error) {
      // prettier-ignore
      console.error(`No zig binary found for this platform ${process.platform} - ${process.arch}`);
      process.exit(1);
    }
  }
}

try {
  execFileSync(one_that_works, process.argv.slice(2), { stdio: "inherit" });
} catch (error) {
  if (error.status != null) {
    // So this happens when zig returns a non-zero exit code...
    // Which is fine, should just exit with the same code.
    process.exit(error.status);
  } else {
    // Idk what happened, but it wasn't a non-zero exit code.
    throw error;
  }
}
