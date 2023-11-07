import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
  return (
    <>
      <Header />
      <section className="hero">
        <Sidebar />
        <section className="charts">
          <div className="chart">
            <h1>Checking account</h1>
            <div>
              {/* <Dropdown>
                <MenuButton endDecorator={<ArrowDropDown />}>Size</MenuButton>
              </Dropdown> */}
            </div>
          </div>
          <div className="chart">
            <h1>this is skjbkafaflajsdl;fj;dsfjlkfjsa;dfj</h1>
          </div>
          <div className="chart">
            <h1>this is skjbkafaflajsdl;fj;dsfjlkfjsa;dfj</h1>
          </div>
          <div className="chart">
            <h1>this is skjbkafaflajsdl;fj;dsfjlkfjsa;dfj</h1>
          </div>
        </section>
      </section>
    </>
  );
};

export default Homepage;
