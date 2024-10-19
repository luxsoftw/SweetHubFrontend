import { render } from "@testing-library/react";
import { DropdownNavigation, DropDownItem } from "./dropdown-navigation";
import { PiSquaresFourLight } from "react-icons/pi";

// Mock the usePathname function from next/navigation
vi.mock("next/navigation", () => ({
   usePathname: () => "/system/pricing",
}));

describe("Dropdown Navigation", () => {
   it("should be have Pricing title", () => {
      const wrapper = render(
         <DropdownNavigation title="Pricing" icon={PiSquaresFourLight}>
            <DropDownItem href="/system/pricing">Pricing</DropDownItem>
         </DropdownNavigation>,
      );

      const text = "Pricing";
      const statusText = wrapper.getByText(text);
      expect(statusText).toBeInTheDocument();
   });
});
