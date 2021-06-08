# TODOs

- [ ] enforce node instance type if used manually in a given list (e.g. no fwd node in dbl circular)
- [ ] test noops in dbl circ list

```js
console.log(getAllFuncs(l))
function getAllFuncs(toCheck) {
var props = [];
var obj = toCheck;
do {
	props = props.concat(Object.getOwnPropertyNames(obj));
} while (obj = Object.getPrototypeOf(obj));

return props.sort().filter(function (e, i, arr) {
	if (e != arr[i + 1] && typeof toCheck[e] == 'function') return true;
});
}
```
