describe("Pesel test", function() {
    var generatePesel = require('../app.js');

    it("should return valid pesel for male", function() {
        pesel = generatePesel(new Date("1979-09-01"),"M",999);
        expect(pesel[9]%2).not.toBe(0);
    });

    it("should be correct date", function() {
        pesel = generatePesel(new Date("2018-05-05"),"F",444);
        expect(pesel.substr(2,2)).toBe('25');
    });
//1825
});