import { ContentType } from "@/types"
import { FC } from "react"
import { TabsTrigger } from "../ui/tabs"
import { WithTooltip } from "../ui/with-tooltip"

interface SidebarSwitchItemProps {
  contentType: ContentType
  icon: React.ReactNode
  onContentTypeChange: (contentType: ContentType) => void
  name?: string
}

export const SidebarSwitchItem: FC<SidebarSwitchItemProps> = ({
  contentType,
  icon,
  onContentTypeChange,
  name
}) => {
  const resolvedName = name || contentType
  return (
    <WithTooltip
      // asChild
      display={
        <div>{resolvedName[0].toUpperCase() + resolvedName.substring(1)}</div>
      }
      trigger={
        <TabsTrigger
          className="w-full px-6 hover:opacity-50"
          value={contentType}
          onClick={() => onContentTypeChange(contentType as ContentType)}
        >
          <div className="flex w-full justify-start gap-2">
            {icon}
            <span className="text-center text-lg">{resolvedName}</span>
          </div>
        </TabsTrigger>
      }
    />
  )
}
