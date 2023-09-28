import { describe, test, expect } from 'vitest';
import { screen } from "@testing-library/react";
import Home from "../../2023/pages/Home";
import { renderWithRouter } from "../../2023/utils/router";

describe ( 'Test for routes', () => {
  test("Check home route", () => {
    renderWithRouter(<Home/>)
    expect(screen.getByText('Welcome')).toBeDefined()
  })
})