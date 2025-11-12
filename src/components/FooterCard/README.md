# FooterCard Component

A reusable footer CTA card component with route-based content customization.

## Features

- **Route-based Configuration**: Automatically changes content based on the current page route
- **Customizable Content**: Title, highlight text, button text, and button action
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Navigation Support**: Built-in Next.js router integration
- **Flexible Styling**: Support for custom background images and className overrides

## Usage

### Basic Usage

```jsx
import FooterCard from "@/components/FooterCard";

function MyComponent() {
  return (
    <FooterCard
      title="Next-Gen Industry is Here"
      highlightText="Are You Ready to Lead?"
      buttonText="Talk to an Expert"
      buttonHref="#demo"
    />
  );
}
```

### Route-based Configuration

The component includes a configuration file that automatically adjusts content based on the current route:

```jsx
import { usePathname } from "next/navigation";
import FooterCard from "@/components/FooterCard";
import { getFooterCardConfig } from "@/components/FooterCard/footerCardConfig";

function Footer() {
  const pathname = usePathname();
  const config = getFooterCardConfig(pathname);

  return <FooterCard {...config} />;
}
```

### Custom Button Click Handler

```jsx
<FooterCard
  title="Custom Title"
  highlightText="Custom Highlight"
  buttonText="Click Me"
  onButtonClick={() => console.log("Button clicked!")}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Next-Gen Industry is Here" | Main title text |
| `highlightText` | string | "Are You Ready to Lead?" | Highlighted text below title (green color) |
| `buttonText` | string | "Talk to an Expert" | Text displayed on the button |
| `buttonHref` | string | "#" | URL or route path for navigation |
| `backgroundImage` | string | "/assets/footer-stroke.png" | Background image URL |
| `onButtonClick` | function | undefined | Custom click handler (overrides default navigation) |
| `className` | string | "" | Additional CSS classes |

## Configuration File

Edit `footerCardConfig.js` to add or modify route-based configurations:

```javascript
export const footerCardConfig = {
  "/": {
    title: "Next-Gen Industry is Here",
    highlightText: "Are You Ready to Lead?",
    buttonText: "Talk to an Expert",
    buttonHref: "#demo",
  },
  "/eagle": {
    title: "Transform Your Vision with Eagle",
    highlightText: "Ready to Soar Higher?",
    buttonText: "Get Started with Eagle",
    buttonHref: "#contact",
  },
  // Add more routes as needed
};
```

## Examples

### Different Routes Show Different Content

- **Home page (`/`)**: "Next-Gen Industry is Here"
- **Eagle page (`/eagle`)**: "Transform Your Vision with Eagle"
- **Analytics page (`/tecosoft-analytics`)**: "Unlock Data-Driven Insights"

### Custom Styling

```jsx
<FooterCard
  title="Custom Title"
  highlightText="Custom Highlight"
  className="my-custom-class"
  backgroundImage="/custom-background.png"
/>
```
