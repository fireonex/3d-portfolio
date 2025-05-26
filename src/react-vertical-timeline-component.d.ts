declare module "react-vertical-timeline-component" {
  import * as React from "react";

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    children?: React.ReactNode;
    layout?: "1-column" | "2-columns";
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    position?: "left" | "right";
    date?: string | React.ReactNode;
    iconStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
