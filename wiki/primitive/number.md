### Number Extensions

[<< Index](/wiki/index.md)

#### IsInRange

Checks if a number is within 2 limits.

The limit values are included!

    IsInRange?(lower: number, upper: number): boolean;

| Name  | Type       | Description     |
|-------|------------|-----------------|
| lower | number     | the lower limit |
| upper | number     | the upper limit |

```javascript
// returns true
1.2.IsInRange(1.0, 2.0);
1.0.IsInRange(1.0, 2.0);
2.0.IsInRange(1.0, 2.0);

// returns false
5.2.IsInRange(1.0, 2.0)
```

---

#### Equals

Checks if a number is equal to the current number.

    Equals?(value: number): boolean;
    
*Parameter:*

| Name  | Type       | Description                                  |
|-------|------------|----------------------------------------------|
| value | number     | the Number to check again the current Number |

```javascript
// returns true
(1).Equals(1)
// returns false
(1).Equals(2)
```

---
