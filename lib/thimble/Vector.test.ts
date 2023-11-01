import { Vector } from './Vector'

import { expect, test } from 'bun:test'

test('constructor interface', () => {
    const v1 = new Vector(2, 3)
    expect(v1.x).toBe(2)
    expect(v1.y).toBe(3)

    const v2 = new Vector()
    expect(v2.x).toBe(0)
    expect(v2.y).toBe(0)

    const v3 = new Vector({ x: 4, y: 5 })
    expect(v3.x).toBe(4)
    expect(v3.y).toBe(5)
})

test('Vector::add positive numbers', () => {
    const v1 = new Vector(1, 1)
    const v2 = new Vector(3, 4)
    const v3 = v1.add(v2)
    expect(v3.x).toBe(4)
    expect(v3.y).toBe(5)
})
test('Vector::add negative numbers', () => {
    const v1 = new Vector(1, 1)
    const v2 = new Vector(-3, -4)
    const v3 = v1.add(v2)
    expect(v3.x).toBe(-2)
    expect(v3.y).toBe(-3)
})

test('Vector::subtract positive numbers', () => {
    const v1 = new Vector(1, 1)
    const v2 = new Vector(3, 4)
    const v3 = v1.subtract(v2)
    expect(v3.x).toBe(-2)
    expect(v3.y).toBe(-3)
})

test('Vector::subtract negative numbers', () => {
    const v1 = new Vector(1, 1)
    const v2 = new Vector(-3, -4)
    const v3 = v1.subtract(v2)
    expect(v3.x).toBe(4)
    expect(v3.y).toBe(5)
})

test('Vector::normalize 1,0', () => {
    const v1 = new Vector(1, 0).normalize()
    expect(v1.x.toFixed(3)).toBe('1.000')
    expect(v1.y.toFixed(3)).toBe('0.000')
})

test('Vector::normalize 12,12', () => {
    const v1 = new Vector(12, 12).normalize()
    expect(v1.x.toFixed(3)).toBe('0.707')
    expect(v1.y.toFixed(3)).toBe('0.707')
})
