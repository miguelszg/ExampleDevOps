const hash = require('../test/testIndex').hash;

test('Verificar Hash', () => {
    const message = 'contraseña';
    const hashedTest = hash(message);
    expect(hashedTest).toBe('edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5');
});


//idk