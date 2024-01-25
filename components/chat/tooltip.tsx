import React from 'react';
import * as TooltipComponents from '@radix-ui/react-tooltip';

export default function Tooltip({ children, content }: { children: React.ReactNode, content: any }) {
  return (
    <TooltipComponents.Provider>
      <TooltipComponents.Root>
        <TooltipComponents.Trigger asChild>
            {children}
        </TooltipComponents.Trigger>
        <TooltipComponents.Portal>
          <TooltipComponents.Content className="TooltipContent bg-black/60 rounded-lg px-2 py-1 text-white text-sm"  sideOffset={5}>
            {content}
            <TooltipComponents.Arrow className="TooltipArrow fill-black/60" />
          </TooltipComponents.Content>
        </TooltipComponents.Portal>
      </TooltipComponents.Root>
    </TooltipComponents.Provider>
  );
};