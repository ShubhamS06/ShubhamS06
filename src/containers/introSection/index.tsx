import { useState } from "react";
import TabView from "../../components/tabView";
import { BaseSectionProps } from "../../types";
import ToolsIKnow from "./toolsIKnow";
import Overview from "./overview";
import WhatCanIDo from "./whatCanIDo";

type Props = BaseSectionProps & {
}

export default function IntroSection({ id }: Props) {
  const [sectionIndex, setSectionIndex] = useState(0)

  return (
    <>
      <TabView
        renderAll
        id={id}
        sections={
          ['Overview', 'Tools I know', 'What I can do']
        }
        onSectionChange={setSectionIndex}
      >
        <div className="grid-center-child">
          <Overview />
        </div>

        <div className="grid-center-child">
          <ToolsIKnow visible={sectionIndex === 1} />
        </div>

        <div className="grid-center-child">
          <WhatCanIDo visible={sectionIndex === 2} />
        </div>
      </TabView>
    </>
  )
}
