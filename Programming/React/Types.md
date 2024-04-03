[Reference](https://dev.to/itswillt/explaining-reacts-types-940?context=digest)

## Things you just render
### `React.FC`
Specific to Components. Not used much anymore because it doesn't have children by default. Usage:

```tsx
interface SomeComponentProps {
  title: string;
  children?: React.ReactNode;
}

export const SomeComponent: React.FC<SomeComponentProps> = ({ title, children }) => {
  return (
    <article>
      <h2>{title}</h2>

      {children}
    </article>
  );
};
```

### `React.ElementType`
`React.ElementType`, on the other hand, is a broader type that represents any component type that can be rendered by React. This includes not only React functional and class components but also string tags for HTML elements (e.g., 'div', 'span'). `React.ElementType` is particularly useful when you want to accept a component as a prop and render it, allowing for dynamic component usage. Usage:

```tsx
const DynamicComponent: React.ElementType = 'div';

export const Container = () => (
  <DynamicComponent className="container">Hello, world!</DynamicComponent>
);
```

## Things you need to call as a component before rendering
### `React.ReactElement`
`React.ReactElement` is an object with `type`, `props`, and `key` properties, created by the `React.createElement()` function. It's a more specific type compared to `React.ReactNode`, representing elements that can be rendered directly by React.  

```tsx
const elementContent: React.ReactElement = <div>Hello, React.ReactElement!</div>;

export const Container = () => <>{elementContent}</>;
```

### `React.ReactNode`
`React.ReactNode` is the most inclusive type, representing anything that can be rendered by React. This includes primitive types (strings, numbers, booleans), `JSX.Element`s, `React.ReactElement`s, arrays of these types, and more. It's the go-to type for props that can accept a wide variety of content, such as `children`.  

```tsx
const multiElementContent: React.ReactNode = (
  <div>
    <p>This is a paragraph.</p>
    {'This is a text node.'}
    {null}
  </div>
);

const primitiveTypeContent: React.ReactNode = "I'm a primitive-type React.ReactNode";

export const Container = () => {
  return (
    <>
      {multiElementContent}
      {primitiveTypeContent}
    </>
  );
};
```
