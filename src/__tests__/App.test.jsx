import React from "react";
import { render } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  it('"React App" 문구를 렌더링해야 한다', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent(/React App/);
  });
});
