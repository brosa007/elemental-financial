import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  Wallet2Icon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

export default function SummaryCards() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <SummaryCard
          icon={
            <Wallet2Icon className="h-8 w-4 text-gray-300" />
          }
          title="Saldo do mês"
          amount={80}
        />
        <SummaryCard
          icon={
            <WalletIcon className="h-8 w-4 text-gray-300" />
          }
          title="Caixa"
          amount={80}
        />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={
            <TrendingUpIcon className="h-8 w-4 text-gray-300" />
          }
          title="Lucro"
          amount={80}
        />
        <SummaryCard
          icon={
            <TrendingDownIcon className="h-8 w-4 text-gray-300" />
          }
          title="Despesa"
          amount={80}
        />
        <SummaryCard
          icon={
            <PiggyBankIcon className="h-8 w-4 text-gray-300" />
          }
          title="Investido"
          amount={80}
        />
      </div>
    </div>
  );
}
