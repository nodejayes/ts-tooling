### Number Extensions

[<< Index](/wiki/index.md)

---

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

#### IsAbove

Checks if a number is greater than the current number.

    IsAbove?(value: number): boolean;

*Parameter:*

| Name  | Type       | Description                                  |
|-------|------------|----------------------------------------------|
| value | number     | the Number to check again the current Number |

```javascript
// returns true
(1).IsAbove(0)
// returns false
(1).IsAbove(1)
(1).IsAbove(5)
```

---

#### IsBelow

Checks if a number is lower than the current number.

    IsBelow?(value: number): boolean;
    
*Parameter:*

| Name  | Type       | Description                                  |
|-------|------------|----------------------------------------------|
| value | number     | the Number to check again the current Number |

```javascript
// returns true
(1).IsBelow(5)
// returns false
(1).IsBelow(1)
(1).IsBelow(0)
```

---

#### Clamp

Sets the value of the number to the lower or upper limit if the number is greater or smaller than the opere or lower limit.

    Clamp?(lower: number, upper: number): number;
    
*Parameter:*

| Name  | Type       | Description     |
|-------|------------|-----------------|
| lower | number     | the lower limit |
| upper | number     | the upper limit |

```javascript
// returns 10
(20).Clamp(1, 10);
(10).Clamp(1, 10);
// returns 9
(9).Clamp(1, 10);
// returns 1
(1).Clamp(1, 10);
(0.5).Clamp(1, 10);
```

---

#### Add

Add the current number to the given number.

    Add?(value: number): number;
    
*Parameter:*

| Name  | Type       | Description                             |
|-------|------------|-----------------------------------------|
| value | number     | the Number to add to the current Number |

```javascript
// returns 2
(1).Add(1);
// returns 3
(1).Add(1).Add(1);
```

---

#### Subtract

Subtracts the current number with the given number.

    Subtract?(value: number): number;

*Parameter:*

| Name  | Type       | Description                                    |
|-------|------------|------------------------------------------------|
| value | number     | the Number to subtract from the current Number |

```javascript
// returns 1
(2).Subtract(1);
// returns 0
(2).Subtract(1).Subtract(1);
```

---

#### Multiply

Multiplies the current number by the given number.

    Multiply?(value: number): number;
    
*Parameter:*

| Name  | Type       | Description                                    |
|-------|------------|------------------------------------------------|
| value | number     | the Number to multiply from the current Number |

```javascript
// returns 10
(1).Multiply(10);
// returns 20
(1).Multiply(10).Multiply(2);
```

---

#### Divide

Divides the current number with the given number.

    Divide?(value: number): number;
    
*Parameter:*

| Name  | Type       | Description                                    |
|-------|------------|------------------------------------------------|
| value | number     | the Number to multiply from the current Number |

```javascript
// returns 5
(10).Divide(2);
// returns 5
(20). Divide(2).Divide(2);
// throws an Error
(10).Divide(0);
```

---

#### Increment

increases the number by 1 or the value that was given.

    Increment?(step?: number): number;

*Parameter:*

| Name  | Type       | Description                 |
|-------|------------|-----------------------------|
| step  | number     | Number to be incremented by |

```javascript
// returns 2
(1).Increment();
// returns 5
(1).Increment(4);
```

---

#### Decrement

decreases the number by 1 or the value that was given.

    Decrement?(step?: number): number;
    
*Parameter:*

| Name  | Type       | Description                 |
|-------|------------|-----------------------------|
| step  | number     | Number to be decremented by |

```javascript
// returns 4
(5).Decrement();
// returns 1
(5).Decrement(4);
```

---

#### Round

Rounds a number up or down if the next digit is greater than or equal to 5.

    Round?(precision?: number): number;
    
*Parameter:*

| Name       | Type       | Description                        |
|------------|------------|------------------------------------|
| precision  | number     | Number of digits used for rounding |

```javascript
// returns 4
4.006.Round();
// returns 4.01
4.006.Round(2);
// returns 4100
(4060).Round(-2);
```

---

#### Floor

Rounding off a number

    Floor?(precision?: number): number;

*Parameter:*

| Name       | Type       | Description                        |
|------------|------------|------------------------------------|
| precision  | number     | Number of digits used for rounding |

```javascript
// returns 4
4.006.Floor();
// returns 0.04
0.046.Floor(2);
// returns 4000
(4060).Floor(-2);
```

---

#### Ceil

Rounding up a number

    Ceil?(precision?: number): number;
    
*Parameter:*

| Name       | Type       | Description                        |
|------------|------------|------------------------------------|
| precision  | number     | Number of digits used for rounding |

```javascript
// returns 5
4.006.Ceil();
// returns 6.01
6.004.Ceil(2);
// returns 6100
(6040).Ceil(-2);
```

---

#### Numerals

number of digits before the decimal point

    Numerals?(): number;
    
```javascript
// returns 1
(1.5).Numerals();
(1).Numerals();
// returns 2
(10).Numerals();
```

---

#### DecimalPlaces

Number of digits after the decimal point

    DecimalPlaces?(): number;
    
```javascript
// returns 0
(1).DecimalPlaces();
// returns 1
(1.5).DecimalPlaces();
```

---

[<< Index](/wiki/index.md)
