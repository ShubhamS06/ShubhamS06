import Carousel from "../components/carousel";
import TabView from "../components/tabView";
import { designSectionData } from "../constants";
import { BaseSectionProps } from "../types";

type Props = BaseSectionProps & {
}

export default function DesignSection({ id }: Props) {

  return (
    <>
      <TabView
        id={id}
        sections={
          designSectionData.sections
        }
      >
        <Carousel id={id + "1"} srcs={designSectionData.carouselSrcs[0]} laptopFrame />
        <Carousel id={id + "2"} srcs={designSectionData.carouselSrcs[1]} />
        <Carousel id={id + "3"} srcs={designSectionData.carouselSrcs[2]} />
      </TabView>
    </>
  )
}
