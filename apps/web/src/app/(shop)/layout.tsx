import { Header } from 'components';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="shop">
      <div className="shop__wrapper">
        <Header />
        {children}
      </div>
    </main>
  );
}
