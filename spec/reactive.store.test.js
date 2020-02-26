const store = new tst.ReactiveStore({test:1});
const observer$ = store.Listen(s => s.test);
observer$.subscribe(d => console.info('emits ', d));
store.Mutate(s => s.test, () => 10);
