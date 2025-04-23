import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  page: number
  totalCount: number
  pageSize: number
  siblingCount?: number
  className?: string
  onPageChange: (page: number) => void
}

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

export const Pagination = ({
  page,
  totalCount,
  pageSize,
  siblingCount = 1,
  className,
  onPageChange,
  ...props
}: PaginationProps) => {
  const totalPageCount = Math.ceil(totalCount / pageSize)

  const currentPage = Math.max(1, Math.min(page, totalPageCount))

  const paginationRange = React.useMemo(() => {
    const totalNumbers = siblingCount * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalBlocks >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    )

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, 3 + 2 * siblingCount)
      return [...leftRange, "...", totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(
        totalPageCount - 2 - 2 * siblingCount,
        totalPageCount
      )
      return [firstPageIndex, "...", ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex]
    }

    return null
  }, [totalCount, pageSize, siblingCount, page])

  if (!paginationRange || totalPageCount === 1) {
    return null;
  }

  return (
    <div
      className={cn("flex w-full items-center justify-between", className)}
      {...props}
    >
      <Button
        variant="outline"
        className="h-8 w-8 p-0"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="sr-only">Go to previous page</span>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <ul className="flex items-center gap-1">
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === "...") {
            return (
              <li key={index}>
                <Button variant="outline" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More pages</span>
                </Button>
              </li>
            )
          }

          return (
            <li key={index}>
              <Button
                variant={currentPage === pageNumber ? "default" : "outline"}
                className="h-8 w-8 p-0"
                onClick={() => {
                  if (typeof pageNumber === 'number') {
                    onPageChange(pageNumber)
                  }
                }}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
                {currentPage === pageNumber ? (
                  <span className="sr-only">Current page</span>
                ) : null}
              </Button>
            </li>
          )
        })}
      </ul>
      <Button
        variant="outline"
        className="h-8 w-8 p-0"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPageCount}
      >
        <span className="sr-only">Go to next page</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
