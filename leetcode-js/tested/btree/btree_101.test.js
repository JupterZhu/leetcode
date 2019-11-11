import Tree from '../../code/btree/btree_101'
test('btree', () => {
    let root = new Tree([1, 2, 2, 3, 4, 4, 3])
    expect(Tree.isSymmetry(root)).toBe(true)
})