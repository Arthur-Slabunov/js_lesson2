describe('Проверка ageClassification', function () {
    it('Должен возвращать null для отрицательного возраста', function () {
        expect(ageClassification(-5)).toBeNull();
    });

    it('Должен возвращать детский возраст c 0 лет по 24 года', function () {
        for (let age = 0.1; age <= 24; age++) {
            expect(ageClassification(age)).toBe('детский возраст');
        }
    });

    it('Должен возвращать молодой возраст с 24 лет по 44 года', function () {
        for (let age = 24.01; age <= 44; age++) {
            expect(ageClassification(age)).toBe('молодой возраст');
        }
    });

    it('Должен возвращать средний возраст с 44 лет по 65 лет', function () {
        for (let age = 44.01; age <= 65; age++) {
            expect(ageClassification(age)).toBe('средний возраст');
        }
    });

    it('Должен возвращать пожилой возраст с 65 лет по 75 лет', function () {
        for (let age = 65.1; age <= 75; age++) {
            expect(ageClassification(age)).toBe('пожилой возраст');
        }
    });

    it('Должен возвращать старческий возраст с 75 лет по 90 лет', function () {
        for (let age = 75.01; age <= 90; age++) {
            expect(ageClassification(age)).toBe('старческий возраст');
        }
    });

    it('Должен возвращать долгожители с 90 лет по 122 года', function () {
        for (let age = 90.01; age <= 122; age++) {
            expect(ageClassification(age)).toBe('долгожители');
        }
    });

    it('Должен возвращать null если больше 123 лет', function () {
        expect(ageClassification(123)).toBeNull();
    });
});
describe('Проверка weekFn', function () {
    it('Должен возвращать Понедельник для n = 1', function () {
        expect(weekFn(1)).toEqual('Понедельник');
    });

    it('Должен возвращать Вторник для n = 2', function () {
        expect(weekFn(2)).toEqual('Вторник');
    });

    it('Должен возвращать Среда для n = 3', function () {
        expect(weekFn(3)).toEqual('Среда');
    });

    it('Должен возвращать Четверг для n = 4', function () {
        expect(weekFn(4)).toEqual('Четверг');
    });

    it('Должен возвращать Пятница для n = 5', function () {
        expect(weekFn(5)).toEqual('Пятница');
    });

    it('Должен возвращать Суббота для n = 6', function () {
        expect(weekFn(6)).toEqual('Суббота');
    });

    it('Должен возвращать Воскресенье для n = 7', function () {
        expect(weekFn(7)).toEqual('Воскресенье');
    });

    it('Должен возвращать null для некорректного значения', function () {
        expect(weekFn(0)).toBeNull();
        expect(weekFn(8)).toBeNull();
        expect(weekFn('abc')).toBeNull();
    });
});
