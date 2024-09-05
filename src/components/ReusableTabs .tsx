import { Tabs } from "antd";
import TabContent from "./TabContent";
import useLoading from "@/hooks/useLoading";
import LoadingSpinner from "./LoadingIndicator";

// Types
import { TabContentProps } from "./TabContent";
type ReusableTabsProps = {
  data: TabContentProps[];
  tabType?: "card" | "line";
  contentClass: string;
  textLabel?: boolean;
  smallLabel?: boolean;
};

const ReusableTabs = ({
  data,
  tabType,
  contentClass,
  textLabel,
  smallLabel,
}: ReusableTabsProps) => {
  const { loading, isInitialLoad, triggerLoading } = useLoading();

  const tabItems = data.map((item, index) => ({
    label: !textLabel
      ? smallLabel
        ? item.name.split(" ")[0].toUpperCase()
        : item.name.toUpperCase()
      : index + 1,
    key: index.toString(),
    children: loading ? (
      <LoadingSpinner />
    ) : (
      <TabContent
        name={item.name}
        description={item.description}
        lineSeparator={item.lineSeparator}
        additionalInfo={item.additionalInfo}
        imageSrc={item.imageSrc}
        imageAlt={item.imageAlt}
        imageWebpSrc={item.imageWebpSrc}
        imageWidth={item.imageWidth}
        imageHeight={item.imageHeight}
        largeText={item.largeText}
        animateImage={item.animateImage}
        role={item.role}
        styleImage={item.styleImage}
        explicitHeight={item.explicitHeight}
      />
    ),
  }));

  return (
    <article className={`${contentClass}-content`}>
      {isInitialLoad ? (
        <LoadingSpinner />
      ) : (
        <Tabs
          defaultActiveKey="0"
          centered
          items={tabItems}
          onChange={triggerLoading}
          type={tabType}
        />
      )}
    </article>
  );
};
export default ReusableTabs;
