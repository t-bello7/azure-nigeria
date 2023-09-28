import { describe, test, expect } from 'vitest';
// import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import Home from "../../2023/pages/Home";
import { renderWithRouter } from "../../2023/utils/router";

describe ( 'Test for routes', () => {
  test("Check home route", () => {
    renderWithRouter(<Home/>)
    expect(screen.getByText('Welcome')).toBeDefined()
  })

//   test("landing on a bad page", () => {
//     // use <MemoryRouter> when you want to manually control the history
//     renderWithRouter( { route: "/something-does-not" });
//     // verify navigation to "no match" route
//     expect(screen.getByText(/no match/i)).toBeInTheDocument();
// });

})