let table = [];

for (let i = 0; i < 5; i++) {
    table[i] = [];
};

for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
        table[row][col] = row * col;
    }
};