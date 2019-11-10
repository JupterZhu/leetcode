import baseball from '../../code/stack/calpoint_682'

test('baseball', () => {
    expect(baseball(['5', '2', 'C', 'D', '+'])).toBe(30)
})
