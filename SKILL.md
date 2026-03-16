# Create React Component

**WORKFLOW SKILL** — Step-by-step guide for creating a new React component in this project.

USE FOR: Adding new UI components to the React app; implementing new features as reusable components; structuring component-based UI elements.

DO NOT USE FOR: Modifying existing components; adding non-component code; server-side logic; styling without components.

INVOKES: file system tools (create files), code editing tools (write component code), terminal tools (run tests if available).

## Steps

1. **Plan the Component**: Decide on the component name (PascalCase), its props, state, and behavior. Consider if it needs hooks like useState or useEffect.

2. **Create the File**: Create a new JavaScript file in `src/components/` with the name `ComponentName.js`.

3. **Write the Component Code**:
   - Use functional component syntax.
   - Import React if needed (though not required in modern React).
   - Define the component function.
   - Add props destructuring if props are expected.
   - Implement the JSX return.
   - Export as default.

4. **Add to Parent Component**: Import the new component in `App.js` or the appropriate parent component. Add it to the JSX with any necessary props.

5. **Test the Component**: Run the development server (`npm start`) and verify the component renders correctly. Check for any console errors.

6. **Optional: Add Styles**: If needed, add CSS classes or inline styles, or create a separate CSS file.

## Quality Checks

- Component name follows PascalCase.
- File is in `src/components/`.
- Component is properly exported and imported.
- No linting errors.
- Component renders without crashing.