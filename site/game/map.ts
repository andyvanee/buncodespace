const tileToBool = (c: string) => c === 'x'

const rowToBoolArray = (row: string) => row.split('').map(tileToBool)

const tiles = (input: string) => {
    const lines = input.trim().split('\n')
    return lines.map(rowToBoolArray)
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
