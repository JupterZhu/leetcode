import regModeStr from '../../code/string/regstr_00'

test('regModeStr', () => {
  expect(regModeStr('aaa', 'caa*')).toBe(false)
})
test('regModeStr:2', () => {
  expect(regModeStr('aaabc', 'a*bc')).toBe(true)
})
test('regModeStr:3', () => {
  expect(regModeStr('aaabc', 'a*.*')).toBe(true)
})
