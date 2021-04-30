import * as util from '../src/util';
import * as fs from 'fs';
import * as path from 'path';

test('test arrayToString', () => {
  expect(util.arrayToString(['test', 'test2', 'test3'])).toBe('test, test2, test3');
});

test('test readFile', async () => {
  await expect(util.readFile(`${__dirname}/../examples/rbac_model.conf`)).resolves.toBe(
    '[request_definition]\n' +
      'r = sub, obj, act\n' +
      '\n' +
      '[policy_definition]\n' +
      'p = sub, obj, act\n' +
      '\n' +
      '[role_definition]\n' +
      'g = _, _\n' +
      '\n' +
      '[policy_effect]\n' +
      'e = some(where (p.eft == allow))\n' +
      '\n' +
      '[matchers]\n' +
      'm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act'
  );
});

test('test readFile fail', async () => {
  await expect(util.readFile('unexpected')).rejects.toBeTruthy();
});

test('test writeFile', async () => {
  await expect(util.writeFile(`${__dirname}/tmp`, 'test')).resolves.toBe(true);
  await expect(util.readFile(`${__dirname}/tmp`)).resolves.toBe('test');
  fs.unlinkSync(path.join(__dirname, 'tmp'));
});
