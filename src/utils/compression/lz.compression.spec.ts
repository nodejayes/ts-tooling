import {assert} from 'chai';
import {LZCompression} from '../../ts-tooling';
import 'mocha';

interface TestAddress {
    PLZ: string;
    Street: string;
    Town: string;
}

interface TestUser {
    Name: string;
    Age: number;
    Birthday: Date;
    Address: TestAddress;
}

const complexValues: TestUser[] = [
    {
        Name: 'Jonas Schreiner',
        Age: 23,
        Birthday: new Date(1965, 4, 12, 0, 0, 0),
        Address: {
            Street: 'Gotthardstrasse 69',
            PLZ: '99094',
            Town: 'Erfurt'
        }
    },
    {
        Name: 'Sandra Eichmann',
        Age: 45,
        Birthday: new Date(1969, 0, 22, 0, 0, 0),
        Address: {
            Street: 'Inge Beisheim Platz 20',
            PLZ: '25313',
            Town: 'Elmshorn'
        }
    },
    {
        Name: 'Ulrich Gärtner',
        Age: 60,
        Birthday: new Date(1959, 2, 23, 0, 0, 0),
        Address: {
            Street: 'Koenigstrasse 50',
            PLZ: '99750',
            Town: 'Bleicherode'
        }
    },
    {
        Name: 'Christine Ehrlichmann',
        Age: 37,
        Birthday: new Date(1982, 4, 23, 0, 0, 0),
        Address: {
            Street: 'Paul-Nevermann-Platz 59',
            PLZ: '97657',
            Town: 'Sandberg'
        }
    },
    {
        Name: 'Anne Klein',
        Age: 23,
        Birthday: new Date(1965, 8, 12, 0, 0, 0),
        Address: {
            Street: 'Jenaer Strasse 26',
            PLZ: '47053',
            Town: 'Duisburg',
        }
    }
];

describe('LZ Compression Tests', () => {
    it('can compress', () => {
        assert.isAbove(LZCompression.Compress(complexValues).length, 1);
    });
    it('can decompress', () => {
        const serialized = LZCompression.Compress(complexValues);
        assert.equal(LZCompression.Decompress(serialized).ElementAt(0).Name, 'Jonas Schreiner');
    });
    it('is smaller', () => {
        const lzLength = LZCompression.Compress(complexValues).length;
        const rawLength = JSON.stringify(complexValues).length;
        assert.isBelow(lzLength, rawLength);
        console.info('compression rate is ', 100 - (lzLength * 100 / rawLength), '%');
    });
    it('test big data', () => {
        const tmp = [];
        for (let i = 0; i < 10000; i++) {
            tmp.Add({
                Name: 'Jonas Schreiner',
                Age: 23,
                Birthday: new Date(1965, 4, 12, 0, 0, 0),
                Address: {
                    Street: 'Gotthardstrasse 69',
                    PLZ: '99094',
                    Town: 'Erfurt'
                }
            });
        }

        let start = Date.now();
        const lzLength = LZCompression.Compress(complexValues).length;
        console.info(`lz-string compression: ${(Date.now()-start)} ms`);
        start = Date.now();
        const rawLength = JSON.stringify(tmp).length;
        console.info(`stringify: ${(Date.now()-start)} ms`);
        assert.isBelow(lzLength, rawLength);
        console.info('compression rate is ', 100 - (lzLength * 100 / rawLength), '% ', lzLength, ' byte from ', rawLength, ' byte');
    });
});
