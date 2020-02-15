### Lz Compression

implementation of lz compression with [lz-string](https://www.npmjs.com/package/lz-string)

[<< Index](/wiki/index.md)

---

#### Compress

Compress any Javascript Value to a LZ String

    Compress(data: any): string

*Parameter:*

| Name | Type | Description          |
|------|------|----------------------|
| data | any  | a Javascript Value   |

```javascript
// compress the Object to a zipped JSON String
LZCompression.Compress({"Hello":"World!"});
```

---

#### Decompress

Decompress a LZ String to any Javascript Value

    Decompress(compressed: string): any

*Parameter:*

| Name       | Type    | Description          |
|------------|---------|----------------------|
| compressed | string  | a compressed string  |

```javascript
// decompress the zipped JSON String to a Object
LZCompression.Compress('N4IgEgpgNlD2IC4QHVYCcoBMCEIC+QA=');
```

---

[<< Index](/wiki/index.md)
