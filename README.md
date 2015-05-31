# Sample project for issue in wallabyjs

This project is just a demo of an issue in wallaby.js

When [unexpected-dom](https://github.com/munter/unexpected-dom) is required, wallaby.js reports simply
```
wallaby.js started
core v1.0.54
Runtime error: SyntaxError: Parse error
Finished executing 0 affected test(s)
```

and always reports that 0 tests were found.

Removing the `require('uenxpected-dom')` fixes it, and everything works normally.
Marking unexpected-dom (and jsdom) as `instrument:false` causes wallaby.js to hang.




