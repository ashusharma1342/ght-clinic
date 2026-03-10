export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-20 md:pt-24">
      {children}
    </main>
  );
}