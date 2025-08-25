
"use client";

import { cn } from "@/lib/utils";
import { Flame, Star, XCircle, ArrowDown } from "lucide-react";

interface ProductBadgeProps {
  status: string;
  discount?: number;
}

export default function ProductBadge({ status, discount }: ProductBadgeProps) {
  const badgeConfig = {
    new: {
      label: 'NEW',
      icon: Flame,
      className: 'bg-blue-500 text-white',
    },
    popular: {
      label: 'POPULAR',
      icon: Star,
      className: 'bg-yellow-500 text-white',
    },
    outOfStock: {
      label: 'OUT OF STOCK',
      icon: XCircle,
      className: 'bg-neutral-600 text-white',
    },
    discount: {
      label: `${discount}% OFF`,
      icon: ArrowDown,
      className: 'bg-primary text-white',
    },
  }[status];

  if (!badgeConfig) return null;

  const { label, icon: Icon, className } = badgeConfig;

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-xs font-bold uppercase px-2 py-1 rounded-md shadow-lg",
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      <span>{label}</span>
    </div>
  );
}
