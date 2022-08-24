import OptInButton from "../Components/OptInButton";
import { shallow } from "enzyme";

describe("Tests Opt In Button component", () => {
  it("renders without crashing", () => {
    shallow(<OptInButton />);
  });

  it("renders Opt In button", () => {
    const wrapper = shallow(
      <OptInButton offerValid={true} url={"https://www.jackpotjoy.com"} />
    );
    const OptInButtonElement = wrapper.find("button");
    expect(OptInButtonElement).toHaveLength(1);
  });
});
