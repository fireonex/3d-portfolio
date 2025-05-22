declare module 'react-vertical-timeline-component' {
    import * as React from 'react';

    export interface VerticalTimelineProps {
        children?: React.ReactNode;
        animate?: boolean;
        className?: string;
        layout?: '1-column' | '2-columns';
    }

    export interface VerticalTimelineElementProps {
        className?: string;
        contentStyle?: React.CSSProperties;
        contentArrowStyle?: React.CSSProperties;
        date?: string | React.ReactNode;
        dateClassName?: string;
        iconStyle?: React.CSSProperties;
        icon?: React.ReactNode;
        position?: 'left' | 'right';
        children?: React.ReactNode;
    }

    export const VerticalTimeline: React.FC<VerticalTimelineProps>;
    export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
