import React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("App", () => {
  it("renders Filters component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("Filters").length).toBe(1);
  });

  it("renders ItemsTable component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("ItemsTable").length).toBe(1);
  });
});
