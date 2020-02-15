### Stopwatch

measure the Time between Code Lines in ms

the StopWatch starts when a new Instance was created and can give the Elapsed ms when ElapsedMs was called.

measure multiple Times is also possible with SectionStart and SectionElapsedMs

```javascript
const watch = new StopWatch();
// returns the elapsed Ms from construction and this Line
watch.ElapsedMs();
```

[<< Index](/wiki/index.md)

---

#### SectionStart

starts the StopWatch for a specific Section marks by the given key

    SectionStart(key: string): void

*Parameters:*

| Name | Type   | Description                        |
|------|--------|------------------------------------|
| key  | string | the key that indicates the Section |

```javascript
const watch = new StopWatch();
watch.SectionStart('A');
// logs the Time between SectionStart('A') and SectionElapsedMs('A')
watch.SectionElapsedMs('A');
watch.SectionStart('B');
// logs the Time between SectionStart('B') and SectionElapsedMs('B')
watch.SectionElapsedMs('B');
// logs the Time between SectionStart('A') and this Line with SectionStart('B') and SectionElapsedMs('B')
watch.SectionElapsedMs('A');
```

---

#### IsSectionPause

checks if a Section was paused

    IsSectionPause(key: string): boolean

*Parameters:*

| Name | Type   | Description                        |
|------|--------|------------------------------------|
| key  | string | the key that indicates the Section |

```javascript
const sw = new StopWatch();
sw.SectionStart('sw1');
// returns false
sw.IsSectionPause('sw1');
sw.SectionPause('sw1');
// returns true
sw.IsSectionPause('sw1');
```

---

#### IsPause

if the current StopWatch in pause mode

    IsPause(): boolean

```javascript
const sw = new StopWatch();
// returns false
sw.IsPause();
sw.Pause();
// returns true
sw.IsPause();
```

---

#### SectionElapsedMs

get the Time in ms Elapsed by the Section matches the given key

    SectionElapsedMs(key: string): number

*Parameters:*

| Name | Type   | Description                        |
|------|--------|------------------------------------|
| key  | string | the key that indicates the Section |

```javascript
const sw = new StopWatch();
sw.SectionStart('sw1');
// returns the elapsed milliseconds since start of section sw1
sw.SectionElapsedMs('sw1');
```

---

#### SectionPause

same as Pause only for Sections

    SectionPause(key: string): void

*Parameters:*

| Name | Type   | Description                        |
|------|--------|------------------------------------|
| key  | string | the key that indicates the Section |

```javascript
const sw = new StopWatch();
sw.SectionStart('sw1');
// pause the sw1 section
sw.SectionPause('sw1');
```

---

#### SectionResume

same as Resume only for Sections

    SectionResume(key: string): void

*Parameters:*

| Name | Type   | Description                        |
|------|--------|------------------------------------|
| key  | string | the key that indicates the Section |

```javascript
const sw = new StopWatch();
sw.SectionStart('sw1');
sw.SectionPause('sw1');
// restart the sw1 section
sw.SectionResume('sw1');
```

---

#### Pause

stops the StopWatch from measure Time

    Pause()

```javascript
const sw = new StopWatch();
// pause the StopWatch
sw.Pause();
```

---

#### Resume

starts the StopWatch at the Point from the Last Pause

    Resume()
    
```javascript
const sw = new StopWatch();
sw.Pause();
// resume the paused StopWatch
sw.Resume();
```

---

#### ElapsedMs

gets the Elapsed Time in ms from the StopWatch

    ElapsedMs(): number
    
```javascript
const sw = StopWatch();
// get the elapsed time in ms from StopWatch constructor
sw.ElapsedMs();
```

---

[<< Index](/wiki/index.md)
