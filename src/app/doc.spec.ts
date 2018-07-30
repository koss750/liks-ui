import { Doc } from './doc';

describe('Doc', () => {
  it('should create an instance', () => {
    expect(new Doc()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    const doc = new Doc({
        number: '3243',
        type: 'brp',
        link: 'ya.ru',
        id: 'fsdj-32453425'
    });
    expect(doc.number).toEqual(3243);
    expect(doc.type).toEqual('brp');
  });
});
