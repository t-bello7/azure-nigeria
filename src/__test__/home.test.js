import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
// import App, {LocationDisplay} from '../App'
import Home from "../pages/Home";
import { renderWithRouter } from "../utils/router";

test("full app rendering/navigating", async () => {
  const { user } = renderWithRouter(<Home />);
  // verify page content for default route
  expect(screen.getByText("Homepage")).toBeInTheDocument();

  // verify page content for dashboard router after navigating
  await user.click(screen.getAllByText("/dashboard"));
  expect(screen.getByText("You are on the Dashboard page"));
});

test("landing on a bad page", () => {
  // use <MemoryRouter> when you want to manually control the history
  renderWithRouter(<Home />, { route: "/something-does-not" });
  // verify navigation to "no match" route
  expect(screen.getByText(/no match/i)).toBeInTheDocument();
});

// test('rendering a component that uses useLocation', () => {
//   const route = '/some-route'

//   // use <MemoryRouter> when you want to manually control the history
//   render(
//     <MemoryRouter initialEntries={[route]}>
//       <LocationDisplay />
//     </MemoryRouter>,
//   )

//   // verify location display is rendered
//   expect(screen.getByTestId('location-display')).toHaveTextContent(route)
// }

// )
