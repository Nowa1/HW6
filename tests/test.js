describe('List Interface', () => {
    const testData = [{
        expected: `pop`
    }, {
        expected: `push`
    }, {
        expected: `splice`
    }, {
        expected: `shift`
    }, {
        expected: `unshift`
    }, {
        expected: `length`
    }, {
        expected: `remove`
    }, {
        expected: `some`
    }, {
        expected: `every`
    }, {
        expected: `isArray`
    }];
    testData.forEach(function (data) {
        const {
            expected
        } = data;
        let list = new List();
        it(`should return True, when Interface List has ${expected} method`, function () {
            const actual = expected in list;
            assert.deepEqual(actual, true);
        });
    });
});

describe('ListSecond Interface', () => {
    const testData = [{
        expected: `sort`
    }, {
        expected: `toString`
    }, {
        expected: `toArrayList`
    }, {
        expected: `toLinkedList`
    }];
    testData.forEach(function (data) {
        const {
            expected
        } = data;
        let listsecond = new ListSecond();
        it(`should return True, when Interface ListSecond has ${expected} method`, function () {
            const actual = expected in listsecond;
            assert.deepEqual(actual, true);
        });
    });
});

describe('ArrayList Methods', () => {

    describe('Push method in Array List', () => {

        it(`should return array length 6 includes added element in array : [1,2,3,4,5,6]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 6;
            const actual = alis.push(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 7 includes added elements in array : [1,2,3,4,5,1,2]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.push(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 8 includes added elements in array : [1,2,3,4,5,1,2,3]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.push(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 includes added elements in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 1;
            const actual = alis.push(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 5 includes added elements in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.push();
            assert.strictEqual(actual, expected);
        });

        it(`should return array [1,2,3,4,5,2,2] includes added elements 2,2 in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5, 2, 2];
            alis.push(2, 2);
            const actual = alis.arr;
            assert.deepEqual(actual, expected);
        });
    });

    describe('Pop method in Array List', () => {

        it(`should return first element equals 5 includes added element in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });
        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.pop();
            assert.strictEqual(actual, expected);
        });


    });

    describe('Shift method in Array List', () => {

        it(`should return first element equals 1 in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 1;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = undefined;
            const actual = alis.shift();
            assert.strictEqual(actual, expected);
        });

    });

    describe('Unshift method in Array List', () => {

        it(`should return array length 6 includes added element in array : [1,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 6;
            const actual = alis.unshift(1);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 7 includes added elements in array : [1,2,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 7;
            const actual = alis.unshift(1, 2);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 8 includes added elements in array : [1,2,3,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 8;
            const actual = alis.unshift(1, 2, 3);
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 includes added elements in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 0;
            const actual = alis.unshift();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 5 includes added elements in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.unshift();
            assert.strictEqual(actual, expected);
        });

        it(`should adds '0' to the beginning of array and returns length of array : [0,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1,2,3,4,5];
            const expected = 6;
            const actual = alis.unshift(0);
            assert.strictEqual(actual, expected);
        });

        it(`should adds '-2,-1' elements to the beginning of array and returns length of array : [-2,-1,1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1,2,3,4,5];
            const expected = 7;
            const actual = alis.unshift(-2,-1);
            assert.strictEqual(actual, expected);
        });

        it(`should adds array [-3] to the beginning of an array and returns length of array : [[-3],1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1,2,3,4,5];
            const expected = 6;
            const actual = alis.unshift([-3]);
            assert.strictEqual(actual, expected);
        });

    });

    describe('Length method in Array List', () => {

        it(`should return array length 5 in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayList();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = 5;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 1 in array : [1]`, () => {
            const alis = new ArrayList();
            alis.arr = [1];
            const expected = 1;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });
        it(`should returns length 0 of array : []`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 0;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

        it(`should return array length 0 in array : []`, () => {
            const alis = new ArrayList();
            alis.arr = [];
            const expected = 0;
            const actual = alis.length();
            assert.strictEqual(actual, expected);
        });

    });

    

 

    describe('toArrayList method in Array List', () => {

        it(`should return first element equals 5 includes added element in array : [1,2,3,4,5]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });
        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1];
            const expected = [1];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });

        it(`should return undefined in empty array`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [];
            const expected = [];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });

        it(`should return array [333,50,[],'array',{}] equal array : [333,50,[],'array',{}]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [333,50,[],'array',{}];
            const expected = [333,50,[],'array',{}];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });

        it(`should return array [333,50,[],'array',{}] equal array : [333,50,[],'array',{}]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [333,50,[],'array',{}];
            const expected = [333,50,[],'array',{}];
            const actual = alis.toArrayList();
            assert.deepEqual(actual, expected);
        });


    });

    describe('toLinkedList method in Array List', () => {
        const alis = new ArrayListSecond();
        alis.push(1);
        alis.push(123);
        alis.push(2);
        alis.push(null);
        alis.push(999999);
        alis.push(12);
        alis.push(988);
        it(`Linked list with same values`, () => {
            const expected = new LinkedListSecond();
            expected.push(1);
            expected.push(123);
            expected.push(2);
            expected.push(null);
            expected.push(999999);
            expected.push(12);
            expected.push(988);

            const actual = alis.toLinkedList();
            assert.deepEqual(expected, actual);
        });

    });

    describe('toString method in Array List', () => {

        it(`should return string "333,50,,array,[object Object]" equal array : [333,50,[],'array',{}]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [333,50,[],'array',{}];
            const expected = '333,50,,array,[object Object]';
            const actual = alis.toString();
            assert.deepEqual(actual, expected);
        });

        it(`should return string "1,2,3,4,5" equal array : [1,2,3,4,5]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = '1,2,3,4,5';
            const actual = alis.toString();
            assert.deepEqual(actual, expected);
        });

        it(`should return string "aaa,Empty,cc,Bb" equal array : ['aaa','Empty','cc','Bb']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['aaa','Empty','cc','Bb'];
            const expected = 'aaa,Empty,cc,Bb';
            const actual = alis.toString();
            assert.deepEqual(actual, expected);
        });

        it(`should return string "1" equal array : [1]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1];
            const expected = '1';
            const actual = alis.toString();
            assert.deepEqual(actual, expected);
        });

        it(`should return emptiness equal array ; []`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [];
            const expected = '';
            const actual = alis.toString();
            assert.deepEqual(actual, expected);
        });


    });

    describe('sort method in Array List', () => {


        it(`should return first element equals 1 in array : [1]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1];
            const expected = [1];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return empty array of empty array`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [];
            const expected = [];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array [1, 2, 3, 4, 5] of array : [5, 4, 3, 2, 1]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [5, 4, 3, 2, 1];
            const expected = [1, 2, 3, 4, 5];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array [1, 2, 3, 4, 5] of array : [5, 4, 3, 2, 1, 0]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [3, 5, 0, 1, 4, 2];
            const expected = [0, 1, 2, 3, 4, 5];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array [1, 2, 3, 4, 5] of array : [1, 2, 3, 4, 5]`, () => {
            const alis = new ArrayListSecond();
            alis.arr = [1, 2, 3, 4, 5];
            const expected = [1, 2, 3, 4, 5];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array ['a', 'b', 'c', 'd', 'e'] of array : ['a', 'b', 'c', 'd', 'e']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['a', 'b', 'c', 'd', 'e'];
            const expected = ['a', 'b', 'c', 'd', 'e'];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array ['a', 'b', 'c', 'd', 'e'] of array : ['b', 'a', 'd', 'e', 'c']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['b', 'a', 'd', 'e', 'c'];
            const expected = ['a', 'b', 'c', 'd', 'e'];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array ['C', 'a', 'b', 'd', 'e'] of array : ['b', 'a', 'd', 'e', 'C']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['b', 'a', 'd', 'e', 'C'];
            const expected = ['C', 'a', 'b', 'd', 'e'];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array ['array', 'is', 'not', 'sorted'] of array : ['is', 'not', 'sorted', 'array']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['is', 'not', 'sorted', 'array'];
            const expected = ['array', 'is', 'not', 'sorted'];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });

        it(`should return array ['Sorted', 'array', 'is', 'not'] of array : ['is', 'not', 'Sorted', 'array']`, () => {
            const alis = new ArrayListSecond();
            alis.arr = ['is', 'not', 'Sorted', 'array'];
            const expected = ['Sorted', 'array', 'is', 'not'];
            const actual = alis.sort();
            assert.deepEqual(actual, expected);
        });



    });


});