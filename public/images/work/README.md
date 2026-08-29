# Portfolio Images

Drop your project images into this folder. 
By default, the `content.ts` file is looking for:
- `project1.jpg`
- `project2.jpg`
- `project3.jpg`
- `project4.jpg`

You can use standard image formats (`.jpg`, `.png`, `.webp`).
If you change the filenames, simply update the `image` paths in `src/data/content.ts`.

The `ProjectCard` component handles portrait aspect ratios (4:5 or 3:4) elegantly on mobile and desktop without cropping out the top and bottom.
