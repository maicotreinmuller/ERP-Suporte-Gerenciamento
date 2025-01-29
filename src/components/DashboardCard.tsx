import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  className?: string;
  iconClassName?: string;
}

const DashboardCard = ({ 
  title, 
  value, 
  icon: Icon, 
  description,
  className,
  iconClassName
}: DashboardCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl border shadow-sm p-6 transition-all duration-200 hover:shadow-md hover:scale-[1.02] relative",
      className
    )}>
      <div className={cn(
        "p-2 rounded-full bg-white/80 shadow-sm absolute top-4 right-4",
        iconClassName
      )}>
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        {description && (
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;