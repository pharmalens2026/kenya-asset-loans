# Task: Remove phone number from the top of the page

## Objective
Remove the phone number (rendered as a Badge) from the top of the Hero section in the Home component, as requested by the user who described it as being "on top of the logo".

## Steps
1. **Modify `src/components/Home.tsx`**:
   - Locate the `Badge` component in the Hero section that displays `{CONTACT_INFO.phone}`.
   - Remove this `Badge` element while maintaining the rest of the layout.
2. **Verify Layout**:
   - Ensure the Hero section still looks good without the badge.
3. **Validate Build**:
   - Run `validate_build` to ensure no errors were introduced.