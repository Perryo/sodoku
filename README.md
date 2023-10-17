# Sudoku

Displays a given Sudoku puzzle and informs the user if the move they made is valid.

A puzzle is ingested in the format:
```javascript
[
    [4, '',6, 2, 7, 8, '','',''],
    [7, 3, 5,'', 9, 6, 2, '',''],
    [8,1,'',5,4,'',7,9,''],
    ['',6,2,'','','',1,'',''],
    [4,'',3,'',6,1,'','',''],
    ['','','',4,'','','','',7],
    ['','','','',1,7,6,'',9],
    [3,'','','',5,'','','',''],
    [6,'','','','',4,2,'',5]
]
```
Where each row signifies a "box" of the sudoku puzzle. 

Therefore the first index would represent:

| 4   |  _  | 6   |
| :-: | :-: | :-: |
| 2   |  7  | 8   |
|  _  |  _  |  _  |


