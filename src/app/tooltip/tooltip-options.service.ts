import { InjectionToken } from '@angular/core';
import { TooltipOptions } from './tooltip-options.interface';

export const TooltipOptionsService = new InjectionToken<TooltipOptions>('TooltipOptions');