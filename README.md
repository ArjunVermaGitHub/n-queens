## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

On loading, the app will start placing queens on the chessboard automatically. This is a visualization of the backtracking algorithm, where pieces are places one at a time in columns ahead while satisfying the constraint of not attacking each other. If they do attack, they get placed one spot higher in the column until the entire column has been exhausted of it's spots, on which the previous piece gets pushed higher.

Issues: At higher speeds of placing pieces, pieces go outside the board causing the entire algorithm to crash. Suspect this is due to settimeout clashing for each piece, starting multiple processes together.

Ideas to build over this: 
1. Allow User to upload custom images for the queen.
2. UI themes.
3. Count the number of solutions.
4. Analyze how many solutions are copies of each other through some kind of symmetry.
5. What if the queen had horse powers?

Feel free to fork the repo and solve any bugs.

The page will reload when you make changes.
You may also see any lint errors in the console.
