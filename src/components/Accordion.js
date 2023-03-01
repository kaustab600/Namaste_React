import { useEffect, useState } from "react";

// To use as useRef to store the the last visited Tab.
let lastVistedTab = "";

const Section = ({heading, content,name, tabState }) => {
  const [activeTab,setActiveTab] = tabState
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    (!isOpen && activeTab === name) ? setIsOpen(true) : setIsOpen(false)
  },[activeTab])

  function handleClick(currentTab) {
    //console.log(lastVistedTab);
    if ( currentTab !== lastVistedTab ) {
      lastVistedTab = currentTab;
      setActiveTab(currentTab);
    } else {
      lastVistedTab = "";
      setActiveTab("");
    }
  }
  return (
    <div className="accordion-item">
      <h6 onClick={() => handleClick(name)}>{heading}</h6>
      {isOpen ? <p>{content}</p> : <></>}
    </div>
  );
}

const Accordion = () => {
  const [activeTab, setActiveTab] = useState("item1")
  console.log(activeTab);

  return (
    <>
      <h2>Accordion</h2>
      <Section
        heading="Item1"
        content="Lorem Ipsum Lorem isum Lorem Ipsum Lorem isum Lorem Ipsum Lorem isum"
        name="item1"
        tabState={[activeTab, setActiveTab]}
      />
      <Section
        heading="Item2"
        content="Lorem Ipsum Lorem isum Lorem Ipsum Lorem isum Lorem Ipsum Lorem isum"
        name="item2"
        tabState={[activeTab, setActiveTab]}
      />
      <Section
        heading="Item3"
        content="Lorem Ipsum Lorem isum Lorem Ipsum Lorem isum Lorem Ipsum Lorem isum"
        name="item3"
        tabState={[activeTab, setActiveTab]}
      />
      <Section
        heading="Item4"
        content="Lorem Ipsum Lorem isum Lorem Ipsum Lorem isum Lorem Ipsum Lorem isum"
        name="item4"
        tabState={[activeTab, setActiveTab]}
      />
    </>
  );
}

export default Accordion
