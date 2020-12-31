import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import LaCarteContext from "../../context/LaCarteContext";
import About from "./About";

describe(`About Component`, () => {
  describe(`Snapshot`, () => {
    it("renders the UI as expected", () => {
      const about = renderer.create(<About />).toJSON();
      expect(about).toMatchSnapshot();
    });
  });

  describe(`Smoke test`, () => {
    it(`Renders without crashing`, () => {
      const div = document.createElement("div");

      const value = {
        meals: "string",
        chefs: "string",
        cuisines: "string",
        orders: "string",
        addOrder: "string",
        updateOrder: "string",
        deleteOrder: "string",
      };

      ReactDOM.render(
        <LaCarteContext.Provider value={value}>
          <About />
        </LaCarteContext.Provider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
