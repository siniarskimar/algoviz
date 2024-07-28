export type TimelineState = {
    value: number;
    [x: string]: any;
}

export type TimelineNode = {
    color: string;
    comment: string | null;
    state: TimelineState[];
}