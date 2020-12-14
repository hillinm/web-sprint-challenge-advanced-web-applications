import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { axiosWithAuth as mockAxiosWithAuth } from "../utils/axiosWithAuth";
import ColorList from "./ColorList";

jest.mock("../utils/axiosWithAuth.js");

const colorData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4",
    },
    id: 4,
  }
]

test("Fetches data and renders the bubbles", async () => {

  const { rerender , queryAllByTestId } = render(<ColorList colors={[]} />)

  expect(queryAllByTestId(/colors/i)).toHaveLength(0);

  rerender(<ColorList colors={colorData} />)

  const colors = queryAllByTestId(/colors/i)
  
  expect(colors).toHaveLength(4)

});
