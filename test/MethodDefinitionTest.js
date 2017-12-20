import {describe, beforeEach, it} from 'mocha';
import {expect} from 'chai';
import ES6ClassDeclarations from '../src/ES6ClassDeclarations'

describe('method definition', () => {
  describe('ES6+ class declarations', () => {
    const instance = new ES6ClassDeclarations('bar')

    it('does not bind functions to the instance', () => {
      const foo = instance.foo
      expect(() => foo()).to.throw(TypeError)
    })

    it('can be bound to the instance using an arrow function', () => {
      const foo = () => instance.foo()
      expect(foo()).to.eq('bar')
    })
  })
})
