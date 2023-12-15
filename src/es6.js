export function wait(ms = 1000, resolveWith = 'Hello World') {
  return new Promise((resolve) => {
    setTimeout(() => resolve(resolveWith), ms);
  });
}

// source: https://content.noroff.dev/workflow/unit-testing.html
