"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-3 select-none", className)}
            classNames={{
                /* Layout */
                months: "relative flex flex-col gap-4",
                month: "flex flex-col gap-3",

                /* Caption row */
                month_caption: "flex justify-center h-9 items-center px-10",
                caption_label: "text-sm font-semibold text-gray-800",

                /* Nav (absolutely positioned over caption) */
                nav: "absolute top-0 left-0 right-0 flex items-center justify-between",
                button_previous: "h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer",
                button_next: "h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer",

                /* Grid */
                month_grid: "w-full border-collapse",
                weekdays: "flex mb-1",
                weekday: "w-9 text-center text-xs font-medium text-gray-400 py-1",
                weeks: "flex flex-col gap-1",
                week: "flex",

                /* Cells */
                day: "w-9 h-9 p-0 text-center",
                day_button: "w-9 h-9 flex items-center justify-center rounded-lg text-sm text-gray-900 font-normal hover:bg-gray-100 transition-colors duration-150 cursor-pointer",

                /* Modifiers */
                today: "!bg-gray-100 !text-gray-900 font-semibold",
                selected: "!bg-[#8D776C] !text-white hover:!bg-[#7a6760]",
                outside: "!text-gray-300",
                disabled: "!text-gray-200 cursor-not-allowed pointer-events-none",
                hidden: "invisible",

                /* Range */
                range_start: "rounded-l-lg",
                range_end: "rounded-r-lg",
                range_middle: "bg-[#8D776C]/10 rounded-none",

                ...classNames,
            }}
            components={{
                Chevron: ({ orientation }) =>
                    orientation === "left"
                        ? <ChevronLeft className="w-4 h-4" />
                        : <ChevronRight className="w-4 h-4" />,
            }}
            {...props}
        />
    )
}
Calendar.displayName = "Calendar"

export { Calendar }
