import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

interface CardContentProps {
  icon: ReactNode;
  title: string;
  amount: number;
}

export default function SummaryCard({
  title,
  amount,
  icon,
}: CardContentProps) {
  return (
    <Card>
      <CardHeader className=" flex-row items-center gap-5">
        {icon}
        <p>{title}</p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className="font-bold text-2xl">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>
      </CardContent>
    </Card>
  );
}
