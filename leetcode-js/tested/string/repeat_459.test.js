import subLoopStr from '../../code/string/repeat_459'

test('subLoopStr', () => {
  expect(subLoopStr('abab')).toBe(true)
})
test('subLoopStr:2', () => {
  expect(subLoopStr('abababc')).toBe(false)
})
