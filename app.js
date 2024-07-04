// write code here
const state1 = { username: 'john', point: 100, loading: true };

let clone = Object.assign({}, state1);
clone.loading = false;
clone.success = true;
console.log(clone);