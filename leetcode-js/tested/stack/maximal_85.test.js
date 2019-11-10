import rect from '../../code/stack/maximal_85'

test('react:1',()=>{
    let input = [
        ['1','0','1','0','0']
        ['1','0','1','1','1']
        ['1','1','1','1','1']
        ['1','0','0','1','0']
    ]
    expect(rect(input)).toBe(6)
})