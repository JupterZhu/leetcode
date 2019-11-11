import leastInterval from '../../code/queue/queue_621'

test('leastInterval',()=>{
    expect(leastInterval(['A','A','A','B','B','B'],2)).toBe(8)
})