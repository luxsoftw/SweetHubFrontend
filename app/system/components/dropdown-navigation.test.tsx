import { render } from "@testing-library/react";
import { DropdownNavigation, DropDownItem } from "./dropdown-navigation";
import { PiSquaresFourLight } from "react-icons/pi";

describe("Dropdown Navigation", () => {
   it("should be have Pricing title", () => {
      const wrapper = render(
         <DropdownNavigation title="Test" icon={PiSquaresFourLight}>
            <DropDownItem href="/system/pricing">Pricing</DropDownItem>
         </DropdownNavigation>,
      );

      const text = "Pricing";
      const statusText = wrapper.getByText(text);
      console.log(statusText.outerHTML);
      wrapper.debug();
      expect(statusText).toBeInTheDocument();
   });
});
