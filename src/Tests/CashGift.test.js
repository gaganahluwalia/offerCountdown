import CashGift from "../Components/CashGift";
import { shallow } from "enzyme";

describe("Tests CashGift Message component", () => {
  it("renders without crashing", () => {
    shallow(<CashGift />);
  });

  it("renders Gift message", () => {
    const wrapper = shallow(<CashGift offerValid={true} cashGift={"10"} />);
    const giftMessage = wrapper.find("span").at(0).text();
    expect(giftMessage).toEqual("Get your free £10 now");
  });

  it("does not renders Gift message", () => {
    const wrapper = shallow(<CashGift offerValid={false} cashGift={"10"} />);
    const giftElement = wrapper.find("span");
    expect(giftElement).toHaveLength(0);
  });
});
