import CountdownUnit from "../Components/CountdownUnit";
import { shallow } from "enzyme";

describe("Tests CountdownUnit component", () => {
  it("renders without crashing", () => {
    shallow(<CountdownUnit />);
  });

  it("renders hours unit", () => {
    const wrapper = shallow(<CountdownUnit unit={"3"} label="Hours" />);
    const welcome = wrapper.find("span").at(0).text();
    expect(welcome).toEqual("3");
  });

  it("renders hours label", () => {
    const wrapper = shallow(<CountdownUnit unit={"3"} label="Hours" />);
    const welcome = wrapper.find("span").at(1).text();
    expect(welcome).toEqual("Hours");
  });

  it("renders minutes unit", () => {
    const wrapper = shallow(<CountdownUnit unit={"2"} label="Minutes" />);
    const welcome = wrapper.find("span").at(0).text();
    expect(welcome).toEqual("2");
  });

  it("renders minutes label", () => {
    const wrapper = shallow(<CountdownUnit unit={"2"} label="Minutes" />);
    const welcome = wrapper.find("span").at(1).text();
    expect(welcome).toEqual("Minutes");
  });

  it("renders seconds unit", () => {
    const wrapper = shallow(<CountdownUnit unit={"35"} label="Seconds" />);
    const welcome = wrapper.find("span").at(0).text();
    expect(welcome).toEqual("35");
  });

  it("renders seconds label", () => {
    const wrapper = shallow(<CountdownUnit unit={"3"} label="Seconds" />);
    const welcome = wrapper.find("span").at(1).text();
    expect(welcome).toEqual("Seconds");
  });
});
