# Domus Vesta Button & Interactive Elements

## Button Styles

### Primary Button
- **Background:** #0F5E87 (Primary Blue)
- **Text Color:** #FFFFFF (White)
- **Border:** None
- **Border Radius:** 4px
- **Padding:** 12px 24px
- **Font:** Montserrat Semi-Bold, 16px
- **Text Transform:** None (Sentence case)
- **Shadow:** Subtle drop shadow (0px 2px 4px rgba(0, 0, 0, 0.1))

### Secondary Button
- **Background:** Transparent
- **Text Color:** #0F5E87 (Primary Blue)
- **Border:** 2px solid #0F5E87
- **Border Radius:** 4px
- **Padding:** 10px 24px
- **Font:** Montserrat Semi-Bold, 16px
- **Text Transform:** None (Sentence case)
- **Shadow:** None

### CTA Button
- **Background:** #F26522 (Orange)
- **Text Color:** #FFFFFF (White)
- **Border:** None
- **Border Radius:** 4px
- **Padding:** 12px 24px
- **Font:** Montserrat Bold, 16px
- **Text Transform:** None (Sentence case)
- **Shadow:** Subtle drop shadow (0px 2px 4px rgba(0, 0, 0, 0.1))

## Hover & Interactive States

### Primary Button Hover
- **Background:** Darken to #0A4A6D
- **Transition:** All 0.3s ease
- **Transform:** Subtle scale (1.02)

### Secondary Button Hover
- **Background:** #0F5E87 at 10% opacity
- **Text Color:** Darken to #0A4A6D
- **Border:** 2px solid #0A4A6D
- **Transition:** All 0.3s ease

### CTA Button Hover
- **Background:** Darken to #E55511
- **Transition:** All 0.3s ease
- **Transform:** Subtle scale (1.02)

### Disabled State
- **Background:** #E5E5E5 (Light Gray)
- **Text Color:** #ADADAD (Medium Gray)
- **Border:** None
- **Cursor:** Not allowed

### Focus State
- **Outline:** 2px solid #4A9CC9 (Light Blue)
- **Outline Offset:** 2px

## Form Elements

### Input Fields
- **Border:** 1px solid #E5E5E5
- **Border Radius:** 4px
- **Padding:** 12px 16px
- **Background:** #FFFFFF
- **Text Color:** #333333
- **Font:** Open Sans Regular, 16px

### Input Focus
- **Border:** 1px solid #0F5E87
- **Box Shadow:** 0 0 0 3px rgba(15, 94, 135, 0.1)

### Checkbox & Radio
- **Border:** 1px solid #ADADAD
- **Size:** 18px × 18px
- **Checked Color:** #0F5E87

## Interactive Guidelines

1. **Consistency:** Maintain consistent interaction patterns throughout the site.

2. **Feedback:** Provide visual feedback for all interactive elements (hover, active, focus states).

3. **Affordance:** Design elements to visually communicate their interactivity.

4. **Accessibility:** Ensure all interactive elements are keyboard accessible and have appropriate ARIA attributes.

5. **Touch Targets:** Make interactive elements at least 44×44px for mobile usability.

6. **Loading States:** Use subtle animations or indicators for loading states.

7. **Transitions:** Keep transitions smooth and under 300ms for optimal user experience.
