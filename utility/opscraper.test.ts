import parseUrl from './opscraper';

test('parse url for google.com', async () => {
    expect(await parseUrl('http://www.google.com')).toMatchObject({
        ogTitle: 'Google',
        ogLocale: 'en-IN',
        charset: 'iso-8859-1',
        requestUrl: 'http://www.google.com',
        success: true
    });
});