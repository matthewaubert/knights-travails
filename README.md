# Knights Travails

This repo was made as part of <a href="https://www.theodinproject.com/lessons/javascript-knights-travails">The Odin Project: JavaScript course</a> in order to practice all that I've learned about data structures and algorithms.

## Assignment

Build a function `knightMoves` that shows the shortest possible way, in chess, for a knight to get from one square to another by outputting the coordinates of all squares it would stop on along the way.

For example:
```
knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
```

There may be more than one shortest path. Examples:
```
knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]]
knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
```
```
knightMoves([3,3],[0,0]) == [[3,3],[2,1],[0,0]]
knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]
```
```
knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]]
knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
```

### Things to consider

1. Think about the rules of the board and the knight, and make sure to follow them.

1. For every square there is a number of possible moves. Choose a data structure that will allow me to work with them. Don't allow any moves to go off the board.

1. Decide which search algorithm is best for this case. (Hint: one of them could be a potentially infinite series.)

1. Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what hat full path looks like.

### Example final output

```
  > knightMoves([3,3],[4,3])
  => You made it in 3 moves! Here's your path:
    [3,3]
    [4,5]
    [2,4]
    [4,3]
```

## Plan

1. Project startup

1. Research candidates for search algorithm, starting here: https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs

1. Consider and plan how best to implement the chosen search algorithm
   - Do I need to create a `Node` class/factory?
   - Do I need to create an algorithm class?
   - What functions will I need to develop on the algorithm class?
   - What helper functions might I need to develop to support the functions on the main algorithm class? (e.g. sorting algorithm, etc.)
   - How will I implement the `knightMoves` driver script?
   - What helper functions might I need to develop to support the `knightMoves` driver script?