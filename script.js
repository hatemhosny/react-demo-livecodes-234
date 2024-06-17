import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
function Counter(props) {
    const [count, setCount] = useState(0);
    return (_jsxs("div", { className: "container", children: [_jsxs("h1", { children: ["Hello, ", props.name, "!"] }), _jsx("img", { className: "logo", alt: "logo", src: "http://127.0.0.1:8080/livecodes/assets/templates/react.svg" }), _jsxs("p", { children: ["You clicked ", count, " times."] }), _jsx("button", { onClick: () => setCount(count + 1), children: "Click me" })] }));
}
export default function App() {
    return _jsx(Counter, { name: "React" });
}
