import { useState } from 'react';

import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Tabs from './Tabs';
import Section from './Section';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
    <Tabs 
      ButtonsContainer="menu"
      buttons={
        <>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Content</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
        </>
    }>
      {tabContent}
    </Tabs>
    <menu>
     
    </menu>
        {/* {!selectedTopic ? ( 
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        )}  */}

        {/* {!selectedTopic && <p>Please select a topic</p>}  */}
    </Section>
  );
}