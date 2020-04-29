export interface TooltipOptions {
    'placement'?: string;
    'content-type'?: 'string' | 'html' | 'template';
    'delay'?: number;
    'show-delay'?: number;
    'hide-delay'?: number;
    'trigger'?: string;
    'tooltip-class'?: string;
    'display'?: boolean;
    // 'theme'?: string;
    'offset'?: number;
    'width'?: number;
    'max-width'?: number;
    'id'?: string | number;
    'pointerEvents'?: 'auto' | 'none';
    'position'?: {top: number, left: number};
}