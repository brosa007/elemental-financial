import SummaryCards from "./_components/home/summary-cards";
import TransactionsPieChart from "./_components/home/transactions-pie-chart";
import NavBar from "./_components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex h-full flex-col space-y-6 overflow-hidden p-6">
        <div>
          <h1 className="font-bold text-2xl">Dashboard</h1>
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards />
            <div>
              <TransactionsPieChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
