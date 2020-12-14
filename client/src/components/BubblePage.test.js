import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth as mockAxiosWithAuth } from "../utils/axiosWithAuth";

jest.mock("../utils/axiosWithAuth.js");

const colors = [
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
    mockAxiosWithAuth.mockResolvedValueOnce(colors);
    
    const { getByText } = render (<BubblePage />);
    
    expect(mockAxiosWithAuth).toHaveBeenCalledTimes(1);

    await waitFor(() => expect(getByText(/aliceblue/i)).toBeInTheDocument);
});
