import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const AnnouncementSkeleton = () => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start">
        <div className="w-full">
          <Skeleton className="h-6 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex items-center mt-4 space-x-2">
            <Skeleton className="h-6 w-10" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>
    </Card>
  );
};