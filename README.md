# Sudoku

Displays a given Sudoku puzzle and informs the user if the move they made is valid.

<img width="669" alt="Screenshot 2023-10-17 at 9 28 57 AM" src="https://github.com/Perryo/sudoku/assets/9117438/0a4e220d-6db0-4caa-83a4-1df7c2922744">


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



