import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurant card component with data", () => {
  render(<RestaurantCard resdata={MOCK_DATA} />);
  const name = screen.getByText("Handi House");
  expect(name).toBeInTheDocument();
});
