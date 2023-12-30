# Color Contrast Checker

## Project Overview

This Color Contrast Checker is a web application designed to evaluate the color contrast between two chosen colors. It aims to provide users with feedback on whether the contrast ratio meets accessibility standards (a grade based on [WCAG standards](https://www.w3.org/TR/WCAG21/)), making it easy for users with visual impairments to perceive content.

<img height="300" alt="Screenshot of default state" src="https://github.com/JTKsson/jolint-dashboard/assets/116844306/8896fe47-20ac-4b21-bc1f-493adcf392c2">
<img height="300" alt="Screenshot of changing state" src="https://github.com/JTKsson/jolint-dashboard/assets/116844306/c25294f6-84e5-4480-ad14-a21872f554ea">

## Components

1. **Header:** Displays the title of the application.
2. **Home:** Main component managing color input and displaying contrast results.
3. **ColorInput:** A reusable component for color input (either using the color picker or entering a HEX value).
4. **ColorPreview:** Displays a visual preview of the selected colors for better user understanding.
5. **ContrastResult:** Displays the pass/fail result. If passed the text will turn <font color="green">green</font>, if failed it will turn <font color="red">red</font>.
6. **ContrastRatio:** Displays the contrast ratio to indicate whether the value is above or below the acceptble ratio (a 4.5 to 1 ratio).
7. **ContrastGrade:** Displays the grade of Great, Okay or Bad.
8. **Footer:** Displays the footer of the application.

## Testing Requirements

The testing strategy for this project follows Test Driven Development (TDD) principles. The goal is to ensure the reliability and correctness of the Color Contrast Checker application.

### Unit Tests

- Minimum of 20 unit tests covering various components and functionalities

- Must include tests using `getByRole`, `getAllBy`, `queryBy`, and at least 2 different events.

### Integration Tests

- Minimum of 3 integration tests\*

\*Must include testing some aspect of state changing.

### Test Relevance and Coherence

- Tests should be relevant to the functionality of the application.
- Tests should be coherent, allowing a semi-experienced developer to understand what they are testing.

## Getting Started

To set up the project and run the tests locally, follow these steps:

1. Fork this repository.
2. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Run test environment:

```bash
npm run test
```

or run the testing by default:

```bash
npm run test:watch
```
