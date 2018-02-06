describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});


describe("Interval - includes", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(10, 12),
        new Interval(15, 16),
        new Interval(17, 20),
        new Interval(10, 20),
    

    ].forEach(function (interval) {
        it("should include " + interval.toString() + " in " + testedInterval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 43),
        new Interval(40, 42)

    ].forEach(function (interval) {
        it("should not include " + interval.toString() + " in " + testedInterval.toString(), function () {
            expect(testedInterval.includes(interval)).toBeFalsy();
        });
    });
});

describe("Interval - union", function () {
    testedInterval = new Interval(10, 20);

    [
        {
            interv : new Interval(10, 12),
            value : new Interval(10,20) 
        },
        {
            interv :new Interval(15, 16),
            value : new Interval(10,20) 
        },
        {
            interv :new Interval(7, 12),
            value : new Interval(7,20) 
        },
        {
            interv :new Interval(2, 22),
            value : new Interval(2,22) 
        }

    ].forEach(function (interval) {
        it("should union " + interval.interv.toString() + " and " + testedInterval.toString()+ "=" + interval.value.toString(), function () {
            expect(testedInterval.union(interval.interv)).toEqual(interval.value);
        });
    });

    [
        {
            interv : new Interval(8, 9),
            value : new Interval(null,null) 
        },

        {
            interv : new Interval(40, 42),
            value : new Interval(null,null) 
        },

    ].forEach(function (interval) {
        it("should union " + interval.interv.toString() + " and " + testedInterval.toString()+ "=" + interval.value.toString(), function () {
            expect(testedInterval.union(interval.interv)).toEqual(interval.value);
        });
    });
});


describe("Interval - intersection", function () {
    testedInterval = new Interval(10, 20);

    [ 
        {
            interv : new Interval(10, 12),
            value : new Interval(10,12) 
        },
        {
            interv :new Interval(15, 16),
            value : new Interval(15,16) 
        },
        {
            interv :new Interval(7, 12),
            value : new Interval(10,12) 
        },
        {
            interv :new Interval(2, 22),
            value : new Interval(10,20) 
        }

    ].forEach(function (interval) {
        it("should intersection " + interval.interv.toString() + " and " + testedInterval.toString()+ "=" + interval.value.toString(), function () {
            expect(testedInterval.intersection(interval.interv)).toEqual(interval.value);
        });
    });

    [
        {
            interv : new Interval(8, 9),
            value : null
        },

        {
            interv : new Interval(40, 42),
            value : null
        },

    ].forEach(function (interval) {
        it("should intersection " + interval.interv.toString() + " and " + testedInterval.toString()+ "= null", function () {
            expect(testedInterval.intersection(interval.interv)).toEqual(interval.value);
        });
    });
});