const tiles = (input: string) => {
    const cToBool = (c: string) => c === 'x'
    const rowToBools = (row: string) => row.split('').map(cToBool)
    const lines = input.trim().split('\n')
    return lines.map(rowToBools)
}

export const collision = tiles(`
x..........................................................x
xx......................................xx................xx
xxx............................................x.........xxx
xxxx.............x......................................xxxx
xxxxx............x......x...............x..............xxxxx
xxxxxx.....xxxxxxxxxxxxxxxxxxx...xxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxx...xxxxxxxxxxxxxxxxxxxx...xxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxx.xxxxxxxxxxxxxxxxxxxxx..xxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx......xxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx................xxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
`)
